/**
 * Deepcel-style worksheet skin for the dsh web GUI. The plugin owns the body
 * scope, workbook chrome, and document title; its effect disposer retracts
 * every write. The application remains the interactive layer beneath the
 * decorative row, column, ribbon, formula, sheet-tab, and status cells.
 */
import type { Context } from '@deepseek-ai/cordis'
import css from './skin.module.css'

const SKIN_TITLE = 'Workbook Grid · DeepSeek Harness'

/* Every ribbon tab owns real commands: File creates and configures, Home
   holds the run options used before each message, View switches the sheet
   view and the side panes. Decorative tabs without commands are not shown. */
const RIBBON_TABS = [
  { id: 'file', label: 'File' },
  { id: 'home', label: 'Home' },
  { id: 'view', label: 'View' },
] as const
type RibbonTabId = typeof RIBBON_TABS[number]['id']
type ChoiceKind = 'workspace' | 'preset' | 'permission' | 'model' | 'thinking'
const CELL_WIDTH = 60
const ROW_HEIGHT = 24
const ROW_GUTTER = 40
const RIBBON_HEIGHT = 136
const FORMULA_HEIGHT = 28
const FORMULA_LINE_HEIGHT = 18
const FORMULA_MAX_LINES = 6
const STATUS_HEIGHT = 28
const COMPOSER_WIDTH = 540
const CHAT_WIDTH = 720
const CONTENT_CELL_SELECTOR = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'blockquote', 'pre', 'hr', 'table',
  '.md-code-block', '.katex-display', '[class*="tableScroll"]', 'img',
  '[data-terminal]', '[data-variant="think"]', '[class*="actions"]', '[class*="stopped"]',
].join(', ')

/* DSH 0.1.7 folds a turn's process steps into group roots that sit directly
   in the transcript flow; their members live in a nested flow inside the
   group body. Only top-level records own worksheet ranges. */
const PROCESS_GROUP_SELECTOR = '[data-chat-flow] > [data-step-process]'
const RECORD_SELECTOR = `[data-chat-flow-kind], ${PROCESS_GROUP_SELECTOR}`

/** The top-level worksheet record containing an element, if any. */
function recordOf(element: Element | null | undefined): HTMLElement | null {
  const group = element?.closest<HTMLElement>('[data-step-process]')
  if (group?.parentElement?.closest('[data-step-process]') === null) return group
  return element?.closest<HTMLElement>('[data-chat-flow-kind]') ?? null
}

function isTopLevelRecord(element: HTMLElement): boolean {
  return element.parentElement?.closest('[data-step-process]') === null
}

function currentRibbonHeight(): number {
  const value = Number.parseFloat(getComputedStyle(document.body).getPropertyValue('--deepcel-ribbon-height'))
  return Number.isFinite(value) && value > 0 ? value : RIBBON_HEIGHT
}

const NATIVE_ENTRY_SPECS: readonly { labels: readonly string[], ariaLabels: readonly string[] }[] = [
  { labels: [] as readonly string[], ariaLabels: ['打开侧边栏', '收起侧边栏', 'Open sidebar', 'Collapse sidebar'] },
  { labels: [] as readonly string[], ariaLabels: ['新建会话', 'New session'] },
  { labels: [] as readonly string[], ariaLabels: ['添加工作区', 'Add workspace'] },
  { labels: ['设置', 'Settings'], ariaLabels: ['设置', 'Settings'] },
]

interface LocaleSnapshot {
  readonly active: string
  readonly locales: readonly { readonly id: string, readonly label: string }[]
}

interface LocalePort {
  getLocale(): LocaleSnapshot
  subscribe(listener: () => void): () => void
}

interface LayoutPort {
  toggleSidebar(): void
  /** DSH 0.1.7: select a global main panel; null shows the current Conversation. */
  selectPanel?(panelId: string | null): void
}

interface SessionsPort {
  readonly list: { getSnapshot(): { current?: string } }
  open(id: string): void
}

interface ShellLabels {
  readonly file: string
  readonly home: string
  readonly view: string
  readonly chat: string
  readonly sidebar: string
  readonly sidebarShow: string
  readonly sidebarHide: string
  readonly rightbar: string
  readonly newSession: string
  readonly newWorkspace: string
  readonly newWorkbook: string
  readonly addWorkbook: string
  readonly closeWorkbook: string
  readonly settings: string
  readonly workspace: string
  readonly preset: string
  readonly permission: string
  readonly model: string
  readonly thinking: string
  readonly groupNew: string
  readonly groupOptions: string
  readonly groupTarget: string
  readonly groupRun: string
  readonly groupSheets: string
  readonly groupWindow: string
  readonly empty: string
  readonly ready: string
  readonly quickAccess: string
  readonly addins: string
  readonly closeAddins: string
}

interface WorkbookControls {
  readonly ribbonTabs: ReadonlyMap<RibbonTabId, HTMLButtonElement>
  readonly tools: HTMLDivElement
  readonly formulaCell: HTMLElement
  readonly titleCell: HTMLElement
  readonly quickNewSession: HTMLButtonElement
  readonly quickSidebar: HTMLButtonElement
  readonly newSession: HTMLButtonElement
  readonly newWorkspace: HTMLButtonElement
  readonly settings: HTMLButtonElement
  readonly sidebar: HTMLButtonElement
  readonly rightbar: HTMLButtonElement
  readonly workspace: HTMLButtonElement
  readonly preset: HTMLButtonElement
  readonly permission: HTMLButtonElement
  readonly model: HTMLButtonElement
  readonly thinking: HTMLButtonElement
}

interface CellRange {
  readonly columnStart: number
  readonly columnEnd: number
  readonly rowStart: number
  readonly rowEnd: number
}

interface WorkbookTabState {
  readonly key: string
  title: string
  blank: boolean
  sessionId?: string
  source?: HTMLElement
}

interface WorksheetSurface {
  readonly grid: HTMLDivElement
  readonly selection: HTMLDivElement
  clear(): void
  resize(): void
  dispose(): void
}

/** Required shell services: locale copy and the native panel transition seam. */
export const inject = ['locale', 'layout', 'sessions']

const cls = (name: keyof typeof css): string => css[name] ?? ''

function makeCell(className: keyof typeof css, text: string): HTMLSpanElement {
  const cell = document.createElement('span')
  cell.className = cls(className)
  cell.textContent = text
  return cell
}

function makeControl(className: keyof typeof css, action: string): HTMLButtonElement {
  const control = document.createElement('button')
  control.type = 'button'
  control.className = cls(className)
  control.dataset.skinControl = action
  return control
}

function labelsFor(snapshot: LocaleSnapshot): ShellLabels {
  if (snapshot.active === 'en') {
    return {
      file: 'File', home: 'Home', view: 'View', chat: 'Chat',
      sidebar: 'Sidebar', sidebarShow: 'Show sidebar', sidebarHide: 'Hide sidebar', rightbar: 'Side panel',
      newSession: 'New session', newWorkspace: 'New workspace', settings: 'Settings',
      newWorkbook: 'New workbook', addWorkbook: '+ Workbook', closeWorkbook: 'Close workbook',
      workspace: 'Workspace', preset: 'Agent preset',
      permission: 'Permission', model: 'Model', thinking: 'Thinking',
      groupNew: 'New', groupOptions: 'Options', groupTarget: 'Next session', groupRun: 'Run',
      groupSheets: 'Sheets', groupWindow: 'Window', empty: 'No choices available', ready: 'Ready',
      quickAccess: 'Quick access', addins: 'Add-ins', closeAddins: 'Close add-ins',
    }
  }
  return {
    file: '文件', home: '开始', view: '视图', chat: '对话',
    sidebar: '侧边栏', sidebarShow: '打开侧边栏', sidebarHide: '收起侧边栏', rightbar: '右侧栏',
    newSession: '新会话', newWorkspace: '新工作区', settings: '设置',
    newWorkbook: '新建工作簿', addWorkbook: '+ 工作簿', closeWorkbook: '关闭工作簿',
    workspace: '工作区', preset: 'Agent 预设',
    permission: '权限', model: '模型', thinking: '思考',
    groupNew: '新建', groupOptions: '选项', groupTarget: '新会话', groupRun: '运行',
    groupSheets: '工作表', groupWindow: '窗口', empty: '暂无可选项', ready: '就绪',
    quickAccess: '快速访问', addins: '加载项', closeAddins: '关闭加载项',
  }
}

function clickNativeButton(labels: readonly string[], ariaLabels: readonly string[] = []): void {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('button:not([data-skin-control])')]
  const target = buttons.find((button) => {
    if (button.disabled) return false
    const text = button.textContent?.trim() ?? ''
    const aria = button.getAttribute('aria-label') ?? ''
    return labels.includes(text) || ariaLabels.includes(aria)
  })
  target?.click()
}

function nativeSettingsTrigger(): HTMLButtonElement | undefined {
  return [...document.querySelectorAll<HTMLButtonElement>('button:not([data-skin-control])')]
    .find((button) => {
      const text = button.textContent?.trim() ?? ''
      const aria = button.getAttribute('aria-label') ?? ''
      return button.getAttribute('aria-haspopup') === 'dialog'
        && (text === '设置' || text === 'Settings' || aria === '设置' || aria === 'Settings')
    })
}

function toggleNativeSettings(): void {
  const trigger = nativeSettingsTrigger()
  if (trigger?.getAttribute('aria-expanded') !== 'true') {
    if (trigger !== undefined) trigger.click()
    else clickNativeButton(['设置', 'Settings'], ['设置', 'Settings'])
    return
  }
  // DSH 0.1.7 portals the settings panel to body and tags it as the settings
  // shortcut modal; its close button carries only visually hidden text.
  const dialog = document.querySelector<HTMLElement>("[role='dialog'][data-shortcut-modal='settings']")
  const close = [...dialog?.querySelectorAll<HTMLButtonElement>('button') ?? []]
    .find((button) => ['关闭', 'Close'].includes(button.textContent?.trim() ?? ''))
  close?.click()
}

/** The right panel is expanded from the header corner and collapsed from its own strip. */
function nativeRightbarToggle(): HTMLButtonElement | undefined {
  return document.querySelector<HTMLButtonElement>('#root [data-sidebar-right-expand]')
    ?? document.querySelector<HTMLButtonElement>('#root [data-sidebar-right-open] [data-sidebar-right-toggle]')
    ?? undefined
}

function rightbarOpen(): boolean {
  return document.querySelector('#root [data-sidebar-right-panel][data-sidebar-right-open]') !== null
}

