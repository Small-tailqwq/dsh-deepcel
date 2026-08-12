// @vitest-environment jsdom
/** Deepcel skin apply/dispose contract and workbook chrome tests. */
import { afterEach, describe, expect, it } from 'vitest'
import { Context, type Fiber } from 'cordis'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { apply } from '../src/client/index.ts'

let fiber: Fiber | undefined

interface TestLocale {
  active: string
  listeners: Set<() => void>
  getLocale(): { active: string, locales: readonly { id: string, label: string }[] }
  subscribe(listener: () => void): () => void
}

interface TestLayout {
  toggles: number
  toggleSidebar(): void
}

interface TestSessions {
  current?: string
  opens: string[]
  list: { getSnapshot(): { current?: string } }
  open(id: string): void
}

function makeLocale(): TestLocale {
  return {
    active: 'en',
    listeners: new Set(),
    getLocale() {
      return { active: this.active, locales: [{ id: 'zh', label: '中文' }, { id: 'en', label: 'English' }] }
    },
    subscribe(listener) {
      this.listeners.add(listener)
      return () => { this.listeners.delete(listener) }
    },
  }
}

function makeLayout(): TestLayout {
  return { toggles: 0, toggleSidebar() { this.toggles += 1 } }
}

function makeSessions(current?: string): TestSessions {
  const sessions: TestSessions = {
    current,
    opens: [],
    list: { getSnapshot: () => ({ current: sessions.current }) },
    open(id) {
      this.opens.push(id)
      this.current = id
    },
  }
  return sessions
}

async function mount(
  locale = makeLocale(),
  layout = makeLayout(),
  sessions = makeSessions(),
): Promise<Fiber> {
  const ctx = new Context() as Context & { locale: TestLocale, layout: TestLayout, sessions: TestSessions }
  ctx.provide('locale', locale)
  ctx.provide('layout', layout)
  ctx.provide('sessions', sessions)
  const mounted = ctx.plugin({ apply })
  await mounted.await()
  return mounted
}

afterEach(async () => {
  await fiber?.dispose()
  fiber = undefined
  document.body.innerHTML = ''
  document.title = ''
})

