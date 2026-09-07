# Deepcel 工作簿

简体中文 | [English](README.en.md)

一款模仿 Excel 的 DSH Web 皮肤。Deepcel 不只替换颜色，而是把现有 UI 入口重新编排为电子表格：功能区管理文件、会话和运行选项；消息、工具、轨迹与输入区落入统一单元格坐标；工作簿标签承载多会话切换。

目标宿主：DSH `0.1.2-rc.1`。函数栏保留原生 Lexical 编辑器、附件和指令；目标、排队消息、轮次导航与用量浮窗使用工作表样式。

## 特性

- 完整的行号、列标、背景网格、活动单元格和工作簿状态栏
- 对话正文按语义块映射为合并单元格，用户消息使用审阅批注样式
- 输入内容经函数栏编辑，并随多行内容自动扩展
- 工作区与会话使用工作簿大纲层级，侧边栏展开时整张工作表同步移动
- Bash、Pwsh、产物行、消息操作和轨迹表使用工作表记录布局
- 权限、模型、思考、Agent 预设和工作区选择复用原生行为入口
- 长会话滚动同步行号、背景网格与选区；切换会话时清空选区

## 效果预览

| 亮色模式 | 暗色模式 |
|---|---|
| [![Deepcel 亮色模式](preview/light.webp)](preview/light.webp) | [![Deepcel 暗色模式](preview/dark.webp)](preview/dark.webp) |

## 安装

需要已经可以运行的 DSH Web。推荐连同皮肤管理器一起安装，用于切换皮肤和调整此皮肤的选项：

```powershell
dsh plugin --profile web add 'github:Small-tailqwq/dsh-deep-whale#path:/skin-manager'
dsh plugin --profile web add 'github:Small-tailqwq/dsh-deepcel'
```

`#path:` 只用于子目录（仅皮肤管理器需要）；PowerShell 中 `#` 是注释起始，spec 必须用单引号包裹（将 `web` 替换为你的 profile 名称）。首次安装后重启 DSH Web，再在「设置 → 皮肤管理」中选择 Deepcel，之后切换走配置热重载。包名为 `@dsh-external/dsh-client-ui-skin-deepcel`，wiring id 为 `ui-skin-deepcel`。

## 开发与构建

本目录是脚手架工作区中的单个皮肤包，目录结构与模板 `skins/template-skin/` 相同。源码位于 `src/`，DOM/CSS 行为回归位于 `tests/`，预构建产物位于 `lib/`。

在脚手架根目录执行：

```powershell
pnpm install
pnpm art:embed deepcel
pnpm --filter ./skins/deepcel build
pnpm --filter ./skins/deepcel typecheck
pnpm --filter ./skins/deepcel test
node scripts/verify-skin.mjs deepcel
node scripts/audit-bundle.mjs deepcel
```

Deepcel 当前没有额外嵌入素材；`assets/art.manifest.json` 保留为空 manifest，以便继续使用脚手架的生成与检查入口。

## 许可与商标

BSD-3-Clause，详见 `LICENSE`。

Deepcel 是独立社区项目，与 Microsoft 无隶属、赞助或背书关系。Microsoft Excel 是 Microsoft 集团公司的商标。本项目的名称、包名、DOM scope 和公开元数据均使用 Deepcel，不包含 Microsoft 的代码、图标、品牌素材或产品资源。详细声明见 `NOTICE.md`。