/** The Plugins page is the global main panel that DSH 0.1.7 marks as the plugin panel. */
function nativeAddinsPanel(): HTMLElement | null {
  return document.querySelector<HTMLElement>('#root section[data-plugin-panel]')
}

/**
 * Skin-owned caption for the Plugins page. The page itself stays the host's
 * main panel; CSS lifts it into a floating secondary window over the sheet and
 * this bar supplies the window title and its close command.
 */
function createAddinsCaption(): { caption: HTMLDivElement, title: HTMLSpanElement, close: HTMLButtonElement } {
  const caption = document.createElement('div')
  caption.className = cls('addinsCaption')
  caption.dataset.skinChrome = 'addins'
  caption.hidden = true
  const title = makeCell('addinsTitle', 'Add-ins')
  const close = makeControl('addinsClose', 'close-addins')
  close.textContent = '×'
  caption.append(title, close)
  return { caption, title, close }
}

function nativePanelButtons(): HTMLButtonElement[] {
  return [...document.querySelectorAll<HTMLButtonElement>("#root [class*='sidebarCol'] nav[class*='panelList'] > button")]
}

function activeComposer(): HTMLElement | null {
  const composers = [...document.querySelectorAll<HTMLElement>('[data-composer-card]')]
  return composers.findLast(composer => composer.isConnected) ?? null
}

function nativeHeroChoiceTriggers(): {
  row: HTMLElement | undefined
  workspace: HTMLButtonElement | undefined
  preset: HTMLButtonElement | undefined
} {
  const row = document.querySelector<HTMLElement>("#root [data-phase='hero'] [class*='heroWorkspaceRow']") ?? undefined
  const buttons = [...row?.querySelectorAll<HTMLButtonElement>(
    "button[aria-haspopup='menu']:not([data-skin-control])",
  ) ?? []]
  const workspace = buttons.find(button => button.parentElement === row)
    ?? buttons.find(button => button.hasAttribute('aria-label'))
    ?? buttons[0]
  const preset = buttons.find(button => button !== workspace)
  return { row, workspace, preset }
}

function nativeHeroChoiceTrigger(kind: 'workspace' | 'preset'): HTMLButtonElement | undefined {
  return nativeHeroChoiceTriggers()[kind]
}

function nativePermissionTrigger(): HTMLButtonElement | undefined {
  return activeComposer()?.querySelector<HTMLButtonElement>("[class*='modes'] button:not([data-skin-control])") ?? undefined
}

function nativeModelTrigger(): HTMLButtonElement | undefined {
  return activeComposer()?.querySelector<HTMLButtonElement>("[class*='trailing'] button[aria-haspopup='menu']:not([data-skin-control])") ?? undefined
}

function modelLabels(): { model: string, thinking: string } {
  const trigger = nativeModelTrigger()
  const labels = [...trigger?.querySelectorAll<HTMLElement>('span') ?? []]
    .map(label => label.textContent?.trim() ?? '')
    .filter(Boolean)
  return { model: labels[0] ?? trigger?.title ?? '', thinking: labels[1] ?? '' }
}

/** The permission trigger's visible label, without its accessible sentence. */
function permissionLabel(trigger: HTMLButtonElement | undefined): string {
  return trigger?.querySelector<HTMLElement>("[class*='triggerLabel']")?.textContent?.trim()
    || trigger?.textContent?.trim()
    || ''
}

function currentChoice(kind: ChoiceKind): string {
  if (kind === 'workspace' || kind === 'preset') return nativeHeroChoiceTrigger(kind)?.textContent?.trim() ?? ''
  if (kind === 'permission') return permissionLabel(nativePermissionTrigger())
  return modelLabels()[kind]
}

function afterPaint(): Promise<void> {
  return new Promise(resolve => { requestAnimationFrame(() => { requestAnimationFrame(() => { resolve() }) }) })
}

function menuChoiceLabel(button: HTMLButtonElement): string {
  const named = button.querySelector<HTMLElement>("[class*='modelName']")
    ?? button.querySelector<HTMLElement>("[class*='itemName']")
    ?? button.querySelector<HTMLElement>("[class*='optionCopy'] > span:first-child")
  return named?.textContent?.trim() || button.textContent?.trim() || ''
}

function controlledHeroChoiceMenu(trigger: HTMLButtonElement): HTMLElement | null {
  const id = trigger.getAttribute('aria-controls')
  if (id !== null) return document.getElementById(id)
  return [...document.querySelectorAll<HTMLElement>("[role='menu']")]
    .findLast(menu => menu.querySelector("[role='menuitem'], [role='menuitemradio']") !== null) ?? null
}

async function heroChoices(kind: 'workspace' | 'preset'): Promise<string[]> {
  const trigger = nativeHeroChoiceTrigger(kind)
  if (trigger === undefined || trigger.disabled) return []
  document.body.dataset.deepcelModelProbing = ''
  trigger.click()
  await afterPaint()
  const menu = controlledHeroChoiceMenu(trigger)
  // Adding a workspace is a File command, not a value of this choice.
  const excluded = new Set(['Add workspace', '添加工作区'])
  const choices = [...menu?.querySelectorAll<HTMLButtonElement>("[role='menuitem'], [role='menuitemradio']") ?? []]
    .filter(button => !button.disabled)
    .map(menuChoiceLabel)
    .filter(label => label !== '' && !excluded.has(label.replace(/(?:…|\.{3})$/, '')))
  trigger.click()
  await afterPaint()
  delete document.body.dataset.deepcelModelProbing
  return [...new Set(choices)]
}

async function applyHeroChoice(kind: 'workspace' | 'preset', label: string): Promise<void> {
  const trigger = nativeHeroChoiceTrigger(kind)
  if (trigger === undefined || trigger.disabled) return
  document.body.dataset.deepcelModelProbing = ''
  trigger.click()
  await afterPaint()
  const menu = controlledHeroChoiceMenu(trigger)
  const choice = [...menu?.querySelectorAll<HTMLButtonElement>("[role='menuitem'], [role='menuitemradio']") ?? []]
    .find(button => menuChoiceLabel(button) === label)
  choice?.click()
  if (choice === undefined) trigger.click()
  await afterPaint()
  delete document.body.dataset.deepcelModelProbing
}

function controlledModelMenu(trigger: HTMLButtonElement): HTMLElement | null {
  const id = trigger.getAttribute('aria-controls')
  if (id !== null) return document.getElementById(id)
  return [...document.querySelectorAll<HTMLElement>("[role='menu']")]
    .find(menu => menu.querySelector("button[role='menuitem']") !== null) ?? null
}

function controlledPermissionMenu(trigger: HTMLButtonElement): HTMLElement | null {
  const id = trigger.getAttribute('aria-controls')
  if (id !== null) return document.getElementById(id)
  return [...document.querySelectorAll<HTMLElement>("[role='menu']")]
    .find(menu => menu.querySelector("[role='menuitem'], [role='menuitemradio']") !== null) ?? null
}

async function permissionChoices(): Promise<string[]> {
  const trigger = nativePermissionTrigger()
  if (trigger === undefined || trigger.disabled) return []
  document.body.dataset.deepcelModelProbing = ''
  trigger.click()
  await afterPaint()
  const menu = controlledPermissionMenu(trigger)
  const choices = [...menu?.querySelectorAll<HTMLButtonElement>("[role='menuitem'], [role='menuitemradio']") ?? []]
    .map(menuChoiceLabel)
    .filter(Boolean)
  trigger.click()
  await afterPaint()
  delete document.body.dataset.deepcelModelProbing
  return choices
}

async function applyPermissionChoice(label: string): Promise<void> {
  const trigger = nativePermissionTrigger()
  if (trigger === undefined || trigger.disabled) return
  document.body.dataset.deepcelModelProbing = ''
  trigger.click()
  await afterPaint()
  const menu = controlledPermissionMenu(trigger)
  const choice = [...menu?.querySelectorAll<HTMLButtonElement>("[role='menuitem'], [role='menuitemradio']") ?? []]
    .find(button => menuChoiceLabel(button) === label)
  choice?.click()
  await afterPaint()
  delete document.body.dataset.deepcelModelProbing
}

async function modelChoices(kind: 'model' | 'thinking'): Promise<string[]> {
  const trigger = nativeModelTrigger()
  if (trigger === undefined || trigger.disabled) return []
  document.body.dataset.deepcelModelProbing = ''
  trigger.click()
  await afterPaint()
  const rootMenu = controlledModelMenu(trigger)
  const rows = [...rootMenu?.querySelectorAll<HTMLButtonElement>("button[role='menuitem']") ?? []]
  rows[kind === 'model' ? 0 : 1]?.click()
  await afterPaint()
  const choices = [...rootMenu?.querySelectorAll<HTMLButtonElement>("button[role='menuitemradio']") ?? []]
    .map(menuChoiceLabel)
    .filter(Boolean)
  trigger.click()
  await afterPaint()
  delete document.body.dataset.deepcelModelProbing
  return choices
}

async function applyModelChoice(kind: 'model' | 'thinking', label: string): Promise<void> {
  const trigger = nativeModelTrigger()
  if (trigger === undefined || trigger.disabled) return
  document.body.dataset.deepcelModelProbing = ''
  trigger.click()
  await afterPaint()
  const rootMenu = controlledModelMenu(trigger)
  const rows = [...rootMenu?.querySelectorAll<HTMLButtonElement>("button[role='menuitem']") ?? []]
  rows[kind === 'model' ? 0 : 1]?.click()
  await afterPaint()
  const choice = [...rootMenu?.querySelectorAll<HTMLButtonElement>("button[role='menuitemradio']") ?? []]
    .find(button => menuChoiceLabel(button) === label)
  choice?.click()
  await afterPaint()
  delete document.body.dataset.deepcelModelProbing
}

function concealNativeEntrypoints(): void {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('button:not([data-skin-control])')]
  for (const button of buttons) {
    const text = button.textContent?.trim() ?? ''
    const aria = button.getAttribute('aria-label') ?? ''
    const matches = NATIVE_ENTRY_SPECS.some(spec => spec.labels.includes(text) || spec.ariaLabels.includes(aria))
    if (matches) button.dataset.deepcelNativeProxy = ''
  }
  for (const composer of document.querySelectorAll<HTMLElement>('[data-composer-card]')) {
    composer.dataset.deepcelMergedInput = ''
  }
  const heroRow = nativeHeroChoiceTriggers().row
  for (const source of document.querySelectorAll<HTMLElement>('[data-deepcel-hero-choice-source]')) {
    if (source !== heroRow) delete source.dataset.deepcelHeroChoiceSource
  }
  if (heroRow !== undefined) heroRow.dataset.deepcelHeroChoiceSource = ''
}

