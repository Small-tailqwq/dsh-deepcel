# Deepcel 工作簿

一款模仿 excel 的 dsh 皮肤。Deepcel 不只替换颜色，而是把现有 UI 入口重新编排为电子表格：功能区管理文件、会话和运行选项；消息、工具、轨迹与输入区落入统一单元格坐标；工作簿标签承载多会话切换。

## 特性

- 完整的行号、列标、背景网格、活动单元格和工作簿状态栏
- 对话正文按语义块映射为合并单元格，用户消息使用审阅批注样式
- 输入内容经函数栏编辑，并随多行内容自动扩展
- 工作区与会话使用工作簿大纲层级，侧边栏展开时整张工作表同步移动
- Bash、Pwsh、产物行、消息操作和轨迹表使用工作表记录布局
- 权限、模型、思考、Agent 预设和工作区选择复用原生行为入口
- 长会话滚动同步行号、背景网格与选区；切换会话时清空选区

## 安装

```sh
git clone https://github.com/dsh-external/dsh-deepcel
cd <harness>
dsh plugin --profile web add ../dsh-deepcel/deepcel
```

加载即生效，卸载即复原。包名为 `@dsh-external/dsh-client-ui-skin-deepcel`，wiring id 为 `ui-skin-deepcel`。

## 开发与构建

本仓库沿用 `dsh-external/dsh-web-ui` 的皮肤工程脚手架，并提交预构建的 `lib/` 供 DSH 安装。源码位于 `src/`，DOM/CSS 行为回归位于 `tests/`。

## 许可与商标

BSD-3-Clause，详见 `LICENSE`。

Deepcel 是独立社区项目，与 Microsoft 无隶属、赞助或背书关系。Microsoft Excel 是 Microsoft 集团公司的商标。本项目的名称、包名、DOM scope 和公开元数据均使用 Deepcel，不包含 Microsoft 的代码、图标、品牌素材或产品资源。详细声明见 `NOTICE`。
