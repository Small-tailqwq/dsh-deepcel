# dsh-deepcel

DeepSeek Harness Web GUI 的 Deepcel 工作簿皮肤独立分发仓库。

## 效果预览

点击图片可查看完整尺寸。

| 亮色模式 | 暗色模式 |
|---|---|
| [![Deepcel 亮色模式](deepcel/preview/light.webp)](deepcel/preview/light.webp) | [![Deepcel 暗色模式](deepcel/preview/dark.webp)](deepcel/preview/dark.webp) |

## 皮肤

| 皮肤 | 包名 | 说明 | 许可 |
|---|---|---|---|
| [deepcel](deepcel/) | `@dsh-external/dsh-client-ui-skin-deepcel` | 将会话、工具、设置和导航重构为可交互的工作表单元格 | BSD-3-Clause |

## 安装

本仓库仍处于内部测试阶段，仓库为私有可见性。获得仓库访问权限后：

```sh
git clone https://github.com/dsh-external/dsh-deepcel
cd <harness>
dsh plugin --profile web add ../dsh-deepcel/deepcel
```

Deepcel 加载即生效，卸载即复原；其 wiring id 为 `ui-skin-deepcel`。

## 开发

皮肤工程脚手架来自私有开发仓库 `dsh-external/dsh-web-ui`。本仓库只分发可安装的皮肤成品、源码、测试与预览，不包含整套皮肤中心脚手架。

## 许可与商标

代码以 BSD-3-Clause 许可发布。Deepcel 是独立社区项目，与 Microsoft 无隶属、赞助或背书关系。Microsoft Excel 是 Microsoft 集团公司的商标；本项目不包含 Microsoft 的代码、图标、品牌素材或产品资源。