function columnLabel(index: number): string {
  let value = index + 1
  let label = ''
  while (value > 0) {
    value -= 1
    label = String.fromCharCode(65 + value % 26) + label
    value = Math.floor(value / 26)
  }
  return label
}

function fillColumnCoordinates(columns: HTMLDivElement): void {
  const count = Math.ceil((window.innerWidth - ROW_GUTTER) / CELL_WIDTH) + 1
  const cells: HTMLSpanElement[] = [makeCell('cornerCell', '')]
  for (let index = 0; index < count; index += 1) {
    cells.push(makeCell('columnCell', columnLabel(index)))
  }
  columns.replaceChildren(...cells)
}

function fillRowCoordinates(rows: HTMLDivElement, offset = 0): void {
  const count = Math.ceil((window.innerHeight - currentRibbonHeight() - STATUS_HEIGHT) / ROW_HEIGHT) + 1
  const cells: HTMLSpanElement[] = []
  for (let index = 0; index <= count + 1; index += 1) {
    cells.push(makeCell('rowCell', String(offset + index)))
  }
  rows.replaceChildren(...cells)
}

function rangeName(range: CellRange): string {
  const start = `${columnLabel(range.columnStart)}${range.rowStart}`
  const end = `${columnLabel(range.columnEnd)}${range.rowEnd}`
  return start === end ? start : `${start}:${end}`
}