describe('Deepcel skin apply', () => {
  it('sets and retracts the body scope', async () => {
    fiber = await mount()
    expect(document.body.hasAttribute('data-dsh-deepcel')).toBe(true)
    await fiber.dispose()
    expect(document.body.hasAttribute('data-dsh-deepcel')).toBe(false)
  })

  it('renders workbook text chrome and retracts every node', async () => {
    fiber = await mount()
    expect(document.body.querySelectorAll('[data-skin-chrome]')).toHaveLength(3)
    expect(document.querySelector('[data-skin-control="ribbon-file"]')?.hasAttribute('data-active')).toBe(true)
    expect(document.querySelector('[data-skin-control="ribbon-home"]')?.textContent).toBe('Conversation')
    expect(document.querySelector('[data-skin-control="ribbon-home"]')?.hasAttribute('hidden')).toBe(true)
    expect(document.querySelector('[data-skin-control="ribbon-manage"]')?.textContent).toBe('Manage')
    expect(document.querySelector('[data-skin-control="sidebar"]')?.textContent).toBe('>')
    expect(document.querySelector('[data-skin-control="sidebar"]')?.closest('[data-skin-chrome]')?.getAttribute('data-skin-chrome')).toBe('status')
    expect(document.querySelector('[data-skin-chrome="workbook"]')?.textContent).not.toContain('=AGENT(')
    expect(document.body.textContent).toContain('New workbook')
    expect(document.querySelector('[data-skin-control="new-workbook"]')?.textContent).toBe('+ Workbook')
    const columnRow = document.querySelector('[data-skin-chrome="workbook"]')?.lastElementChild
    expect([...columnRow?.children ?? []].slice(0, 6).map(cell => cell.textContent))
      .toEqual(['', 'A', 'B', 'C', 'D', 'E'])
    expect(document.querySelector('[data-skin-chrome="rows"]')?.children.item(1)?.textContent).toBe('1')
    expect(document.querySelector('[data-skin-grid] [data-cell="A1"]')).not.toBeNull()
    await fiber.dispose()
    expect(document.body.querySelectorAll('[data-skin-chrome]')).toHaveLength(0)
  })

  it('selects real worksheet cells and exposes the active address', async () => {
    const root = document.createElement('div')
    root.id = 'root'
    const phase = document.createElement('div')
    phase.dataset.phase = 'hero'
    root.append(phase)
    document.body.append(root)
    fiber = await mount()

    phase.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: 100, clientY: 200 }))

    expect(document.querySelector('[data-cell-name]')?.textContent).toBe('B3')
    expect(document.querySelector('[data-skin-selection]')?.hasAttribute('data-active')).toBe(true)
  })

  it('clears the worksheet selection when the active session changes', async () => {
    const sessions = makeSessions('session-alpha')
    const root = document.createElement('div')
    root.id = 'root'
    const phase = document.createElement('div')
    phase.dataset.phase = 'hero'
    root.append(phase)
    document.body.append(root)
    fiber = await mount(makeLocale(), makeLayout(), sessions)

    phase.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: 100, clientY: 200 }))
    expect(document.querySelector('[data-skin-selection]')?.hasAttribute('data-active')).toBe(true)

    sessions.current = 'session-beta'
    phase.dataset.phase = 'active'
    await new Promise(resolve => { requestAnimationFrame(() => { resolve(undefined) }) })

    expect(document.querySelector('[data-skin-selection]')?.hasAttribute('data-active')).toBe(false)
    expect(document.querySelector('[data-cell-name]')?.textContent).toBe('B4')
  })

  it('selects the new-session title as one merged worksheet range', async () => {
    const root = document.createElement('div')
    root.id = 'root'
    const phase = document.createElement('div')
    phase.dataset.phase = 'hero'
    const composerStack = document.createElement('div')
    composerStack.className = 'bJ7e2_composerStack'
    const heroRoot = document.createElement('div')
    heroRoot.className = 'LQuP4a_root'
    const heroStack = document.createElement('div')
    heroStack.className = 'LQuP4a_stack'
    const headline = document.createElement('div')
    headline.className = 'LQuP4a_headline'
    const title = document.createElement('span')
    title.className = 'LQuP4a_headlineText'
    const titleText = document.createElement('strong')
    titleText.textContent = '探索未至之境'
    const preview = document.createElement('span')
    preview.className = 'LQuP4a_previewBadge'
    preview.textContent = '预览版'
    headline.getBoundingClientRect = () => ({
      x: 100,
      y: 136,
      left: 100,
      right: 520,
      top: 136,
      bottom: 160,
      width: 420,
      height: 24,
      toJSON: () => ({}),
    })
    title.append(titleText)
    headline.append(title, preview)
    heroStack.append(headline)
    heroRoot.append(heroStack)
    composerStack.append(heroRoot)
    phase.append(composerStack)
    root.append(phase)
    document.body.append(root)
    fiber = await mount()

    headline.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: 120, clientY: 145 }))

    const selection = document.querySelector<HTMLElement>('[data-skin-selection]')
    expect(document.querySelector('[data-cell-name]')?.textContent).toBe('B1')
    expect(headline.dataset.deepcelSelectedRange).toBe('formula')
    expect(selection?.style.getPropertyValue('--deepcel-selection-width')).toBe('60px')

    titleText.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: 200, clientY: 145 }))

    expect(document.querySelector('[data-cell-name]')?.textContent).toBe('C1:G1')
    expect(selection?.hasAttribute('data-overlay')).toBe(true)
    expect(title.dataset.deepcelSelectedRange).toBe('title')
    expect(headline.hasAttribute('data-deepcel-selected-range')).toBe(false)
    expect(selection?.style.getPropertyValue('--deepcel-selection-width')).toBe('300px')
    expect(selection?.style.getPropertyValue('--deepcel-selection-height')).toBe('24px')

    preview.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: 480, clientY: 145 }))

    expect(document.querySelector('[data-cell-name]')?.textContent).toBe('H1')
    expect(preview.dataset.deepcelSelectedRange).toBe('preview')
    expect(title.hasAttribute('data-deepcel-selected-range')).toBe(false)
    expect(selection?.style.getPropertyValue('--deepcel-selection-width')).toBe('60px')

    phase.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: 500, clientY: 200 }))
    expect(preview.hasAttribute('data-deepcel-selected-range')).toBe(false)
  })

  it('keeps nested permission menu labels visible inside the composer', () => {
    const stylesheet = readFileSync(resolve(process.cwd(), 'src/client/deepcel.module.css'), 'utf8')
    expect(stylesheet).toContain("[class*='modes'] button:not([role='menuitem'])::after")
    expect(stylesheet).toContain("[role='menu'] [role='menuitem'] > span")
    expect(stylesheet).toContain("[role='menu'] [role='menuitem']::after")
    expect(stylesheet).toMatch(/\.worksheetSelection \{[\s\S]*?z-index: 1;/)
    const selectionRule = stylesheet.match(/\.worksheetSelection \{([\s\S]*?)\n\}/)?.[1] ?? ''
    expect(selectionRule).toContain('var(--deepcel-row-offset-y, 0px)')
    expect(selectionRule).not.toContain('transform: translateY')
    expect(stylesheet).toMatch(/> \[class\*='_card'\]\[style\*='left'\] \{\s*z-index: 1000001 !important;/)
    expect(stylesheet).toMatch(/\[class\*='composerStack'\][\s\S]*?\) \{\s*position: relative;\s*z-index: 2;/)
    expect(stylesheet).toMatch(/\[data-phase='active'\] \[data-deepcel-workbook-flow\] \[data-deepcel-composer-range\] \{[\s\S]*?position: relative !important;[\s\S]*?grid-column: 2 \/ span 12;/)
    expect(stylesheet).toMatch(/\[data-phase='active'\] \[data-conversation-scroll\]\[data-deepcel-workbook-flow\] \{[\s\S]*?display: grid !important;[\s\S]*?grid-auto-rows: var\(--deepcel-row-height\);/)
    expect(stylesheet).toContain('[data-deepcel-flow-container]')
    expect(stylesheet).toMatch(/\[data-phase='active'\] \[data-deepcel-workbook-flow\] \[data-composer-card\] \{[\s\S]*?display: grid !important;[\s\S]*?grid-template-rows:/)
    expect(stylesheet).toContain('[data-deepcel-single-line]')
    expect(stylesheet).toMatch(/\[data-deepcel-content-cell\] \{\s*position: relative;\s*z-index: 2;/)
    expect(stylesheet).toContain("[data-deepcel-composer-range] :has(> [data-composer-card])")
    expect(stylesheet).not.toContain("[data-chat-flow-kind='assistant-step'] > * > * > div")
    expect(stylesheet).toContain("content: 'COMMENT';")
    expect(stylesheet).toContain('content-visibility: auto;')
    expect(stylesheet).toMatch(/\[data-chat-flow-kind='turn-tail'\]\[data-deepcel-message-range\] \{[\s\S]*?content-visibility: visible;/)
    expect(stylesheet).toMatch(/\[data-time-hover-root\] > \[class\*='actions'\]\[data-deepcel-content-cell\] \{[\s\S]*?overflow: visible;/)
    expect(stylesheet).toMatch(/\[data-time-hover-root\] > \[class\*='actions'\] > button\[aria-label\] \{[\s\S]*?min-width: max-content;/)
    expect(stylesheet).toMatch(/\[data-time-hover-root\] \[role='tooltip'\] \{[\s\S]*?color: #fff !important;/)
    expect(stylesheet).toMatch(/\[data-sample='bash'\]\[data-variant='bash'\]\[data-deepcel-content-cell\] \{[\s\S]*?display: flex;/)
    expect(stylesheet).toMatch(/\[data-sample='bash'\]\[data-variant='bash'\] \+ \* > \[data-terminal\]\[data-deepcel-content-cell\] \{[\s\S]*?padding: 0 !important;/)
    expect(stylesheet).toMatch(/\[class\*='_panel'\]\[role='dialog'\] \[class\*='_header'\] button:has\(> svg\):has\(> span\) > svg \{[\s\S]*?display: block !important;[\s\S]*?opacity: 1 !important;/)
    expect(stylesheet).toMatch(/:global\(#root\) \[data-phase\] textarea\[data-deepcel-formula-input\] \{[\s\S]*?position: fixed !important;[\s\S]*?inset: 89px 0 auto 106px !important;/)
    expect(stylesheet).toMatch(/\.workbookChrome \{[\s\S]*?pointer-events: none;/)
    expect(stylesheet).toMatch(/\.formulaRow \{[\s\S]*?pointer-events: none;/)
    expect(stylesheet).toContain('height: var(--deepcel-formula-height) !important;')
    expect(stylesheet).toMatch(/\[data-deepcel-formula-owner\] \{[\s\S]*?z-index: 1000002 !important;[\s\S]*?pointer-events: none !important;/)
    expect(stylesheet).toContain('-webkit-text-fill-color: var(--deepcel-ink) !important;')
    expect(stylesheet).toContain('pointer-events: auto !important;')
    expect(stylesheet).toMatch(/textarea\[data-deepcel-formula-input\] \{[\s\S]*?border-bottom: 1px solid var\(--deepcel-grid-strong\) !important;/)
    expect(stylesheet).not.toContain('body[data-dsh-deepcel] [data-composer-seat]')
    expect(stylesheet).not.toContain('body[data-dsh-deepcel] #root')
    expect(stylesheet).toContain('.choiceDialog')
    expect(stylesheet).toContain("[data-deepcel-model-probing] [role='menu']")
    expect(stylesheet).toMatch(/\[data-deepcel-hero-choice-source\] \{\s*display: none !important;/)
    expect(stylesheet).toMatch(/\.sheetTabCell:hover button\.workbookClose,[\s\S]*?opacity: 1;/)
    expect(stylesheet).toMatch(/tr\[data-trajectory-row-key\] > td:last-child \{[\s\S]*?background: var\(--deepcel-sheet\);/)
    expect(stylesheet).toMatch(
      /\[role='treeitem'\]\[aria-expanded\]:has\(\[class\*='folderActive'\]\)::after \{[\s\S]*?background: var\(--deepcel-bookmark\);[\s\S]*?clip-path:/,
    )
    expect(stylesheet).toMatch(
      /\[class\*='groupSection'\] > :is\([\s\S]*?width: calc\(100% - 20px\);[\s\S]*?margin-left: 20px;/,
    )
    expect(stylesheet).toContain("content: '├ ROW';")
    expect(stylesheet).toContain("content: '└ ROW';")
    expect(stylesheet).toMatch(/\[class\*='headlineText'\] \{[\s\S]*?background: var\(--deepcel-sheet\);[\s\S]*?user-select: text;/)
    expect(stylesheet).toMatch(
      /\[class\*='headline'\]:has\(> \[class\*='headlineText'\]\) \{[\s\S]*?height: 24px;[\s\S]*?line-height: 23px;/,
    )
  })

  it('projects the native session statistics into the workbook status bar', async () => {
    const inputRoot = document.createElement('div')
    const composer = document.createElement('div')
    composer.dataset.composerCard = ''
    const stats = document.createElement('div')
    stats.textContent = '1 turn | LLM 2s | Input 1K tok'
    inputRoot.append(composer, stats)
    document.body.append(inputRoot)

    fiber = await mount()
    await new Promise(resolve => { setTimeout(resolve, 40) })

    expect(stats.hasAttribute('data-deepcel-stats-source')).toBe(true)
    expect(document.querySelector('[data-statistics-status]')?.textContent)
      .toBe('1 turn | LLM 2s | Input 1K tok')
  })

  it('scrolls worksheet coordinates through negative rows and sizes messages to whole cells', async () => {
    const root = document.createElement('div')
    root.id = 'root'
    const phase = document.createElement('div')
    phase.dataset.phase = 'active'
    const scroll = document.createElement('div')
    scroll.dataset.conversationScroll = ''
    scroll.scrollTop = 240
    const flow = document.createElement('div')
    flow.dataset.chatFlow = ''
    const message = document.createElement('div')
    message.dataset.chatFlowKind = 'assistant-message'
    flow.append(message)
    scroll.append(flow)
    phase.append(scroll)
    root.append(phase)
    document.body.append(root)

    fiber = await mount()
    await new Promise(resolve => { setTimeout(resolve, 50) })
    scroll.scrollTop = 168
    scroll.dispatchEvent(new Event('scroll'))
    await new Promise(resolve => { requestAnimationFrame(() => { resolve(undefined) }) })

    expect(document.body.style.getPropertyValue('--deepcel-row-offset')).toBe('-3')
    expect(document.querySelector('[data-skin-chrome="rows"]')?.firstElementChild?.textContent).toBe('-3')
    expect(message.hasAttribute('data-deepcel-message-range')).toBe(true)
    expect(message.style.getPropertyValue('--deepcel-message-height')).toBe('24px')
  })

  it('keeps a blank-cell selection aligned during long worksheet scrolling', async () => {
    const root = document.createElement('div')
    root.id = 'root'
    const phase = document.createElement('div')
    phase.dataset.phase = 'active'
    const scroll = document.createElement('div')
    scroll.dataset.conversationScroll = ''
    scroll.scrollTop = 240
    phase.append(scroll)
    root.append(phase)
    document.body.append(root)

    fiber = await mount()
    await new Promise(resolve => { setTimeout(resolve, 50) })
    scroll.scrollTop = 485
    scroll.dispatchEvent(new Event('scroll'))
    scroll.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: 100, clientY: 200 }))

    const selection = document.querySelector<HTMLElement>('[data-skin-selection]')
    expect(document.body.style.getPropertyValue('--deepcel-row-offset')).toBe('10')
    expect(document.body.style.getPropertyValue('--deepcel-row-offset-y')).toBe('-240px')
    expect(document.body.style.getPropertyValue('--deepcel-scroll-y')).toBe('-5px')
    expect(document.querySelector('[data-cell-name]')?.textContent).toBe('B13')
    expect(selection?.style.getPropertyValue('--deepcel-selection-y')).toBe('288px')
    expect(selection?.hasAttribute('data-active')).toBe(true)

    scroll.scrollTop = 2240
    scroll.dispatchEvent(new Event('scroll'))
    expect(selection?.hasAttribute('data-active')).toBe(false)
  })

  it('maps assistant Markdown blocks onto separate worksheet cell ranges', async () => {
    const root = document.createElement('div')
    root.id = 'root'
    const phase = document.createElement('div')
    phase.dataset.phase = 'active'
    const scroll = document.createElement('div')
    scroll.dataset.conversationScroll = ''
    const view = document.createElement('div')
    const flow = document.createElement('div')
    flow.dataset.chatFlow = ''
    const message = document.createElement('div')
    message.dataset.chatFlowKind = 'assistant-message'
    const markdown = document.createElement('div')
    const paragraph = document.createElement('p')
    paragraph.textContent = 'First worksheet record'
    const list = document.createElement('ul')
    const item = document.createElement('li')
    item.textContent = 'Second worksheet record'
    list.append(item)
    const code = document.createElement('div')
    code.className = 'md-code-block'
    code.textContent = 'const cell = true'
    markdown.append(paragraph, list, code)
    message.append(markdown)
    flow.append(message)
    view.append(flow)
    const composerSeat = document.createElement('div')
    composerSeat.dataset.composerSeat = ''
    const composerCard = document.createElement('div')
    composerCard.dataset.composerCard = ''
    composerCard.textContent = 'Composer'
    composerSeat.append(composerCard)
    scroll.append(view, composerSeat)
    phase.append(scroll)
    root.append(phase)
    document.body.append(root)

    fiber = await mount()
    await new Promise(resolve => { setTimeout(resolve, 40) })

    expect(message.hasAttribute('data-deepcel-cellized')).toBe(true)
    expect([...message.querySelectorAll('[data-deepcel-content-cell]')])
      .toEqual([paragraph, item, code])
    expect(paragraph.style.getPropertyValue('--deepcel-content-cell-height')).toBe('24px')
    expect(paragraph.hasAttribute('data-deepcel-single-line')).toBe(true)
    expect(list.hasAttribute('data-deepcel-cell-container')).toBe(true)
    expect(view.hasAttribute('data-deepcel-flow-container')).toBe(true)
    expect(flow.hasAttribute('data-deepcel-flow-container')).toBe(true)
    expect(composerSeat.hasAttribute('data-deepcel-composer-range')).toBe(true)
    expect(composerSeat.style.getPropertyValue('--deepcel-composer-rows')).toBe('1')
  })

  it('places produced files and message actions on consecutive worksheet rows', async () => {
    const root = document.createElement('div')
    root.id = 'root'
    const phase = document.createElement('div')
    phase.dataset.phase = 'active'
    const scroll = document.createElement('div')
    scroll.dataset.conversationScroll = ''
    const flow = document.createElement('div')
    flow.dataset.chatFlow = ''
    const message = document.createElement('div')
    message.dataset.chatFlowKind = 'turn-tail'
    const tail = document.createElement('div')
    tail.dataset.timeHoverRoot = ''
    const produced = document.createElement('div')
    const label = document.createElement('span')
    label.textContent = 'Produced'
    const producedRow = document.createElement('div')
    producedRow.dataset.producedFilesRow = ''
    producedRow.textContent = 'cordis.patch.yml'
    produced.append(label, producedRow)
    const actions = document.createElement('div')
    actions.className = 'MessageIconActions_actions_hash'
    const copy = document.createElement('button')
    copy.setAttribute('aria-label', 'Copy')
    const branch = document.createElement('button')
    branch.setAttribute('aria-label', 'Branch here')
    actions.append(copy, branch)
    tail.append(produced, actions)
    message.append(tail)
    flow.append(message)
    scroll.append(flow)
    phase.append(scroll)
    root.append(phase)
    document.body.append(root)

    fiber = await mount()
    await new Promise(resolve => { setTimeout(resolve, 40) })

    expect(message.hasAttribute('data-deepcel-cellized')).toBe(true)
    expect(produced.hasAttribute('data-deepcel-content-cell')).toBe(true)
    expect(actions.hasAttribute('data-deepcel-content-cell')).toBe(true)
    expect(tail.hasAttribute('data-deepcel-cell-container')).toBe(true)
    expect([...message.querySelectorAll('[data-deepcel-content-cell]')]).toEqual([produced, actions])
  })

  it('places an expanded Bash or Pwsh card into consecutive worksheet rows', async () => {
    const root = document.createElement('div')
    root.id = 'root'
    const phase = document.createElement('div')
    phase.dataset.phase = 'active'
    const scroll = document.createElement('div')
    scroll.dataset.conversationScroll = ''
    const flow = document.createElement('div')
    flow.dataset.chatFlow = ''
    const message = document.createElement('div')
    message.dataset.chatFlowKind = 'tool-call'
    const card = document.createElement('div')
    const summary = document.createElement('div')
    summary.dataset.sample = 'bash'
    summary.dataset.variant = 'bash'
    summary.textContent = 'Pwsh · Search files'
    const body = document.createElement('div')
    const terminal = document.createElement('div')
    terminal.dataset.terminal = ''
    terminal.textContent = 'rg -n router'
    const inspect = document.createElement('button')
    inspect.textContent = 'Inspect'
    body.append(terminal, inspect)
    card.append(summary, body)
    message.append(card)
    flow.append(message)
    scroll.append(flow)
    phase.append(scroll)
    root.append(phase)
    document.body.append(root)

    fiber = await mount()
    await new Promise(resolve => { setTimeout(resolve, 40) })

    expect(message.hasAttribute('data-deepcel-cellized')).toBe(true)
    expect(summary.hasAttribute('data-deepcel-content-cell')).toBe(true)
    expect(terminal.hasAttribute('data-deepcel-content-cell')).toBe(true)
    expect(inspect.hasAttribute('data-deepcel-content-cell')).toBe(true)
    expect(card.hasAttribute('data-deepcel-cell-container')).toBe(true)
    expect(body.hasAttribute('data-deepcel-cell-container')).toBe(true)
    expect([...message.querySelectorAll('[data-deepcel-content-cell]')]).toEqual([summary, terminal, inspect])
  })

  it('retracts the chat worksheet grid for trajectory and timeline views', async () => {
    const root = document.createElement('div')
    root.id = 'root'
    const phase = document.createElement('div')
    phase.dataset.phase = 'active'
    const scroll = document.createElement('div')
    scroll.dataset.conversationScroll = ''
    const alternateView = document.createElement('div')
    alternateView.dataset.conversationComposerOverlay = ''
    alternateView.textContent = 'Trajectory'
    const composerSeat = document.createElement('div')
    composerSeat.dataset.composerSeat = ''
    scroll.append(alternateView, composerSeat)
    phase.append(scroll)
    root.append(phase)
    document.body.append(root)

    fiber = await mount()
    await new Promise(resolve => { setTimeout(resolve, 40) })

    expect(scroll.hasAttribute('data-deepcel-workbook-flow')).toBe(false)
    expect(composerSeat.hasAttribute('data-deepcel-composer-range')).toBe(false)

    const chatFlow = document.createElement('div')
    chatFlow.dataset.chatFlow = ''
    alternateView.replaceWith(chatFlow)
    await new Promise(resolve => { setTimeout(resolve, 40) })
    expect(scroll.hasAttribute('data-deepcel-workbook-flow')).toBe(true)
    expect(composerSeat.hasAttribute('data-deepcel-composer-range')).toBe(true)

    chatFlow.replaceWith(alternateView)
    await new Promise(resolve => { setTimeout(resolve, 40) })
    expect(scroll.hasAttribute('data-deepcel-workbook-flow')).toBe(false)
    expect(composerSeat.hasAttribute('data-deepcel-composer-range')).toBe(false)
  })

  it('keeps the status language synchronized with the locale preference', async () => {
    const locale = makeLocale()
    fiber = await mount(locale)
    const status = document.querySelector('[data-locale-status]')
    expect(status?.textContent).toBe('English (US)')
    locale.active = 'zh'
    for (const listener of locale.listeners) listener()
    expect(status?.textContent).toBe('中文')
    expect(document.querySelector('[data-skin-control="ribbon-file"]')?.textContent).toBe('文件')
    expect(document.querySelector('[data-skin-control="ribbon-manage"]')?.textContent).toBe('管理')
    expect(document.querySelector('[data-skin-control="new-workbook"]')?.textContent).toBe('+ 工作簿')
    expect(document.querySelector('[data-workbook-key][data-active] [role="tab"]')?.textContent).toBe('新建工作簿')
  })

  it('routes workbook controls through the native layout and UI entries', async () => {
    const layout = makeLayout()
    const nativeEntries = [
      { label: 'Collapse sidebar', clicks: 0 },
      { label: '新建会话', clicks: 0 },
      { label: '添加工作区', clicks: 0 },
      { label: '设置', clicks: 0 },
    ]
    for (const entry of nativeEntries) {
      const button = document.createElement('button')
      button.setAttribute('aria-label', entry.label)
      button.addEventListener('click', () => { entry.clicks += 1 })
      document.body.append(button)
    }
    fiber = await mount(makeLocale(), layout)
    await new Promise(resolve => { setTimeout(resolve, 30) })

    expect(document.querySelectorAll('[data-deepcel-native-proxy]')).toHaveLength(4)

    document.querySelector<HTMLButtonElement>('[data-skin-control="sidebar"]')?.click()
    document.querySelector<HTMLButtonElement>('[data-skin-control="new-session"]')?.click()
    document.querySelector<HTMLButtonElement>('[data-skin-control="new-workspace"]')?.click()
    document.querySelector<HTMLButtonElement>('[data-skin-control="settings"]')?.click()

    expect(layout.toggles).toBe(1)
    expect(nativeEntries.map(entry => entry.clicks)).toEqual([0, 1, 1, 1])

    await fiber.dispose()
    expect(document.querySelectorAll('[data-deepcel-native-proxy]')).toHaveLength(0)
  })

  it('drives multiple workbook tabs through native sessions without archiving them', async () => {
    const sessions = makeSessions('session-alpha')
    const root = document.createElement('div')
    root.id = 'root'
    const sessionRow = document.createElement('div')
    sessionRow.className = 'native_sessionRow_hash'
    sessionRow.setAttribute('role', 'treeitem')
    sessionRow.setAttribute('aria-selected', 'true')
    let sessionOpens = 0
    sessionRow.addEventListener('click', () => { sessionOpens += 1 })
    const phase = document.createElement('div')
    phase.dataset.phase = 'active'
    const header = document.createElement('header')
    const titleRow = document.createElement('div')
    const navigation = document.createElement('nav')
    const title = document.createElement('button')
    title.disabled = true
    title.textContent = 'Workbook Alpha'
    navigation.append(title)
    titleRow.append(navigation, document.createElement('div'))
    header.append(titleRow)
    phase.append(header)
    root.append(sessionRow, phase)
    const nativeNewSession = document.createElement('button')
    nativeNewSession.setAttribute('aria-label', 'New session')
    let newSessions = 0
    nativeNewSession.addEventListener('click', () => { newSessions += 1 })
    document.body.append(root, nativeNewSession)

    fiber = await mount(makeLocale(), makeLayout(), sessions)
    await new Promise(resolve => { setTimeout(resolve, 50) })

    expect(document.querySelector('[data-skin-control="ribbon-home"]')?.hasAttribute('hidden')).toBe(false)
    expect([...document.querySelectorAll('[data-workbook-key] [role="tab"]')].map(tab => tab.textContent))
      .toEqual(['Workbook Alpha'])

    document.querySelector<HTMLButtonElement>('[data-skin-control="new-workbook"]')?.click()
    await new Promise(resolve => { setTimeout(resolve, 50) })
    expect(newSessions).toBe(1)
    expect([...document.querySelectorAll('[data-workbook-key] [role="tab"]')].map(tab => tab.textContent))
      .toEqual(['Workbook Alpha', 'New workbook'])
    const activeTab = document.querySelector<HTMLElement>('[data-workbook-key][data-active]')
    expect(activeTab?.querySelector('[role="tab"]')?.textContent).toBe('New workbook')
    expect(activeTab?.querySelector('[data-skin-control^="close-"]')?.getAttribute('aria-label'))
      .toBe('Close workbook: New workbook')

    // Collapsing the sidebar unmounts its native session rows. Workbook
    // switching must use the stable sessions service rather than this node.
    sessionRow.remove()
    activeTab?.querySelector<HTMLButtonElement>('[data-skin-control^="close-"]')?.click()
    expect([...document.querySelectorAll('[data-workbook-key] [role="tab"]')].map(tab => tab.textContent))
      .toEqual(['Workbook Alpha'])
    expect(sessions.opens).toEqual(['session-alpha'])
    expect(sessionOpens).toBe(0)
  })

  it('projects the registered views into Home and lifts title, model, header actions, and native input', async () => {
    const root = document.createElement('div')
    root.id = 'root'
    const phase = document.createElement('div')
    phase.dataset.phase = 'active'
    const header = document.createElement('header')
    const titleRow = document.createElement('div')
    const navigation = document.createElement('nav')
    const title = document.createElement('button')
    title.disabled = true
    title.textContent = '你好'
    navigation.append(title)
    const actions = document.createElement('div')
    const mode = document.createElement('span')
    mode.textContent = '标准模式'
    const regenerate = document.createElement('button')
    regenerate.textContent = '重生成'
    let regenerations = 0
    regenerate.addEventListener('click', () => { regenerations += 1 })
    actions.append(mode, regenerate)
    titleRow.append(navigation, actions)
    const tabList = document.createElement('div')
    tabList.setAttribute('role', 'tablist')
    const viewClicks = [0, 0, 0]
    for (const [index, label] of ['Chat', '轨迹', 'Timeline'].entries()) {
      const tab = document.createElement('button')
      tab.setAttribute('role', 'tab')
      tab.setAttribute('aria-selected', String(index === 0))
      tab.textContent = label
      tab.addEventListener('click', () => { viewClicks[index] += 1 })
      tabList.append(tab)
    }
    header.append(titleRow, tabList)
    const composer = document.createElement('div')
    composer.dataset.composerCard = ''
    const textarea = document.createElement('textarea')
    let slashKeys = 0
    textarea.addEventListener('keydown', event => { if (event.key === '/') slashKeys += 1 })
    const modes = document.createElement('div')
    modes.className = 'native_modes_hash'
    const permission = document.createElement('button')
    permission.textContent = 'Full access'
    modes.append(permission)
    const trailing = document.createElement('div')
    trailing.className = 'native_trailing_hash'
    const model = document.createElement('button')
    model.setAttribute('aria-haspopup', 'menu')
    model.title = 'DeepSeek V4 · Max'
    const modelName = document.createElement('span')
    modelName.textContent = 'DeepSeek V4'
    const effort = document.createElement('span')
    effort.textContent = 'Max'
    model.append(modelName, effort)
    trailing.append(model)
    composer.append(textarea, modes, trailing)
    const composerSeat = document.createElement('div')
    composerSeat.dataset.composerSeat = ''
    composerSeat.append(composer)
    phase.append(header, composerSeat)
    root.append(phase)
    document.body.append(root)

    fiber = await mount()
    await new Promise(resolve => { setTimeout(resolve, 40) })

    expect(document.querySelector('[data-skin-control="ribbon-home"]')?.hasAttribute('data-active')).toBe(true)
    expect(document.querySelector('[data-skin-control="ribbon-home"]')?.hasAttribute('hidden')).toBe(false)
    expect(document.querySelector('[data-workbook-key][data-active] [role="tab"]')?.textContent).toBe('你好')
    expect([...document.querySelectorAll('[data-skin-chrome="workbook"] [role="tab"]')].map(tab => tab.textContent))
      .toEqual(['Chat', '轨迹', 'Timeline'])
    expect(header.hasAttribute('data-deepcel-header-source')).toBe(true)
    const projectedTitle = document.querySelector('[data-header-controls]')?.nextElementSibling
    expect(projectedTitle?.textContent).toBe('你好| 标准模式')
    expect(projectedTitle?.textContent).not.toContain('DeepSeek V4')
    expect(document.querySelector('[data-header-controls]')?.textContent).toBe('重生成')
    expect(document.querySelector('[data-header-controls]')?.parentElement?.children.item(2))
      .toBe(document.querySelector('[data-header-controls]'))

    document.querySelectorAll<HTMLButtonElement>('[data-skin-chrome="workbook"] [role="tab"]')[2]?.click()
    document.querySelector<HTMLButtonElement>('[data-skin-control="header-action-1"]')?.click()
    expect(viewClicks).toEqual([0, 0, 1])
    expect(regenerations).toBe(1)
    expect(textarea.hasAttribute('data-deepcel-formula-input')).toBe(true)
    expect(composerSeat.hasAttribute('data-deepcel-formula-owner')).toBe(true)
    textarea.dispatchEvent(new KeyboardEvent('keydown', { key: '/', bubbles: true }))
    expect(slashKeys).toBe(1)
    Object.defineProperty(textarea, 'scrollHeight', { configurable: true, value: 64 })
    textarea.dispatchEvent(new Event('input', { bubbles: true }))
    expect(document.body.style.getPropertyValue('--deepcel-formula-height')).toBe('64px')
    expect(document.body.style.getPropertyValue('--deepcel-ribbon-height')).toBe('172px')
    Object.defineProperty(textarea, 'scrollHeight', { configurable: true, value: 28 })
    textarea.dispatchEvent(new Event('input', { bubbles: true }))
    expect(document.body.style.getPropertyValue('--deepcel-formula-height')).toBe('28px')
    expect(document.querySelector('[data-skin-control="permission"]')).toBeNull()

    document.querySelector<HTMLButtonElement>('[data-skin-control="ribbon-manage"]')?.click()
    expect([...document.querySelectorAll('[data-skin-chrome="workbook"] [class*="toolRow"] > [class*="toolCell"]')].map(cell => cell.textContent))
      .toEqual(['Permission: Full access', 'Model: DeepSeek V4', 'Thinking: Max'])

    document.querySelector<HTMLButtonElement>('[data-skin-control="ribbon-file"]')?.click()
    expect([...document.querySelectorAll('[data-skin-chrome="workbook"] [class*="toolRow"] > [class*="toolCell"]')].map(cell => cell.textContent))
      .toEqual(['New workspace', 'New session', 'Settings'])
  })

  it('keeps the File settings control visible and toggles the native panel closed', async () => {
    const trigger = document.createElement('button')
    trigger.setAttribute('aria-haspopup', 'dialog')
    trigger.setAttribute('aria-expanded', 'false')
    trigger.textContent = 'Settings'
    let opens = 0
    let closes = 0
    trigger.addEventListener('click', () => {
      opens += 1
      trigger.setAttribute('aria-expanded', 'true')
      const overlay = document.createElement('div')
      const dialog = document.createElement('div')
      dialog.setAttribute('role', 'dialog')
      const header = document.createElement('div')
      header.className = 'native_header_hash'
      const close = document.createElement('button')
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      const hidden = document.createElement('span')
      hidden.textContent = 'Close'
      close.append(svg, hidden)
      close.addEventListener('click', () => {
        closes += 1
        trigger.setAttribute('aria-expanded', 'false')
        overlay.remove()
      })
      header.append(close)
      dialog.append(header)
      overlay.append(dialog)
      document.body.append(overlay)
    })
    document.body.append(trigger)

    fiber = await mount()
    await new Promise(resolve => { setTimeout(resolve, 30) })
    const proxy = document.querySelector<HTMLButtonElement>('[data-skin-control="settings"]')
    proxy?.click()
    await new Promise(resolve => { setTimeout(resolve, 30) })
    expect(proxy?.isConnected).toBe(true)
    expect(proxy?.getAttribute('aria-pressed')).toBe('true')
    expect(document.querySelector('[role="dialog"]')).not.toBeNull()

    proxy?.click()
    await new Promise(resolve => { setTimeout(resolve, 30) })
    expect(opens).toBe(1)
    expect(closes).toBe(1)
    expect(proxy?.isConnected).toBe(true)
    expect(proxy?.getAttribute('aria-pressed')).toBe('false')
    expect(document.querySelector('[role="dialog"]')).toBeNull()
  })

  it('moves new-session workspace and preset choices into the Manage ribbon', async () => {
    const root = document.createElement('div')
    root.id = 'root'
    const phase = document.createElement('div')
    phase.dataset.phase = 'hero'
    const heroRow = document.createElement('div')
    heroRow.className = 'native_heroWorkspaceRow_hash'
    const selections: string[] = []
    const makeHeroTrigger = (
      kind: 'workspace' | 'preset',
      current: string,
      values: readonly string[],
    ): HTMLButtonElement => {
      const trigger = document.createElement('button')
      trigger.setAttribute('aria-haspopup', 'menu')
      const currentLabel = document.createElement('span')
      currentLabel.className = kind === 'workspace' ? 'native_workspaceLabel_hash' : 'native_presetLabel_hash'
      currentLabel.textContent = current
      trigger.append(currentLabel)
      trigger.addEventListener('click', () => {
        const existing = document.querySelector(`[data-hero-menu="${kind}"]`)
        if (existing !== null) { existing.remove(); return }
        const menu = document.createElement('div')
        menu.dataset.heroMenu = kind
        menu.setAttribute('role', 'menu')
        for (const value of values) {
          const option = document.createElement('button')
          option.setAttribute('role', 'menuitem')
          if (kind === 'preset') {
            const name = document.createElement('span')
            name.className = 'native_itemName_hash'
            name.textContent = value
            const description = document.createElement('span')
            description.textContent = `Description for ${value}`
            option.append(name, description)
          } else option.textContent = value
          option.addEventListener('click', () => {
            selections.push(`${kind}:${value}`)
            currentLabel.textContent = value
            menu.remove()
          })
          menu.append(option)
        }
        document.body.append(menu)
      })
      return trigger
    }
    const workspace = makeHeroTrigger('workspace', 'Project A', ['Project A', 'Project B', 'Add workspace'])
    const preset = makeHeroTrigger('preset', 'Standard', ['Standard', 'Creator'])
    const presetMenuRoot = document.createElement('span')
    presetMenuRoot.className = 'native_menuRoot_hash'
    presetMenuRoot.append(preset)
    heroRow.append(workspace, presetMenuRoot)
    phase.append(heroRow)
    root.append(phase)
    document.body.append(root)

    fiber = await mount()
    await new Promise(resolve => { setTimeout(resolve, 50) })
    expect(heroRow.hasAttribute('data-deepcel-hero-choice-source')).toBe(true)

    document.querySelector<HTMLButtonElement>('[data-skin-control="ribbon-manage"]')?.click()
    expect([...document.querySelectorAll('[data-skin-chrome="workbook"] [class*="toolRow"] > [class*="toolCell"]')]
      .slice(0, 2).map(cell => cell.textContent))
      .toEqual(['Workspace: Project A', 'Agent preset: Standard'])

    document.querySelector<HTMLButtonElement>('[data-skin-control="workspace"]')?.click()
    await new Promise(resolve => { setTimeout(resolve, 180) })
    const workspaceDialog = document.querySelector<HTMLElement>('[data-deepcel-choice-dialog="workspace"]')
    const workspaceSelect = workspaceDialog?.querySelector<HTMLSelectElement>('select')
    expect([...workspaceSelect?.options ?? []].map(option => option.value)).toEqual(['Project A', 'Project B'])
    if (workspaceSelect !== null && workspaceSelect !== undefined) workspaceSelect.value = 'Project B'
    workspaceDialog?.querySelector<HTMLButtonElement>('[data-skin-control="choice-confirm"]')?.click()
    await new Promise(resolve => { setTimeout(resolve, 180) })
    expect(selections).toEqual(['workspace:Project B'])

    document.querySelector<HTMLButtonElement>('[data-skin-control="preset"]')?.click()
    await new Promise(resolve => { setTimeout(resolve, 180) })
    const presetDialog = document.querySelector<HTMLElement>('[data-deepcel-choice-dialog="preset"]')
    const presetSelect = presetDialog?.querySelector<HTMLSelectElement>('select')
    expect([...presetSelect?.options ?? []].map(option => option.value)).toEqual(['Standard', 'Creator'])
    if (presetSelect !== null && presetSelect !== undefined) presetSelect.value = 'Creator'
    presetDialog?.querySelector<HTMLButtonElement>('[data-skin-control="choice-confirm"]')?.click()
    await new Promise(resolve => { setTimeout(resolve, 180) })
    expect(selections).toEqual(['workspace:Project B', 'preset:Creator'])

    await fiber.dispose()
    expect(heroRow.hasAttribute('data-deepcel-hero-choice-source')).toBe(false)
  })

  it('applies permission, model, and thinking choices only after dialog confirmation', async () => {
    const root = document.createElement('div')
    root.id = 'root'
    const phase = document.createElement('div')
    phase.dataset.phase = 'active'
    const composer = document.createElement('div')
    composer.dataset.composerCard = ''
    composer.append(document.createElement('textarea'))
    const modes = document.createElement('div')
    modes.className = 'native_modes_hash'
    const permission = document.createElement('button')
    permission.textContent = 'Read Only'
    const permissionSelections: string[] = []
    permission.addEventListener('click', () => {
      const existing = document.querySelector('[data-permission-menu]')
      if (existing !== null) { existing.remove(); return }
      const menu = document.createElement('div')
      menu.dataset.permissionMenu = ''
      menu.setAttribute('role', 'menu')
      for (const value of ['Read Only', 'Workspace Write', 'Full access']) {
        const option = document.createElement('button')
        option.setAttribute('role', 'menuitemradio')
        option.textContent = value
        option.addEventListener('click', () => {
          permissionSelections.push(value)
          permission.textContent = value
          menu.remove()
        })
        menu.append(option)
      }
      document.body.append(menu)
    })
    modes.append(permission)
    const trailing = document.createElement('div')
    trailing.className = 'native_trailing_hash'
    const trigger = document.createElement('button')
    trigger.setAttribute('aria-haspopup', 'menu')
    const modelName = document.createElement('span')
    modelName.textContent = 'Alpha'
    const effortName = document.createElement('span')
    effortName.textContent = 'Max'
    trigger.append(modelName, effortName)
    const selections: string[] = []
    const options = (kind: 'model' | 'thinking', values: readonly string[]) => {
      const menu = document.querySelector<HTMLElement>('[role="menu"]')!
      menu.replaceChildren(...values.map((value) => {
        const option = document.createElement('button')
        option.setAttribute('role', 'menuitemradio')
        if (kind === 'model') {
          const label = document.createElement('span')
          label.className = 'native_modelName_hash'
          label.textContent = value
          option.append(label)
        } else option.textContent = value
        option.addEventListener('click', () => {
          selections.push(`${kind}:${value}`)
          if (kind === 'model') modelName.textContent = value
          else effortName.textContent = value
          menu.remove()
        })
        return option
      }))
    }
    trigger.addEventListener('click', () => {
      const existing = document.querySelector('[role="menu"]')
      if (existing !== null) { existing.remove(); return }
      const menu = document.createElement('div')
      menu.setAttribute('role', 'menu')
      const modelRow = document.createElement('button')
      modelRow.setAttribute('role', 'menuitem')
      modelRow.textContent = 'Model'
      modelRow.addEventListener('click', () => { options('model', ['Alpha', 'Beta']) })
      const effortRow = document.createElement('button')
      effortRow.setAttribute('role', 'menuitem')
      effortRow.textContent = 'Thinking'
      effortRow.addEventListener('click', () => { options('thinking', ['Low', 'Max']) })
      menu.append(modelRow, effortRow)
      document.body.append(menu)
    })
    trailing.append(trigger)
    composer.append(modes, trailing)
    phase.append(composer)
    root.append(phase)
    document.body.append(root)

    fiber = await mount()
    await new Promise(resolve => { setTimeout(resolve, 50) })
    document.querySelector<HTMLButtonElement>('[data-skin-control="ribbon-manage"]')?.click()
    document.querySelector<HTMLButtonElement>('[data-skin-control="permission"]')?.click()
    await new Promise(resolve => { setTimeout(resolve, 180) })
    const permissionDialog = document.querySelector<HTMLElement>('[data-deepcel-choice-dialog="permission"]')
    const permissionSelect = permissionDialog?.querySelector<HTMLSelectElement>('select')
    expect([...permissionSelect?.options ?? []].map(option => option.value))
      .toEqual(['Read Only', 'Workspace Write', 'Full access'])
    if (permissionSelect !== null && permissionSelect !== undefined) permissionSelect.value = 'Workspace Write'
    permissionDialog?.querySelector<HTMLButtonElement>('[data-skin-control="choice-confirm"]')?.click()
    await new Promise(resolve => { setTimeout(resolve, 180) })
    expect(permissionSelections).toEqual(['Workspace Write'])

    document.querySelector<HTMLButtonElement>('[data-skin-control="model"]')?.click()
    await new Promise(resolve => { setTimeout(resolve, 180) })
    const modelDialog = document.querySelector<HTMLElement>('[data-deepcel-choice-dialog="model"]')
    const modelSelect = modelDialog?.querySelector<HTMLSelectElement>('select')
    expect([...modelSelect?.options ?? []].map(option => option.value)).toEqual(['Alpha', 'Beta'])
    if (modelSelect !== null && modelSelect !== undefined) modelSelect.value = 'Beta'
    modelDialog?.querySelector<HTMLButtonElement>('[data-skin-control="choice-confirm"]')?.click()
    await new Promise(resolve => { setTimeout(resolve, 180) })
    expect(selections).toEqual(['model:Beta'])

    document.querySelector<HTMLButtonElement>('[data-skin-control="thinking"]')?.click()
    await new Promise(resolve => { setTimeout(resolve, 180) })
    const thinkingDialog = document.querySelector<HTMLElement>('[data-deepcel-choice-dialog="thinking"]')
    thinkingDialog?.querySelector<HTMLButtonElement>('[data-skin-control="choice-cancel"]')?.click()
    expect(selections).toEqual(['model:Beta'])
  })

  it('tracks the sidebar when neither product side panel is collapsed', async () => {
    const root = document.createElement('div')
    root.id = 'root'
    const frame = document.createElement('div')
    const sidebar = document.createElement('div')
    sidebar.className = 'product_sidebarCol_hash'
    sidebar.getBoundingClientRect = () => ({
      width: 280, height: 600, top: 0, right: 280, bottom: 600, left: 0, x: 0, y: 0,
      toJSON: () => ({}),
    })
    frame.append(sidebar)
    frame.style.gridTemplateColumns = '280px minmax(0, 1fr) 0px'
    root.append(frame)
    document.body.append(root)

    fiber = await mount()
    await new Promise(resolve => { setTimeout(resolve, 30) })

    expect(document.body.dataset.deepcelSidebar).toBe('open')
    expect(document.body.style.getPropertyValue('--deepcel-sidebar-offset')).toBe('280px')
    const composerX = document.body.style.getPropertyValue('--deepcel-composer-x')
    expect(composerX).not.toBe('')

    frame.dataset.sidebarCollapsed = ''
    frame.style.gridTemplateColumns = '56px minmax(0, 1fr) 0px'
    await new Promise(resolve => { setTimeout(resolve, 30) })
    expect(document.body.dataset.deepcelSidebar).toBe('closed')
    expect(document.body.style.getPropertyValue('--deepcel-sidebar-offset')).toBe('0px')
    expect(document.body.style.getPropertyValue('--deepcel-composer-x')).toBe(composerX)

    delete frame.dataset.sidebarCollapsed
    frame.style.gridTemplateColumns = '280px minmax(0, 1fr) 0px'
    await new Promise(resolve => { setTimeout(resolve, 30) })
    expect(document.body.dataset.deepcelSidebar).toBe('open')
    expect(document.body.style.getPropertyValue('--deepcel-sidebar-offset')).toBe('280px')
    expect(document.body.style.getPropertyValue('--deepcel-composer-x')).toBe(composerX)
  })

  it('pins the workbook title without clobbering a later session title', async () => {
    document.title = 'original'
    fiber = await mount()
    expect(document.title).toBe('Workbook Grid · DeepSeek Harness')
    document.title = 'Session 1'
    await fiber.dispose()
    expect(document.title).toBe('Session 1')
  })
})