function createWorksheetSurface(nameCell: HTMLSpanElement, rows: HTMLDivElement): WorksheetSurface {
  const grid = document.createElement('div')
  grid.className = cls('worksheetGrid')
  grid.dataset.skinGrid = ''
  grid.setAttribute('aria-hidden', 'true')

  const selection = document.createElement('div')
  selection.className = cls('worksheetSelection')
  selection.dataset.skinSelection = ''
  selection.setAttribute('aria-hidden', 'true')

  let rowOffset = 0
  let scrollport: HTMLElement | null = null
  let reconcileFrame: number | undefined
  const messageElements = new Set<HTMLElement>()
  const dirtyMessages = new Set<HTMLElement>()
  const flowContainers = new Set<HTMLElement>()
  let composerSeat: HTMLElement | null = null
  let selectedRangeElement: HTMLElement | null = null
  let selectedRange: CellRange | null = null

  const syncSelectionVisibility = (): void => {
    if (selectedRange === null) return
    const residual = Number.parseFloat(document.body.style.getPropertyValue('--deepcel-scroll-y')) || 0
    const top = currentRibbonHeight()
      + (selectedRange.rowStart - 1 - rowOffset) * ROW_HEIGHT
      + residual
    const bottom = top + (selectedRange.rowEnd - selectedRange.rowStart + 1) * ROW_HEIGHT
    selection.toggleAttribute(
      'data-active',
      bottom > currentRibbonHeight() && top < window.innerHeight - STATUS_HEIGHT,
    )
  }

  const clear = (): void => {
    selectedRange = null
    delete selection.dataset.active
    delete selection.dataset.overlay
    if (selectedRangeElement !== null) delete selectedRangeElement.dataset.deepcelSelectedRange
    selectedRangeElement = null
    nameCell.textContent = 'B4'
  }

  const updateRows = (): void => {
    const count = Math.ceil((window.innerHeight - currentRibbonHeight() - STATUS_HEIGHT) / ROW_HEIGHT) + 3
    if (rows.children.length !== count) {
      fillRowCoordinates(rows, rowOffset)
      return
    }
    for (let index = 0; index < count; index += 1) {
      const cell = rows.children.item(index)
      const label = String(rowOffset + index)
      if (cell !== null && cell.textContent !== label) cell.textContent = label
    }
  }

  const sizeMessage = (message: HTMLElement): void => {
    // Measure native content at its stable column width; the allocated grid
    // height must not switch the layout or typography used by the next read.
    const roots = [...message.children].flatMap(child =>
      getComputedStyle(child).display === 'contents' ? [...child.children] : [child])
    // A process group stacks its heading and body; other records overlay one root.
    const stacked = message.matches('[data-step-process]')
    const heights = roots.map(child =>
      child instanceof HTMLElement ? Math.max(stacked ? 0 : child.scrollHeight, child.getBoundingClientRect().height) : 0)
    const contentHeight = stacked
      ? heights.reduce((sum, height) => sum + height, 0)
      : Math.max(0, ...heights)
    const height = Math.max(ROW_HEIGHT, Math.ceil(contentHeight / ROW_HEIGHT) * ROW_HEIGHT)
    const value = `${height}px`
    if (message.style.getPropertyValue('--deepcel-message-height') !== value) {
      message.style.setProperty('--deepcel-message-height', value)
    }
    message.style.setProperty('--deepcel-message-rows', String(height / ROW_HEIGHT))
    message.dataset.deepcelMessageRange = ''
  }

  const clearMessageCells = (message: HTMLElement): void => {
    delete message.dataset.deepcelCellized
    for (const element of message.querySelectorAll<HTMLElement>('[data-deepcel-content-cell]')) {
      delete element.dataset.deepcelContentCell
      delete element.dataset.deepcelSingleLine
      element.style.removeProperty('--deepcel-content-cell-height')
      element.style.removeProperty('--deepcel-content-cell-rows')
    }
    for (const element of message.querySelectorAll<HTMLElement>('[data-deepcel-cell-container]')) {
      delete element.dataset.deepcelCellContainer
    }
  }

  const sizeContentCell = (cell: HTMLElement): void => {
    cell.dataset.deepcelContentCell = ''
    cell.style.removeProperty('--deepcel-content-cell-height')
    const contentHeight = Math.max(cell.scrollHeight, cell.getBoundingClientRect().height)
    const height = Math.max(ROW_HEIGHT, Math.ceil(contentHeight / ROW_HEIGHT) * ROW_HEIGHT)
    cell.style.setProperty('--deepcel-content-cell-height', `${height}px`)
    cell.style.setProperty('--deepcel-content-cell-rows', String(height / ROW_HEIGHT))
    if (height === ROW_HEIGHT) cell.dataset.deepcelSingleLine = ''
    else delete cell.dataset.deepcelSingleLine
  }

  const syncMessageCells = (message: HTMLElement): void => {
    clearMessageCells(message)
    if (message.hasAttribute('hidden')) return
    // A process group is one merged range; its disclosure rows keep their own layout.
    if (message.matches('[data-step-process]')) return
    if (message.matches("[data-chat-flow-kind='system-prompt'], [data-chat-flow-kind='context']")) return
    if (message.querySelector("[class*='userRow']") !== null) return

    const producedFilesRoot = message.querySelector<HTMLElement>('[data-produced-files-row]')?.parentElement
    const shellSummary = message.querySelector<HTMLElement>("[data-sample='bash'][data-variant='bash']")
    const shellBody = shellSummary?.nextElementSibling
    const shellBodyCells = shellBody === null || shellBody === undefined
      ? []
      : [...shellBody.children].filter((child): child is HTMLElement => child instanceof HTMLElement)
    const candidates = [...new Set([
      ...(producedFilesRoot == null ? [] : [producedFilesRoot]),
      ...(shellSummary === null ? [] : [shellSummary, ...shellBodyCells]),
      ...message.querySelectorAll<HTMLElement>(CONTENT_CELL_SELECTOR),
    ])]
      .filter((candidate): candidate is HTMLElement => candidate instanceof HTMLElement)
      .filter(candidate => candidate.closest('[hidden]') === null)
      .filter((candidate) => {
        const ancestor = candidate.parentElement?.closest<HTMLElement>(CONTENT_CELL_SELECTOR)
        return ancestor === null || ancestor === undefined || !message.contains(ancestor)
      })
    if (candidates.length === 0) return

    message.dataset.deepcelCellized = ''
    for (const cell of candidates) {
      let container = cell.parentElement
      while (container !== null && container !== message) {
        container.dataset.deepcelCellContainer = ''
        container = container.parentElement
      }
      sizeContentCell(cell)
    }
    sizeMessage(message)
  }

  // A record stretched over whole grid rows keeps its box when its content
  // grows, so its content roots are observed as well and mapped back.
  const observedRecords = new Map<Element, HTMLElement>()
  const messageResizeObserver = typeof ResizeObserver === 'undefined'
    ? undefined
    : new ResizeObserver(entries => {
        const records = new Set<HTMLElement>()
        for (const entry of entries) {
          const record = observedRecords.get(entry.target)
          if (record !== undefined) records.add(record)
        }
        for (const record of records) sizeMessage(record)
      })
  const observeRecord = (message: HTMLElement): void => {
    observedRecords.set(message, message)
    messageResizeObserver?.observe(message)
    if (!message.matches('[data-step-process]')) return
    for (const child of message.children) {
      observedRecords.set(child, message)
      messageResizeObserver?.observe(child)
    }
  }
  const unobserveRecord = (message: HTMLElement): void => {
    for (const [target, record] of observedRecords) {
      if (record !== message) continue
      messageResizeObserver?.unobserve(target)
      observedRecords.delete(target)
    }
  }

  const syncMessages = (): void => {
    const live = new Set([...document.querySelectorAll<HTMLElement>(RECORD_SELECTOR)].filter(isTopLevelRecord))
    for (const message of live) {
      if (messageElements.has(message)) continue
      syncMessageCells(message)
      sizeMessage(message)
      observeRecord(message)
    }
    for (const message of messageElements) {
      if (live.has(message)) continue
      unobserveRecord(message)
      clearMessageCells(message)
      delete message.dataset.deepcelMessageRange
      message.style.removeProperty('--deepcel-message-height')
      message.style.removeProperty('--deepcel-message-rows')
    }
    messageElements.clear()
    for (const message of live) messageElements.add(message)
    for (const message of dirtyMessages) {
      if (live.has(message)) {
        syncMessageCells(message)
        sizeMessage(message)
      }
    }
    dirtyMessages.clear()
    if (scrollport !== null) {
      const origin = scrollport.getBoundingClientRect().top - scrollport.scrollTop
      const ranges = scrollport.querySelectorAll<HTMLElement>(
        '[data-deepcel-message-range]:not([data-deepcel-cellized]):not([hidden]), [data-deepcel-content-cell], [data-deepcel-composer-range]',
      )
      const bottom = Math.max(scrollport.clientHeight, ...[...ranges]
        .filter(element => element.closest('[hidden]') === null)
        .map(element => element.getBoundingClientRect().bottom - origin + 2 * ROW_HEIGHT))
      scrollport.style.setProperty('--deepcel-flow-height', `${bottom}px`)
    }
  }

  const sizeComposer = (): void => {
    if (composerSeat === null) return
    const contentHeight = composerSeat.scrollHeight
    composerSeat.style.setProperty(
      '--deepcel-composer-rows',
      String(Math.max(1, Math.ceil(contentHeight / ROW_HEIGHT))),
    )
    composerSeat.dataset.deepcelComposerRange = ''
  }

  const composerResizeObserver = typeof ResizeObserver === 'undefined'
    ? undefined
    : new ResizeObserver(() => { sizeComposer() })

  const trajectoryCells = new Set<HTMLElement>()
  const syncTrajectoryRows = (): void => {
    const live = new Set<HTMLElement>()
    for (const row of document.querySelectorAll<HTMLElement>('tr[data-trajectory-row-key]')) {
      const cell = row.querySelector<HTMLElement>('td:first-child')
      if (cell === null) continue
      cell.dataset.deepcelTrajectoryRow = row.getAttribute('aria-rowindex') ?? ''
      live.add(cell)
    }
    for (const cell of trajectoryCells) {
      if (!live.has(cell)) delete cell.dataset.deepcelTrajectoryRow
    }
    trajectoryCells.clear()
    for (const cell of live) trajectoryCells.add(cell)
  }

  const syncFlowLayout = (): void => {
    syncTrajectoryRows()
    const nextContainers = new Set<HTMLElement>()
    const flow = scrollport?.querySelector<HTMLElement>('[data-chat-flow]') ?? null
    const surfaceOwner = flow === null || scrollport === null ? document.body : scrollport
    if (rows.parentElement !== surfaceOwner) surfaceOwner.append(rows)
    if (selection.parentElement !== surfaceOwner) surfaceOwner.append(selection)
    if (scrollport !== null) {
      if (flow === null) delete scrollport.dataset.deepcelWorkbookFlow
      else {
        scrollport.dataset.deepcelWorkbookFlow = ''
        const phase = scrollport.closest<HTMLElement>("[data-phase='active']")
        const preference = Number.parseFloat(phase?.style.getPropertyValue('--dsh-chat-user-width') ?? '')
        const available = scrollport.clientWidth || window.innerWidth
        const columns = Math.max(1, Math.floor(Math.min(
          Number.isFinite(preference) ? preference : CHAT_WIDTH,
          available - ROW_GUTTER - CELL_WIDTH,
        ) / CELL_WIDTH))
        const offset = Math.max(0, Math.round((available - ROW_GUTTER - columns * CELL_WIDTH) / (2 * CELL_WIDTH))) * CELL_WIDTH
        for (const [key, value] of [
          ['--deepcel-chat-columns', String(columns)],
          ['--deepcel-chat-x', `${offset}px`],
        ] as const) {
          if (scrollport.style.getPropertyValue(key) !== value) scrollport.style.setProperty(key, value)
        }
      }
    }
    let container = flow
    while (container !== null && container !== scrollport) {
      nextContainers.add(container)
      container = container.parentElement
    }
    for (const previous of flowContainers) {
      if (!nextContainers.has(previous)) delete previous.dataset.deepcelFlowContainer
    }
    for (const current of nextContainers) current.dataset.deepcelFlowContainer = ''
    flowContainers.clear()
    for (const current of nextContainers) flowContainers.add(current)

    const nextComposer = flow === null
      ? null
      : scrollport?.querySelector<HTMLElement>('[data-composer-seat]') ?? null
    if (nextComposer !== composerSeat) {
      if (composerSeat !== null) {
        composerResizeObserver?.unobserve(composerSeat)
        delete composerSeat.dataset.deepcelComposerRange
        composerSeat.style.removeProperty('--deepcel-composer-rows')
      }
      composerSeat = nextComposer
      if (composerSeat !== null) composerResizeObserver?.observe(composerSeat)
    }
    sizeComposer()

    if (scrollport !== null && flow !== null) {
      const top = scrollport.getBoundingClientRect().top
      const ribbonHeight = currentRibbonHeight()
      const phase = ((top - ribbonHeight) % ROW_HEIGHT + ROW_HEIGHT) % ROW_HEIGHT
      scrollport.style.setProperty('--deepcel-flow-padding-top', `${(ROW_HEIGHT - phase) % ROW_HEIGHT}px`)
    } else {
      scrollport?.style.removeProperty('--deepcel-flow-padding-top')
    }
  }

  const syncScrollCoordinates = (): void => {
    if (scrollport === null) return
    const delta = scrollport.scrollTop
    const nextOffset = Math.trunc(delta / ROW_HEIGHT)
    const residual = delta - nextOffset * ROW_HEIGHT
    document.body.style.setProperty('--deepcel-scroll-y', `${-residual}px`)
    document.body.style.setProperty('--deepcel-row-offset', String(nextOffset))
    document.body.style.setProperty('--deepcel-row-offset-y', `${-nextOffset * ROW_HEIGHT}px`)
    scrollport.style.setProperty('--deepcel-row-start', `${nextOffset * ROW_HEIGHT}px`)
    if (nextOffset !== rowOffset) {
      rowOffset = nextOffset
      updateRows()
    }
    syncSelectionVisibility()
  }

  const onScroll = (): void => {
    syncScrollCoordinates()
  }

  const bindScrollport = (): void => {
    const next = document.querySelector<HTMLElement>("[data-phase='active'] [data-conversation-scroll]")
    if (next === scrollport) {
      syncFlowLayout()
      syncMessages()
      return
    }
    scrollport?.removeEventListener('scroll', onScroll)
    scrollport?.style.removeProperty('--deepcel-flow-padding-top')
    scrollport?.style.removeProperty('--deepcel-chat-columns')
    scrollport?.style.removeProperty('--deepcel-chat-x')
    scrollport?.style.removeProperty('--deepcel-row-start')
    scrollport?.style.removeProperty('--deepcel-flow-height')
    if (scrollport !== null) delete scrollport.dataset.deepcelWorkbookFlow
    scrollport = next
    rowOffset = 0
    document.body.style.setProperty('--deepcel-scroll-y', '0px')
    document.body.style.setProperty('--deepcel-row-offset', '0')
    document.body.style.setProperty('--deepcel-row-offset-y', '0px')
    updateRows()
    syncSelectionVisibility()
    if (scrollport === null) {
      syncFlowLayout()
      return
    }
    scrollport.addEventListener('scroll', onScroll, { passive: true })
    syncFlowLayout()
    syncMessages()
    syncScrollCoordinates()
  }

  const resize = (): void => {
    const columns = Math.ceil((window.innerWidth - ROW_GUTTER) / CELL_WIDTH) + 1
    const rows = Math.ceil((window.innerHeight - currentRibbonHeight() - STATUS_HEIGHT) / ROW_HEIGHT) + 3
    const centeredSpace = Math.max(0, window.innerWidth - ROW_GUTTER - COMPOSER_WIDTH) / 2
    const composerColumn = Math.max(0, Math.round(centeredSpace / CELL_WIDTH))
    const centeredChatSpace = Math.max(0, window.innerWidth - ROW_GUTTER - CHAT_WIDTH) / 2
    const chatColumn = Math.max(0, Math.round(centeredChatSpace / CELL_WIDTH))
    const cells: HTMLSpanElement[] = []
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const cell = document.createElement('span')
        cell.className = cls('worksheetCell')
        cell.dataset.cell = `${columnLabel(column)}${rowOffset + row}`
        cells.push(cell)
      }
    }
    grid.style.setProperty('--deepcel-grid-columns', String(columns))
    document.body.style.setProperty('--deepcel-composer-x', `${composerColumn * CELL_WIDTH}px`)
    document.body.style.setProperty('--deepcel-chat-x', `${chatColumn * CELL_WIDTH}px`)
    grid.replaceChildren(...cells)
    for (const message of messageElements) syncMessageCells(message)
    bindScrollport()
    syncSelectionVisibility()
  }

  const select = (
    range: CellRange,
    overlay = false,
    element?: HTMLElement,
    segment = '',
  ): void => {
    selectedRange = range
    if (selectedRangeElement !== element) {
      if (selectedRangeElement !== null) delete selectedRangeElement.dataset.deepcelSelectedRange
      selectedRangeElement = element ?? null
      if (selectedRangeElement !== null) selectedRangeElement.dataset.deepcelSelectedRange = segment
    }
    selection.dataset.active = ''
    if (overlay) selection.dataset.overlay = ''
    else delete selection.dataset.overlay
    selection.style.setProperty('--deepcel-selection-x', `${range.columnStart * CELL_WIDTH}px`)
    selection.style.setProperty('--deepcel-selection-y', `${(range.rowStart - 1) * ROW_HEIGHT}px`)
    selection.style.setProperty('--deepcel-selection-width', `${(range.columnEnd - range.columnStart + 1) * CELL_WIDTH}px`)
    selection.style.setProperty('--deepcel-selection-height', `${(range.rowEnd - range.rowStart + 1) * ROW_HEIGHT}px`)
    nameCell.textContent = rangeName(range)
    syncSelectionVisibility()
  }

  const onSheetClick = (event: MouseEvent): void => {
    if (!(event.target instanceof HTMLElement)) return
    if (event.target.closest('[data-skin-chrome], [role="dialog"]') !== null) return
    if (event.target.closest('button, [role="button"], a, input, textarea, select, [contenteditable="true"]') !== null) return
    if (event.target.closest('#root [data-phase], #root [data-conversation-scroll]') === null) return
    const sidebarOffset = Number.parseFloat(document.body.style.getPropertyValue('--deepcel-sidebar-offset')) || 0
    const origin = sidebarOffset + ROW_GUTTER
    const ribbonHeight = currentRibbonHeight()
    if (event.clientX < origin || event.clientY < ribbonHeight || event.clientY >= window.innerHeight - STATUS_HEIGHT) return

    const heroHeadline = event.target.closest<HTMLElement>(
      "[data-phase='hero'] [class*='headline']:has(> [class*='titleGroup'])",
    )
    const heroHeadlineRect = heroHeadline?.getBoundingClientRect()
    if (heroHeadline !== null && heroHeadline !== undefined
      && heroHeadlineRect !== undefined && heroHeadlineRect.width > 0 && heroHeadlineRect.height > 0) {
      const relativeX = event.clientX - heroHeadlineRect.left
      const title = heroHeadline.querySelector<HTMLElement>("[class*='titleGroup'] > span:first-child")
      const preview = heroHeadline.querySelector<HTMLElement>("[class*='previewBadge']")
      const segment = relativeX < CELL_WIDTH
        ? { start: heroHeadlineRect.left, end: heroHeadlineRect.left + CELL_WIDTH, element: heroHeadline, kind: 'formula' }
        : relativeX >= heroHeadlineRect.width - CELL_WIDTH
          ? { start: heroHeadlineRect.right - CELL_WIDTH, end: heroHeadlineRect.right, element: preview, kind: 'preview' }
          : { start: heroHeadlineRect.left + CELL_WIDTH, end: heroHeadlineRect.right - CELL_WIDTH, element: title, kind: 'title' }
      if (segment.element === null) return
      select({
        columnStart: Math.max(0, Math.floor((segment.start - origin) / CELL_WIDTH)),
        columnEnd: Math.max(0, Math.ceil((segment.end - origin) / CELL_WIDTH) - 1),
        rowStart: Math.max(1, Math.floor((heroHeadlineRect.top - ribbonHeight) / ROW_HEIGHT) + 1),
        rowEnd: Math.max(1, Math.ceil((heroHeadlineRect.bottom - ribbonHeight) / ROW_HEIGHT)),
      }, true, segment.element, segment.kind)
      return
    }

    const composer = event.target.closest<HTMLElement>('[data-composer-card]')
    const rect = composer?.getBoundingClientRect()
    if (composer !== null && composer !== undefined && rect !== undefined && rect.width > 0 && rect.height > 0) {
      select({
        columnStart: Math.max(0, Math.floor((rect.left - origin) / CELL_WIDTH)),
        columnEnd: Math.max(0, Math.ceil((rect.right - origin) / CELL_WIDTH) - 1),
        rowStart: Math.max(1, Math.floor((rect.top - ribbonHeight) / ROW_HEIGHT) + 1),
        rowEnd: Math.max(1, Math.ceil((rect.bottom - ribbonHeight) / ROW_HEIGHT)),
      })
      return
    }

    const column = Math.floor((event.clientX - origin) / CELL_WIDTH)
    const scrollY = Number.parseFloat(document.body.style.getPropertyValue('--deepcel-scroll-y')) || 0
    const row = rowOffset + Math.floor((event.clientY - ribbonHeight - scrollY) / ROW_HEIGHT) + 1
    select({ columnStart: column, columnEnd: column, rowStart: row, rowEnd: row })
  }

  document.addEventListener('click', onSheetClick, true)
  const worksheetObserver = new MutationObserver((records) => {
    let changed = false
    for (const record of records) {
      const target = record.target instanceof HTMLElement ? record.target : record.target.parentElement
      if (target?.closest('[data-skin-chrome], [data-skin-grid], [data-skin-selection]') !== null) continue
      if (record.type === 'attributes' && record.attributeName !== 'aria-rowindex' && record.attributeName !== 'hidden'
        && target !== scrollport?.closest("[data-phase='active']")) continue
      changed = true
      const message = recordOf(target)
      if (message !== null) dirtyMessages.add(message)
      for (const node of record.addedNodes) {
        if (!(node instanceof HTMLElement)) continue
        const addedMessage = node.matches(RECORD_SELECTOR) && isTopLevelRecord(node) ? node : recordOf(node)
        if (addedMessage !== null) dirtyMessages.add(addedMessage)
      }
    }
    if (!changed || reconcileFrame !== undefined) return
    reconcileFrame = requestAnimationFrame(() => {
      reconcileFrame = undefined
      bindScrollport()
    })
  })
  worksheetObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'aria-rowindex', 'hidden'] })
  resize()
  return {
    grid,
    selection,
    clear,
    resize,
    dispose() {
      document.removeEventListener('click', onSheetClick, true)
      worksheetObserver.disconnect()
      for (const cell of trajectoryCells) delete cell.dataset.deepcelTrajectoryRow
      trajectoryCells.clear()
      scrollport?.removeEventListener('scroll', onScroll)
      if (reconcileFrame !== undefined) cancelAnimationFrame(reconcileFrame)
      messageResizeObserver?.disconnect()
      observedRecords.clear()
      composerResizeObserver?.disconnect()
      for (const message of messageElements) {
        clearMessageCells(message)
        delete message.dataset.deepcelMessageRange
        message.style.removeProperty('--deepcel-message-height')
        message.style.removeProperty('--deepcel-message-rows')
      }
      for (const container of flowContainers) delete container.dataset.deepcelFlowContainer
      if (composerSeat !== null) {
        delete composerSeat.dataset.deepcelComposerRange
        composerSeat.style.removeProperty('--deepcel-composer-rows')
      }
      scrollport?.style.removeProperty('--deepcel-flow-padding-top')
      scrollport?.style.removeProperty('--deepcel-chat-columns')
      scrollport?.style.removeProperty('--deepcel-chat-x')
      scrollport?.style.removeProperty('--deepcel-row-start')
      scrollport?.style.removeProperty('--deepcel-flow-height')
      if (scrollport !== null) delete scrollport.dataset.deepcelWorkbookFlow
      document.body.style.removeProperty('--deepcel-composer-x')
      document.body.style.removeProperty('--deepcel-chat-x')
      document.body.style.removeProperty('--deepcel-scroll-y')
      document.body.style.removeProperty('--deepcel-row-offset')
      document.body.style.removeProperty('--deepcel-row-offset-y')
      if (selectedRangeElement !== null) delete selectedRangeElement.dataset.deepcelSelectedRange
      grid.remove()
      selection.remove()
    },
  }
}

function createWorkbookChrome(): {
  chrome: HTMLDivElement
  columns: HTMLDivElement
  controls: WorkbookControls
  nameCell: HTMLSpanElement
} {
  const chrome = document.createElement('div')
  chrome.className = cls('workbookChrome')
  chrome.dataset.skinChrome = 'workbook'

  const titleRow = document.createElement('div')
  titleRow.className = cls('titleRow')
  const quickAccess = document.createElement('div')
  quickAccess.className = cls('quickAccess')
  quickAccess.setAttribute('role', 'toolbar')
  const quickNewSession = makeControl('quickCell', 'quick-new-session')
  const quickSidebar = makeControl('quickCell', 'quick-sidebar')
  quickAccess.append(quickSidebar, quickNewSession)
  const titleCell = makeCell('titleCell', 'DSH Workbook')
  titleRow.append(quickAccess, titleCell)

  const tabs = document.createElement('div')
  tabs.className = cls('ribbonTabs')
  tabs.setAttribute('role', 'tablist')
  const ribbonTabs = new Map<RibbonTabId, HTMLButtonElement>()
  for (const spec of RIBBON_TABS) {
    const tab = makeControl('ribbonTab', `ribbon-${spec.id}`)
    tab.textContent = spec.label
    tab.dataset.ribbonTab = spec.id
    tab.setAttribute('role', 'tab')
    tab.addEventListener('click', () => {
      chrome.dispatchEvent(new CustomEvent('deepcel-ribbon-change', { detail: spec.id }))
    })
    ribbonTabs.set(spec.id, tab)
    tabs.append(tab)
  }

  const tools = document.createElement('div')
  tools.className = cls('toolRow')
  tools.setAttribute('role', 'toolbar')
  const newSession = makeControl('toolCell', 'new-session')
  const newWorkspace = makeControl('toolCell', 'new-workspace')
  newWorkspace.addEventListener('click', () => {
    clickNativeButton([], ['添加工作区', 'Add workspace'])
  })
  const settings = makeControl('toolCell', 'settings')
  settings.setAttribute('aria-haspopup', 'dialog')
  settings.addEventListener('click', toggleNativeSettings)
  const sidebar = makeControl('toolCell', 'view-sidebar')
  const rightbar = makeControl('toolCell', 'view-rightbar')
  rightbar.addEventListener('click', () => { nativeRightbarToggle()?.click() })
  const choice = (kind: ChoiceKind): HTMLButtonElement => {
    const control = makeControl('choiceCell', kind)
    control.setAttribute('aria-haspopup', 'menu')
    control.setAttribute('aria-expanded', 'false')
    return control
  }
  const workspace = choice('workspace')
  const preset = choice('preset')
  const permission = choice('permission')
  const model = choice('model')
  const thinking = choice('thinking')

  const formula = document.createElement('div')
  formula.className = cls('formulaRow')
  const nameCell = makeCell('nameCell', 'B4')
  nameCell.dataset.cellName = ''
  const formulaCell = makeCell('formulaCell', '')
  formula.append(
    nameCell,
    makeCell('formulaLabel', 'fx'),
    formulaCell,
  )

  const columns = document.createElement('div')
  columns.className = cls('columnRow')
  fillColumnCoordinates(columns)

  chrome.append(titleRow, tabs, tools, formula, columns)
  return {
    chrome,
    columns,
    controls: {
      ribbonTabs, tools, formulaCell, titleCell, quickNewSession, quickSidebar,
      newSession, newWorkspace, settings, sidebar, rightbar,
      workspace, preset, permission, model, thinking,
    },
    nameCell,
  }
}

function createRowChrome(): HTMLDivElement {
  const rows = document.createElement('div')
  rows.className = cls('rowChrome')
  rows.dataset.skinChrome = 'rows'
  rows.setAttribute('aria-hidden', 'true')
  fillRowCoordinates(rows)
  return rows
}

function localeStatus(snapshot: LocaleSnapshot): string {
  if (snapshot.active === 'en') return 'English (US)'
  return snapshot.locales.find(locale => locale.id === snapshot.active)?.label ?? snapshot.active
}

function findShellParts(): { frame: HTMLElement, sidebar: HTMLElement } | undefined {
  const sidebar = document.querySelector<HTMLElement>("#root [class*='sidebarCol']")
  const frame = sidebar?.parentElement
  if (sidebar === null || sidebar === undefined || frame === null || frame === undefined) return undefined
  return { frame, sidebar }
}

function sidebarTargetWidth(frame: HTMLElement, sidebar: HTMLElement): number {
  const firstTrack = /^([0-9]+(?:\.[0-9]+)?)px(?:\s|$)/.exec(frame.style.gridTemplateColumns.trim())
  return Math.round(firstTrack === null ? sidebar.getBoundingClientRect().width : Number(firstTrack[1]))
}

function createStatusChrome(locale: LocalePort, layout: LayoutPort): {
  footer: HTMLDivElement
  sidebar: HTMLButtonElement
  workbookTabs: HTMLDivElement
  addWorkbook: HTMLButtonElement
  language: HTMLSpanElement
  ready: HTMLSpanElement
} {
  const footer = document.createElement('div')
  footer.className = cls('statusChrome')
  footer.dataset.skinChrome = 'status'
  const sidebar = makeControl('sheetNavCell', 'sidebar')
  sidebar.addEventListener('click', () => { layout.toggleSidebar() })
  const workbookTabs = document.createElement('div')
  workbookTabs.className = cls('workbookTabs')
  workbookTabs.setAttribute('role', 'tablist')
  const addWorkbook = makeControl('newSheetCell', 'new-workbook')
  const language = makeCell('statusCell', localeStatus(locale.getLocale()))
  language.dataset.localeStatus = ''
  const ready = makeCell('statusCell', 'Ready')
  ready.dataset.readyStatus = ''
  // Zoom is informational: the page has no zoom command, so the cell carries
  // no +/- affordance that would invite a click.
  const zoom = makeCell('zoomCell', '100%')
  zoom.setAttribute('aria-hidden', 'true')
  footer.append(
    sidebar,
    workbookTabs,
    addWorkbook,
    makeCell('statusSpacer', ''),
    ready,
    language,
    zoom,
  )
  return { footer, sidebar, workbookTabs, addWorkbook, language, ready }
}

/** DSH 0.1.7 renders one resident conversation header in both phases. */
function conversationHeader(): HTMLElement | null {
  return document.querySelector<HTMLElement>("#root [data-phase] > [data-slot='conversation.header'] > header")
}

function activeSessionHeader(): HTMLElement | null {
  const header = conversationHeader()
  return header?.closest("[data-phase='active']") === null ? null : header
}

function selectedNativeSessionRow(): HTMLElement | undefined {
  return document.querySelector<HTMLElement>(
    "#root [class*='sessionRow'][role='treeitem'][aria-selected='true']",
  ) ?? undefined
}

function proxyButton(source: HTMLButtonElement, text: string, action: string): HTMLButtonElement {
  const proxy = makeControl('toolCell', action)
  proxy.textContent = text
  proxy.disabled = source.disabled
  proxy.setAttribute('aria-pressed', source.getAttribute('aria-selected') ?? 'false')
  proxy.addEventListener('click', () => { source.click() })
  return proxy
}

function currentSessionTitle(header: HTMLElement): string {
  const navigation = header.querySelector('nav')
  // Breadcrumbs mark the current segment by class; parent segments are buttons.
  const current = navigation?.querySelector<HTMLElement>("[class*='crumbCurrent']")
    ?? navigation?.querySelector<HTMLButtonElement>('button:disabled')
    ?? navigation?.querySelector<HTMLButtonElement>('button:last-of-type')
  return current?.textContent?.trim() || navigation?.textContent?.trim() || ''
}

/**
 * A ribbon dropdown gallery: one click on a value applies it, like a native
 * select. Keyboard focus moves through the values with the arrow keys; Escape
 * or Tab closes the gallery and returns focus to its ribbon button.
 */
function createChoiceMenu(
  kind: ChoiceKind,
  anchor: HTMLElement,
  labels: ShellLabels,
  choices: readonly string[],
  current: string,
  onPick: (choice: string) => void,
  onClose: (restoreFocus: boolean) => void,
): HTMLDivElement {
  const menu = document.createElement('div')
  menu.className = cls('choiceMenu')
  menu.dataset.deepcelChoiceMenu = kind
  menu.dataset.skinChrome = 'menu'
  menu.setAttribute('role', 'menu')
  menu.setAttribute('aria-label', labels[kind])
  const heading = document.createElement('div')
  heading.className = cls('choiceHeading')
  heading.setAttribute('aria-hidden', 'true')
  heading.textContent = labels[kind]
  menu.append(heading)
  const items = choices.map((choice, index) => {
    const item = makeControl('choiceItem', `choice-${index}`)
    item.setAttribute('role', 'menuitemradio')
    item.setAttribute('aria-checked', String(choice === current))
    item.tabIndex = -1
    item.textContent = choice
    item.addEventListener('click', () => { onPick(choice) })
    return item
  })
  if (items.length === 0) {
    const empty = document.createElement('div')
    empty.className = cls('choiceEmpty')
    empty.setAttribute('role', 'none')
    empty.textContent = labels.empty
    menu.append(empty)
  }
  menu.append(...items)
  const focusAt = (index: number): void => {
    if (items.length === 0) return
    items[(index + items.length) % items.length]!.focus()
  }
  menu.addEventListener('keydown', (event) => {
    const index = items.indexOf(document.activeElement as HTMLButtonElement)
    if (event.key === 'ArrowDown') focusAt(index + 1)
    else if (event.key === 'ArrowUp') focusAt(index < 0 ? -1 : index - 1)
    else if (event.key === 'Home') focusAt(0)
    else if (event.key === 'End') focusAt(-1)
    else if (event.key === 'Escape') onClose(true)
    else if (event.key === 'Tab') onClose(false)
    else return
    event.preventDefault()
  })
  const rect = anchor.getBoundingClientRect()
  menu.style.setProperty('--deepcel-menu-x', `${Math.max(0, Math.min(rect.left, window.innerWidth - 240))}px`)
  menu.style.setProperty('--deepcel-menu-y', `${rect.bottom}px`)
  menu.style.setProperty('--deepcel-menu-min-width', `${Math.max(160, rect.width)}px`)
  queueMicrotask(() => {
    const checked = items.findIndex(item => item.getAttribute('aria-checked') === 'true')
    if (menu.isConnected) focusAt(checked < 0 ? 0 : checked)
  })
  return menu
}

/**
 * Apply workbook chrome and the scoped worksheet stylesheet.
 * @param ctx - owning context whose effect retracts all skin writes.
 */
export function apply(ctx: Context): void {
  const body = document.body
  const locale = (ctx as Context & { locale: LocalePort }).locale
  const layout = (ctx as Context & { layout: LayoutPort }).layout
  const sessions = (ctx as Context & { sessions: SessionsPort }).sessions
  const originalTitle = document.title
  body.setAttribute('data-dsh-deepcel', '')

  const { chrome: workbook, columns, controls, nameCell } = createWorkbookChrome()
  const rows = createRowChrome()
  const worksheet = createWorksheetSurface(nameCell, rows)
  const {
    footer: status,
    sidebar: sidebarControl,
    workbookTabs,
    addWorkbook,
    language,
    ready,
  } = createStatusChrome(locale, layout)
  const addins = createAddinsCaption()
  let sidebarOpen = false
  let activeRibbon: RibbonTabId = 'home'
  let choiceMenu: HTMLDivElement | null = null
  let choiceAnchor: HTMLButtonElement | null = null
  let formulaInput: HTMLElement | null = null
  let formulaHeight = FORMULA_HEIGHT
  let choiceGeneration = 0
  let workbookSequence = 0
  let selectionSessionId = sessions.list.getSnapshot().current
  const workbookStates: WorkbookTabState[] = []
  let activeWorkbookKey = ''
  let pendingWorkbookKey = ''
  let pendingWorkbookReady = false
  const createBlankWorkbook = (): WorkbookTabState => {
    const state: WorkbookTabState = {
      key: `workbook-${++workbookSequence}`,
      title: labelsFor(locale.getLocale()).newWorkbook,
      blank: true,
    }
    workbookStates.push(state)
    activeWorkbookKey = state.key
    return state
  }
  createBlankWorkbook()
  const openWorkbook = (state: WorkbookTabState): void => {
    activeWorkbookKey = state.key
    renderWorkbookTabs()
    if (state.sessionId !== undefined) sessions.open(state.sessionId)
    else if (state.source?.isConnected === true) state.source.click()
    else if (state.blank) clickNativeButton([], ['新建会话', 'New session'])
  }
  const closeWorkbook = (state: WorkbookTabState): void => {
    const index = workbookStates.indexOf(state)
    if (index < 0) return
    const wasActive = state.key === activeWorkbookKey
    if (state.key === pendingWorkbookKey) {
      pendingWorkbookKey = ''
      pendingWorkbookReady = false
    }
    workbookStates.splice(index, 1)
    if (workbookStates.length === 0) createBlankWorkbook()
    if (wasActive) {
      const fallback = workbookStates[Math.min(index, workbookStates.length - 1)]!
      activeWorkbookKey = fallback.key
      renderWorkbookTabs()
      if (fallback.sessionId !== undefined) sessions.open(fallback.sessionId)
      else if (fallback.source?.isConnected === true) fallback.source.click()
      else clickNativeButton([], ['新建会话', 'New session'])
      return
    }
    renderWorkbookTabs()
  }
  function renderWorkbookTabs(): void {
    const labels = labelsFor(locale.getLocale())
    const signature = `${labels.closeWorkbook}|${activeWorkbookKey}|${workbookStates
      .map(state => `${state.key}:${state.title}`).join('|')}`
    if (workbookTabs.dataset.workbookSignature === signature) return
    const tabs = workbookStates.map((state) => {
      const tab = document.createElement('div')
      tab.className = cls('sheetTabCell')
      tab.dataset.workbookKey = state.key
      tab.toggleAttribute('data-active', state.key === activeWorkbookKey)
      tab.setAttribute('role', 'presentation')
      const label = makeControl('workbookTabLabel', `workbook-${state.key}`)
      label.textContent = state.title
      label.setAttribute('role', 'tab')
      label.setAttribute('aria-selected', String(state.key === activeWorkbookKey))
      label.addEventListener('click', () => { openWorkbook(state) })
      const close = makeControl('workbookClose', `close-${state.key}`)
      close.textContent = '×'
      close.setAttribute('aria-label', `${labels.closeWorkbook}: ${state.title}`)
      close.addEventListener('click', (event) => {
        event.stopPropagation()
        closeWorkbook(state)
      })
      tab.append(label, close)
      return tab
    })
    workbookTabs.replaceChildren(...tabs)
    workbookTabs.dataset.workbookSignature = signature
  }
  const syncWorkbookTabs = (): void => {
    const labels = labelsFor(locale.getLocale())
    for (const state of workbookStates) {
      if (state.blank) state.title = labels.newWorkbook
    }
    const phase = document.querySelector<HTMLElement>('#root [data-phase]')?.dataset.phase
    // A global panel (the add-ins window) replaces the Conversation without
    // changing the current Session, so it must not open a blank workbook.
    if (phase === 'settling' || nativeAddinsPanel() !== null) {
      renderWorkbookTabs()
      return
    }
    const header = activeSessionHeader()
    if (header === null) {
      let state = workbookStates.find(state => state.key === activeWorkbookKey && state.blank)
        ?? workbookStates.findLast(state => state.blank)
      state ??= createBlankWorkbook()
      state.blank = true
      state.title = labels.newWorkbook
      delete state.sessionId
      delete state.source
      activeWorkbookKey = state.key
      if (phase === 'hero' && state.key === pendingWorkbookKey) pendingWorkbookReady = true
      renderWorkbookTabs()
      return
    }
    if (activeWorkbookKey === pendingWorkbookKey && !pendingWorkbookReady) {
      renderWorkbookTabs()
      return
    }
    const title = currentSessionTitle(header) || labels.newWorkbook
    const sessionId = sessions.list.getSnapshot().current
    const source = selectedNativeSessionRow()
    let state = sessionId === undefined
      ? undefined
      : workbookStates.find(state => state.sessionId === sessionId)
    state ??= source === undefined
      ? undefined
      : workbookStates.find(state => state.source === source)
    state ??= workbookStates.find(state =>
      state.key === activeWorkbookKey
        && (state.source === undefined || state.source.isConnected === false))
    if (state === undefined) {
      state = createBlankWorkbook()
    }
    state.blank = false
    state.title = title
    if (sessionId !== undefined) state.sessionId = sessionId
    if (source !== undefined) state.source = source
    activeWorkbookKey = state.key
    if (state.key === pendingWorkbookKey) {
      pendingWorkbookKey = ''
      pendingWorkbookReady = false
    }
    renderWorkbookTabs()
  }
  controls.newSession.addEventListener('click', () => {
    const state = createBlankWorkbook()
    pendingWorkbookKey = state.key
    pendingWorkbookReady = document.querySelector<HTMLElement>('#root [data-phase]')?.dataset.phase === 'hero'
    renderWorkbookTabs()
    clickNativeButton([], ['新建会话', 'New session'])
  })
  addWorkbook.addEventListener('click', () => { controls.newSession.click() })
  const onOutsideChoicePointer = (event: PointerEvent): void => {
    const target = event.target instanceof Node ? event.target : null
    if (target !== null && (choiceMenu?.contains(target) === true || choiceAnchor?.contains(target) === true)) return
    closeChoiceMenu()
  }
  function closeChoiceMenu(restoreFocus = false): void {
    choiceGeneration += 1
    document.removeEventListener('pointerdown', onOutsideChoicePointer, true)
    choiceMenu?.remove()
    choiceMenu = null
    choiceAnchor?.setAttribute('aria-expanded', 'false')
    if (restoreFocus) choiceAnchor?.focus()
    choiceAnchor = null
  }
  const toggleChoiceMenu = (kind: ChoiceKind, anchor: HTMLButtonElement): void => {
    if (choiceAnchor === anchor) {
      closeChoiceMenu(true)
      return
    }
    closeChoiceMenu()
    const generation = ++choiceGeneration
    choiceAnchor = anchor
    anchor.setAttribute('aria-expanded', 'true')
    const loadChoices = kind === 'workspace' || kind === 'preset'
      ? heroChoices(kind)
      : kind === 'permission' ? permissionChoices() : modelChoices(kind)
    void loadChoices.then((choices) => {
      if (generation !== choiceGeneration) return
      const labels = labelsFor(locale.getLocale())
      choiceMenu = createChoiceMenu(kind, anchor, labels, choices, currentChoice(kind), (choice) => {
        closeChoiceMenu(true)
        const applied = kind === 'workspace' || kind === 'preset'
          ? applyHeroChoice(kind, choice)
          : kind === 'permission' ? applyPermissionChoice(choice) : applyModelChoice(kind, choice)
        void applied.then(scheduleShellSync)
      }, closeChoiceMenu)
      body.append(choiceMenu)
      document.addEventListener('pointerdown', onOutsideChoicePointer, true)
    })
  }
  for (const kind of ['workspace', 'preset', 'permission', 'model', 'thinking'] as const) {
    const control = controls[kind]
    control.addEventListener('click', () => { toggleChoiceMenu(kind, control) })
  }
  controls.quickNewSession.addEventListener('click', () => { controls.newSession.click() })
  const toggleSidebar = (): void => { layout.toggleSidebar() }
  controls.quickSidebar.addEventListener('click', toggleSidebar)
  controls.sidebar.addEventListener('click', toggleSidebar)
  // Proxies for native view tabs and global panels are kept per index, so a
  // selection change updates the pressed state in place and keeps focus.
  const viewProxies: HTMLButtonElement[] = []
  const panelProxies: HTMLButtonElement[] = []
  const nativeViewTabs = (): HTMLButtonElement[] =>
    [...activeSessionHeader()?.querySelectorAll<HTMLButtonElement>("[role='tablist'] [role='tab']") ?? []]
  const proxyAt = (
    proxies: HTMLButtonElement[],
    index: number,
    action: string,
    source: () => HTMLButtonElement | undefined,
  ): HTMLButtonElement => {
    let proxy = proxies[index]
    if (proxy === undefined) {
      proxy = makeControl('toolCell', action)
      proxy.addEventListener('click', () => { source()?.click() })
      proxies[index] = proxy
    }
    return proxy
  }
  const setChoiceCopy = (control: HTMLButtonElement, name: string, value: string): void => {
    if (control.dataset.choiceName === name && control.dataset.choiceValue === value) return
    control.dataset.choiceName = name
    control.dataset.choiceValue = value
    const nameCell = makeCell('choiceName', name)
    const valueCell = makeCell('choiceValue', value)
    control.replaceChildren(nameCell, valueCell)
    control.setAttribute('aria-label', `${name}: ${value}`)
    control.title = `${name}: ${value}`
  }
  const setCopy = (control: HTMLButtonElement, text: string, label = text): void => {
    if (control.textContent !== text) control.textContent = text
    if (control.getAttribute('aria-label') !== label) control.setAttribute('aria-label', label)
    if (control.title !== label) control.title = label
  }
  const syncCopy = (): void => {
    const labels = labelsFor(locale.getLocale())
    const sidebarLabel = sidebarOpen ? labels.sidebarHide : labels.sidebarShow
    sidebarControl.textContent = sidebarOpen ? '<' : '>'
    sidebarControl.title = sidebarLabel
    sidebarControl.setAttribute('aria-label', sidebarLabel)
    controls.ribbonTabs.get('file')!.textContent = labels.file
    controls.ribbonTabs.get('home')!.textContent = labels.home
    controls.ribbonTabs.get('view')!.textContent = labels.view
    controls.quickNewSession.parentElement?.setAttribute('aria-label', labels.quickAccess)
    setCopy(controls.quickNewSession, `+ ${labels.newSession}`, labels.newSession)
    setCopy(controls.quickSidebar, labels.sidebar, sidebarLabel)
    setCopy(controls.newSession, labels.newSession)
    setCopy(controls.newWorkspace, labels.newWorkspace)
    setCopy(controls.settings, labels.settings)
    setCopy(controls.sidebar, labels.sidebar, sidebarLabel)
    setCopy(controls.rightbar, labels.rightbar)
    for (const control of [controls.quickSidebar, controls.sidebar]) {
      control.setAttribute('aria-pressed', String(sidebarOpen))
    }
    ready.textContent = labels.ready
    addins.title.textContent = labels.addins
    addins.close.setAttribute('aria-label', labels.closeAddins)
    addins.close.title = labels.closeAddins
    addWorkbook.textContent = labels.addWorkbook
    addWorkbook.setAttribute('aria-label', labels.addWorkbook)
    syncWorkbookTabs()
  }
  const syncShell = (): void => {
    const currentSessionId = sessions.list.getSnapshot().current
    if (currentSessionId !== selectionSessionId) {
      selectionSessionId = currentSessionId
      worksheet.clear()
    }
    const shell = findShellParts()
    if (shell === undefined) return
    const { frame, sidebar } = shell
    sidebarOpen = !frame.hasAttribute('data-sidebar-collapsed')
    const offset = sidebarOpen ? sidebarTargetWidth(frame, sidebar) : 0
    const sidebarState = sidebarOpen ? 'open' : 'closed'
    if (body.dataset.deepcelSidebar !== sidebarState) body.dataset.deepcelSidebar = sidebarState
    const offsetValue = `${offset}px`
    if (body.style.getPropertyValue('--deepcel-sidebar-offset') !== offsetValue) {
      body.style.setProperty('--deepcel-sidebar-offset', offsetValue)
    }
    sidebarControl.setAttribute('aria-pressed', String(sidebarOpen))
    syncCopy()
  }
  const toolGroup = (label: string, items: readonly HTMLElement[]): HTMLElement => {
    const group = document.createElement('div')
    group.className = cls('toolGroup')
    group.setAttribute('role', 'group')
    group.setAttribute('aria-label', label)
    const caption = makeCell('toolGroupLabel', label)
    caption.setAttribute('aria-hidden', 'true')
    group.append(...items, caption)
    return group
  }
  const syncRibbon = (): void => {
    controls.settings.setAttribute('aria-expanded', String(nativeSettingsTrigger()?.getAttribute('aria-expanded') === 'true'))
    const header = activeSessionHeader()
    const labels = labelsFor(locale.getLocale())
    for (const [id, tab] of controls.ribbonTabs) {
      tab.toggleAttribute('data-active', id === activeRibbon)
      tab.setAttribute('aria-selected', String(id === activeRibbon))
    }
    const heroChoices = nativeHeroChoiceTriggers()
    const permissionTrigger = nativePermissionTrigger()
    const modelTrigger = nativeModelTrigger()
    const models = modelLabels()
    setChoiceCopy(controls.workspace, labels.workspace, heroChoices.workspace?.textContent?.trim() || '-')
    controls.workspace.disabled = heroChoices.workspace === undefined || heroChoices.workspace.disabled
    setChoiceCopy(controls.preset, labels.preset, heroChoices.preset?.textContent?.trim() || '-')
    controls.preset.disabled = heroChoices.preset === undefined || heroChoices.preset.disabled
    setChoiceCopy(controls.permission, labels.permission, permissionLabel(permissionTrigger) || '-')
    controls.permission.disabled = permissionTrigger === undefined || permissionTrigger.disabled
    setChoiceCopy(controls.model, labels.model, models.model || '-')
    controls.model.disabled = modelTrigger?.disabled ?? true
    setChoiceCopy(controls.thinking, labels.thinking, models.thinking || '-')
    controls.thinking.disabled = modelTrigger?.disabled ?? true
    controls.rightbar.disabled = nativeRightbarToggle() === undefined
    controls.rightbar.setAttribute('aria-pressed', String(rightbarOpen()))

    const desired: (readonly [string, readonly HTMLElement[]])[] = []
    if (activeRibbon === 'file') {
      const panels = nativePanelButtons().map((source, index) => {
        const proxy = proxyAt(panelProxies, index, `panel-${index}`, () => nativePanelButtons()[index])
        setCopy(proxy, source.textContent?.trim() || source.getAttribute('aria-label') || `Panel ${index + 1}`)
        proxy.setAttribute('aria-pressed', String(source.getAttribute('aria-current') === 'page'))
        return proxy
      })
      desired.push([labels.groupNew, [controls.newSession, controls.newWorkspace]])
      desired.push([labels.groupOptions, [controls.settings, ...panels]])
    } else if (activeRibbon === 'home') {
      const target = heroChoices.workspace !== undefined || heroChoices.preset !== undefined
        ? [controls.workspace, controls.preset]
        : []
      const run = [controls.model, ...(models.thinking === '' ? [] : [controls.thinking]), controls.permission]
      desired.push([labels.groupTarget, target], [labels.groupRun, run])
    } else {
      const views = (header === null ? [] : nativeViewTabs()).map((source, index) => {
        const proxy = proxyAt(viewProxies, index, `view-${index}`, () => nativeViewTabs()[index])
        setCopy(proxy, index === 0 ? labels.chat : source.textContent?.trim() || `View ${index + 1}`)
        proxy.setAttribute('role', 'tab')
        proxy.setAttribute('aria-selected', source.getAttribute('aria-selected') ?? 'false')
        proxy.disabled = source.disabled
        return proxy
      })
      desired.push([labels.groupSheets, views], [labels.groupWindow, [controls.sidebar, controls.rightbar]])
    }
    const groups = desired.filter(([, items]) => items.length > 0)
    const toolsSignature = groups
      .map(([label, items]) => `${label}:${items.map(item => item.dataset.skinControl ?? '').join(',')}`)
      .join('|')
    if (controls.tools.dataset.ribbonSignature !== toolsSignature) {
      if (choiceAnchor !== null && !groups.some(([, items]) => items.includes(choiceAnchor!))) closeChoiceMenu()
      controls.tools.replaceChildren(...groups.map(([label, items]) => toolGroup(label, items)))
      controls.tools.dataset.ribbonSignature = toolsSignature
    }
    syncWorkbookTabs()

    const projected = conversationHeader()
    for (const source of document.querySelectorAll<HTMLElement>('[data-deepcel-header-source]')) {
      if (source !== projected) delete source.dataset.deepcelHeaderSource
    }
    if (projected !== null) projected.dataset.deepcelHeaderSource = ''
    const title = header === null ? 'DSH Workbook' : currentSessionTitle(header) || 'DSH Workbook'
    if (controls.titleCell.textContent !== title) controls.titleCell.textContent = title
  }
  const resizeFormulaInput = (): void => {
    body.style.setProperty('--deepcel-formula-height', `${FORMULA_HEIGHT}px`)
    body.style.setProperty('--deepcel-ribbon-height', `${RIBBON_HEIGHT}px`)
    const contentHeight = formulaInput === null
      ? FORMULA_HEIGHT
      : Math.max(FORMULA_HEIGHT, formulaInput.scrollHeight)
    const lines = Math.max(1, Math.ceil((contentHeight - 10) / FORMULA_LINE_HEIGHT))
    const nextHeight = Math.min(
      FORMULA_HEIGHT + (FORMULA_MAX_LINES - 1) * FORMULA_LINE_HEIGHT,
      10 + lines * FORMULA_LINE_HEIGHT,
    )
    const attachmentHeight = activeComposer()?.querySelector("[data-slot='conversation.input.attachments'] > [class*='rail']") === null ? 0 : 72
    const totalHeight = nextHeight + (formulaInput === null ? 0 : attachmentHeight)
    body.style.setProperty('--deepcel-editor-height', `${nextHeight}px`)
    body.style.setProperty('--deepcel-formula-height', `${totalHeight}px`)
    body.style.setProperty('--deepcel-ribbon-height', `${RIBBON_HEIGHT + totalHeight - FORMULA_HEIGHT}px`)
    formulaInput?.toggleAttribute('data-deepcel-formula-overflow', contentHeight > nextHeight)
    if (formulaHeight === totalHeight) return
    formulaHeight = totalHeight
    fillRowCoordinates(rows)
    worksheet.resize()
  }
  const syncFormulaInput = (): void => {
    const next = activeComposer()?.querySelector<HTMLElement>('[data-composer-input]') ?? null
    const nextOwner = next?.closest<HTMLElement>('[data-composer-seat]') ?? null
    for (const input of document.querySelectorAll<HTMLElement>('[data-deepcel-formula-input]')) {
      if (input !== next) delete input.dataset.deepcelFormulaInput
    }
    for (const owner of document.querySelectorAll<HTMLElement>('[data-deepcel-formula-owner]')) {
      if (owner !== nextOwner) delete owner.dataset.deepcelFormulaOwner
    }
    if (next !== formulaInput) {
      formulaInput?.removeEventListener('input', resizeFormulaInput)
      formulaInput = next
      formulaInput?.addEventListener('input', resizeFormulaInput)
    }
    if (next !== null) next.dataset.deepcelFormulaInput = ''
    if (nextOwner !== null) nextOwner.dataset.deepcelFormulaOwner = ''
    resizeFormulaInput()
  }
  const onRibbonChange = (event: Event): void => {
    if (!(event instanceof CustomEvent) || typeof event.detail !== 'string') return
    if (!RIBBON_TABS.some(tab => tab.id === event.detail)) return
    activeRibbon = event.detail as RibbonTabId
    syncRibbon()
  }
  workbook.addEventListener('deepcel-ribbon-change', onRibbonChange)
  const closeAddins = (): void => {
    if (layout.selectPanel !== undefined) layout.selectPanel(null)
    else {
      const current = sessions.list.getSnapshot().current
      if (current !== undefined) sessions.open(current)
    }
  }
  addins.close.addEventListener('click', closeAddins)
  const syncAddins = (): void => {
    const open = nativeAddinsPanel() !== null
    if (open !== body.hasAttribute('data-deepcel-addins')) body.toggleAttribute('data-deepcel-addins', open)
    if (addins.caption.hidden === open) addins.caption.hidden = !open
  }
  // Escape closes the window only when nothing inside it (a dialog, a menu or
  // a gallery) is open and no field already used the key.
  const onAddinsKeydown = (event: KeyboardEvent): void => {
    if (event.key !== 'Escape' || event.defaultPrevented || !body.hasAttribute('data-deepcel-addins')) return
    if (document.querySelector("[aria-modal='true'], [role='menu'], [role='listbox']") !== null) return
    closeAddins()
  }
  document.addEventListener('keydown', onAddinsKeydown)
  let shellFrame: number | undefined
  const scheduleShellSync = (): void => {
    if (shellFrame !== undefined) cancelAnimationFrame(shellFrame)
    shellFrame = requestAnimationFrame(() => {
      shellFrame = undefined
      concealNativeEntrypoints()
      syncShell()
      syncRibbon()
      syncFormulaInput()
      syncAddins()
    })
  }
  const syncCoordinates = (): void => {
    fillColumnCoordinates(columns)
    fillRowCoordinates(rows)
    worksheet.resize()
    scheduleShellSync()
  }
  const syncLocale = (): void => {
    language.textContent = localeStatus(locale.getLocale())
    syncCopy()
    syncRibbon()
  }
  window.addEventListener('resize', syncCoordinates)
  const shellObserver = new MutationObserver((records) => {
    const changed = records.some((record) => {
      const target = record.target instanceof HTMLElement ? record.target : record.target.parentElement
      if (target?.closest('[data-skin-chrome], [data-skin-grid], [data-skin-selection]') !== null) return false
      if (record.type === 'childList') return true
      if (!(record.target instanceof HTMLElement)) return false
      if (record.attributeName === 'data-sidebar-collapsed') return true
      if (record.attributeName === 'aria-selected'
        || record.attributeName === 'aria-expanded'
        || record.attributeName === 'data-phase') return true
      return record.attributeName === 'style'
        && record.target === findShellParts()?.frame
    })
    if (changed) {
      scheduleShellSync()
    }
  })
  shellObserver.observe(document.body, { attributes: true, childList: true, subtree: true })
  const unsubscribeLocale = locale.subscribe(syncLocale)
  body.append(worksheet.grid, worksheet.selection, workbook, rows, status, addins.caption)
  syncLocale()
  scheduleShellSync()
  document.title = SKIN_TITLE

  ctx.effect(() => () => {
    window.removeEventListener('resize', syncCoordinates)
    document.removeEventListener('keydown', onAddinsKeydown)
    addins.caption.remove()
    body.removeAttribute('data-deepcel-addins')
    workbook.removeEventListener('deepcel-ribbon-change', onRibbonChange)
    shellObserver.disconnect()
    if (shellFrame !== undefined) cancelAnimationFrame(shellFrame)
    unsubscribeLocale()
    for (const button of document.querySelectorAll<HTMLElement>('[data-deepcel-native-proxy]')) {
      delete button.dataset.deepcelNativeProxy
    }
    for (const composer of document.querySelectorAll<HTMLElement>('[data-deepcel-merged-input]')) {
      delete composer.dataset.deepcelMergedInput
    }
    for (const header of document.querySelectorAll<HTMLElement>('[data-deepcel-header-source]')) {
      delete header.dataset.deepcelHeaderSource
    }
    for (const input of document.querySelectorAll<HTMLElement>('[data-deepcel-formula-input]')) {
      delete input.dataset.deepcelFormulaInput
      delete input.dataset.deepcelFormulaOverflow
    }
    for (const owner of document.querySelectorAll<HTMLElement>('[data-deepcel-formula-owner]')) {
      delete owner.dataset.deepcelFormulaOwner
    }
    for (const source of document.querySelectorAll<HTMLElement>('[data-deepcel-hero-choice-source]')) {
      delete source.dataset.deepcelHeroChoiceSource
    }
    formulaInput?.removeEventListener('input', resizeFormulaInput)
    closeChoiceMenu()
    body.removeAttribute('data-dsh-deepcel')
    delete body.dataset.deepcelSidebar
    delete body.dataset.deepcelModelProbing
    body.style.removeProperty('--deepcel-sidebar-offset')
    body.style.removeProperty('--deepcel-formula-height')
    body.style.removeProperty('--deepcel-editor-height')
    body.style.removeProperty('--deepcel-ribbon-height')
    worksheet.dispose()
    workbook.remove()
    rows.remove()
    status.remove()
    if (document.title === SKIN_TITLE) document.title = originalTitle
  }, 'ui-skin-deepcel: workbook chrome')
}
