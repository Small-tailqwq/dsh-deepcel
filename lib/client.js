window.__ModuleLoader__.load({
	id: "@smalltailqwq/dsh-client-ui-skin-deepcel",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0dsh-skin-css:src/client/skin.module.css.mjs
		const css = "body[data-dsh-deepcel]{--deepcel-green:#217346;--deepcel-green-dark:#185c37;--deepcel-green-soft:#e2f0d9;--deepcel-grid:#c9c9c9;--deepcel-grid-strong:#a6a6a6;--deepcel-sheet:#fff;--deepcel-header:#f3f3f3;--deepcel-ink:#202020;--deepcel-muted:#666;--deepcel-highlight:#ffeb3b8f;--deepcel-highlight-solid:#fff2a8;--deepcel-selection:#107c41;--deepcel-bookmark:#2b579a;--deepcel-comment-accent:#c43e1c;--deepcel-comment-fill:#fff7c7;--deepcel-comment-header:#f7e89a;--deepcel-cell-width:60px;--deepcel-row-height:24px;--deepcel-row-gutter:40px;--deepcel-sidebar-offset:0px;--deepcel-sheet-origin:calc(var(--deepcel-sidebar-offset) + var(--deepcel-row-gutter));--deepcel-formula-height:28px;--deepcel-ribbon-height:136px;--dsw-font-family:Aptos, Calibri, \"Segoe UI\", \"Microsoft YaHei\", sans-serif;--ds-font-family-code:Consolas, \"SFMono-Regular\", monospace;--dsw-alias-bg-base:#fff;--dsw-alias-bg-layer-1:#fafafa;--dsw-alias-bg-layer-2:#f3f3f3;--dsw-alias-bg-layer-3:#e9e9e9;--dsw-alias-bg-overlay:#fff;--dsw-alias-bg-module-platform:#f7f7f7;--dsw-alias-border-l1:#e1e1e1;--dsw-alias-border-l2:#cfcfcf;--dsw-alias-border-l2-darkmode-thin:#cfcfcf;--dsw-alias-border-l3:#b8b8b8;--dsw-alias-border-l4:#8f8f8f;--dsw-alias-brand-primary:#217346;--dsw-alias-brand-text:#185c37;--dsw-alias-button-primary-fill:#217346;--dsw-alias-button-primary-hover:#185c37;--dsw-alias-button-info-fill:#217346;--dsw-alias-button-info-hover:#185c37;--dsw-alias-interactive-bg-hover:#edf5f0;--dsw-alias-interactive-bg-hover-solid:#e2f0d9;--dsw-alias-interactive-bg-active:#fff2a8;--dsw-alias-label-primary:#202020;--dsw-alias-label-secondary:#535353;--dsw-alias-label-tertiary:#757575;--dsw-alias-label-caption:#858585;--dsw-alias-markdown-code-block:#f7f7f7;--dsw-alias-markdown-code-block-banner:#ededed;--dsw-alias-markdown-inline-code:#f3f3f3;--dsw-specific-bubble:#fff;--dsw-specific-bubble-highlight:#fff2a8;--dsw-specific-input-major:#fff;--dsw-specific-menu:#fff;--dsw-specific-selector:#f3f3f3;--dsw-specific-sidebar-fill:#fafafa;--dsw-specific-sidebar-nav-item-active:#fff2a8;--dsw-specific-sidebar-nav-item-active-accent:#107c41;box-sizing:border-box;min-width:760px;padding:var(--deepcel-ribbon-height) 0 28px;color:var(--deepcel-ink);background-color:var(--deepcel-sheet)}body[data-dsh-deepcel][data-ds-dark-theme]{--deepcel-green-soft:#293b31;--deepcel-green-dark:#7fd9a5;--deepcel-grid:#454545;--deepcel-grid-strong:#686868;--deepcel-sheet:#1e1e1e;--deepcel-header:#2b2b2b;--deepcel-ink:#f0f0f0;--deepcel-muted:#b7b7b7;--deepcel-highlight:#ffd60a57;--deepcel-highlight-solid:#6f5d00;--deepcel-selection:#33c481;--deepcel-bookmark:#5b9bd5;--deepcel-comment-accent:#ff8a65;--deepcel-comment-fill:#4b431f;--deepcel-comment-header:#625725;--dsw-alias-bg-base:#1e1e1e;--dsw-alias-bg-layer-1:#252525;--dsw-alias-bg-layer-2:#2b2b2b;--dsw-alias-bg-layer-3:#343434;--dsw-alias-bg-overlay:#292929;--dsw-alias-bg-module-platform:#292929;--dsw-alias-border-l1:#3d3d3d;--dsw-alias-border-l2:#505050;--dsw-alias-border-l2-darkmode-thin:#505050;--dsw-alias-border-l3:#666;--dsw-alias-border-l4:#858585;--dsw-alias-brand-primary:#33c481;--dsw-alias-brand-text:#57d997;--dsw-alias-button-primary-fill:#217346;--dsw-alias-button-primary-hover:#2a8f5a;--dsw-alias-button-info-fill:#217346;--dsw-alias-button-info-hover:#2a8f5a;--dsw-alias-interactive-bg-hover:#293b31;--dsw-alias-interactive-bg-hover-solid:#324a3b;--dsw-alias-interactive-bg-active:#6f5d00;--dsw-alias-label-primary:#f0f0f0;--dsw-alias-label-secondary:#cecece;--dsw-alias-label-tertiary:#adadad;--dsw-alias-label-caption:#929292;--dsw-alias-markdown-code-block:#252525;--dsw-alias-markdown-code-block-banner:#303030;--dsw-alias-markdown-inline-code:#303030;--dsw-specific-bubble:#252525;--dsw-specific-bubble-highlight:#6f5d00;--dsw-specific-input-major:#1e1e1e;--dsw-specific-menu:#292929;--dsw-specific-selector:#303030;--dsw-specific-sidebar-fill:#252525;--dsw-specific-sidebar-nav-item-active:#6f5d00;--dsw-specific-sidebar-nav-item-active-accent:#33c481;color:var(--deepcel-ink);background-color:var(--deepcel-sheet)}body[data-dsh-deepcel] *,body[data-dsh-deepcel] :before,body[data-dsh-deepcel] :after{border-radius:0!important}body[data-dsh-deepcel] ::selection{color:inherit;background:var(--deepcel-highlight)}body[data-dsh-deepcel] ._3ljDiW_workbookChrome{z-index:1000000;grid-template-rows:30px 25px 34px var(--deepcel-formula-height) 19px;height:var(--deepcel-ribbon-height);color:#202020;user-select:none;pointer-events:none;background:#fff;border-bottom:1px solid #a6a6a6;font:12px/1 Aptos,Calibri,Segoe UI,sans-serif;display:grid;position:fixed;inset:0 0 auto;box-shadow:0 1px 2px #0000001f}body[data-dsh-deepcel] ._3ljDiW_titleRow,body[data-dsh-deepcel] ._3ljDiW_ribbonTabs,body[data-dsh-deepcel] ._3ljDiW_toolRow,body[data-dsh-deepcel] ._3ljDiW_columnRow,body[data-dsh-deepcel] ._3ljDiW_statusChrome{align-items:stretch;display:flex}body[data-dsh-deepcel] ._3ljDiW_titleRow,body[data-dsh-deepcel] ._3ljDiW_ribbonTabs,body[data-dsh-deepcel] ._3ljDiW_toolRow,body[data-dsh-deepcel] ._3ljDiW_columnRow{pointer-events:auto}body[data-dsh-deepcel] ._3ljDiW_ribbonTab[hidden]{display:none}body[data-dsh-deepcel] ._3ljDiW_worksheetGrid{inset:calc(var(--deepcel-ribbon-height) - var(--deepcel-row-height)) 0 28px var(--deepcel-sheet-origin);z-index:0;grid-template-columns:repeat(var(--deepcel-grid-columns), var(--deepcel-cell-width));grid-auto-rows:var(--deepcel-row-height);pointer-events:none;transform:translateY(var(--deepcel-scroll-y,0px));will-change:transform;transition:left var(--ds-transition-duration-slow,.24s) var(--ds-ease-in-out,ease-in-out);background:0 0;place-content:start;display:grid;position:fixed;overflow:hidden}body[data-dsh-deepcel] ._3ljDiW_worksheetCell{box-sizing:border-box;width:var(--deepcel-cell-width);height:var(--deepcel-row-height);border-right:1px solid var(--deepcel-grid);border-bottom:1px solid var(--deepcel-grid)}body[data-dsh-deepcel] ._3ljDiW_worksheetSelection{z-index:1;top:calc(var(--deepcel-ribbon-height) + var(--deepcel-selection-y,0px) + var(--deepcel-row-offset-y,0px) + var(--deepcel-scroll-y,0px));left:calc(var(--deepcel-sheet-origin) + var(--deepcel-selection-x,0px));box-sizing:border-box;width:var(--deepcel-selection-width,var(--deepcel-cell-width));height:var(--deepcel-selection-height,var(--deepcel-row-height));border:2px solid var(--deepcel-selection);box-shadow:inset 0 0 0 1px var(--deepcel-sheet);pointer-events:none;display:none;position:fixed}body[data-dsh-deepcel] ._3ljDiW_worksheetSelection[data-active]{display:block}body[data-dsh-deepcel] ._3ljDiW_worksheetSelection[data-overlay]{z-index:4}body[data-dsh-deepcel] ._3ljDiW_worksheetSelection[data-active]:after{content:\"\";border:1px solid var(--deepcel-sheet);background:var(--deepcel-selection);width:7px;height:7px;position:absolute;bottom:-4px;right:-4px}body[data-dsh-deepcel] ._3ljDiW_rowChrome{inset:calc(var(--deepcel-ribbon-height) - var(--deepcel-row-height)) auto 28px var(--deepcel-sidebar-offset);z-index:999999;width:var(--deepcel-row-gutter);color:var(--deepcel-muted);background:var(--deepcel-header);border-right:1px solid var(--deepcel-grid-strong);font:10px/var(--deepcel-row-height) Aptos, Calibri, \"Segoe UI\", sans-serif;user-select:none;pointer-events:none;transition:left var(--ds-transition-duration-slow,.24s) var(--ds-ease-in-out,ease-in-out);flex-direction:column;display:flex;position:fixed;overflow:hidden}body[data-dsh-deepcel] ._3ljDiW_rowCell{box-sizing:border-box;flex:0 0 var(--deepcel-row-height);width:100%;height:var(--deepcel-row-height);border-bottom:1px solid var(--deepcel-grid);text-align:right;padding-right:6px}body[data-dsh-deepcel]>[class*=_card][style*=left]{z-index:1000001!important}body[data-dsh-deepcel] ._3ljDiW_titleRow{color:#fff;background:var(--deepcel-green);align-items:center;position:relative}body[data-dsh-deepcel] ._3ljDiW_quickAccess{z-index:1;align-items:stretch;height:100%;display:flex;position:relative}body[data-dsh-deepcel] ._3ljDiW_quickCell{border:0;border-right:1px solid #ffffff38;align-items:center;height:100%;padding:0 12px;font-size:11px;display:inline-flex}body[data-dsh-deepcel] button._3ljDiW_quickCell,body[data-dsh-deepcel] button._3ljDiW_toolCell{appearance:none;color:inherit;font:inherit;cursor:pointer;background:0 0;margin:0}body[data-dsh-deepcel] button._3ljDiW_quickCell:is(:hover,:focus-visible){background:#ffffff29}body[data-dsh-deepcel] button._3ljDiW_quickCell[aria-pressed=true]{box-shadow:inset 0 -2px #fff}body[data-dsh-deepcel] button._3ljDiW_quickCell:focus-visible{outline-offset:-4px!important;outline:1px solid #fff!important}body[data-dsh-deepcel] ._3ljDiW_titleCell{text-align:center;letter-spacing:.02em;pointer-events:none;justify-content:center;align-items:center;gap:8px;width:min(48vw,680px);min-width:0;font-weight:600;display:flex;position:absolute;left:50%;overflow:hidden;transform:translate(-50%)}body[data-dsh-deepcel] ._3ljDiW_ribbonTabs{background:#f7f7f7;border-bottom:1px solid #d4d4d4}body[data-dsh-deepcel] ._3ljDiW_ribbonTab{appearance:none;font:inherit;cursor:pointer;color:#303030;background:0 0;border-right:1px solid #e2e2e2;align-items:center;margin:0;padding:0 16px;display:inline-flex}body[data-dsh-deepcel] ._3ljDiW_ribbonTab[data-active]{color:#185c37;background:#fff2a8;font-weight:600;box-shadow:inset 0 -2px #217346}body[data-dsh-deepcel] ._3ljDiW_ribbonTab:is(:hover,:focus-visible):not([data-active]){background:var(--deepcel-green-soft)}body[data-dsh-deepcel] ._3ljDiW_ribbonTab[data-ribbon-tab=file]:not([data-active]){color:#fff;background:var(--deepcel-green)}body[data-dsh-deepcel] ._3ljDiW_toolRow{background:#fff;border-bottom:1px solid #d4d4d4;padding-left:8px;overflow:hidden}body[data-dsh-deepcel] ._3ljDiW_toolGroup{border-right:3px double #c8c8c8;flex:none;align-items:stretch;min-width:0;display:flex}body[data-dsh-deepcel] ._3ljDiW_toolGroupLabel{color:var(--deepcel-muted);letter-spacing:.04em;white-space:nowrap;border-right:1px solid #e1e1e1;order:-1;align-items:center;padding:0 8px;font-size:10px;display:inline-flex}body[data-dsh-deepcel] button._3ljDiW_toolCell:disabled,body[data-dsh-deepcel] button._3ljDiW_choiceCell:disabled{opacity:.45;cursor:default}body[data-dsh-deepcel] button._3ljDiW_toolCell[aria-pressed=true],body[data-dsh-deepcel] button._3ljDiW_toolCell[aria-expanded=true]{color:var(--deepcel-green-dark);background:var(--deepcel-green-soft);box-shadow:inset 0 -2px var(--deepcel-selection)}body[data-dsh-deepcel] button._3ljDiW_choiceCell{appearance:none;color:#3b3b3b;max-width:240px;font:inherit;cursor:pointer;background:0 0;border:0;border-right:1px solid #e1e1e1;align-items:center;gap:6px;margin:0;padding:0 10px;font-size:11px;display:inline-flex}body[data-dsh-deepcel] button._3ljDiW_choiceCell:after{content:\"▾\";color:var(--deepcel-green-dark);flex:none;font-size:10px}body[data-dsh-deepcel] button._3ljDiW_choiceCell:is(:hover,:focus-visible):not(:disabled),body[data-dsh-deepcel] button._3ljDiW_choiceCell[aria-expanded=true]{background:var(--deepcel-green-soft)}body[data-dsh-deepcel] button._3ljDiW_choiceCell[aria-expanded=true]{box-shadow:inset 0 -2px var(--deepcel-selection)}body[data-dsh-deepcel] ._3ljDiW_choiceName{color:var(--deepcel-muted);flex:none}body[data-dsh-deepcel] ._3ljDiW_choiceValue{min-width:0;color:inherit;text-overflow:ellipsis;white-space:nowrap;font-weight:600;overflow:hidden}body[data-dsh-deepcel] ._3ljDiW_toolCell{color:#3b3b3b;border-right:1px solid #e1e1e1;justify-content:center;align-items:center;min-width:62px;padding:0 10px;font-size:11px;display:inline-flex}body[data-dsh-deepcel] button._3ljDiW_toolCell{appearance:none;font:inherit;cursor:pointer;background:0 0;margin:0}body[data-dsh-deepcel] button._3ljDiW_toolCell[aria-selected=true]{color:var(--deepcel-ink);background:var(--deepcel-highlight-solid);box-shadow:inset 0 -2px var(--deepcel-selection);font-weight:600}body[data-dsh-deepcel] button._3ljDiW_toolCell:hover{background:var(--deepcel-green-soft)}body[data-dsh-deepcel] ._3ljDiW_formulaRow{pointer-events:none;background:#fff;border-bottom:1px solid #bcbcbc;align-items:center;display:flex}body[data-dsh-deepcel] ._3ljDiW_nameCell,body[data-dsh-deepcel] ._3ljDiW_formulaLabel,body[data-dsh-deepcel] ._3ljDiW_formulaCell{border-right:1px solid #cfcfcf;align-items:center;height:100%;display:inline-flex}body[data-dsh-deepcel] textarea[data-deepcel-formula-input]:focus{outline:2px solid var(--deepcel-selection)!important;outline-offset:-2px!important}body[data-dsh-deepcel][data-deepcel-model-probing] [role=menu]{visibility:hidden!important}body[data-dsh-deepcel] ._3ljDiW_choiceMenu{top:var(--deepcel-menu-y,89px);left:var(--deepcel-menu-x,0px);z-index:1000004;box-sizing:border-box;min-width:var(--deepcel-menu-min-width,160px);max-width:min(360px,100vw - 16px);max-height:min(360px, calc(100dvh - var(--deepcel-menu-y,89px) - 36px));scrollbar-width:thin;flex-direction:column;font:12px/1 Aptos,Calibri,Segoe UI,Microsoft YaHei,sans-serif;display:flex;position:fixed;overflow-y:auto}body[data-dsh-deepcel] ._3ljDiW_choiceMenu[role=menu]:before{content:none}body[data-dsh-deepcel] ._3ljDiW_choiceHeading{height:var(--deepcel-row-height);border-bottom:1px solid var(--deepcel-grid);color:var(--deepcel-muted);background:var(--deepcel-header);letter-spacing:.04em;flex:none;align-items:center;padding:0 10px;font:10px/1 Consolas,monospace;display:flex}body[data-dsh-deepcel] button._3ljDiW_choiceItem{appearance:none;min-height:var(--deepcel-row-height);background:var(--deepcel-sheet);color:var(--deepcel-ink);font:inherit;text-align:left;cursor:pointer;border:0;flex:none;align-items:center;gap:8px;margin:0;padding:0 10px;display:flex}body[data-dsh-deepcel] button._3ljDiW_choiceItem:before{content:\"\";box-sizing:border-box;border:1px solid var(--deepcel-grid-strong);background:var(--deepcel-sheet);flex:none;width:12px;height:12px}body[data-dsh-deepcel] button._3ljDiW_choiceItem[aria-checked=true]:before{border-color:var(--deepcel-selection);background:linear-gradient(var(--deepcel-selection), var(--deepcel-selection)) center / 6px 6px no-repeat, var(--deepcel-sheet)}body[data-dsh-deepcel] button._3ljDiW_choiceItem[aria-checked=true]{font-weight:600}body[data-dsh-deepcel] button._3ljDiW_choiceItem:is(:hover,:focus-visible){box-shadow:inset 3px 0 var(--deepcel-selection);background:var(--deepcel-highlight-solid)!important;outline:none!important}body[data-dsh-deepcel] ._3ljDiW_choiceEmpty{color:var(--deepcel-muted);padding:6px 10px}body[data-dsh-deepcel] ._3ljDiW_nameCell{color:#333;font-variant-numeric:tabular-nums;justify-content:center;width:72px}body[data-dsh-deepcel] ._3ljDiW_formulaLabel{color:#666;justify-content:center;width:34px;font:italic 13px/1 Georgia,serif}body[data-dsh-deepcel] ._3ljDiW_formulaCell{color:#222;white-space:nowrap;flex:1;gap:0;padding:0;font-family:Consolas,monospace;overflow:hidden}body[data-dsh-deepcel] ._3ljDiW_formulaTitle,body[data-dsh-deepcel] ._3ljDiW_formulaToken,body[data-dsh-deepcel] ._3ljDiW_formulaCell>button{box-sizing:border-box;border:0;border-right:1px solid var(--deepcel-grid);color:inherit;white-space:nowrap;background:0 0;align-self:stretch;align-items:center;padding:0 10px;font:12px/1 Aptos,Calibri,Segoe UI,sans-serif;display:inline-flex}body[data-dsh-deepcel] ._3ljDiW_formulaTitle{min-width:180px;font-weight:600}body[data-dsh-deepcel] ._3ljDiW_formulaToken{color:var(--deepcel-muted)}body[data-dsh-deepcel] ._3ljDiW_formulaCell>button{cursor:pointer;min-width:0}body[data-dsh-deepcel] ._3ljDiW_formulaCell>button:hover{background:var(--deepcel-green-soft)}body[data-dsh-deepcel] ._3ljDiW_columnRow{box-sizing:border-box;padding-left:var(--deepcel-sidebar-offset);transition:padding-left var(--ds-transition-duration-slow,.24s) var(--ds-ease-in-out,ease-in-out);background:#f3f3f3;border-bottom:1px solid #a6a6a6;overflow:hidden}body[data-dsh-deepcel] [data-deepcel-native-proxy],body[data-dsh-deepcel] [data-deepcel-hero-choice-source]{display:none!important}body[data-dsh-deepcel] ._3ljDiW_cornerCell,body[data-dsh-deepcel] ._3ljDiW_columnCell{box-sizing:border-box;color:#555;border-right:1px solid #c8c8c8;justify-content:center;align-items:center;height:19px;font-size:10px;display:inline-flex}body[data-dsh-deepcel] ._3ljDiW_cornerCell{flex:0 0 var(--deepcel-row-gutter);width:var(--deepcel-row-gutter);background:var(--deepcel-header);position:relative}body[data-dsh-deepcel] ._3ljDiW_cornerCell:after{content:\"\";clip-path:polygon(100% 0,100% 100%,0 100%);background:#929292;width:11px;height:11px;position:absolute;bottom:3px;right:4px}body[data-dsh-deepcel] ._3ljDiW_columnCell{flex:0 0 var(--deepcel-cell-width);width:var(--deepcel-cell-width)}body[data-dsh-deepcel] ._3ljDiW_statusChrome{z-index:1000000;color:#333;user-select:none;background:#f3f3f3;border-top:1px solid #a6a6a6;height:28px;font:11px/27px Aptos,Calibri,Segoe UI,sans-serif;position:fixed;inset:auto 0 0}body[data-dsh-deepcel] ._3ljDiW_sheetNavCell,body[data-dsh-deepcel] ._3ljDiW_sheetTabCell,body[data-dsh-deepcel] ._3ljDiW_newSheetCell,body[data-dsh-deepcel] ._3ljDiW_statusCell,body[data-dsh-deepcel] ._3ljDiW_zoomCell{white-space:nowrap;border-right:1px solid #d2d2d2;padding:0 14px}body[data-dsh-deepcel] ._3ljDiW_workbookTabs{align-items:stretch;max-width:min(46vw,720px);display:flex;overflow:hidden}body[data-dsh-deepcel] button._3ljDiW_sheetNavCell{appearance:none;min-width:var(--deepcel-row-gutter);background:color-mix(in srgb, var(--deepcel-green-soft) 55%, var(--deepcel-header));color:var(--deepcel-green-dark);cursor:pointer;box-shadow:inset 3px 0 var(--deepcel-selection);border:0;border-right:1px solid #d2d2d2;margin:0;padding:0 12px;font:700 14px/27px Aptos,Calibri,Segoe UI,sans-serif;position:relative}body[data-dsh-deepcel] button._3ljDiW_sheetNavCell:after{content:\"\";background:var(--deepcel-selection);width:5px;height:5px;position:absolute;top:5px;right:5px;border-radius:50%!important}body[data-dsh-deepcel] ._3ljDiW_sheetTabCell{color:#444;background:var(--deepcel-header);border-bottom:3px solid #0000;align-items:stretch;min-width:112px;max-width:220px;padding:0;display:flex;position:relative}body[data-dsh-deepcel] ._3ljDiW_sheetTabCell[data-active]{color:#185c37;background:#fff2a8;border-bottom:3px solid #217346;font-weight:600}body[data-dsh-deepcel] button._3ljDiW_workbookTabLabel,body[data-dsh-deepcel] button._3ljDiW_workbookClose,body[data-dsh-deepcel] button._3ljDiW_newSheetCell{appearance:none;color:inherit;font:inherit;cursor:pointer;background:0 0;border:0;margin:0}body[data-dsh-deepcel] button._3ljDiW_workbookTabLabel{text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;padding:0 8px 0 14px;overflow:hidden}body[data-dsh-deepcel] button._3ljDiW_workbookClose{opacity:0;width:24px;padding:0;font-size:14px}body[data-dsh-deepcel] ._3ljDiW_sheetTabCell:hover button._3ljDiW_workbookClose,body[data-dsh-deepcel] ._3ljDiW_sheetTabCell:focus-within button._3ljDiW_workbookClose{opacity:1}body[data-dsh-deepcel] button._3ljDiW_workbookClose:hover{color:#fff;background:#c42b1c}body[data-dsh-deepcel] button._3ljDiW_newSheetCell:hover{background:var(--deepcel-green-soft)}body[data-dsh-deepcel] ._3ljDiW_statusSpacer{flex:1}body[data-dsh-deepcel] ._3ljDiW_zoomCell{text-align:center;font-variant-numeric:tabular-nums;min-width:92px}body[data-dsh-deepcel][data-ds-dark-theme] ._3ljDiW_workbookChrome,body[data-dsh-deepcel][data-ds-dark-theme] ._3ljDiW_formulaRow,body[data-dsh-deepcel][data-ds-dark-theme] ._3ljDiW_toolRow{color:#eee;background:#252525;border-color:#4a4a4a}body[data-dsh-deepcel][data-ds-dark-theme] ._3ljDiW_ribbonTabs,body[data-dsh-deepcel][data-ds-dark-theme] ._3ljDiW_columnRow,body[data-dsh-deepcel][data-ds-dark-theme] ._3ljDiW_rowChrome,body[data-dsh-deepcel][data-ds-dark-theme] ._3ljDiW_statusChrome{color:#ddd;background:#2b2b2b;border-color:#505050}body[data-dsh-deepcel][data-ds-dark-theme] :is(._3ljDiW_ribbonTab,._3ljDiW_toolCell,._3ljDiW_choiceCell,._3ljDiW_toolGroupLabel,._3ljDiW_nameCell,._3ljDiW_formulaLabel,._3ljDiW_formulaCell,._3ljDiW_columnCell){color:#ddd;border-color:#4a4a4a}body[data-dsh-deepcel][data-ds-dark-theme] ._3ljDiW_toolGroup{border-right-color:#5a5a5a}body[data-dsh-deepcel][data-ds-dark-theme] ._3ljDiW_toolGroupLabel{color:#a8a8a8}body[data-dsh-deepcel][data-ds-dark-theme] ._3ljDiW_ribbonTab[data-ribbon-tab=file]:not([data-active]){color:#fff;background:var(--deepcel-green)}body[data-dsh-deepcel][data-ds-dark-theme] ._3ljDiW_ribbonTab[data-active],body[data-dsh-deepcel][data-ds-dark-theme] ._3ljDiW_sheetTabCell[data-active]{color:#fff4b8;background:#6f5d00;border-color:#33c481}body[data-dsh-deepcel] [id=root]{min-height:calc(100vh - var(--deepcel-ribbon-height) - 28px);background:0 0;position:relative}body[data-dsh-deepcel] #root [class*=frame]:has(>[class*=sidebarCol]){background:0 0}body[data-dsh-deepcel] :is([class*=composerStack],[data-chat-flow-kind],[class*=userRow],[data-terminal],[data-variant=think],[data-question-key],[data-testid=todo-panel]){z-index:2;position:relative}body[data-dsh-deepcel] [data-pane]{background-color:color-mix(in srgb, var(--deepcel-sheet) 94%, transparent);border-color:var(--deepcel-grid)!important;box-shadow:none!important}body[data-dsh-deepcel] [data-pane=sidebar]{border-right:3px solid var(--deepcel-grid-strong)!important}body[data-dsh-deepcel] [data-pane=details]{border-left:3px solid var(--deepcel-grid-strong)!important}body[data-dsh-deepcel] [data-pane=conversation]{background:0 0}body[data-dsh-deepcel] [data-phase],body[data-dsh-deepcel] [data-conversation-scroll],body[data-dsh-deepcel] [data-pane=conversation]>div,body[data-dsh-deepcel] [data-pane=conversation] [class*=scrollBody]{background:0 0!important}body[data-dsh-deepcel] [data-pane=sidebar]>div{box-sizing:border-box;padding-left:var(--deepcel-row-gutter);background:linear-gradient(to bottom, transparent 23px, var(--deepcel-grid) 24px), color-mix(in srgb, var(--deepcel-header) 94%, transparent);background-size:100% 24px}body[data-dsh-deepcel] [class*=sidebarCol]>div{box-sizing:border-box;padding-left:0}body[data-dsh-deepcel] [class*=sidebarCol]{z-index:2;border-right:1px solid var(--deepcel-grid-strong);overflow:hidden}body[data-dsh-deepcel] [data-sidebar-collapsed] [class*=sidebarCol]{visibility:hidden;pointer-events:none;border-right:0}body[data-dsh-deepcel] [data-sidebar-collapsed] [class*=sidebarCol] :is([class*=_overlay],[class*=_root]):has(>[role=dialog]){visibility:visible;pointer-events:auto}body[data-dsh-deepcel] [data-sidebar-collapsed] [class*=centerCol]{width:calc(100% + 56px);margin-left:-56px}body[data-dsh-deepcel] [data-pane=sidebar]>div>:first-child,body[data-dsh-deepcel] [data-pane=conversation] header{background:var(--deepcel-header);border-bottom:2px solid var(--deepcel-grid-strong);box-shadow:none}body[data-dsh-deepcel] [data-deepcel-header-source]{color:#fff;align-items:stretch;max-width:calc(100vw - 180px);height:30px;z-index:1000002!important;background:var(--deepcel-green)!important;min-height:30px!important;box-shadow:none!important;border:0!important;padding:0!important;display:flex!important;position:fixed!important;inset:0 0 auto auto!important}body[data-dsh-deepcel] [data-deepcel-header-source]:after,body[data-dsh-deepcel] [data-deepcel-header-source] [class*=titleCluster]>nav,body[data-dsh-deepcel] [data-deepcel-header-source] [role=tablist],body[data-dsh-deepcel] [data-deepcel-header-source]>[data-conversation-header-leading]:not(:has(button)){display:none!important}body[data-dsh-deepcel] [data-deepcel-header-source] :is([class*=titleRow],[data-conversation-header-leading]),body[data-dsh-deepcel] [data-deepcel-header-source] [class*=titleRow]>*,body[data-dsh-deepcel] [data-deepcel-header-source] [class*=titleCluster]>*{flex:none!important}body[data-dsh-deepcel] [data-deepcel-header-source] :is([class*=titleRow],[data-conversation-header-leading]){align-items:center;gap:0;width:auto;min-width:0;height:30px;min-height:30px;margin:0;padding:0;display:flex;container-type:normal!important}body[data-dsh-deepcel] [data-deepcel-header-source] [class*=titleCluster]{display:contents}body[data-dsh-deepcel] [data-deepcel-header-source] [class*=headerActions]>*>[title]{color:#fff;white-space:nowrap;border-left:1px solid #ffffff38;padding:0 10px;font-size:11px;line-height:30px}body[data-dsh-deepcel] [data-deepcel-header-source] :is([class*=headerActions],[class*=headerUtilities],[data-conversation-header-corner]){align-items:center;gap:0;min-width:0;margin:0;display:flex}body[data-dsh-deepcel] [data-deepcel-header-source] button:not(:where([role=menu] *,[role=dialog] *,[role=tree] *)){min-height:30px;color:inherit;white-space:nowrap;background:0 0;border:0;border-left:1px solid #ffffff38;border-radius:0;padding:0 8px;font:11px/18px Aptos,Calibri,Segoe UI,sans-serif}body[data-dsh-deepcel] [data-deepcel-header-source] button:not(:where([role=menu] *,[role=dialog] *,[role=tree] *)):is(:hover,[aria-expanded=true]){background:#ffffff29}body[data-dsh-deepcel] [data-deepcel-header-source] button:not(:where([role=menu] *,[role=dialog] *,[role=tree] *)):focus-visible{outline-offset:-3px;outline:1px solid #fff}body[data-dsh-deepcel] [data-pane=sidebar]>div>button{border:2px solid var(--deepcel-selection);background:var(--deepcel-sheet);color:var(--deepcel-ink);box-shadow:inset 0 0 0 1px var(--deepcel-sheet);font-weight:600}body[data-dsh-deepcel] [data-pane=sidebar]>div>button:hover{background:var(--deepcel-green-soft)}body[data-dsh-deepcel][data-ds-dark-theme] [data-pane=sidebar]>div>button:hover{background:#293b31}body[data-dsh-deepcel] [role=tree],body[data-dsh-deepcel] [role=treeitem]{border-color:var(--deepcel-grid)}body[data-dsh-deepcel] [role=treeitem]{min-height:var(--deepcel-row-height);border-bottom:1px solid var(--deepcel-grid);background:color-mix(in srgb, var(--deepcel-sheet) 96%, transparent)}body[data-dsh-deepcel] [role=treeitem]:hover{background:color-mix(in srgb, var(--deepcel-highlight-solid) 58%, var(--deepcel-sheet))}body[data-dsh-deepcel] [role=treeitem][aria-expanded]:has([class*=folderActive]){box-shadow:inset 3px 0 var(--deepcel-bookmark);position:relative}body[data-dsh-deepcel] [role=treeitem][aria-expanded]:has([class*=folderActive]):after{content:\"\";z-index:3;background:var(--deepcel-bookmark);clip-path:polygon(0 0,100% 0,100% 100%,50% 72%,0 100%);pointer-events:none;width:11px;height:18px;position:absolute;top:0;right:10px}body[data-dsh-deepcel] [class*=groupSection]{position:relative}body[data-dsh-deepcel] [class*=groupSection]:has(>:is([role=treeitem]:not([aria-expanded]),:has(>[role=treeitem]:not([aria-expanded])))):before{content:\"\";z-index:1;border-left:1px solid color-mix(in srgb, var(--deepcel-bookmark) 48%, var(--deepcel-grid));pointer-events:none;position:absolute;top:55px;bottom:17px;left:9px}body[data-dsh-deepcel] [class*=groupSection]>:is([role=treeitem]:not([aria-expanded]),:has(>[role=treeitem]:not([aria-expanded]))){box-sizing:border-box;width:calc(100% - 20px);margin-left:20px}body[data-dsh-deepcel] [class*=groupSection]>[role=treeitem]:not([aria-expanded]):before,body[data-dsh-deepcel] [class*=groupSection]>:has(>[role=treeitem]:not([aria-expanded]))>[role=treeitem]:before{content:\"├ ROW\";color:color-mix(in srgb, var(--deepcel-bookmark) 72%, var(--deepcel-muted));margin-left:-16px}body[data-dsh-deepcel] [class*=groupSection]>[role=treeitem]:not([aria-expanded]):last-child:before,body[data-dsh-deepcel] [class*=groupSection]>:has(>[role=treeitem]:not([aria-expanded])):last-child>[role=treeitem]:before{content:\"└ ROW\"}body[data-dsh-deepcel] :is([aria-selected=true],[aria-current=true],[data-state=active],[data-state=checked]){background:var(--deepcel-highlight-solid)!important;color:var(--deepcel-ink)!important;box-shadow:inset 3px 0 var(--deepcel-selection), inset 0 -1px var(--deepcel-selection)!important}body[data-dsh-deepcel][data-ds-dark-theme] :is([aria-selected=true],[aria-current=true],[data-state=active],[data-state=checked]){color:#fff8cf!important}body[data-dsh-deepcel] :is(input:not([class*=searchInput]),textarea,[contenteditable=true]){border:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important;color:var(--deepcel-ink)!important;box-shadow:none!important}body[data-dsh-deepcel] :is(input:not([class*=searchInput]),textarea,[contenteditable=true]):focus{border:2px solid var(--deepcel-selection)!important;box-shadow:inset 0 0 0 1px var(--deepcel-sheet)!important;outline:none!important}body[data-dsh-deepcel] [data-composer-card],body[data-dsh-deepcel] [data-question-key]>section,body[data-dsh-deepcel] [data-testid=todo-panel]{position:relative;border:2px solid var(--deepcel-selection)!important;background:linear-gradient(to right, transparent 59px, color-mix(in srgb, var(--deepcel-grid) 55%, transparent) 60px), linear-gradient(to bottom, transparent 23px, color-mix(in srgb, var(--deepcel-grid) 55%, transparent) 24px), var(--deepcel-sheet)!important;background-size:var(--deepcel-cell-width) var(--deepcel-row-height)!important;box-shadow:inset 0 0 0 1px var(--deepcel-sheet), 0 0 0 1px var(--deepcel-selection)!important}body[data-dsh-deepcel] [data-deepcel-formula-owner] [data-question-key],body[data-dsh-deepcel] [data-deepcel-formula-owner] [data-testid=todo-panel],body[data-dsh-deepcel] [data-question-key] :is(button,input,textarea){pointer-events:auto!important}body[data-dsh-deepcel] [data-question-key] [class*=badge]{border:1px solid var(--deepcel-green-dark)!important;background:var(--deepcel-green)!important;color:#fff!important}body[data-dsh-deepcel] [data-question-key]{width:min(calc(12 * var(--deepcel-cell-width)), calc(100vw - var(--deepcel-row-gutter) - 24px));padding:0!important}body[data-dsh-deepcel] [data-question-key]>section{font-family:Aptos,Calibri,Segoe UI,sans-serif;max-width:none!important;box-shadow:none!important;color:var(--deepcel-ink)!important;border-radius:0!important;padding:0!important}body[data-dsh-deepcel] [data-question-key]>section>:is(header,footer){min-height:calc(2 * var(--deepcel-row-height));border-bottom:1px solid var(--deepcel-grid-strong);background:color-mix(in srgb, var(--deepcel-header) 88%, transparent)!important;border-radius:0!important;margin:0!important;padding:0 8px!important}body[data-dsh-deepcel] [data-question-key] [data-question-scroll]{background:var(--deepcel-sheet)!important}body[data-dsh-deepcel] [data-question-key] [class*=detail]{min-height:var(--deepcel-row-height);border-bottom:1px solid var(--deepcel-grid);margin:0!important;padding:3px 8px!important}body[data-dsh-deepcel] [data-question-key] [class*=options]{gap:0!important;margin:0!important;padding:0!important}body[data-dsh-deepcel] [data-question-key] button:is([role=radio],[role=checkbox]){min-height:var(--deepcel-row-height)!important;border:0!important;border-bottom:1px solid var(--deepcel-grid)!important;background:var(--deepcel-sheet)!important;color:var(--deepcel-ink)!important;border-radius:0!important;gap:8px!important;padding:0 8px!important;transition:none!important;transform:none!important}body[data-dsh-deepcel] [data-question-key] button:is([role=radio],[role=checkbox]):hover,body[data-dsh-deepcel] [data-question-key] button:is([role=radio],[role=checkbox])[aria-checked=true]{background:var(--deepcel-highlight-solid)!important}body[data-dsh-deepcel] [data-question-key] button:is([role=radio],[role=checkbox])[aria-checked=true]{box-shadow:inset 3px 0 var(--deepcel-selection)!important}body[data-dsh-deepcel] [data-question-key] :is([class*=number],[class*=checkbox]){place-items:center;position:relative;border:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important;color:#0000!important;border-radius:0!important;flex:0 0 16px!important;width:16px!important;height:16px!important;margin:4px 0!important;font-size:0!important;display:grid!important}body[data-dsh-deepcel] [data-question-key] [class*=checkbox]:before{content:none!important}body[data-dsh-deepcel] [data-question-key] button[aria-checked=true] :is([class*=number],[class*=checkbox]){border-color:var(--deepcel-selection)!important;background:var(--deepcel-selection)!important}body[data-dsh-deepcel] [data-question-key] button[aria-checked=true] :is([class*=number],[class*=checkbox]):after{content:\"✓\";color:#fff;font:700 12px/14px Aptos,Calibri,sans-serif}body[data-dsh-deepcel] [data-question-key] :is([class*=optionLabel],[class*=description]){line-height:var(--deepcel-row-height)!important}body[data-dsh-deepcel] [data-question-key] [class*=customRow]{min-height:calc(2 * var(--deepcel-row-height))!important;border:0!important;border-bottom:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important;border-radius:0!important;gap:8px!important;margin:0!important;padding:0 8px!important}body[data-dsh-deepcel] [data-question-key] [class*=customRow]:focus-within{box-shadow:inset 3px 0 var(--deepcel-selection)!important}body[data-dsh-deepcel] [data-question-key] :is([class*=customInput],[class*=customTextarea]){min-height:calc(2 * var(--deepcel-row-height))!important;border:0!important;border-left:1px solid var(--deepcel-grid)!important;background:var(--deepcel-sheet)!important;color:var(--deepcel-ink)!important;-webkit-text-fill-color:var(--deepcel-ink)!important;border-radius:0!important;margin:0!important;padding:3px 8px!important;font:12px/18px Aptos,Calibri,Segoe UI,sans-serif!important}body[data-dsh-deepcel] [data-question-key] :is([class*=customInput],[class*=customTextarea]):focus{outline:2px solid var(--deepcel-selection)!important;outline-offset:-2px!important;box-shadow:none!important}body[data-dsh-deepcel] [data-testid=todo-panel]{width:min(calc(12 * var(--deepcel-cell-width)), calc(100vw - var(--deepcel-row-gutter) - 24px));overflow:hidden;border-radius:0!important;margin:0 auto!important}body[data-dsh-deepcel] [data-testid=todo-panel]>[class*=body]{gap:0!important;padding:0!important}body[data-dsh-deepcel] [data-testid=todo-panel] button[aria-expanded]{min-height:var(--deepcel-row-height);border-bottom:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-header)!important;color:var(--deepcel-ink)!important;pointer-events:auto!important;padding:0 8px!important}body[data-dsh-deepcel] [data-testid=todo-panel] ul{max-height:calc(8 * var(--deepcel-row-height))!important;gap:0!important}body[data-dsh-deepcel] [data-testid=todo-panel] li[data-status]{min-height:var(--deepcel-row-height);border-bottom:1px solid var(--deepcel-grid);background:var(--deepcel-sheet);color:var(--deepcel-ink)!important;gap:8px!important;padding:0 8px!important}body[data-dsh-deepcel] [data-testid=todo-panel] li[data-status]>[class*=glyph]{border:1px solid var(--deepcel-grid-strong);background:var(--deepcel-sheet);position:relative;width:16px!important;height:16px!important}body[data-dsh-deepcel] [data-testid=todo-panel] li[data-status=completed]>[class*=glyph]{border-color:var(--deepcel-selection);background:var(--deepcel-selection)}body[data-dsh-deepcel] [data-testid=todo-panel] li[data-status=completed]>[class*=glyph]:after{content:\"✓\";color:#fff;font:700 12px/14px Aptos,Calibri,sans-serif}body[data-dsh-deepcel] [data-testid=todo-panel] li[data-status=in_progress]>[class*=glyph]:after{content:\"•\";color:var(--deepcel-selection);font:700 18px/12px Aptos,Calibri,sans-serif}body[data-dsh-deepcel] [data-composer-card]:before{content:none}body[data-dsh-deepcel] [data-skin-chrome] [aria-selected=true]:after{content:none!important}body[data-dsh-deepcel] [data-composer-card]:after,body[data-dsh-deepcel] [aria-selected=true]:after{content:\"\";box-sizing:border-box;border:1px solid var(--deepcel-sheet);background:var(--deepcel-selection);pointer-events:none;width:7px;height:7px;position:absolute;bottom:-4px;right:-4px}body[data-dsh-deepcel] [data-composer-card] :is(textarea,[contenteditable=true]){background:color-mix(in srgb, var(--deepcel-sheet) 90%, transparent)!important;border-color:#0000!important}body[data-dsh-deepcel] [data-phase=hero] [data-conversation-scroll]{justify-content:flex-start!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-seat]{width:100%;height:240px;margin-top:288px;position:relative;flex:0 0 240px!important}body[data-dsh-deepcel] [data-phase=active] [data-conversation-scroll][data-deepcel-workbook-flow]{grid-template-columns:calc(var(--deepcel-row-gutter) + var(--deepcel-chat-x,0px)) repeat(var(--deepcel-chat-columns,12), var(--deepcel-cell-width)) minmax(0, 1fr);grid-auto-rows:var(--deepcel-row-height);align-content:start;position:relative;padding:var(--deepcel-flow-padding-top,0px) 0 calc(2 * var(--deepcel-row-height))!important;background-color:var(--deepcel-sheet)!important;background-image:linear-gradient(to right, var(--deepcel-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--deepcel-grid) 1px, transparent 1px)!important;background-size:var(--deepcel-cell-width) var(--deepcel-row-height)!important;background-position:var(--deepcel-row-gutter) var(--deepcel-flow-padding-top,0px)!important;background-attachment:local!important;display:grid!important}body[data-dsh-deepcel]:has([data-deepcel-workbook-flow])>._3ljDiW_worksheetGrid{display:none}body[data-dsh-deepcel] [data-deepcel-workbook-flow]>._3ljDiW_rowChrome{inset:calc(var(--deepcel-flow-padding-top,0px) + var(--deepcel-row-start,0px) - var(--deepcel-row-height)) auto auto 0;height:auto;max-height:max(0px, calc(var(--deepcel-flow-height,100vh) - var(--deepcel-row-start,0px) + var(--deepcel-row-height)));transition:none;position:absolute;overflow:hidden;transform:none}body[data-dsh-deepcel] [data-deepcel-workbook-flow]>._3ljDiW_worksheetSelection{top:calc(var(--deepcel-flow-padding-top,0px) + var(--deepcel-selection-y,0px));left:calc(var(--deepcel-row-gutter) + var(--deepcel-selection-x,0px));position:absolute}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-deepcel-flow-container],body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-deepcel-cellized],body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-deepcel-cell-container]{display:contents!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-deepcel-composer-range]{grid-column:2 / span var(--deepcel-chat-columns,12);grid-row:span var(--deepcel-composer-rows,4);align-self:stretch;z-index:2!important;background:0 0!important;width:auto!important;height:auto!important;min-height:0!important;margin:0!important;padding:0!important;position:relative!important;bottom:auto!important;left:auto!important;right:auto!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [class*=composerStack]{box-sizing:border-box;gap:0!important;width:100%!important;max-width:none!important;margin:0!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-chat-flow]{background:0 0!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [class*=toBottomSlot]{z-index:6;inset:auto calc(var(--deepcel-cell-width) + 12px) calc(28px + var(--deepcel-row-height)) auto!important;width:auto!important;height:auto!important;position:fixed!important}body[data-dsh-deepcel] [data-phase=active] [class*=toBottomSlot]>button[aria-label]{width:auto;min-width:var(--deepcel-cell-width);height:var(--deepcel-row-height);color:var(--deepcel-ink);padding:0 8px;border:1px solid var(--deepcel-grid-strong)!important;border-top:2px solid var(--deepcel-selection)!important;background:var(--deepcel-sheet)!important;position:static!important;box-shadow:1px 1px #0000001f!important}body[data-dsh-deepcel] [data-phase=active] [class*=toBottomSlot]>button[aria-label]:before{content:\"↓ \"}body[data-dsh-deepcel] [data-deepcel-message-range]{box-sizing:border-box;grid-column:2 / span var(--deepcel-chat-columns,12);grid-row:span var(--deepcel-message-rows,1);background:0 0;border:0;width:auto;min-height:0;padding:0;margin:0!important}body[data-dsh-deepcel] [data-deepcel-message-range][hidden=until-found]{content-visibility:hidden;contain-intrinsic-size:0;height:0;position:absolute;display:block!important}body[data-dsh-deepcel] [data-chat-flow]>[data-step-process][data-deepcel-message-range]:not([hidden]){z-index:2;background:var(--deepcel-sheet);outline:1px solid var(--deepcel-grid-strong);outline-offset:-1px;position:relative;overflow:clip}body[data-dsh-deepcel] [data-step-process] :is(button[aria-expanded][aria-controls],[data-disclosure-row][data-expandable]){box-sizing:border-box;width:100%;height:var(--deepcel-row-height);min-height:var(--deepcel-row-height);box-shadow:inset 0 -1px var(--deepcel-grid);color:var(--deepcel-ink);font:12px/var(--deepcel-row-height) Aptos, Calibri, \"Segoe UI\", \"Microsoft YaHei\", sans-serif;text-align:left;cursor:pointer;border:0;align-items:center;gap:6px;display:flex;background:var(--deepcel-sheet)!important;border-bottom:0!important;margin:0!important;padding:0 8px 0 24px!important}body[data-dsh-deepcel] [data-step-process] button[aria-expanded][aria-controls]{font-weight:600;background:var(--deepcel-header)!important;padding-left:8px!important}body[data-dsh-deepcel] [data-step-process] [data-step-process-body] [data-disclosure-row][data-expandable]{padding-left:32px!important}body[data-dsh-deepcel] [data-step-process] :is(button[aria-expanded][aria-controls],[data-disclosure-row][data-expandable]):before{content:\"+\";box-sizing:border-box;border:1px solid var(--deepcel-grid-strong);background:var(--deepcel-sheet);width:13px;height:13px;color:var(--deepcel-ink);flex:none;justify-content:center;align-items:center;font:11px/1 Consolas,monospace;display:inline-flex}body[data-dsh-deepcel] [data-step-process] :is(button[aria-expanded=true][aria-controls],[data-disclosure-row][data-expandable][aria-expanded=true]):before{content:\"−\"}body[data-dsh-deepcel] [data-step-process] :is(button[aria-expanded][aria-controls],[data-disclosure-row][data-expandable]):is(:hover,:focus-visible){background:color-mix(in srgb, var(--deepcel-highlight-solid) 58%, var(--deepcel-sheet))!important}body[data-dsh-deepcel] [data-step-process] :is(button[aria-expanded][aria-controls],[data-disclosure-row][data-expandable])>[class*=leading]{display:none}body[data-dsh-deepcel] [data-step-process] [data-disclosure-row]>:is([class*=summary],[class*=title]){min-width:0;line-height:var(--deepcel-row-height);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}body[data-dsh-deepcel] [data-step-process] :is([data-step-process-body],[data-step-process-content]){gap:0!important;margin:0!important;padding:0!important}body[data-dsh-deepcel] [data-step-process] [data-step-process-body]{scrollbar-width:thin;max-height:calc(16 * var(--deepcel-row-height))!important}body[data-dsh-deepcel] [data-step-process] [data-step-process-content]>[data-chat-flow-kind]{margin:0!important;padding:0!important}body[data-dsh-deepcel] [data-step-process] :is([data-terminal],[data-variant]){background:0 0!important;border:0!important;margin:0!important}body[data-dsh-deepcel] [data-step-process] [data-disclosure-row]~*{box-sizing:border-box;box-shadow:inset 0 -1px var(--deepcel-grid);background:var(--deepcel-sheet);color:var(--deepcel-muted);font-size:12px;line-height:var(--deepcel-row-height);border-bottom:0;margin:0!important;padding:0 8px 0 32px!important}body[data-dsh-deepcel] [data-step-process] [data-disclosure-row]~* :is(p,li,pre,code){line-height:var(--deepcel-row-height);margin:0!important}body[data-dsh-deepcel] [data-step-process] [data-disclosure-row]~* :is(div,section,span,pre){line-height:var(--deepcel-row-height)!important;border-block-width:0!important;margin-block:0!important;padding-block:0!important}body[data-dsh-deepcel] [data-step-process] [data-disclosure-row]~* button{box-sizing:border-box;height:var(--deepcel-row-height);min-height:var(--deepcel-row-height);margin-block:0!important}body[data-dsh-deepcel] [data-deepcel-cell-container]>[data-turn-process-inline][hidden]{content-visibility:hidden;height:0;margin:0;position:absolute}body[data-dsh-deepcel] [data-chat-flow-kind]:is([data-chat-flow-kind=system-prompt],[data-chat-flow-kind=context],[data-chat-flow-kind=turn-process]):not([hidden]){background:var(--deepcel-sheet);outline:1px solid var(--deepcel-grid-strong);outline-offset:-1px}body[data-dsh-deepcel] button[data-turn-process]{box-sizing:border-box;width:100%;height:var(--deepcel-row-height);padding:0 6px}body[data-dsh-deepcel] button[data-turn-process] svg{display:block!important}body[data-dsh-deepcel] [data-deepcel-cell-container]{box-sizing:border-box;gap:0!important;margin:0!important;padding:0!important}body[data-dsh-deepcel] :is(ul,ol)[data-deepcel-cell-container]{list-style-position:inside}body[data-dsh-deepcel] [data-deepcel-content-cell]{z-index:2;box-sizing:border-box;grid-column:2 / span var(--deepcel-chat-columns,12);grid-row:span var(--deepcel-content-cell-rows,1);align-self:stretch;width:auto;height:auto;min-height:0;display:block;position:relative;overflow:hidden;border:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important;line-height:var(--deepcel-row-height)!important;border-bottom-width:0!important;border-radius:0!important;margin:0!important;padding:0 6px!important}body[data-dsh-deepcel] [data-deepcel-content-cell]:last-child{border-bottom-width:1px!important}body[data-dsh-deepcel] li[data-deepcel-content-cell]{list-style-position:inside;display:list-item;padding-left:18px!important}body[data-dsh-deepcel] [class~=md-code-block][data-deepcel-content-cell]{overflow:auto}body[data-dsh-deepcel] [class*=tableScroll][data-deepcel-content-cell]{box-shadow:inset 0 0 0 1px var(--deepcel-grid-strong);overscroll-behavior-x:contain;scrollbar-width:thin;scrollbar-color:var(--deepcel-grid-strong) transparent;overflow:auto hidden;border:0!important;padding:0!important}body[data-dsh-deepcel] [class*=tableScroll][data-deepcel-content-cell]:focus-visible{outline:2px solid var(--deepcel-selection);outline-offset:-2px}body[data-dsh-deepcel] [class*=tableScroll][data-deepcel-content-cell]>table{border-spacing:0;table-layout:auto;min-width:100%;font-size:12px;line-height:var(--deepcel-row-height);border-collapse:separate!important;border:0!important;width:max-content!important;max-width:none!important;margin:0!important}body[data-dsh-deepcel] [class*=tableScroll][data-deepcel-content-cell] :is(th,td){box-sizing:border-box;height:var(--deepcel-row-height);background:var(--deepcel-sheet);box-shadow:inset -1px -1px 0 var(--deepcel-grid);color:var(--deepcel-ink);line-height:var(--deepcel-row-height);vertical-align:top;white-space:nowrap;border:0!important;padding:0 10px!important}body[data-dsh-deepcel] [class*=tableScroll][data-deepcel-content-cell] th{background:var(--deepcel-header);color:var(--deepcel-ink);text-align:left;box-shadow:inset -1px -1px 0 var(--deepcel-grid-strong);font-weight:600}body[data-dsh-deepcel] [class*=tableScroll][data-deepcel-content-cell] :is(th,td):first-child{z-index:1;box-shadow:inset -2px -1px 0 var(--deepcel-grid-strong);position:sticky;left:0}body[data-dsh-deepcel] [class*=tableScroll][data-deepcel-content-cell] tbody tr:hover>td{background:color-mix(in srgb, var(--deepcel-highlight-solid) 45%, var(--deepcel-sheet))}body[data-dsh-deepcel] img[data-deepcel-content-cell]{object-fit:contain}body[data-dsh-deepcel] [data-sample=bash][data-variant=bash][data-deepcel-content-cell]{height:var(--deepcel-row-height);align-items:center;gap:0;display:flex;overflow:hidden;padding:0 6px!important}body[data-dsh-deepcel] [data-sample=bash][data-variant=bash]+*>[data-deepcel-content-cell]{grid-column:2 / span var(--deepcel-chat-columns,12)}body[data-dsh-deepcel] [data-sample=bash][data-variant=bash]+*>[data-terminal][data-deepcel-content-cell]{overflow:hidden;border:1px solid var(--deepcel-grid-strong)!important;margin:0!important;padding:0!important}body[data-dsh-deepcel] [data-sample=bash][data-variant=bash]+*>button[data-deepcel-content-cell]{height:var(--deepcel-row-height);opacity:1;justify-content:flex-start;align-items:center;display:flex;overflow:visible;border-radius:0!important;padding:0 8px!important}body[data-dsh-deepcel] [data-chat-flow-kind=turn-tail] [data-deepcel-content-cell]:has(>[data-produced-files-row]){min-height:var(--deepcel-row-height);grid-template-columns:max-content minmax(0,1fr);align-items:center;display:grid;overflow:hidden;gap:0 8px!important;padding:0 6px!important}body[data-dsh-deepcel] [data-chat-flow-kind=turn-tail] [data-produced-files-row]{min-width:0;height:var(--deepcel-row-height);line-height:var(--deepcel-row-height)}body[data-dsh-deepcel] [data-chat-flow-kind=turn-tail] [data-turn-tail][data-actions-reveal]>[class*=actions][data-deepcel-content-cell]{height:var(--deepcel-row-height);align-items:center;gap:0;display:flex;overflow:visible;padding:0!important}body[data-dsh-deepcel] [data-chat-flow-kind=turn-tail] [data-turn-tail][data-actions-reveal]>[class*=actions] button[aria-label]{width:auto;min-width:max-content;height:var(--deepcel-row-height);border-radius:0;padding:0 8px;border-right:1px solid var(--deepcel-grid)!important}body[data-dsh-deepcel] [data-chat-flow-kind=turn-tail] [data-turn-tail] [role=tooltip]{z-index:1000003;white-space:pre-line;width:max-content;max-width:min(420px,50vw);padding:3px 7px;overflow:visible;color:#fff!important;background:#252525!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card]{grid-template-rows:minmax(calc(3 * var(--deepcel-row-height)), 1fr) var(--deepcel-row-height);box-sizing:border-box;background:var(--deepcel-sheet)!important;gap:0!important;width:100%!important;max-width:none!important;height:100%!important;min-height:0!important;padding:0!important;display:grid!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-deepcel-composer-range] :has(>[data-composer-card]){box-sizing:border-box;align-items:stretch!important;width:100%!important;margin:0!important;padding:0!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card]>[data-input-scroll]{box-sizing:border-box;border-bottom:1px solid var(--deepcel-grid-strong);background:var(--deepcel-sheet);grid-row:1;width:100%;height:100%;min-height:0;padding:0!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [data-input-backdrop],body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] textarea,body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [data-input-mirror]{font-size:14px;line-height:var(--deepcel-row-height);padding:0 6px!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card]>[class*=row]{box-sizing:border-box;width:100%;height:var(--deepcel-row-height);min-height:var(--deepcel-row-height);grid-row:2;align-items:stretch;display:flex;gap:0!important;padding:0!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] :is([class*=tools],[class*=modes],[class*=trailing]){height:var(--deepcel-row-height);align-items:stretch;gap:0!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=tools]{flex:auto}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=trailing]{flex:none;margin-left:auto}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] :is(button,select,[role=button]):not([role=menuitem]):not([data-slot=\"conversation.input.attachments\"] *){box-sizing:border-box;min-width:var(--deepcel-cell-width);height:var(--deepcel-row-height);min-height:var(--deepcel-row-height);font:11px/var(--deepcel-row-height) Aptos, Calibri, \"Segoe UI\", sans-serif;border:0!important;border-right:1px solid var(--deepcel-grid)!important;background:var(--deepcel-sheet)!important;color:var(--deepcel-ink)!important;margin:0!important;padding:0 6px!important;transform:none!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=modes] :is(button,select,[role=button]),body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=trailing] :is(button,select,[role=button]){width:calc(2 * var(--deepcel-cell-width));max-width:calc(2 * var(--deepcel-cell-width))}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=trailing]>button:last-child{width:var(--deepcel-cell-width);min-width:var(--deepcel-cell-width);color:#fff!important;background:var(--deepcel-green)!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card]>[class*=row] button[aria-label]:has(svg):after,body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] button[aria-haspopup]:after{content:none!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] button[aria-haspopup=dialog]{width:var(--deepcel-cell-width);min-width:var(--deepcel-cell-width)}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] button[aria-haspopup=dialog]:after{content:\"Context\"!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=add]:after{content:\"Add\"!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=trailing]>button:last-child:after{content:\"Run\"!important}body[data-dsh-deepcel] [data-phase=hero] [class*=composerStack]{top:0;left:calc(var(--deepcel-row-gutter) + var(--deepcel-composer-x,0px));box-sizing:border-box;transform:none;gap:0!important;width:540px!important;max-width:none!important;height:240px!important;padding:0!important;position:absolute!important}body[data-dsh-deepcel] [data-phase=hero] [class*=headline]:has(>[class*=titleGroup]){z-index:3;box-sizing:border-box;border-top:1px solid var(--deepcel-grid-strong);border-right:1px solid var(--deepcel-grid-strong);border-bottom:1px solid var(--deepcel-grid-strong);border-left:1px solid var(--deepcel-grid-strong);background:var(--deepcel-sheet);pointer-events:auto;grid-template-columns:60px 300px 60px;align-items:center;column-gap:0;width:420px;height:24px;font-size:20px;font-weight:400;line-height:23px;display:grid;position:absolute;top:0;left:60px;overflow:hidden}body[data-dsh-deepcel] [data-phase=hero] [class*=headline]:has(>[class*=titleGroup]):before{border-right:1px solid var(--deepcel-grid);justify-content:center;align-self:stretch;align-items:center;display:flex}body[data-dsh-deepcel] [data-phase=hero] [class*=headline]>[class*=fishHitbox]{display:none}body[data-dsh-deepcel] [data-phase=hero] [class*=headline]>[class*=titleGroup]{display:contents}body[data-dsh-deepcel] [data-phase=hero] [class*=titleGroup]>span:first-child{z-index:1;background:var(--deepcel-sheet);color:var(--deepcel-ink);cursor:text;text-align:center;text-overflow:ellipsis;user-select:text;white-space:nowrap;justify-content:center;align-self:stretch;align-items:center;display:flex;position:relative;overflow:hidden}body[data-dsh-deepcel] [data-phase=hero] :is([class*=titleGroup]>span:first-child,[class*=previewBadge])[data-deepcel-selected-range]{z-index:4;outline:2px solid var(--deepcel-selection);outline-offset:-2px}body[data-dsh-deepcel] [data-phase=hero] :is([class*=titleGroup]>span:first-child,[class*=previewBadge])[data-deepcel-selected-range]:after{content:\"\";box-sizing:border-box;border:1px solid var(--deepcel-sheet);background:var(--deepcel-selection);pointer-events:none;width:7px;height:7px;position:absolute;bottom:0;right:0}body[data-dsh-deepcel] [data-phase=hero] [class*=headline][data-deepcel-selected-range=formula]:before{z-index:4;outline:2px solid var(--deepcel-selection);outline-offset:-2px;position:relative}body[data-dsh-deepcel] [data-phase=hero] [class*=previewBadge]{border-left:1px solid var(--deepcel-grid);background:var(--deepcel-sheet);border-top:0;border-bottom:0;border-right:0;border-radius:0;justify-content:center;align-self:stretch;align-items:center;margin:0;padding:0;font-size:12px;line-height:23px;display:flex}body[data-dsh-deepcel]:has([data-trajectory-scroll]) :is(._3ljDiW_rowChrome,._3ljDiW_worksheetSelection){visibility:hidden}body[data-dsh-deepcel] [data-slot=conversation\\.view]>:has([data-trajectory-scroll]){z-index:2;position:relative;background:var(--deepcel-sheet)!important}body[data-dsh-deepcel] [data-trajectory-scroll]{box-sizing:border-box;padding-left:var(--deepcel-row-gutter);background-color:var(--deepcel-sheet);background-image:linear-gradient(to right, var(--deepcel-grid) 1px, transparent 1px);background-size:var(--deepcel-cell-width) 100%;background-position-x:var(--deepcel-row-gutter)}body[data-dsh-deepcel] [data-trajectory-scroll]>table{border-spacing:0;background:var(--deepcel-sheet);font-family:Aptos,Calibri,Segoe UI,Microsoft YaHei,sans-serif;font-size:12px;line-height:18px}body[data-dsh-deepcel] [data-trajectory-scroll]>table col:first-child{width:calc(2 * var(--deepcel-cell-width))}body[data-dsh-deepcel] tr[data-trajectory-row-key]>td:first-child{position:relative}body[data-dsh-deepcel] tr[data-trajectory-row-key]:after{content:none}body[data-dsh-deepcel] tr[data-trajectory-row-key]:not([data-request-only])>td:first-child:after{content:attr(data-deepcel-trajectory-row);inset:0 auto 0 calc(-1 * var(--deepcel-row-gutter));box-sizing:border-box;width:var(--deepcel-row-gutter);border-right:1px solid var(--deepcel-grid-strong);border-bottom:1px solid var(--deepcel-grid);color:var(--deepcel-muted);background:var(--deepcel-header);justify-content:flex-end;align-items:center;padding-right:7px;font:11px/18px Aptos,Calibri,sans-serif;display:flex;position:absolute}body[data-dsh-deepcel] tr[data-trajectory-row-key]>td{vertical-align:middle;border-bottom:1px solid var(--deepcel-grid);background:var(--deepcel-sheet)}body[data-dsh-deepcel] tr[data-trajectory-row-key]>td:first-child{border-right:1px solid var(--deepcel-grid);padding:0!important}body[data-dsh-deepcel] tr[data-trajectory-row-key] [class*=eventInner]{width:var(--deepcel-cell-width);margin-left:var(--deepcel-cell-width);justify-content:center}body[data-dsh-deepcel] tr[data-trajectory-row-key] [class*=kindSlot]{width:auto;padding:0}body[data-dsh-deepcel] tr[data-trajectory-row-key] [class*=kindTagIcon] svg{display:block!important}body[data-dsh-deepcel] tr[data-trajectory-row-key]>td:last-child{z-index:1;background:var(--deepcel-sheet);position:relative;padding-inline:8px!important}body[data-dsh-deepcel] tr[data-trajectory-row-key] [class*=contentText]{line-height:18px}body[data-dsh-deepcel] tr[data-trajectory-row-key]:hover>td{background:var(--dsw-alias-interactive-bg-hover)}body[data-dsh-deepcel] tr[data-trajectory-row-key][aria-selected=true]>td,body[data-dsh-deepcel] tr[data-trajectory-row-key][aria-selected=true]>td:first-child:after{background:var(--deepcel-green-soft);color:var(--deepcel-green-dark)}body[data-dsh-deepcel][data-ds-dark-theme] tr[data-trajectory-row-key][aria-selected=true]>td,body[data-dsh-deepcel][data-ds-dark-theme] tr[data-trajectory-row-key][aria-selected=true]>td:first-child:after{color:var(--deepcel-ink);background:#293b31}body[data-dsh-deepcel] [data-phase=hero] [class*=heroWorkspaceRow]{box-sizing:border-box;height:24px;position:absolute;top:48px;left:0;width:540px!important;padding:0!important}body[data-dsh-deepcel] [data-phase=hero] [class*=heroWorkspaceRow]>button{box-sizing:border-box;width:60px;height:24px;min-height:24px;font-size:11px;border:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important;padding:0 5px!important}body[data-dsh-deepcel] [data-phase=hero] [class*=heroWorkspaceRow]>button:after{content:none!important}body[data-dsh-deepcel] [data-phase=hero] :has(>[data-composer-card]){box-sizing:border-box;position:absolute;top:72px;left:0;width:540px!important;height:168px!important;padding:0!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card]{box-sizing:border-box;grid-template-rows:144px 24px;gap:0!important;width:540px!important;height:168px!important;min-height:168px!important;padding:0!important;display:grid!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card]>[class*=scroll]{grid-row:1;min-height:0;padding:0!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=grow]{height:100%}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] textarea{box-sizing:border-box;width:100%;font-size:12px;line-height:24px;height:100%!important;padding:0 5px!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card]>[class*=row]{box-sizing:border-box;border-top:1px solid var(--deepcel-grid-strong);grid-row:2;align-items:stretch;width:540px;height:24px;min-height:24px;position:absolute;bottom:-2px;left:-2px;padding:0!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] :is([class*=tools],[class*=trailing]){align-items:stretch;gap:0;height:23px}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=trailing]{margin-left:auto}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] :is(button,[role=button]):not([role=menuitem]):not([data-slot=\"conversation.input.attachments\"] *){box-sizing:border-box;width:auto;min-width:60px;height:23px;min-height:23px;border:0!important;border-right:1px solid var(--deepcel-grid)!important;background:color-mix(in srgb, var(--deepcel-sheet) 94%, transparent)!important;padding:0 5px!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=trailing]>button:last-child{color:#fff!important;background:var(--deepcel-green)!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=add]:after{content:\"Add\"!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=modes] button:not([role=menuitem])>span,body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=trailing] button[aria-haspopup=menu]:not([role=menuitem])>span{display:none!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=modes] button:not([role=menuitem]):after{content:\"Access\"!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=trailing] button[aria-haspopup=menu]:not([role=menuitem]):after{content:\"Model\"!important}body[data-dsh-deepcel] [data-composer-card] [role=menu] [role=menuitem]>span{display:inline-flex!important}body[data-dsh-deepcel] [data-composer-card] [role=menu] [role=menuitem]:after{content:none!important;display:none!important}body[data-dsh-deepcel] :is([class*=bubble],[data-terminal],[data-variant=think]){border:1px solid var(--deepcel-grid)!important;background:color-mix(in srgb, var(--deepcel-sheet) 94%, transparent)!important;box-shadow:none!important}body[data-dsh-deepcel] [class*=userRow] [class*=userStack]>[class*=bubble]{box-sizing:border-box;width:min(420px,100%);max-width:100%;position:relative;border:1px solid color-mix(in srgb, var(--deepcel-comment-accent) 52%, var(--deepcel-grid-strong))!important;border-left:4px solid var(--deepcel-comment-accent)!important;background:var(--deepcel-comment-fill)!important;box-shadow:2px 2px 0 color-mix(in srgb, var(--deepcel-grid-strong) 44%, transparent)!important;padding:29px 12px 8px!important}body[data-dsh-deepcel] [class*=userRow] [class*=userStack]>[class*=bubble]:before{content:\"COMMENT\";box-sizing:border-box;height:var(--deepcel-row-height);border-bottom:1px solid color-mix(in srgb, var(--deepcel-comment-accent) 35%, var(--deepcel-grid));background:var(--deepcel-comment-header);color:var(--deepcel-comment-accent);font:600 9px/var(--deepcel-row-height) Consolas, monospace;letter-spacing:.08em;padding:0 8px;position:absolute;inset:0 0 auto}body[data-dsh-deepcel] [class*=userRow] [class*=userStack]>[class*=bubble]:after{content:\"\";border-top:1px solid var(--deepcel-comment-accent);background:linear-gradient(45deg, transparent 48%, var(--deepcel-comment-fill) 49%);width:10px;height:10px;position:absolute;top:22px;right:-11px;transform:skewY(-35deg)}body[data-dsh-deepcel] :is([data-state=running],[data-status=running]){background-image:linear-gradient(transparent 42%, var(--deepcel-highlight) 42%, var(--deepcel-highlight) 86%, transparent 86%)!important}body[data-dsh-deepcel] :is(pre,code,[data-terminal]){font-variant-numeric:tabular-nums}body[data-dsh-deepcel] :is([role=menu],[role=listbox],[data-radix-popper-content-wrapper]>*,[role=dialog]){border:1px solid var(--deepcel-grid-strong)!important;border-top:4px solid var(--deepcel-green)!important;background:var(--deepcel-sheet)!important;color:var(--deepcel-ink)!important;box-shadow:2px 3px 8px #0000002e!important}body[data-dsh-deepcel] :is([class*=_overlay],[class*=_root]):has(>[role=dialog]){box-sizing:border-box;inset:var(--deepcel-ribbon-height) 0 28px var(--deepcel-sheet-origin)!important;z-index:1000003!important;padding:var(--deepcel-row-height) var(--deepcel-cell-width)!important;backdrop-filter:none!important;background:0 0!important;justify-content:flex-start!important;align-items:flex-start!important;position:fixed!important}body[data-dsh-deepcel] :is([class*=_overlay],[class*=_root]):has(>[role=dialog])>[class*=_mask]{display:none!important}body[data-dsh-deepcel] [role=dialog]{border:1px solid var(--deepcel-grid-strong)!important;border-top:2px solid var(--deepcel-selection)!important;background:var(--deepcel-sheet)!important;box-shadow:none!important;margin:0!important}body[data-dsh-deepcel] [role=dialog]:has(>img){z-index:1000005;box-shadow:none!important;background:0 0!important;border:0!important}body[data-dsh-deepcel] [role=dialog]:has(>img)>[aria-hidden=true]{backdrop-filter:none;background:0 0}body[data-dsh-deepcel] [role=dialog]>img{border:1px solid var(--deepcel-grid-strong);border-radius:0;box-shadow:0 8px 32px #0003}body[data-dsh-deepcel] [role=dialog]:has(>img)>button svg{display:block!important}body[data-dsh-deepcel] [role=dialog]:has(>img)>button:after{content:none!important}body[data-dsh-deepcel] [class*=_panel][role=dialog][aria-modal=true]{width:min(720px, calc(100vw - var(--deepcel-sheet-origin) - 120px))!important;height:min(672px, calc(100vh - var(--deepcel-ribbon-height) - 76px))!important;max-width:none!important}body[data-dsh-deepcel] [data-deepcel-header-source] button:not(:where([role=menu] *,[role=dialog] *,[role=tree] *))>span{color:#fff}body[data-dsh-deepcel] [class*=sidebarCol]:has([role=dialog]){z-index:1000003}body[data-dsh-deepcel] [role=dialog]:has(>[data-turn-usage-details],>[data-turn-time-details],>[data-session-stats-details],>[data-session-stats-usage]){z-index:1000004;border-radius:0}body[data-dsh-deepcel] [role=dialog] [class*=arrows]>button>svg{opacity:1!important;display:block!important}body[data-dsh-deepcel] [role=dialog] [class*=arrows]>button:after{content:none!important}body[data-dsh-deepcel] [role=dialog][aria-modal=true]>nav{border-right:1px solid var(--deepcel-grid-strong);min-height:0;overflow:hidden;width:180px!important;padding:24px 0 0!important}body[data-dsh-deepcel] [role=dialog][aria-modal=true]>nav>[class*=_navTitle]{flex:none}body[data-dsh-deepcel] [role=dialog][aria-modal=true]>nav>[class*=_navList]{scrollbar-width:thin;flex:auto;min-height:0;overflow:hidden auto}body[data-dsh-deepcel] [class*=_panel][role=dialog] [class*=_navCell]{flex:0 0 48px;border-bottom:1px solid var(--deepcel-grid)!important;height:48px!important;padding:0 10px!important}body[data-dsh-deepcel] [class*=_panel][role=dialog] [class*=_header]{border-bottom:1px solid var(--deepcel-grid-strong);height:48px!important;padding:12px 10px!important}body[data-dsh-deepcel] [class*=_dialog][role=dialog]{width:min(540px, calc(100vw - var(--deepcel-sheet-origin) - 120px))!important;max-height:calc(100vh - var(--deepcel-ribbon-height) - 76px)!important;gap:0!important;padding-bottom:24px!important}body[data-dsh-deepcel] [class*=_dialog][role=dialog] [class*=_header]{box-sizing:border-box;border-bottom:1px solid var(--deepcel-grid-strong);height:auto;min-height:48px;padding:12px 10px!important}body[data-dsh-deepcel] [class*=_dialog][role=dialog] [class*=_body]{margin-top:0!important;padding:24px 60px 0!important}body[data-dsh-deepcel] :is([role=menu],[role=listbox]):before{content:\"FILTER  |  Select values\";box-sizing:border-box;border-bottom:1px solid var(--deepcel-grid);background:var(--deepcel-header);min-height:25px;color:var(--deepcel-muted);letter-spacing:.04em;padding:6px 10px;font:10px/1.2 Consolas,monospace;display:block}body[data-dsh-deepcel] :is([role=menuitem],[role=option],[role=menuitemradio],[role=menuitemcheckbox]){min-height:25px;border-bottom:1px solid var(--deepcel-grid)!important}body[data-dsh-deepcel] :is([role=menuitem],[role=option],[role=menuitemradio],[role=menuitemcheckbox]):hover{background:var(--deepcel-highlight-solid)!important;color:var(--deepcel-ink)!important}body[data-dsh-deepcel] :is(select,button[aria-haspopup=menu],button[aria-haspopup=listbox]):not([data-skin-control]){border:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-header)!important;color:var(--deepcel-ink)!important}body[data-dsh-deepcel] :is(select,button[aria-haspopup=menu],button[aria-haspopup=listbox]):not([data-skin-control]):after{content:\" Filter v\";color:var(--deepcel-green-dark);padding-left:5px;font-size:10px}body[data-dsh-deepcel] svg{display:none!important}body[data-dsh-deepcel] :is([class*=cardIcon],[class*=rowIcon]) svg{display:block!important}body[data-dsh-deepcel] [class*=_panel][role=dialog] [class*=_header] button:has(>svg):has(>span)>svg{width:14px!important;height:14px!important;color:var(--deepcel-ink)!important;opacity:1!important;visibility:visible!important;display:block!important}body[data-dsh-deepcel] [role=treeitem]:before{content:\"ROW\";color:var(--deepcel-muted);flex:none;margin-right:7px;font:9px/1 Consolas,monospace}body[data-dsh-deepcel] [role=treeitem][aria-expanded]:before{content:\"BOOK\";color:var(--deepcel-green-dark)}body[data-dsh-deepcel] [data-phase=hero] [class*=headline]:has(>[class*=titleGroup]):before{content:\"FORMULA  \";color:var(--deepcel-green-dark);letter-spacing:.06em;vertical-align:middle;font:9px/1 Consolas,monospace}body[data-dsh-deepcel] button[aria-label]:has(>svg):after,body[data-dsh-deepcel] button[aria-label]:has(>span>svg):after{content:attr(aria-label);max-width:92px;color:inherit;text-overflow:ellipsis;white-space:nowrap;font:10px/1.2 Consolas,monospace;display:inline-block;overflow:hidden}body[data-dsh-deepcel] :is([data-pane=sidebar],[class*=sidebarCol]) [class*=searchButton][aria-expanded]>svg{display:none!important}body[data-dsh-deepcel] :is([data-pane=sidebar],[class*=sidebarCol]) [class*=searchButton][aria-expanded]:after{content:\"Find\";max-width:none}body[data-dsh-deepcel] :is([data-pane=sidebar],[class*=sidebarCol]) [class*=search]>input[class*=searchInput]{box-shadow:none!important;background:0 0!important;border:0!important}body[data-dsh-deepcel] :is([data-pane=sidebar],[class*=sidebarCol]) [class*=search][class*=searchExpanded]{border:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important}body[data-dsh-deepcel] [data-composer-card] [class*=trailing]>button:last-child:after{color:inherit;font:10px/1 Consolas,monospace;content:\"Run\"!important}body[data-dsh-deepcel] :is(button,[role=button]):focus-visible{outline:2px solid var(--deepcel-selection)!important;outline-offset:-1px!important}body[data-dsh-deepcel] [class*=titlebar]{display:none!important}body[data-dsh-deepcel] div[class*=toggleCluster]:has(>button[class*=toggleButton]){height:var(--deepcel-row-height);border-left:1px solid var(--deepcel-grid-strong);border-bottom:1px solid var(--deepcel-grid-strong);background:var(--deepcel-header);top:calc(var(--deepcel-ribbon-height) + 4px)!important;gap:0!important;right:0!important}body[data-dsh-deepcel] div[class*=toggleCluster]:has(>button[class*=toggleButton])>button[class*=toggleButton]{width:var(--deepcel-cell-width)!important;height:var(--deepcel-row-height)!important;border:0!important;border-right:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-header)!important;color:var(--deepcel-ink)!important;font:10px/var(--deepcel-row-height) Aptos, Calibri, \"Segoe UI\", sans-serif!important;border-radius:0!important;padding:0 6px!important}body[data-dsh-deepcel] div[class*=toggleCluster]:has(>button[class*=toggleButton])>button[class*=toggleButton]:first-of-type:after{content:\"底栏\"!important;max-width:none!important}body[data-dsh-deepcel] div[class*=toggleCluster]:has(>button[class*=toggleButton])>button[class*=toggleButton]:last-of-type:after{content:\"右栏\"!important;max-width:none!important}body[data-dsh-deepcel] div[class*=toggleCluster]:has(>button[class*=toggleButton])>button[class*=toggleButton]:hover{background:var(--deepcel-highlight-solid)!important}body[data-dsh-deepcel] div[class*=panel]:has(>[class*=panelResize]+[class*=panelBody]){top:calc(var(--deepcel-ribbon-height) + 1px)!important;bottom:28px!important}body[data-dsh-deepcel] div[class*=bottomPanel]:has(>[class*=bottomResize]){box-sizing:border-box;overflow:hidden;left:var(--deepcel-sheet-origin)!important;bottom:28px!important}body[data-dsh-deepcel] div[class*=panel] button[class*=tabClose]:after,body[data-dsh-deepcel] div[class*=bottomPanel] button[class*=tabClose]:after{content:\"×\"!important;max-width:none!important;font:12px/1 Consolas,monospace!important}body[data-dsh-deepcel] div[class*=panel] button[class*=tabBarPlus]:after,body[data-dsh-deepcel] div[class*=bottomPanel] button[class*=tabBarPlus]:after{content:\"+\"!important;max-width:none!important;font:12px/1 Consolas,monospace!important}body[data-dsh-deepcel] div[class*=bottomPanel] button[class*=bottomClose]{width:40px!important;height:var(--deepcel-row-height)!important;border:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-header)!important;border-radius:0!important;top:5px!important;right:4px!important}body[data-dsh-deepcel] div[class*=bottomPanel] button[class*=bottomClose]:after{content:\"关闭\"!important;max-width:none!important;font:10px/1 Aptos,Calibri,Segoe UI,sans-serif!important}body[data-dsh-deepcel] [role=tooltip]{box-sizing:border-box;min-height:24px;z-index:1000004!important;color:#fff!important;width:max-content!important;max-width:min(360px,100vw - 16px)!important;box-shadow:none!important;white-space:normal!important;background:#252525!important;border:1px solid #111!important;border-radius:0!important;padding:4px 8px!important;font:11px/15px Aptos,Calibri,Segoe UI,sans-serif!important;overflow:visible!important}body[data-dsh-deepcel] div[class*=bottomPanel]:has(>[class*=bottomResize]) [class*=terminalWrap]{background:var(--deepcel-sheet)!important;min-width:0!important;overflow:hidden!important}body[data-dsh-deepcel] div[class*=bottomPanel]:has(>[class*=bottomResize]) [class*=terminal]{box-sizing:border-box;width:100%!important;min-width:0!important;padding:8px 10px!important;overflow:hidden!important}body[data-dsh-deepcel] div[class*=bottomPanel]:has(>[class*=bottomResize]) [class*=terminal] .xterm{font-variant-numeric:tabular-nums;width:100%!important;height:100%!important}body[data-dsh-deepcel][data-deepcel-addins]{--deepcel-addins-width:min(880px, calc(100vw - var(--deepcel-sheet-origin) - 2 * var(--deepcel-cell-width)));--deepcel-addins-left:calc(var(--deepcel-sheet-origin) + (100vw - var(--deepcel-sheet-origin) - var(--deepcel-addins-width)) / 2);--deepcel-addins-top:calc(var(--deepcel-ribbon-height) + var(--deepcel-row-height) + 30px);--deepcel-addins-bottom:calc(28px + var(--deepcel-row-height))}body[data-dsh-deepcel] ._3ljDiW_addinsCaption{top:calc(var(--deepcel-addins-top) - 30px);left:var(--deepcel-addins-left);z-index:1000001;box-sizing:border-box;width:var(--deepcel-addins-width);color:#fff;background:var(--deepcel-green);user-select:none;align-items:stretch;height:30px;padding-left:12px;font:600 12px/30px Aptos,Calibri,Segoe UI,Microsoft YaHei,sans-serif;display:flex;position:fixed;box-shadow:4px 2px 16px #0000002e}body[data-dsh-deepcel] ._3ljDiW_addinsCaption[hidden]{display:none}body[data-dsh-deepcel] ._3ljDiW_addinsTitle{text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;overflow:hidden}body[data-dsh-deepcel] button._3ljDiW_addinsClose{appearance:none;color:#fff;cursor:pointer;background:0 0;border:0;width:46px;margin:0;padding:0;font:18px/30px Aptos,Calibri,Segoe UI,sans-serif}body[data-dsh-deepcel] button._3ljDiW_addinsClose:hover{background:#c42b1c}body[data-dsh-deepcel] button._3ljDiW_addinsClose:focus-visible{outline-offset:-4px!important;outline:1px solid #fff!important}body[data-dsh-deepcel][data-deepcel-addins] section[data-plugin-panel]{z-index:1000001;box-sizing:border-box;border:1px solid var(--deepcel-grid-strong);color:var(--deepcel-ink);background:var(--deepcel-sheet);scrollbar-width:thin;border-top:0;overflow:auto;box-shadow:4px 6px 16px #00000038;inset:var(--deepcel-addins-top) auto var(--deepcel-addins-bottom) var(--deepcel-addins-left)!important;width:var(--deepcel-addins-width)!important;align-items:stretch!important;gap:16px!important;height:auto!important;padding:0 24px 24px!important;position:fixed!important}body[data-dsh-deepcel][data-deepcel-addins] section[data-plugin-panel]>*{max-width:none!important}body[data-dsh-deepcel] section[data-plugin-panel]>:is([class*=pageHead],[class*=detailTop]){border-bottom:1px solid var(--deepcel-grid);padding-bottom:8px;padding-top:16px!important}body[data-dsh-deepcel] section[data-plugin-panel] h1{font-size:18px}body[data-dsh-deepcel] section[data-plugin-panel] ul[class*=cards]{border:1px solid var(--deepcel-grid-strong);border-bottom:0;gap:0!important}body[data-dsh-deepcel] section[data-plugin-panel] ul[class*=cards]>li{border:0!important;border-bottom:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important;box-shadow:none!important;margin:0!important}body[data-dsh-deepcel] section[data-plugin-panel] ul[class*=cards]>li:hover{background:color-mix(in srgb, var(--deepcel-highlight-solid) 38%, var(--deepcel-sheet))!important}body[data-dsh-deepcel] [role=dialog][aria-modal=true] [class*=_header] button[aria-label]:has(>svg):after{content:none!important}body[data-dsh-deepcel] [role=dialog][aria-modal=true] [class*=_header] button[aria-label]>svg{width:14px;height:14px;display:block!important}body[data-dsh-deepcel] section[data-plugin-panel] button svg{display:block!important}body[data-dsh-deepcel] section[data-plugin-panel] button[aria-label]:after{content:none!important}@media (width<=900px){body[data-dsh-deepcel]{min-width:0}body[data-dsh-deepcel][data-deepcel-addins]{--deepcel-addins-width:calc(100vw - var(--deepcel-sheet-origin));--deepcel-addins-left:var(--deepcel-sheet-origin);--deepcel-addins-top:calc(var(--deepcel-ribbon-height) + 30px);--deepcel-addins-bottom:28px}body[data-dsh-deepcel] ._3ljDiW_toolCell:not(button):nth-last-child(-n+3),body[data-dsh-deepcel] ._3ljDiW_columnCell:nth-last-child(-n+4),body[data-dsh-deepcel] ._3ljDiW_statusCell{display:none}body[data-dsh-deepcel] ._3ljDiW_ribbonTab{padding-inline:10px}}body[data-dsh-deepcel] #root [data-deepcel-composer-range]{border:0!important;min-height:0!important;margin:0!important;padding:0!important;overflow:visible!important}body[data-dsh-deepcel] #root [data-phase] [data-deepcel-formula-owner]{z-index:1000002!important;pointer-events:none!important;position:relative!important;overflow:visible!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card]{z-index:1000002!important;box-sizing:border-box!important;width:auto!important;min-width:0!important;max-width:none!important;height:var(--deepcel-formula-height)!important;border:0!important;border-bottom:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important;min-height:0!important;box-shadow:none!important;pointer-events:auto!important;border-radius:0!important;margin:0!important;padding:0!important;display:block!important;position:fixed!important;inset:89px 0 auto 106px!important;overflow:visible!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] *{visibility:hidden!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] [data-input-scroll]{overscroll-behavior:contain;box-sizing:border-box!important;width:calc(100% - 128px)!important;height:var(--deepcel-editor-height,28px)!important;max-height:var(--deepcel-editor-height,28px)!important;visibility:visible!important;margin:0!important;padding:0!important;position:relative!important;overflow:hidden auto!important}body[data-dsh-deepcel] #root [data-phase] [data-input-scroll]>div{min-height:28px!important;position:relative!important}body[data-dsh-deepcel] #root [data-phase] [data-deepcel-formula-input]{cursor:text;box-sizing:border-box!important;visibility:visible!important;background:var(--deepcel-sheet)!important;width:100%!important;height:auto!important;min-height:28px!important;max-height:none!important;color:var(--deepcel-ink)!important;-webkit-text-fill-color:currentColor!important;caret-color:var(--deepcel-selection)!important;white-space:pre-wrap!important;pointer-events:auto!important;opacity:1!important;border:0!important;margin:0!important;padding:5px 10px!important;font:12px/18px Consolas,monospace!important;display:block!important;position:relative!important;overflow:visible!important}body[data-dsh-deepcel] #root [data-phase] [data-deepcel-formula-input] *,body[data-dsh-deepcel] #root [data-phase] [data-composer-placeholder]{visibility:visible!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-placeholder]{color:var(--deepcel-muted)!important;pointer-events:none!important;font:12px/18px Consolas,monospace!important;inset:5px 10px auto!important}body[data-dsh-deepcel] #root [data-phase] [data-deepcel-formula-input] p{margin:0!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card]>[class*=row]{border-left:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-header)!important;flex-wrap:nowrap!important;gap:0!important;width:128px!important;height:28px!important;min-height:0!important;padding:0!important;display:flex!important;position:absolute!important;inset:0 0 auto auto!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] :is([class*=tools],[class*=trailing]){flex:0 auto!important;gap:0!important;min-width:0!important;display:flex!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] [class*=modes],body[data-dsh-deepcel] #root [data-phase] [data-composer-card] [class*=trailing]>:not(button,[role=tooltip]){display:none!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] :is([class*=tools],[class*=trailing])>button:not([aria-haspopup=menu],[aria-haspopup=dialog]),body[data-dsh-deepcel] #root [data-phase] [data-composer-card] :is([class*=tools],[class*=trailing])>button:not([aria-haspopup=menu],[aria-haspopup=dialog]) *{visibility:visible!important;pointer-events:auto!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] :is([class*=tools],[class*=trailing])>button:not([aria-haspopup=menu],[aria-haspopup=dialog]){width:32px!important;min-width:0!important;height:28px!important;color:var(--deepcel-selection)!important;background:0 0!important;border:0!important;border-radius:0!important;justify-content:center!important;align-items:center!important;padding:4px!important;display:inline-flex!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] :is([class*=tools],[class*=trailing])>button:not([aria-haspopup=menu],[aria-haspopup=dialog]):after{content:none!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] :is([class*=tools],[class*=trailing])>button:not([aria-haspopup=menu],[aria-haspopup=dialog]):disabled{opacity:.4!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] :is([class*=tools],[class*=trailing])>button:not([aria-haspopup=menu],[aria-haspopup=dialog]):focus-visible{outline:2px solid var(--deepcel-selection)!important;outline-offset:-2px!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] [role=tooltip]{visibility:visible!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card]>[class*=overlayAnchor]{visibility:visible!important;inset:100% 0 auto!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card]>[class*=overlayAnchor] *{visibility:visible!important;pointer-events:auto!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] [data-slot=\"conversation.input.overlay\"]>*{width:min(560px,100%)!important;max-height:min(360px, calc(100dvh - var(--deepcel-ribbon-height) - 48px))!important;border:1px solid var(--deepcel-grid-strong)!important;border-top:3px solid var(--deepcel-selection)!important;background:var(--deepcel-sheet)!important;border-radius:0!important;top:4px!important;bottom:auto!important}body[data-dsh-deepcel] #root [data-composer-card] [data-slot=\"conversation.input.attachments\"] *,body[data-dsh-deepcel] #root [data-composer-card] [role=status]{visibility:visible!important;pointer-events:auto!important}body[data-dsh-deepcel] #root [data-composer-card] [data-slot=\"conversation.input.attachments\"]>[class*=rail]{inset:var(--deepcel-editor-height,28px) 0 auto;box-sizing:border-box;border-top:1px solid var(--deepcel-grid);background:var(--deepcel-sheet);height:72px;padding:4px 8px;position:absolute}body[data-dsh-deepcel] #root [data-composer-card] [data-slot=\"conversation.input.attachments\"] button{border-radius:0}body[data-dsh-deepcel] #root [data-composer-card] [data-slot=\"conversation.input.attachments\"] [role=group]>div:has(>div>button>img){flex:0 0 96px;width:96px}body[data-dsh-deepcel] #root [data-composer-card] [data-slot=\"conversation.input.attachments\"] button[class*=_thumbnail]{border:1px solid var(--deepcel-grid-strong);background:var(--deepcel-header);width:96px;height:64px}body[data-dsh-deepcel] #root [data-composer-card] [data-slot=\"conversation.input.attachments\"] button[class*=_thumbnail] img{object-fit:contain}body[data-dsh-deepcel] #root [data-composer-card] [data-slot=\"conversation.input.attachments\"] button[class*=_remove]{opacity:1;border:1px solid var(--deepcel-grid-strong);background:var(--deepcel-sheet);width:20px;min-width:20px;height:20px;min-height:20px;color:var(--deepcel-ink)}body[data-dsh-deepcel] #root [data-composer-card] [data-slot=\"conversation.input.attachments\"] button svg{display:block!important}body[data-dsh-deepcel] #root [data-composer-card] [data-slot=\"conversation.input.attachments\"] button:after{content:none!important}body[data-dsh-deepcel] :is([data-goal-bar],[data-queue-dock],[data-approval-key]){box-sizing:border-box;border:1px solid var(--deepcel-grid-strong);border-left:3px solid var(--deepcel-selection);color:var(--deepcel-ink);background:var(--deepcel-sheet);width:100%!important;max-width:none!important;margin:0 0 var(--deepcel-row-height)!important;pointer-events:auto!important;border-radius:0!important;padding:0!important}body[data-dsh-deepcel] :is([data-goal-bar],[data-queue-dock])>div{background:var(--deepcel-header)!important;border-radius:0!important;max-width:none!important;margin:0!important;padding:6px 8px!important}body[data-dsh-deepcel] [data-queue-dock] li{border-bottom:1px solid var(--deepcel-grid);background:var(--deepcel-sheet);border-radius:0;min-height:24px}body[data-dsh-deepcel] :is([data-goal-bar],[data-queue-dock],[data-approval-key]) :is(button,input,textarea){pointer-events:auto!important;border-radius:0!important}body[data-dsh-deepcel] :is([data-goal-bar],[data-queue-dock]) button[aria-label]{width:auto;min-width:28px;padding-inline:7px}body[data-dsh-deepcel] :is([data-goal-bar],[data-queue-dock]) button[aria-label]:after{max-width:none!important}body[data-dsh-deepcel] :is([data-goal-bar],[data-queue-dock]) button:is(:hover,:focus-visible),body[data-dsh-deepcel] :is([data-goal-bar],[data-queue-dock]) button[aria-expanded=true]{color:var(--deepcel-selection);background:var(--deepcel-green-soft)}body[data-dsh-deepcel][data-ds-dark-theme] :is([data-goal-bar],[data-queue-dock]) button:is(:hover,:focus-visible),body[data-dsh-deepcel][data-ds-dark-theme] :is([data-goal-bar],[data-queue-dock]) button[aria-expanded=true]{background:#293b31}body[data-dsh-deepcel] [data-phase=active] :has(+*>*>[data-chat-flow]):has(>nav){z-index:8;box-sizing:border-box;pointer-events:none;width:28px;container-type:normal;inset:var(--deepcel-ribbon-height) 12px 28px auto!important;height:auto!important;padding:0!important;position:fixed!important}body[data-dsh-deepcel] [data-phase=active] :has(+*>*>[data-chat-flow])>nav{--turn-rail-band:calc(100dvh - var(--deepcel-ribbon-height) - 28px);border-inline:1px solid var(--deepcel-grid);background:var(--deepcel-header);right:0}body[data-dsh-deepcel] [data-phase=active] :has(+*>*>[data-chat-flow])>nav button[aria-label]{border-radius:0}body[data-dsh-deepcel] [data-phase=active] :has(+*>*>[data-chat-flow])>nav button[aria-label]:before{background:var(--deepcel-grid-strong);border-radius:0;height:4px}body[data-dsh-deepcel] [data-phase=active] :has(+*>*>[data-chat-flow])>nav button:is([aria-current=true],[class*=markActive],:focus-visible):before{background:var(--deepcel-selection)}body[data-dsh-deepcel] [data-phase=active] :has(+*>*>[data-chat-flow])>nav button:focus-visible{outline:1px solid var(--deepcel-selection)}body[data-dsh-deepcel] [data-phase=active] :has(+*>*>[data-chat-flow])>nav [role=tooltip]{width:300px;border-left:3px solid var(--deepcel-selection)!important}body[data-dsh-deepcel] [data-width-handle]:after,body[data-dsh-deepcel] [data-side=sidebar]:after,body[data-dsh-deepcel] [data-side=rightbar]:after{background:var(--deepcel-selection);border-radius:0}body[data-dsh-deepcel] [data-deepcel-header-source] [data-slot=\"conversation.session.header.utilities\"] div:has(>button[aria-haspopup=menu]){border:0;height:30px;overflow:visible}body[data-dsh-deepcel] [data-deepcel-header-source] [data-slot=\"conversation.session.header.utilities\"] div:has(>button[aria-haspopup=menu]) button{box-sizing:border-box;justify-content:center;align-items:center;width:30px;min-width:30px;height:30px;display:inline-flex;color:#fff!important;background:0 0!important;border:0!important;border-left:1px solid #ffffff38!important;padding:6px!important}body[data-dsh-deepcel] [data-deepcel-header-source] [data-slot=\"conversation.session.header.utilities\"] div:has(>button[aria-haspopup=menu]) button:is(:hover,:focus-visible,[aria-expanded=true]){background:#ffffff29!important}body[data-dsh-deepcel] [data-deepcel-header-source] [data-slot=\"conversation.session.header.utilities\"] div:has(>button[aria-haspopup=menu]) button:disabled{opacity:.5}body[data-dsh-deepcel] [data-deepcel-header-source] [data-slot=\"conversation.session.header.utilities\"] div:has(>button[aria-haspopup=menu]) button[data-state=error]{color:#ffe2df!important;background:#a4262c!important}body[data-dsh-deepcel] [data-deepcel-header-source] [data-slot=\"conversation.session.header.utilities\"] div:has(>button[aria-haspopup=menu]) button:after,body[data-dsh-deepcel] [data-sidebar-right-expand]:after{content:none!important}body[data-dsh-deepcel] [data-deepcel-header-source] [data-slot=\"conversation.session.header.utilities\"] div:has(>button[aria-haspopup=menu]) svg,body[data-dsh-deepcel] [data-sidebar-right-expand]>svg{display:block!important}body[data-dsh-deepcel] [data-deepcel-header-source] [role=menu]{max-height:calc(100dvh - 64px);color:var(--deepcel-ink)!important;background:var(--deepcel-sheet)!important}body[data-dsh-deepcel] [data-deepcel-header-source] [role=menu] button{min-height:28px;color:var(--deepcel-ink)}body[data-dsh-deepcel] [data-deepcel-header-source] [role=menu] button>span{color:inherit}body[data-dsh-deepcel] [data-deepcel-header-source] [role=menu] svg{display:block!important}body[data-dsh-deepcel] [data-sidebar-right-expand]{box-sizing:border-box;width:30px;min-width:30px;height:30px;padding:7px!important}body[data-dsh-deepcel] [data-deepcel-header-source] :is([class*=headerUtilities],[data-conversation-header-corner]) button[aria-label]{width:30px;min-width:30px;height:30px;color:#fff!important;background:0 0!important;border:0!important;border-left:1px solid #ffffff38!important;padding:7px!important}body[data-dsh-deepcel] [data-deepcel-header-source] :is([class*=headerUtilities],[data-conversation-header-corner]) button[aria-label]:is(:hover,:focus-visible,[aria-expanded=true]){background:#ffffff29!important}body[data-dsh-deepcel] [data-deepcel-header-source] :is([class*=headerUtilities],[data-conversation-header-corner]) button[aria-label]:after{content:none!important}body[data-dsh-deepcel] [data-deepcel-header-source] :is([class*=headerUtilities],[data-conversation-header-corner]) button[aria-label]>svg{color:#fff;width:16px;height:16px;display:block!important}body[data-dsh-deepcel]>:is([role=menu],[role=tree]){z-index:1000004!important}body[data-dsh-deepcel]>[role=tree]{border:1px solid var(--deepcel-grid-strong);border-top:3px solid var(--deepcel-selection);background:var(--deepcel-sheet);color:var(--deepcel-ink)}body[data-dsh-deepcel] [class*=sidebarCol] nav:has([data-slot=sidebar\\.panellist]) button{min-height:var(--deepcel-row-height);border-bottom:1px solid var(--deepcel-grid);color:var(--deepcel-ink);background:var(--deepcel-sheet)}body[data-dsh-deepcel] [class*=sidebarCol] nav:has([data-slot=sidebar\\.panellist]) button:is(:hover,:focus-visible,[aria-current=page]){color:var(--deepcel-ink);background:var(--deepcel-highlight-solid);box-shadow:inset 3px 0 var(--deepcel-selection)}body[data-dsh-deepcel] [class*=sidebarCol] nav:has([data-slot=sidebar\\.panellist]) button:after{content:none!important}body[data-dsh-deepcel] [class*=sidebarCol] nav[class*=panelList]{gap:0;padding:0}body[data-dsh-deepcel] [class*=sidebarCol] nav[class*=panelList]>button{height:var(--deepcel-row-height);justify-content:flex-start;margin:0;padding:0 8px}body[data-dsh-deepcel] [class*=sidebarCol] nav[class*=panelList]>button:before{content:\"PANE\";color:var(--deepcel-muted);flex:none;margin-right:7px;font:9px/1 Consolas,monospace}body[data-dsh-deepcel] [class*=sidebarCol] [class*=logoRow]:not(:has(>:not([data-deepcel-native-proxy]))){display:none!important}body[data-dsh-deepcel] [class*=sidebarCol] [class*=sectionHeader] :is([class*=headerActions],[class*=searchSlot]) button[aria-label]{min-width:28px;width:auto!important;padding:0 6px!important}body[data-dsh-deepcel] [class*=sidebarCol] [class*=sectionHeader] [class*=headerActions] button[aria-label]:after{max-width:none}body[data-dsh-deepcel] [data-sidebar-right-panel] :is([data-dockkit-host=dock],[data-dockkit-empty]),body[data-dsh-deepcel] [data-dockkit-float]{color:var(--deepcel-ink);background:var(--deepcel-sheet);border-color:var(--deepcel-grid-strong)}body[data-dsh-deepcel] [data-sidebar-right-panel][data-sidebar-right-open]{border-left:3px solid var(--deepcel-grid-strong)}body[data-dsh-deepcel] [data-sidebar-right-panel=fullscreen]{inset:var(--deepcel-ribbon-height) 0 28px;z-index:1000001}body[data-dsh-deepcel] [data-sidebar-right-float-host]{z-index:1000001}body[data-dsh-deepcel] :is([data-dockkit-strip],[data-dockkit-float-grip]){background:var(--deepcel-header);border-color:var(--deepcel-grid-strong);min-height:28px}body[data-dsh-deepcel] [data-dockkit-tab]{border-right:1px solid var(--deepcel-grid)}body[data-dsh-deepcel] :is([data-sidebar-right-panel],[data-sidebar-right-float-host]) button[aria-label]:after{content:none!important}body[data-dsh-deepcel] :is([data-sidebar-right-panel],[data-sidebar-right-float-host]) svg{display:block!important}body[data-dsh-deepcel] :is([data-sidebar-right-panel],[data-sidebar-right-float-host]) button:is(:hover,:focus-visible){background:var(--deepcel-highlight-solid)}body[data-dsh-deepcel] :is([data-sidebar-right-panel],[data-sidebar-right-float-host]) button:disabled{opacity:.45}body[data-dsh-deepcel] [data-composer-stats]{box-sizing:border-box;width:100%;max-width:none;min-height:var(--deepcel-row-height);box-shadow:inset 0 1px var(--deepcel-grid), inset 0 -1px var(--deepcel-grid);color:var(--deepcel-muted);background:var(--deepcel-header);pointer-events:auto;border:0;justify-content:flex-end;gap:0;padding:0;font:11px/22px Aptos,Calibri,Segoe UI,sans-serif;margin:0!important}body[data-dsh-deepcel] [data-deepcel-composer-range] [class*=dock]:has(>[data-slot=\"conversation.composer.dock\"]){min-height:var(--deepcel-row-height);align-items:stretch;margin:0!important;padding:0!important}body[data-dsh-deepcel] [data-composer-stats] button{min-height:var(--deepcel-row-height);border-left:1px solid var(--deepcel-grid)}body[data-dsh-deepcel] [data-composer-stats] button:is(:hover,:focus-visible,[aria-expanded=true]){color:var(--deepcel-ink);background:var(--deepcel-highlight-solid)}body[data-dsh-deepcel] [data-composer-stats] button:after{content:none!important}body[data-dsh-deepcel] [data-deepcel-formula-owner] [class*=dock] button[aria-haspopup=dialog]:not([data-composer-stats] *)>span{display:none}body[data-dsh-deepcel] [data-deepcel-formula-owner] [class*=dock] button[aria-haspopup=dialog]{pointer-events:auto}body[data-dsh-deepcel] [data-deepcel-formula-owner] [class*=dock] button[aria-haspopup=dialog]:not([data-composer-stats] *):after{max-width:none;font:11px/22px Aptos,Calibri,Segoe UI,sans-serif}body[data-dsh-deepcel] [data-composer-stats] svg,body[data-dsh-deepcel] [data-produced-files-row]>button>svg,body[data-dsh-deepcel] [data-slot=\"conversation.input.attachments\"] svg{display:block!important}body[data-dsh-deepcel] [data-produced-files-row]>button:after{content:none!important}body[data-dsh-deepcel] [data-deepcel-header-source] [data-team-action]>[role=dialog]{left:auto;right:0}body[data-dsh-deepcel] [data-team-action]>[role=dialog] button[aria-label]:has(>svg):after{content:none!important}body[data-dsh-deepcel] [data-team-action]>[role=dialog] button[aria-label]>svg{display:block!important}body[data-dsh-deepcel]>ul[aria-label][style]:has(>li>[class*=metadata]){z-index:1000004;border:1px solid var(--deepcel-grid-strong);border-top:3px solid var(--deepcel-selection);background:var(--deepcel-sheet);border-radius:0;box-shadow:2px 2px #0000001f}body[data-dsh-deepcel]>ul[aria-label][style]:has(>li>[class*=metadata])>li{border-bottom:1px solid var(--deepcel-grid);border-radius:0}body[data-dsh-deepcel] [class*=sidebarCol] :is(button[data-phase=disconnected],button[data-phase=connecting],[role=status][aria-label]){border:1px solid var(--deepcel-grid-strong);border-radius:0;background:var(--deepcel-header)!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] :is([class*=tools],[class*=trailing])>button:not([aria-haspopup=menu],[aria-haspopup=dialog])>svg{opacity:1!important;width:14px!important;height:14px!important;display:block!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] [class*=trailing]>button:not([aria-haspopup]){transform:none!important}@media (prefers-reduced-motion:reduce){body[data-dsh-deepcel] *,body[data-dsh-deepcel] :before,body[data-dsh-deepcel] :after{transition:none!important;animation:none!important}}";
		const tagId = "@smalltailqwq/dsh-client-ui-skin-deepcel/skin.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@smalltailqwq/dsh-client-ui-skin-deepcel";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var skin_module_css_default = {
			"addinsCaption": "_3ljDiW_addinsCaption",
			"addinsClose": "_3ljDiW_addinsClose",
			"addinsTitle": "_3ljDiW_addinsTitle",
			"choiceCell": "_3ljDiW_choiceCell",
			"choiceEmpty": "_3ljDiW_choiceEmpty",
			"choiceHeading": "_3ljDiW_choiceHeading",
			"choiceItem": "_3ljDiW_choiceItem",
			"choiceMenu": "_3ljDiW_choiceMenu",
			"choiceName": "_3ljDiW_choiceName",
			"choiceValue": "_3ljDiW_choiceValue",
			"columnCell": "_3ljDiW_columnCell",
			"columnRow": "_3ljDiW_columnRow",
			"cornerCell": "_3ljDiW_cornerCell",
			"formulaCell": "_3ljDiW_formulaCell",
			"formulaLabel": "_3ljDiW_formulaLabel",
			"formulaRow": "_3ljDiW_formulaRow",
			"formulaTitle": "_3ljDiW_formulaTitle",
			"formulaToken": "_3ljDiW_formulaToken",
			"nameCell": "_3ljDiW_nameCell",
			"newSheetCell": "_3ljDiW_newSheetCell",
			"quickAccess": "_3ljDiW_quickAccess",
			"quickCell": "_3ljDiW_quickCell",
			"ribbonTab": "_3ljDiW_ribbonTab",
			"ribbonTabs": "_3ljDiW_ribbonTabs",
			"rowCell": "_3ljDiW_rowCell",
			"rowChrome": "_3ljDiW_rowChrome",
			"sheetNavCell": "_3ljDiW_sheetNavCell",
			"sheetTabCell": "_3ljDiW_sheetTabCell",
			"statusCell": "_3ljDiW_statusCell",
			"statusChrome": "_3ljDiW_statusChrome",
			"statusSpacer": "_3ljDiW_statusSpacer",
			"titleCell": "_3ljDiW_titleCell",
			"titleRow": "_3ljDiW_titleRow",
			"toolCell": "_3ljDiW_toolCell",
			"toolGroup": "_3ljDiW_toolGroup",
			"toolGroupLabel": "_3ljDiW_toolGroupLabel",
			"toolRow": "_3ljDiW_toolRow",
			"workbookChrome": "_3ljDiW_workbookChrome",
			"workbookClose": "_3ljDiW_workbookClose",
			"workbookTabLabel": "_3ljDiW_workbookTabLabel",
			"workbookTabs": "_3ljDiW_workbookTabs",
			"worksheetCell": "_3ljDiW_worksheetCell",
			"worksheetGrid": "_3ljDiW_worksheetGrid",
			"worksheetSelection": "_3ljDiW_worksheetSelection",
			"zoomCell": "_3ljDiW_zoomCell"
		};
		//#endregion
		//#region src/client/index.ts
		const SKIN_TITLE = "Workbook Grid · DeepSeek Harness";
		const RIBBON_TABS = [
			{
				id: "file",
				label: "File"
			},
			{
				id: "home",
				label: "Home"
			},
			{
				id: "view",
				label: "View"
			}
		];
		const CELL_WIDTH = 60;
		const ROW_HEIGHT = 24;
		const ROW_GUTTER = 40;
		const RIBBON_HEIGHT = 136;
		const FORMULA_HEIGHT = 28;
		const FORMULA_LINE_HEIGHT = 18;
		const STATUS_HEIGHT = 28;
		const COMPOSER_WIDTH = 540;
		const CHAT_WIDTH = 720;
		const CONTENT_CELL_SELECTOR = [
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"p",
			"li",
			"blockquote",
			"pre",
			"hr",
			"table",
			".md-code-block",
			".katex-display",
			"[class*=\"tableScroll\"]",
			"img",
			"[data-terminal]",
			"[data-variant=\"think\"]",
			"[class*=\"actions\"]",
			"[class*=\"stopped\"]"
		].join(", ");
		const RECORD_SELECTOR = `[data-chat-flow-kind], [data-chat-flow] > [data-step-process]`;
		/** The top-level worksheet record containing an element, if any. */
		function recordOf(element) {
			const group = element?.closest("[data-step-process]");
			if (group?.parentElement?.closest("[data-step-process]") === null) return group;
			return element?.closest("[data-chat-flow-kind]") ?? null;
		}
		function isTopLevelRecord(element) {
			return element.parentElement?.closest("[data-step-process]") === null;
		}
		function currentRibbonHeight() {
			const value = Number.parseFloat(getComputedStyle(document.body).getPropertyValue("--deepcel-ribbon-height"));
			return Number.isFinite(value) && value > 0 ? value : RIBBON_HEIGHT;
		}
		const NATIVE_ENTRY_SPECS = [
			{
				labels: [],
				ariaLabels: [
					"打开侧边栏",
					"收起侧边栏",
					"Open sidebar",
					"Collapse sidebar"
				]
			},
			{
				labels: [],
				ariaLabels: ["新建会话", "New session"]
			},
			{
				labels: [],
				ariaLabels: ["添加工作区", "Add workspace"]
			},
			{
				labels: ["设置", "Settings"],
				ariaLabels: ["设置", "Settings"]
			}
		];
		/** Required shell services: locale copy and the native panel transition seam. */
		const inject = [
			"locale",
			"layout",
			"sessions"
		];
		const cls = (name) => skin_module_css_default[name] ?? "";
		function makeCell(className, text) {
			const cell = document.createElement("span");
			cell.className = cls(className);
			cell.textContent = text;
			return cell;
		}
		function makeControl(className, action) {
			const control = document.createElement("button");
			control.type = "button";
			control.className = cls(className);
			control.dataset.skinControl = action;
			return control;
		}
		function labelsFor(snapshot) {
			if (snapshot.active === "en") return {
				file: "File",
				home: "Home",
				view: "View",
				chat: "Chat",
				sidebar: "Sidebar",
				sidebarShow: "Show sidebar",
				sidebarHide: "Hide sidebar",
				rightbar: "Side panel",
				newSession: "New session",
				newWorkspace: "New workspace",
				settings: "Settings",
				newWorkbook: "New workbook",
				addWorkbook: "+ Workbook",
				closeWorkbook: "Close workbook",
				workspace: "Workspace",
				preset: "Agent preset",
				permission: "Permission",
				model: "Model",
				thinking: "Thinking",
				groupNew: "New",
				groupOptions: "Options",
				groupTarget: "Next session",
				groupRun: "Run",
				groupSheets: "Sheets",
				groupWindow: "Window",
				empty: "No choices available",
				ready: "Ready",
				quickAccess: "Quick access",
				addins: "Add-ins",
				closeAddins: "Close add-ins"
			};
			return {
				file: "文件",
				home: "开始",
				view: "视图",
				chat: "对话",
				sidebar: "侧边栏",
				sidebarShow: "打开侧边栏",
				sidebarHide: "收起侧边栏",
				rightbar: "右侧栏",
				newSession: "新会话",
				newWorkspace: "新工作区",
				settings: "设置",
				newWorkbook: "新建工作簿",
				addWorkbook: "+ 工作簿",
				closeWorkbook: "关闭工作簿",
				workspace: "工作区",
				preset: "Agent 预设",
				permission: "权限",
				model: "模型",
				thinking: "思考",
				groupNew: "新建",
				groupOptions: "选项",
				groupTarget: "新会话",
				groupRun: "运行",
				groupSheets: "工作表",
				groupWindow: "窗口",
				empty: "暂无可选项",
				ready: "就绪",
				quickAccess: "快速访问",
				addins: "加载项",
				closeAddins: "关闭加载项"
			};
		}
		function clickNativeButton(labels, ariaLabels = []) {
			[...document.querySelectorAll("button:not([data-skin-control])")].find((button) => {
				if (button.disabled) return false;
				const text = button.textContent?.trim() ?? "";
				const aria = button.getAttribute("aria-label") ?? "";
				return labels.includes(text) || ariaLabels.includes(aria);
			})?.click();
		}
		function nativeSettingsTrigger() {
			return [...document.querySelectorAll("button:not([data-skin-control])")].find((button) => {
				const text = button.textContent?.trim() ?? "";
				const aria = button.getAttribute("aria-label") ?? "";
				return button.getAttribute("aria-haspopup") === "dialog" && (text === "设置" || text === "Settings" || aria === "设置" || aria === "Settings");
			});
		}
		function toggleNativeSettings() {
			const trigger = nativeSettingsTrigger();
			if (trigger?.getAttribute("aria-expanded") !== "true") {
				if (trigger !== void 0) trigger.click();
				else clickNativeButton(["设置", "Settings"], ["设置", "Settings"]);
				return;
			}
			[...document.querySelector("[role='dialog'][data-shortcut-modal='settings']")?.querySelectorAll("button") ?? []].find((button) => ["关闭", "Close"].includes(button.textContent?.trim() ?? ""))?.click();
		}
		/** The right panel is expanded from the header corner and collapsed from its own strip. */
		function nativeRightbarToggle() {
			return document.querySelector("#root [data-sidebar-right-expand]") ?? document.querySelector("#root [data-sidebar-right-open] [data-sidebar-right-toggle]") ?? void 0;
		}
		function rightbarOpen() {
			return document.querySelector("#root [data-sidebar-right-panel][data-sidebar-right-open]") !== null;
		}
		/** The Plugins page is the global main panel that DSH 0.1.7 marks as the plugin panel. */
		function nativeAddinsPanel() {
			return document.querySelector("#root section[data-plugin-panel]");
		}
		/**
		* Skin-owned caption for the Plugins page. The page itself stays the host's
		* main panel; CSS lifts it into a floating secondary window over the sheet and
		* this bar supplies the window title and its close command.
		*/
		function createAddinsCaption() {
			const caption = document.createElement("div");
			caption.className = cls("addinsCaption");
			caption.dataset.skinChrome = "addins";
			caption.hidden = true;
			const title = makeCell("addinsTitle", "Add-ins");
			const close = makeControl("addinsClose", "close-addins");
			close.textContent = "×";
			caption.append(title, close);
			return {
				caption,
				title,
				close
			};
		}
		function nativePanelButtons() {
			return [...document.querySelectorAll("#root [class*='sidebarCol'] nav[class*='panelList'] > button")];
		}
		function activeComposer() {
			return [...document.querySelectorAll("[data-composer-card]")].findLast((composer) => composer.isConnected) ?? null;
		}
		function nativeHeroChoiceTriggers() {
			const row = document.querySelector("#root [data-phase='hero'] [class*='heroWorkspaceRow']") ?? void 0;
			const buttons = [...row?.querySelectorAll("button[aria-haspopup='menu']:not([data-skin-control])") ?? []];
			const workspace = buttons.find((button) => button.parentElement === row) ?? buttons.find((button) => button.hasAttribute("aria-label")) ?? buttons[0];
			return {
				row,
				workspace,
				preset: buttons.find((button) => button !== workspace)
			};
		}
		function nativeHeroChoiceTrigger(kind) {
			return nativeHeroChoiceTriggers()[kind];
		}
		function nativePermissionTrigger() {
			return activeComposer()?.querySelector("[class*='modes'] button:not([data-skin-control])") ?? void 0;
		}
		function nativeModelTrigger() {
			return activeComposer()?.querySelector("[class*='trailing'] button[aria-haspopup='menu']:not([data-skin-control])") ?? void 0;
		}
		function modelLabels() {
			const trigger = nativeModelTrigger();
			const labels = [...trigger?.querySelectorAll("span") ?? []].map((label) => label.textContent?.trim() ?? "").filter(Boolean);
			return {
				model: labels[0] ?? trigger?.title ?? "",
				thinking: labels[1] ?? ""
			};
		}
		/** The permission trigger's visible label, without its accessible sentence. */
		function permissionLabel(trigger) {
			return trigger?.querySelector("[class*='triggerLabel']")?.textContent?.trim() || trigger?.textContent?.trim() || "";
		}
		function currentChoice(kind) {
			if (kind === "workspace" || kind === "preset") return nativeHeroChoiceTrigger(kind)?.textContent?.trim() ?? "";
			if (kind === "permission") return permissionLabel(nativePermissionTrigger());
			return modelLabels()[kind];
		}
		function afterPaint() {
			return new Promise((resolve) => {
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						resolve();
					});
				});
			});
		}
		function menuChoiceLabel(button) {
			return (button.querySelector("[class*='modelName']") ?? button.querySelector("[class*='itemName']") ?? button.querySelector("[class*='optionCopy'] > span:first-child"))?.textContent?.trim() || button.textContent?.trim() || "";
		}
		function controlledHeroChoiceMenu(trigger) {
			const id = trigger.getAttribute("aria-controls");
			if (id !== null) return document.getElementById(id);
			return [...document.querySelectorAll("[role='menu']")].findLast((menu) => menu.querySelector("[role='menuitem'], [role='menuitemradio']") !== null) ?? null;
		}
		async function heroChoices(kind) {
			const trigger = nativeHeroChoiceTrigger(kind);
			if (trigger === void 0 || trigger.disabled) return [];
			document.body.dataset.deepcelModelProbing = "";
			trigger.click();
			await afterPaint();
			const menu = controlledHeroChoiceMenu(trigger);
			const excluded = /* @__PURE__ */ new Set(["Add workspace", "添加工作区"]);
			const choices = [...menu?.querySelectorAll("[role='menuitem'], [role='menuitemradio']") ?? []].filter((button) => !button.disabled).map(menuChoiceLabel).filter((label) => label !== "" && !excluded.has(label.replace(/(?:…|\.{3})$/, "")));
			trigger.click();
			await afterPaint();
			delete document.body.dataset.deepcelModelProbing;
			return [...new Set(choices)];
		}
		async function applyHeroChoice(kind, label) {
			const trigger = nativeHeroChoiceTrigger(kind);
			if (trigger === void 0 || trigger.disabled) return;
			document.body.dataset.deepcelModelProbing = "";
			trigger.click();
			await afterPaint();
			const choice = [...controlledHeroChoiceMenu(trigger)?.querySelectorAll("[role='menuitem'], [role='menuitemradio']") ?? []].find((button) => menuChoiceLabel(button) === label);
			choice?.click();
			if (choice === void 0) trigger.click();
			await afterPaint();
			delete document.body.dataset.deepcelModelProbing;
		}
		function controlledModelMenu(trigger) {
			const id = trigger.getAttribute("aria-controls");
			if (id !== null) return document.getElementById(id);
			return [...document.querySelectorAll("[role='menu']")].find((menu) => menu.querySelector("button[role='menuitem']") !== null) ?? null;
		}
		function controlledPermissionMenu(trigger) {
			const id = trigger.getAttribute("aria-controls");
			if (id !== null) return document.getElementById(id);
			return [...document.querySelectorAll("[role='menu']")].find((menu) => menu.querySelector("[role='menuitem'], [role='menuitemradio']") !== null) ?? null;
		}
		async function permissionChoices() {
			const trigger = nativePermissionTrigger();
			if (trigger === void 0 || trigger.disabled) return [];
			document.body.dataset.deepcelModelProbing = "";
			trigger.click();
			await afterPaint();
			const choices = [...controlledPermissionMenu(trigger)?.querySelectorAll("[role='menuitem'], [role='menuitemradio']") ?? []].map(menuChoiceLabel).filter(Boolean);
			trigger.click();
			await afterPaint();
			delete document.body.dataset.deepcelModelProbing;
			return choices;
		}
		async function applyPermissionChoice(label) {
			const trigger = nativePermissionTrigger();
			if (trigger === void 0 || trigger.disabled) return;
			document.body.dataset.deepcelModelProbing = "";
			trigger.click();
			await afterPaint();
			[...controlledPermissionMenu(trigger)?.querySelectorAll("[role='menuitem'], [role='menuitemradio']") ?? []].find((button) => menuChoiceLabel(button) === label)?.click();
			await afterPaint();
			delete document.body.dataset.deepcelModelProbing;
		}
		async function modelChoices(kind) {
			const trigger = nativeModelTrigger();
			if (trigger === void 0 || trigger.disabled) return [];
			document.body.dataset.deepcelModelProbing = "";
			trigger.click();
			await afterPaint();
			const rootMenu = controlledModelMenu(trigger);
			[...rootMenu?.querySelectorAll("button[role='menuitem']") ?? []][kind === "model" ? 0 : 1]?.click();
			await afterPaint();
			const choices = [...rootMenu?.querySelectorAll("button[role='menuitemradio']") ?? []].map(menuChoiceLabel).filter(Boolean);
			trigger.click();
			await afterPaint();
			delete document.body.dataset.deepcelModelProbing;
			return choices;
		}
		async function applyModelChoice(kind, label) {
			const trigger = nativeModelTrigger();
			if (trigger === void 0 || trigger.disabled) return;
			document.body.dataset.deepcelModelProbing = "";
			trigger.click();
			await afterPaint();
			const rootMenu = controlledModelMenu(trigger);
			[...rootMenu?.querySelectorAll("button[role='menuitem']") ?? []][kind === "model" ? 0 : 1]?.click();
			await afterPaint();
			[...rootMenu?.querySelectorAll("button[role='menuitemradio']") ?? []].find((button) => menuChoiceLabel(button) === label)?.click();
			await afterPaint();
			delete document.body.dataset.deepcelModelProbing;
		}
		function concealNativeEntrypoints() {
			const buttons = [...document.querySelectorAll("button:not([data-skin-control])")];
			for (const button of buttons) {
				const text = button.textContent?.trim() ?? "";
				const aria = button.getAttribute("aria-label") ?? "";
				if (NATIVE_ENTRY_SPECS.some((spec) => spec.labels.includes(text) || spec.ariaLabels.includes(aria))) button.dataset.deepcelNativeProxy = "";
			}
			for (const composer of document.querySelectorAll("[data-composer-card]")) composer.dataset.deepcelMergedInput = "";
			const heroRow = nativeHeroChoiceTriggers().row;
			for (const source of document.querySelectorAll("[data-deepcel-hero-choice-source]")) if (source !== heroRow) delete source.dataset.deepcelHeroChoiceSource;
			if (heroRow !== void 0) heroRow.dataset.deepcelHeroChoiceSource = "";
		}
		function columnLabel(index) {
			let value = index + 1;
			let label = "";
			while (value > 0) {
				value -= 1;
				label = String.fromCharCode(65 + value % 26) + label;
				value = Math.floor(value / 26);
			}
			return label;
		}
		function fillColumnCoordinates(columns) {
			const count = Math.ceil((window.innerWidth - ROW_GUTTER) / CELL_WIDTH) + 1;
			const cells = [makeCell("cornerCell", "")];
			for (let index = 0; index < count; index += 1) cells.push(makeCell("columnCell", columnLabel(index)));
			columns.replaceChildren(...cells);
		}
		function fillRowCoordinates(rows, offset = 0) {
			const count = Math.ceil((window.innerHeight - currentRibbonHeight() - STATUS_HEIGHT) / ROW_HEIGHT) + 1;
			const cells = [];
			for (let index = 0; index <= count + 1; index += 1) cells.push(makeCell("rowCell", String(offset + index)));
			rows.replaceChildren(...cells);
		}
		function rangeName(range) {
			const start = `${columnLabel(range.columnStart)}${range.rowStart}`;
			const end = `${columnLabel(range.columnEnd)}${range.rowEnd}`;
			return start === end ? start : `${start}:${end}`;
		}
		function createWorksheetSurface(nameCell, rows) {
			const grid = document.createElement("div");
			grid.className = cls("worksheetGrid");
			grid.dataset.skinGrid = "";
			grid.setAttribute("aria-hidden", "true");
			const selection = document.createElement("div");
			selection.className = cls("worksheetSelection");
			selection.dataset.skinSelection = "";
			selection.setAttribute("aria-hidden", "true");
			let rowOffset = 0;
			let scrollport = null;
			let reconcileFrame;
			const messageElements = /* @__PURE__ */ new Set();
			const dirtyMessages = /* @__PURE__ */ new Set();
			const flowContainers = /* @__PURE__ */ new Set();
			let composerSeat = null;
			let selectedRangeElement = null;
			let selectedRange = null;
			const syncSelectionVisibility = () => {
				if (selectedRange === null) return;
				const residual = Number.parseFloat(document.body.style.getPropertyValue("--deepcel-scroll-y")) || 0;
				const top = currentRibbonHeight() + (selectedRange.rowStart - 1 - rowOffset) * ROW_HEIGHT + residual;
				const bottom = top + (selectedRange.rowEnd - selectedRange.rowStart + 1) * ROW_HEIGHT;
				selection.toggleAttribute("data-active", bottom > currentRibbonHeight() && top < window.innerHeight - STATUS_HEIGHT);
			};
			const clear = () => {
				selectedRange = null;
				delete selection.dataset.active;
				delete selection.dataset.overlay;
				if (selectedRangeElement !== null) delete selectedRangeElement.dataset.deepcelSelectedRange;
				selectedRangeElement = null;
				nameCell.textContent = "B4";
			};
			const updateRows = () => {
				const count = Math.ceil((window.innerHeight - currentRibbonHeight() - STATUS_HEIGHT) / ROW_HEIGHT) + 3;
				if (rows.children.length !== count) {
					fillRowCoordinates(rows, rowOffset);
					return;
				}
				for (let index = 0; index < count; index += 1) {
					const cell = rows.children.item(index);
					const label = String(rowOffset + index);
					if (cell !== null && cell.textContent !== label) cell.textContent = label;
				}
			};
			const sizeMessage = (message) => {
				const roots = [...message.children].flatMap((child) => getComputedStyle(child).display === "contents" ? [...child.children] : [child]);
				const stacked = message.matches("[data-step-process]");
				const heights = roots.map((child) => child instanceof HTMLElement ? Math.max(stacked ? 0 : child.scrollHeight, child.getBoundingClientRect().height) : 0);
				const contentHeight = stacked ? heights.reduce((sum, height) => sum + height, 0) : Math.max(0, ...heights);
				const height = Math.max(ROW_HEIGHT, Math.ceil(contentHeight / ROW_HEIGHT) * ROW_HEIGHT);
				const value = `${height}px`;
				if (message.style.getPropertyValue("--deepcel-message-height") !== value) message.style.setProperty("--deepcel-message-height", value);
				message.style.setProperty("--deepcel-message-rows", String(height / ROW_HEIGHT));
				message.dataset.deepcelMessageRange = "";
			};
			const clearMessageCells = (message) => {
				delete message.dataset.deepcelCellized;
				for (const element of message.querySelectorAll("[data-deepcel-content-cell]")) {
					delete element.dataset.deepcelContentCell;
					delete element.dataset.deepcelSingleLine;
					element.style.removeProperty("--deepcel-content-cell-height");
					element.style.removeProperty("--deepcel-content-cell-rows");
				}
				for (const element of message.querySelectorAll("[data-deepcel-cell-container]")) delete element.dataset.deepcelCellContainer;
			};
			const sizeContentCell = (cell) => {
				cell.dataset.deepcelContentCell = "";
				cell.style.removeProperty("--deepcel-content-cell-height");
				const contentHeight = Math.max(cell.scrollHeight, cell.getBoundingClientRect().height);
				const height = Math.max(ROW_HEIGHT, Math.ceil(contentHeight / ROW_HEIGHT) * ROW_HEIGHT);
				cell.style.setProperty("--deepcel-content-cell-height", `${height}px`);
				cell.style.setProperty("--deepcel-content-cell-rows", String(height / ROW_HEIGHT));
				if (height === ROW_HEIGHT) cell.dataset.deepcelSingleLine = "";
				else delete cell.dataset.deepcelSingleLine;
			};
			const syncMessageCells = (message) => {
				clearMessageCells(message);
				if (message.hasAttribute("hidden")) return;
				if (message.matches("[data-step-process]")) return;
				if (message.matches("[data-chat-flow-kind='system-prompt'], [data-chat-flow-kind='context']")) return;
				if (message.querySelector("[class*='userRow']") !== null) return;
				const producedFilesRoot = message.querySelector("[data-produced-files-row]")?.parentElement;
				const shellSummary = message.querySelector("[data-sample='bash'][data-variant='bash']");
				const shellBody = shellSummary?.nextElementSibling;
				const shellBodyCells = shellBody === null || shellBody === void 0 ? [] : [...shellBody.children].filter((child) => child instanceof HTMLElement);
				const candidates = [.../* @__PURE__ */ new Set([
					...producedFilesRoot == null ? [] : [producedFilesRoot],
					...shellSummary === null ? [] : [shellSummary, ...shellBodyCells],
					...message.querySelectorAll(CONTENT_CELL_SELECTOR)
				])].filter((candidate) => candidate instanceof HTMLElement).filter((candidate) => candidate.closest("[hidden]") === null).filter((candidate) => {
					const ancestor = candidate.parentElement?.closest(CONTENT_CELL_SELECTOR);
					return ancestor === null || ancestor === void 0 || !message.contains(ancestor);
				});
				if (candidates.length === 0) return;
				message.dataset.deepcelCellized = "";
				for (const cell of candidates) {
					let container = cell.parentElement;
					while (container !== null && container !== message) {
						container.dataset.deepcelCellContainer = "";
						container = container.parentElement;
					}
					sizeContentCell(cell);
				}
				sizeMessage(message);
			};
			const observedRecords = /* @__PURE__ */ new Map();
			const messageResizeObserver = typeof ResizeObserver === "undefined" ? void 0 : new ResizeObserver((entries) => {
				const records = /* @__PURE__ */ new Set();
				for (const entry of entries) {
					const record = observedRecords.get(entry.target);
					if (record !== void 0) records.add(record);
				}
				for (const record of records) sizeMessage(record);
			});
			const observeRecord = (message) => {
				observedRecords.set(message, message);
				messageResizeObserver?.observe(message);
				if (!message.matches("[data-step-process]")) return;
				for (const child of message.children) {
					observedRecords.set(child, message);
					messageResizeObserver?.observe(child);
				}
			};
			const unobserveRecord = (message) => {
				for (const [target, record] of observedRecords) {
					if (record !== message) continue;
					messageResizeObserver?.unobserve(target);
					observedRecords.delete(target);
				}
			};
			const syncMessages = () => {
				const live = new Set([...document.querySelectorAll(RECORD_SELECTOR)].filter(isTopLevelRecord));
				for (const message of live) {
					if (messageElements.has(message)) continue;
					syncMessageCells(message);
					sizeMessage(message);
					observeRecord(message);
				}
				for (const message of messageElements) {
					if (live.has(message)) continue;
					unobserveRecord(message);
					clearMessageCells(message);
					delete message.dataset.deepcelMessageRange;
					message.style.removeProperty("--deepcel-message-height");
					message.style.removeProperty("--deepcel-message-rows");
				}
				messageElements.clear();
				for (const message of live) messageElements.add(message);
				for (const message of dirtyMessages) if (live.has(message)) {
					syncMessageCells(message);
					sizeMessage(message);
				}
				dirtyMessages.clear();
				if (scrollport !== null) {
					const origin = scrollport.getBoundingClientRect().top - scrollport.scrollTop;
					const ranges = scrollport.querySelectorAll("[data-deepcel-message-range]:not([data-deepcel-cellized]):not([hidden]), [data-deepcel-content-cell], [data-deepcel-composer-range]");
					const bottom = Math.max(scrollport.clientHeight, ...[...ranges].filter((element) => element.closest("[hidden]") === null).map((element) => element.getBoundingClientRect().bottom - origin + 48));
					scrollport.style.setProperty("--deepcel-flow-height", `${bottom}px`);
				}
			};
			const sizeComposer = () => {
				if (composerSeat === null) return;
				const contentHeight = composerSeat.scrollHeight;
				composerSeat.style.setProperty("--deepcel-composer-rows", String(Math.max(1, Math.ceil(contentHeight / ROW_HEIGHT))));
				composerSeat.dataset.deepcelComposerRange = "";
			};
			const composerResizeObserver = typeof ResizeObserver === "undefined" ? void 0 : new ResizeObserver(() => {
				sizeComposer();
			});
			const trajectoryCells = /* @__PURE__ */ new Set();
			const syncTrajectoryRows = () => {
				const live = /* @__PURE__ */ new Set();
				for (const row of document.querySelectorAll("tr[data-trajectory-row-key]")) {
					const cell = row.querySelector("td:first-child");
					if (cell === null) continue;
					cell.dataset.deepcelTrajectoryRow = row.getAttribute("aria-rowindex") ?? "";
					live.add(cell);
				}
				for (const cell of trajectoryCells) if (!live.has(cell)) delete cell.dataset.deepcelTrajectoryRow;
				trajectoryCells.clear();
				for (const cell of live) trajectoryCells.add(cell);
			};
			const syncFlowLayout = () => {
				syncTrajectoryRows();
				const nextContainers = /* @__PURE__ */ new Set();
				const flow = scrollport?.querySelector("[data-chat-flow]") ?? null;
				const surfaceOwner = flow === null || scrollport === null ? document.body : scrollport;
				if (rows.parentElement !== surfaceOwner) surfaceOwner.append(rows);
				if (selection.parentElement !== surfaceOwner) surfaceOwner.append(selection);
				if (scrollport !== null) {
					if (flow === null) delete scrollport.dataset.deepcelWorkbookFlow;
					else {
						scrollport.dataset.deepcelWorkbookFlow = "";
						const phase = scrollport.closest("[data-phase='active']");
						const preference = Number.parseFloat(phase?.style.getPropertyValue("--dsh-chat-user-width") ?? "");
						const available = scrollport.clientWidth || window.innerWidth;
						const columns = Math.max(1, Math.floor(Math.min(Number.isFinite(preference) ? preference : CHAT_WIDTH, available - ROW_GUTTER - CELL_WIDTH) / CELL_WIDTH));
						const offset = Math.max(0, Math.round((available - ROW_GUTTER - columns * CELL_WIDTH) / 120)) * CELL_WIDTH;
						for (const [key, value] of [["--deepcel-chat-columns", String(columns)], ["--deepcel-chat-x", `${offset}px`]]) if (scrollport.style.getPropertyValue(key) !== value) scrollport.style.setProperty(key, value);
					}
				}
				let container = flow;
				while (container !== null && container !== scrollport) {
					nextContainers.add(container);
					container = container.parentElement;
				}
				for (const previous of flowContainers) if (!nextContainers.has(previous)) delete previous.dataset.deepcelFlowContainer;
				for (const current of nextContainers) current.dataset.deepcelFlowContainer = "";
				flowContainers.clear();
				for (const current of nextContainers) flowContainers.add(current);
				const nextComposer = flow === null ? null : scrollport?.querySelector("[data-composer-seat]") ?? null;
				if (nextComposer !== composerSeat) {
					if (composerSeat !== null) {
						composerResizeObserver?.unobserve(composerSeat);
						delete composerSeat.dataset.deepcelComposerRange;
						composerSeat.style.removeProperty("--deepcel-composer-rows");
					}
					composerSeat = nextComposer;
					if (composerSeat !== null) composerResizeObserver?.observe(composerSeat);
				}
				sizeComposer();
				if (scrollport !== null && flow !== null) {
					const phase = ((scrollport.getBoundingClientRect().top - currentRibbonHeight()) % ROW_HEIGHT + ROW_HEIGHT) % ROW_HEIGHT;
					scrollport.style.setProperty("--deepcel-flow-padding-top", `${(ROW_HEIGHT - phase) % ROW_HEIGHT}px`);
				} else scrollport?.style.removeProperty("--deepcel-flow-padding-top");
			};
			const syncScrollCoordinates = () => {
				if (scrollport === null) return;
				const delta = scrollport.scrollTop;
				const nextOffset = Math.trunc(delta / ROW_HEIGHT);
				const residual = delta - nextOffset * ROW_HEIGHT;
				document.body.style.setProperty("--deepcel-scroll-y", `${-residual}px`);
				document.body.style.setProperty("--deepcel-row-offset", String(nextOffset));
				document.body.style.setProperty("--deepcel-row-offset-y", `${-nextOffset * ROW_HEIGHT}px`);
				scrollport.style.setProperty("--deepcel-row-start", `${nextOffset * ROW_HEIGHT}px`);
				if (nextOffset !== rowOffset) {
					rowOffset = nextOffset;
					updateRows();
				}
				syncSelectionVisibility();
			};
			const onScroll = () => {
				syncScrollCoordinates();
			};
			const bindScrollport = () => {
				const next = document.querySelector("[data-phase='active'] [data-conversation-scroll]");
				if (next === scrollport) {
					syncFlowLayout();
					syncMessages();
					return;
				}
				scrollport?.removeEventListener("scroll", onScroll);
				scrollport?.style.removeProperty("--deepcel-flow-padding-top");
				scrollport?.style.removeProperty("--deepcel-chat-columns");
				scrollport?.style.removeProperty("--deepcel-chat-x");
				scrollport?.style.removeProperty("--deepcel-row-start");
				scrollport?.style.removeProperty("--deepcel-flow-height");
				if (scrollport !== null) delete scrollport.dataset.deepcelWorkbookFlow;
				scrollport = next;
				rowOffset = 0;
				document.body.style.setProperty("--deepcel-scroll-y", "0px");
				document.body.style.setProperty("--deepcel-row-offset", "0");
				document.body.style.setProperty("--deepcel-row-offset-y", "0px");
				updateRows();
				syncSelectionVisibility();
				if (scrollport === null) {
					syncFlowLayout();
					return;
				}
				scrollport.addEventListener("scroll", onScroll, { passive: true });
				syncFlowLayout();
				syncMessages();
				syncScrollCoordinates();
			};
			const resize = () => {
				const columns = Math.ceil((window.innerWidth - ROW_GUTTER) / CELL_WIDTH) + 1;
				const rows = Math.ceil((window.innerHeight - currentRibbonHeight() - STATUS_HEIGHT) / ROW_HEIGHT) + 3;
				const centeredSpace = Math.max(0, window.innerWidth - ROW_GUTTER - COMPOSER_WIDTH) / 2;
				const composerColumn = Math.max(0, Math.round(centeredSpace / CELL_WIDTH));
				const centeredChatSpace = Math.max(0, window.innerWidth - ROW_GUTTER - CHAT_WIDTH) / 2;
				const chatColumn = Math.max(0, Math.round(centeredChatSpace / CELL_WIDTH));
				const cells = [];
				for (let row = 0; row < rows; row += 1) for (let column = 0; column < columns; column += 1) {
					const cell = document.createElement("span");
					cell.className = cls("worksheetCell");
					cell.dataset.cell = `${columnLabel(column)}${rowOffset + row}`;
					cells.push(cell);
				}
				grid.style.setProperty("--deepcel-grid-columns", String(columns));
				document.body.style.setProperty("--deepcel-composer-x", `${composerColumn * CELL_WIDTH}px`);
				document.body.style.setProperty("--deepcel-chat-x", `${chatColumn * CELL_WIDTH}px`);
				grid.replaceChildren(...cells);
				for (const message of messageElements) syncMessageCells(message);
				bindScrollport();
				syncSelectionVisibility();
			};
			const select = (range, overlay = false, element, segment = "") => {
				selectedRange = range;
				if (selectedRangeElement !== element) {
					if (selectedRangeElement !== null) delete selectedRangeElement.dataset.deepcelSelectedRange;
					selectedRangeElement = element ?? null;
					if (selectedRangeElement !== null) selectedRangeElement.dataset.deepcelSelectedRange = segment;
				}
				selection.dataset.active = "";
				if (overlay) selection.dataset.overlay = "";
				else delete selection.dataset.overlay;
				selection.style.setProperty("--deepcel-selection-x", `${range.columnStart * CELL_WIDTH}px`);
				selection.style.setProperty("--deepcel-selection-y", `${(range.rowStart - 1) * ROW_HEIGHT}px`);
				selection.style.setProperty("--deepcel-selection-width", `${(range.columnEnd - range.columnStart + 1) * CELL_WIDTH}px`);
				selection.style.setProperty("--deepcel-selection-height", `${(range.rowEnd - range.rowStart + 1) * ROW_HEIGHT}px`);
				nameCell.textContent = rangeName(range);
				syncSelectionVisibility();
			};
			const onSheetClick = (event) => {
				if (!(event.target instanceof HTMLElement)) return;
				if (event.target.closest("[data-skin-chrome], [role=\"dialog\"]") !== null) return;
				if (event.target.closest("button, [role=\"button\"], a, input, textarea, select, [contenteditable=\"true\"]") !== null) return;
				if (event.target.closest("#root [data-phase], #root [data-conversation-scroll]") === null) return;
				const origin = (Number.parseFloat(document.body.style.getPropertyValue("--deepcel-sidebar-offset")) || 0) + ROW_GUTTER;
				const ribbonHeight = currentRibbonHeight();
				if (event.clientX < origin || event.clientY < ribbonHeight || event.clientY >= window.innerHeight - STATUS_HEIGHT) return;
				const heroHeadline = event.target.closest("[data-phase='hero'] [class*='headline']:has(> [class*='titleGroup'])");
				const heroHeadlineRect = heroHeadline?.getBoundingClientRect();
				if (heroHeadline !== null && heroHeadline !== void 0 && heroHeadlineRect !== void 0 && heroHeadlineRect.width > 0 && heroHeadlineRect.height > 0) {
					const relativeX = event.clientX - heroHeadlineRect.left;
					const title = heroHeadline.querySelector("[class*='titleGroup'] > span:first-child");
					const preview = heroHeadline.querySelector("[class*='previewBadge']");
					const segment = relativeX < CELL_WIDTH ? {
						start: heroHeadlineRect.left,
						end: heroHeadlineRect.left + CELL_WIDTH,
						element: heroHeadline,
						kind: "formula"
					} : relativeX >= heroHeadlineRect.width - CELL_WIDTH ? {
						start: heroHeadlineRect.right - CELL_WIDTH,
						end: heroHeadlineRect.right,
						element: preview,
						kind: "preview"
					} : {
						start: heroHeadlineRect.left + CELL_WIDTH,
						end: heroHeadlineRect.right - CELL_WIDTH,
						element: title,
						kind: "title"
					};
					if (segment.element === null) return;
					select({
						columnStart: Math.max(0, Math.floor((segment.start - origin) / CELL_WIDTH)),
						columnEnd: Math.max(0, Math.ceil((segment.end - origin) / CELL_WIDTH) - 1),
						rowStart: Math.max(1, Math.floor((heroHeadlineRect.top - ribbonHeight) / ROW_HEIGHT) + 1),
						rowEnd: Math.max(1, Math.ceil((heroHeadlineRect.bottom - ribbonHeight) / ROW_HEIGHT))
					}, true, segment.element, segment.kind);
					return;
				}
				const composer = event.target.closest("[data-composer-card]");
				const rect = composer?.getBoundingClientRect();
				if (composer !== null && composer !== void 0 && rect !== void 0 && rect.width > 0 && rect.height > 0) {
					select({
						columnStart: Math.max(0, Math.floor((rect.left - origin) / CELL_WIDTH)),
						columnEnd: Math.max(0, Math.ceil((rect.right - origin) / CELL_WIDTH) - 1),
						rowStart: Math.max(1, Math.floor((rect.top - ribbonHeight) / ROW_HEIGHT) + 1),
						rowEnd: Math.max(1, Math.ceil((rect.bottom - ribbonHeight) / ROW_HEIGHT))
					});
					return;
				}
				const column = Math.floor((event.clientX - origin) / CELL_WIDTH);
				const scrollY = Number.parseFloat(document.body.style.getPropertyValue("--deepcel-scroll-y")) || 0;
				const row = rowOffset + Math.floor((event.clientY - ribbonHeight - scrollY) / ROW_HEIGHT) + 1;
				select({
					columnStart: column,
					columnEnd: column,
					rowStart: row,
					rowEnd: row
				});
			};
			document.addEventListener("click", onSheetClick, true);
			const worksheetObserver = new MutationObserver((records) => {
				let changed = false;
				for (const record of records) {
					const target = record.target instanceof HTMLElement ? record.target : record.target.parentElement;
					if (target?.closest("[data-skin-chrome], [data-skin-grid], [data-skin-selection]") !== null) continue;
					if (record.type === "attributes" && record.attributeName !== "aria-rowindex" && record.attributeName !== "hidden" && target !== scrollport?.closest("[data-phase='active']")) continue;
					changed = true;
					const message = recordOf(target);
					if (message !== null) dirtyMessages.add(message);
					for (const node of record.addedNodes) {
						if (!(node instanceof HTMLElement)) continue;
						const addedMessage = node.matches(RECORD_SELECTOR) && isTopLevelRecord(node) ? node : recordOf(node);
						if (addedMessage !== null) dirtyMessages.add(addedMessage);
					}
				}
				if (!changed || reconcileFrame !== void 0) return;
				reconcileFrame = requestAnimationFrame(() => {
					reconcileFrame = void 0;
					bindScrollport();
				});
			});
			worksheetObserver.observe(document.body, {
				childList: true,
				subtree: true,
				attributes: true,
				attributeFilter: [
					"style",
					"aria-rowindex",
					"hidden"
				]
			});
			resize();
			return {
				grid,
				selection,
				clear,
				resize,
				dispose() {
					document.removeEventListener("click", onSheetClick, true);
					worksheetObserver.disconnect();
					for (const cell of trajectoryCells) delete cell.dataset.deepcelTrajectoryRow;
					trajectoryCells.clear();
					scrollport?.removeEventListener("scroll", onScroll);
					if (reconcileFrame !== void 0) cancelAnimationFrame(reconcileFrame);
					messageResizeObserver?.disconnect();
					observedRecords.clear();
					composerResizeObserver?.disconnect();
					for (const message of messageElements) {
						clearMessageCells(message);
						delete message.dataset.deepcelMessageRange;
						message.style.removeProperty("--deepcel-message-height");
						message.style.removeProperty("--deepcel-message-rows");
					}
					for (const container of flowContainers) delete container.dataset.deepcelFlowContainer;
					if (composerSeat !== null) {
						delete composerSeat.dataset.deepcelComposerRange;
						composerSeat.style.removeProperty("--deepcel-composer-rows");
					}
					scrollport?.style.removeProperty("--deepcel-flow-padding-top");
					scrollport?.style.removeProperty("--deepcel-chat-columns");
					scrollport?.style.removeProperty("--deepcel-chat-x");
					scrollport?.style.removeProperty("--deepcel-row-start");
					scrollport?.style.removeProperty("--deepcel-flow-height");
					if (scrollport !== null) delete scrollport.dataset.deepcelWorkbookFlow;
					document.body.style.removeProperty("--deepcel-composer-x");
					document.body.style.removeProperty("--deepcel-chat-x");
					document.body.style.removeProperty("--deepcel-scroll-y");
					document.body.style.removeProperty("--deepcel-row-offset");
					document.body.style.removeProperty("--deepcel-row-offset-y");
					if (selectedRangeElement !== null) delete selectedRangeElement.dataset.deepcelSelectedRange;
					grid.remove();
					selection.remove();
				}
			};
		}
		function createWorkbookChrome() {
			const chrome = document.createElement("div");
			chrome.className = cls("workbookChrome");
			chrome.dataset.skinChrome = "workbook";
			const titleRow = document.createElement("div");
			titleRow.className = cls("titleRow");
			const quickAccess = document.createElement("div");
			quickAccess.className = cls("quickAccess");
			quickAccess.setAttribute("role", "toolbar");
			const quickNewSession = makeControl("quickCell", "quick-new-session");
			const quickSidebar = makeControl("quickCell", "quick-sidebar");
			quickAccess.append(quickSidebar, quickNewSession);
			const titleCell = makeCell("titleCell", "DSH Workbook");
			titleRow.append(quickAccess, titleCell);
			const tabs = document.createElement("div");
			tabs.className = cls("ribbonTabs");
			tabs.setAttribute("role", "tablist");
			const ribbonTabs = /* @__PURE__ */ new Map();
			for (const spec of RIBBON_TABS) {
				const tab = makeControl("ribbonTab", `ribbon-${spec.id}`);
				tab.textContent = spec.label;
				tab.dataset.ribbonTab = spec.id;
				tab.setAttribute("role", "tab");
				tab.addEventListener("click", () => {
					chrome.dispatchEvent(new CustomEvent("deepcel-ribbon-change", { detail: spec.id }));
				});
				ribbonTabs.set(spec.id, tab);
				tabs.append(tab);
			}
			const tools = document.createElement("div");
			tools.className = cls("toolRow");
			tools.setAttribute("role", "toolbar");
			const newSession = makeControl("toolCell", "new-session");
			const newWorkspace = makeControl("toolCell", "new-workspace");
			newWorkspace.addEventListener("click", () => {
				clickNativeButton([], ["添加工作区", "Add workspace"]);
			});
			const settings = makeControl("toolCell", "settings");
			settings.setAttribute("aria-haspopup", "dialog");
			settings.addEventListener("click", toggleNativeSettings);
			const sidebar = makeControl("toolCell", "view-sidebar");
			const rightbar = makeControl("toolCell", "view-rightbar");
			rightbar.addEventListener("click", () => {
				nativeRightbarToggle()?.click();
			});
			const choice = (kind) => {
				const control = makeControl("choiceCell", kind);
				control.setAttribute("aria-haspopup", "menu");
				control.setAttribute("aria-expanded", "false");
				return control;
			};
			const workspace = choice("workspace");
			const preset = choice("preset");
			const permission = choice("permission");
			const model = choice("model");
			const thinking = choice("thinking");
			const formula = document.createElement("div");
			formula.className = cls("formulaRow");
			const nameCell = makeCell("nameCell", "B4");
			nameCell.dataset.cellName = "";
			const formulaCell = makeCell("formulaCell", "");
			formula.append(nameCell, makeCell("formulaLabel", "fx"), formulaCell);
			const columns = document.createElement("div");
			columns.className = cls("columnRow");
			fillColumnCoordinates(columns);
			chrome.append(titleRow, tabs, tools, formula, columns);
			return {
				chrome,
				columns,
				controls: {
					ribbonTabs,
					tools,
					formulaCell,
					titleCell,
					quickNewSession,
					quickSidebar,
					newSession,
					newWorkspace,
					settings,
					sidebar,
					rightbar,
					workspace,
					preset,
					permission,
					model,
					thinking
				},
				nameCell
			};
		}
		function createRowChrome() {
			const rows = document.createElement("div");
			rows.className = cls("rowChrome");
			rows.dataset.skinChrome = "rows";
			rows.setAttribute("aria-hidden", "true");
			fillRowCoordinates(rows);
			return rows;
		}
		function localeStatus(snapshot) {
			if (snapshot.active === "en") return "English (US)";
			return snapshot.locales.find((locale) => locale.id === snapshot.active)?.label ?? snapshot.active;
		}
		function findShellParts() {
			const sidebar = document.querySelector("#root [class*='sidebarCol']");
			const frame = sidebar?.parentElement;
			if (sidebar === null || sidebar === void 0 || frame === null || frame === void 0) return void 0;
			return {
				frame,
				sidebar
			};
		}
		function sidebarTargetWidth(frame, sidebar) {
			const firstTrack = /^([0-9]+(?:\.[0-9]+)?)px(?:\s|$)/.exec(frame.style.gridTemplateColumns.trim());
			return Math.round(firstTrack === null ? sidebar.getBoundingClientRect().width : Number(firstTrack[1]));
		}
		function createStatusChrome(locale, layout) {
			const footer = document.createElement("div");
			footer.className = cls("statusChrome");
			footer.dataset.skinChrome = "status";
			const sidebar = makeControl("sheetNavCell", "sidebar");
			sidebar.addEventListener("click", () => {
				layout.toggleSidebar();
			});
			const workbookTabs = document.createElement("div");
			workbookTabs.className = cls("workbookTabs");
			workbookTabs.setAttribute("role", "tablist");
			const addWorkbook = makeControl("newSheetCell", "new-workbook");
			const language = makeCell("statusCell", localeStatus(locale.getLocale()));
			language.dataset.localeStatus = "";
			const ready = makeCell("statusCell", "Ready");
			ready.dataset.readyStatus = "";
			const zoom = makeCell("zoomCell", "100%");
			zoom.setAttribute("aria-hidden", "true");
			footer.append(sidebar, workbookTabs, addWorkbook, makeCell("statusSpacer", ""), ready, language, zoom);
			return {
				footer,
				sidebar,
				workbookTabs,
				addWorkbook,
				language,
				ready
			};
		}
		/** DSH 0.1.7 renders one resident conversation header in both phases. */
		function conversationHeader() {
			return document.querySelector("#root [data-phase] > [data-slot='conversation.header'] > header");
		}
		function activeSessionHeader() {
			const header = conversationHeader();
			return header?.closest("[data-phase='active']") === null ? null : header;
		}
		function selectedNativeSessionRow() {
			return document.querySelector("#root [class*='sessionRow'][role='treeitem'][aria-selected='true']") ?? void 0;
		}
		function currentSessionTitle(header) {
			const navigation = header.querySelector("nav");
			return (navigation?.querySelector("[class*='crumbCurrent']") ?? navigation?.querySelector("button:disabled") ?? navigation?.querySelector("button:last-of-type"))?.textContent?.trim() || navigation?.textContent?.trim() || "";
		}
		/**
		* A ribbon dropdown gallery: one click on a value applies it, like a native
		* select. Keyboard focus moves through the values with the arrow keys; Escape
		* or Tab closes the gallery and returns focus to its ribbon button.
		*/
		function createChoiceMenu(kind, anchor, labels, choices, current, onPick, onClose) {
			const menu = document.createElement("div");
			menu.className = cls("choiceMenu");
			menu.dataset.deepcelChoiceMenu = kind;
			menu.dataset.skinChrome = "menu";
			menu.setAttribute("role", "menu");
			menu.setAttribute("aria-label", labels[kind]);
			const heading = document.createElement("div");
			heading.className = cls("choiceHeading");
			heading.setAttribute("aria-hidden", "true");
			heading.textContent = labels[kind];
			menu.append(heading);
			const items = choices.map((choice, index) => {
				const item = makeControl("choiceItem", `choice-${index}`);
				item.setAttribute("role", "menuitemradio");
				item.setAttribute("aria-checked", String(choice === current));
				item.tabIndex = -1;
				item.textContent = choice;
				item.addEventListener("click", () => {
					onPick(choice);
				});
				return item;
			});
			if (items.length === 0) {
				const empty = document.createElement("div");
				empty.className = cls("choiceEmpty");
				empty.setAttribute("role", "none");
				empty.textContent = labels.empty;
				menu.append(empty);
			}
			menu.append(...items);
			const focusAt = (index) => {
				if (items.length === 0) return;
				items[(index + items.length) % items.length].focus();
			};
			menu.addEventListener("keydown", (event) => {
				const index = items.indexOf(document.activeElement);
				if (event.key === "ArrowDown") focusAt(index + 1);
				else if (event.key === "ArrowUp") focusAt(index < 0 ? -1 : index - 1);
				else if (event.key === "Home") focusAt(0);
				else if (event.key === "End") focusAt(-1);
				else if (event.key === "Escape") onClose(true);
				else if (event.key === "Tab") onClose(false);
				else return;
				event.preventDefault();
			});
			const rect = anchor.getBoundingClientRect();
			menu.style.setProperty("--deepcel-menu-x", `${Math.max(0, Math.min(rect.left, window.innerWidth - 240))}px`);
			menu.style.setProperty("--deepcel-menu-y", `${rect.bottom}px`);
			menu.style.setProperty("--deepcel-menu-min-width", `${Math.max(160, rect.width)}px`);
			queueMicrotask(() => {
				const checked = items.findIndex((item) => item.getAttribute("aria-checked") === "true");
				if (menu.isConnected) focusAt(checked < 0 ? 0 : checked);
			});
			return menu;
		}
		/**
		* Apply workbook chrome and the scoped worksheet stylesheet.
		* @param ctx - owning context whose effect retracts all skin writes.
		*/
		function apply(ctx) {
			const body = document.body;
			const locale = ctx.locale;
			const layout = ctx.layout;
			const sessions = ctx.sessions;
			const originalTitle = document.title;
			body.setAttribute("data-dsh-deepcel", "");
			const { chrome: workbook, columns, controls, nameCell } = createWorkbookChrome();
			const rows = createRowChrome();
			const worksheet = createWorksheetSurface(nameCell, rows);
			const { footer: status, sidebar: sidebarControl, workbookTabs, addWorkbook, language, ready } = createStatusChrome(locale, layout);
			const addins = createAddinsCaption();
			let sidebarOpen = false;
			let activeRibbon = "home";
			let choiceMenu = null;
			let choiceAnchor = null;
			let formulaInput = null;
			let formulaHeight = FORMULA_HEIGHT;
			let choiceGeneration = 0;
			let workbookSequence = 0;
			let selectionSessionId = sessions.list.getSnapshot().current;
			const workbookStates = [];
			let activeWorkbookKey = "";
			let pendingWorkbookKey = "";
			let pendingWorkbookReady = false;
			const createBlankWorkbook = () => {
				const state = {
					key: `workbook-${++workbookSequence}`,
					title: labelsFor(locale.getLocale()).newWorkbook,
					blank: true
				};
				workbookStates.push(state);
				activeWorkbookKey = state.key;
				return state;
			};
			createBlankWorkbook();
			const openWorkbook = (state) => {
				activeWorkbookKey = state.key;
				renderWorkbookTabs();
				if (state.sessionId !== void 0) sessions.open(state.sessionId);
				else if (state.source?.isConnected === true) state.source.click();
				else if (state.blank) clickNativeButton([], ["新建会话", "New session"]);
			};
			const closeWorkbook = (state) => {
				const index = workbookStates.indexOf(state);
				if (index < 0) return;
				const wasActive = state.key === activeWorkbookKey;
				if (state.key === pendingWorkbookKey) {
					pendingWorkbookKey = "";
					pendingWorkbookReady = false;
				}
				workbookStates.splice(index, 1);
				if (workbookStates.length === 0) createBlankWorkbook();
				if (wasActive) {
					const fallback = workbookStates[Math.min(index, workbookStates.length - 1)];
					activeWorkbookKey = fallback.key;
					renderWorkbookTabs();
					if (fallback.sessionId !== void 0) sessions.open(fallback.sessionId);
					else if (fallback.source?.isConnected === true) fallback.source.click();
					else clickNativeButton([], ["新建会话", "New session"]);
					return;
				}
				renderWorkbookTabs();
			};
			function renderWorkbookTabs() {
				const labels = labelsFor(locale.getLocale());
				const signature = `${labels.closeWorkbook}|${activeWorkbookKey}|${workbookStates.map((state) => `${state.key}:${state.title}`).join("|")}`;
				if (workbookTabs.dataset.workbookSignature === signature) return;
				const tabs = workbookStates.map((state) => {
					const tab = document.createElement("div");
					tab.className = cls("sheetTabCell");
					tab.dataset.workbookKey = state.key;
					tab.toggleAttribute("data-active", state.key === activeWorkbookKey);
					tab.setAttribute("role", "presentation");
					const label = makeControl("workbookTabLabel", `workbook-${state.key}`);
					label.textContent = state.title;
					label.setAttribute("role", "tab");
					label.setAttribute("aria-selected", String(state.key === activeWorkbookKey));
					label.addEventListener("click", () => {
						openWorkbook(state);
					});
					const close = makeControl("workbookClose", `close-${state.key}`);
					close.textContent = "×";
					close.setAttribute("aria-label", `${labels.closeWorkbook}: ${state.title}`);
					close.addEventListener("click", (event) => {
						event.stopPropagation();
						closeWorkbook(state);
					});
					tab.append(label, close);
					return tab;
				});
				workbookTabs.replaceChildren(...tabs);
				workbookTabs.dataset.workbookSignature = signature;
			}
			const syncWorkbookTabs = () => {
				const labels = labelsFor(locale.getLocale());
				for (const state of workbookStates) if (state.blank) state.title = labels.newWorkbook;
				const phase = document.querySelector("#root [data-phase]")?.dataset.phase;
				if (phase === "settling" || nativeAddinsPanel() !== null) {
					renderWorkbookTabs();
					return;
				}
				const header = activeSessionHeader();
				if (header === null) {
					let state = workbookStates.find((state) => state.key === activeWorkbookKey && state.blank) ?? workbookStates.findLast((state) => state.blank);
					state ??= createBlankWorkbook();
					state.blank = true;
					state.title = labels.newWorkbook;
					delete state.sessionId;
					delete state.source;
					activeWorkbookKey = state.key;
					if (phase === "hero" && state.key === pendingWorkbookKey) pendingWorkbookReady = true;
					renderWorkbookTabs();
					return;
				}
				if (activeWorkbookKey === pendingWorkbookKey && !pendingWorkbookReady) {
					renderWorkbookTabs();
					return;
				}
				const title = currentSessionTitle(header) || labels.newWorkbook;
				const sessionId = sessions.list.getSnapshot().current;
				const source = selectedNativeSessionRow();
				let state = sessionId === void 0 ? void 0 : workbookStates.find((state) => state.sessionId === sessionId);
				state ??= source === void 0 ? void 0 : workbookStates.find((state) => state.source === source);
				state ??= workbookStates.find((state) => state.key === activeWorkbookKey && (state.source === void 0 || state.source.isConnected === false));
				if (state === void 0) state = createBlankWorkbook();
				state.blank = false;
				state.title = title;
				if (sessionId !== void 0) state.sessionId = sessionId;
				if (source !== void 0) state.source = source;
				activeWorkbookKey = state.key;
				if (state.key === pendingWorkbookKey) {
					pendingWorkbookKey = "";
					pendingWorkbookReady = false;
				}
				renderWorkbookTabs();
			};
			controls.newSession.addEventListener("click", () => {
				pendingWorkbookKey = createBlankWorkbook().key;
				pendingWorkbookReady = document.querySelector("#root [data-phase]")?.dataset.phase === "hero";
				renderWorkbookTabs();
				clickNativeButton([], ["新建会话", "New session"]);
			});
			addWorkbook.addEventListener("click", () => {
				controls.newSession.click();
			});
			const onOutsideChoicePointer = (event) => {
				const target = event.target instanceof Node ? event.target : null;
				if (target !== null && (choiceMenu?.contains(target) === true || choiceAnchor?.contains(target) === true)) return;
				closeChoiceMenu();
			};
			function closeChoiceMenu(restoreFocus = false) {
				choiceGeneration += 1;
				document.removeEventListener("pointerdown", onOutsideChoicePointer, true);
				choiceMenu?.remove();
				choiceMenu = null;
				choiceAnchor?.setAttribute("aria-expanded", "false");
				if (restoreFocus) choiceAnchor?.focus();
				choiceAnchor = null;
			}
			const toggleChoiceMenu = (kind, anchor) => {
				if (choiceAnchor === anchor) {
					closeChoiceMenu(true);
					return;
				}
				closeChoiceMenu();
				const generation = ++choiceGeneration;
				choiceAnchor = anchor;
				anchor.setAttribute("aria-expanded", "true");
				(kind === "workspace" || kind === "preset" ? heroChoices(kind) : kind === "permission" ? permissionChoices() : modelChoices(kind)).then((choices) => {
					if (generation !== choiceGeneration) return;
					choiceMenu = createChoiceMenu(kind, anchor, labelsFor(locale.getLocale()), choices, currentChoice(kind), (choice) => {
						closeChoiceMenu(true);
						(kind === "workspace" || kind === "preset" ? applyHeroChoice(kind, choice) : kind === "permission" ? applyPermissionChoice(choice) : applyModelChoice(kind, choice)).then(scheduleShellSync);
					}, closeChoiceMenu);
					body.append(choiceMenu);
					document.addEventListener("pointerdown", onOutsideChoicePointer, true);
				});
			};
			for (const kind of [
				"workspace",
				"preset",
				"permission",
				"model",
				"thinking"
			]) {
				const control = controls[kind];
				control.addEventListener("click", () => {
					toggleChoiceMenu(kind, control);
				});
			}
			controls.quickNewSession.addEventListener("click", () => {
				controls.newSession.click();
			});
			const toggleSidebar = () => {
				layout.toggleSidebar();
			};
			controls.quickSidebar.addEventListener("click", toggleSidebar);
			controls.sidebar.addEventListener("click", toggleSidebar);
			const viewProxies = [];
			const panelProxies = [];
			const nativeViewTabs = () => [...activeSessionHeader()?.querySelectorAll("[role='tablist'] [role='tab']") ?? []];
			const proxyAt = (proxies, index, action, source) => {
				let proxy = proxies[index];
				if (proxy === void 0) {
					proxy = makeControl("toolCell", action);
					proxy.addEventListener("click", () => {
						source()?.click();
					});
					proxies[index] = proxy;
				}
				return proxy;
			};
			const setChoiceCopy = (control, name, value) => {
				if (control.dataset.choiceName === name && control.dataset.choiceValue === value) return;
				control.dataset.choiceName = name;
				control.dataset.choiceValue = value;
				const nameCell = makeCell("choiceName", name);
				const valueCell = makeCell("choiceValue", value);
				control.replaceChildren(nameCell, valueCell);
				control.setAttribute("aria-label", `${name}: ${value}`);
				control.title = `${name}: ${value}`;
			};
			const setCopy = (control, text, label = text) => {
				if (control.textContent !== text) control.textContent = text;
				if (control.getAttribute("aria-label") !== label) control.setAttribute("aria-label", label);
				if (control.title !== label) control.title = label;
			};
			const syncCopy = () => {
				const labels = labelsFor(locale.getLocale());
				const sidebarLabel = sidebarOpen ? labels.sidebarHide : labels.sidebarShow;
				sidebarControl.textContent = sidebarOpen ? "<" : ">";
				sidebarControl.title = sidebarLabel;
				sidebarControl.setAttribute("aria-label", sidebarLabel);
				controls.ribbonTabs.get("file").textContent = labels.file;
				controls.ribbonTabs.get("home").textContent = labels.home;
				controls.ribbonTabs.get("view").textContent = labels.view;
				controls.quickNewSession.parentElement?.setAttribute("aria-label", labels.quickAccess);
				setCopy(controls.quickNewSession, `+ ${labels.newSession}`, labels.newSession);
				setCopy(controls.quickSidebar, labels.sidebar, sidebarLabel);
				setCopy(controls.newSession, labels.newSession);
				setCopy(controls.newWorkspace, labels.newWorkspace);
				setCopy(controls.settings, labels.settings);
				setCopy(controls.sidebar, labels.sidebar, sidebarLabel);
				setCopy(controls.rightbar, labels.rightbar);
				for (const control of [controls.quickSidebar, controls.sidebar]) control.setAttribute("aria-pressed", String(sidebarOpen));
				ready.textContent = labels.ready;
				addins.title.textContent = labels.addins;
				addins.close.setAttribute("aria-label", labels.closeAddins);
				addins.close.title = labels.closeAddins;
				addWorkbook.textContent = labels.addWorkbook;
				addWorkbook.setAttribute("aria-label", labels.addWorkbook);
				syncWorkbookTabs();
			};
			const syncShell = () => {
				const currentSessionId = sessions.list.getSnapshot().current;
				if (currentSessionId !== selectionSessionId) {
					selectionSessionId = currentSessionId;
					worksheet.clear();
				}
				const shell = findShellParts();
				if (shell === void 0) return;
				const { frame, sidebar } = shell;
				sidebarOpen = !frame.hasAttribute("data-sidebar-collapsed");
				const offset = sidebarOpen ? sidebarTargetWidth(frame, sidebar) : 0;
				const sidebarState = sidebarOpen ? "open" : "closed";
				if (body.dataset.deepcelSidebar !== sidebarState) body.dataset.deepcelSidebar = sidebarState;
				const offsetValue = `${offset}px`;
				if (body.style.getPropertyValue("--deepcel-sidebar-offset") !== offsetValue) body.style.setProperty("--deepcel-sidebar-offset", offsetValue);
				sidebarControl.setAttribute("aria-pressed", String(sidebarOpen));
				syncCopy();
			};
			const toolGroup = (label, items) => {
				const group = document.createElement("div");
				group.className = cls("toolGroup");
				group.setAttribute("role", "group");
				group.setAttribute("aria-label", label);
				const caption = makeCell("toolGroupLabel", label);
				caption.setAttribute("aria-hidden", "true");
				group.append(...items, caption);
				return group;
			};
			const syncRibbon = () => {
				controls.settings.setAttribute("aria-expanded", String(nativeSettingsTrigger()?.getAttribute("aria-expanded") === "true"));
				const header = activeSessionHeader();
				const labels = labelsFor(locale.getLocale());
				for (const [id, tab] of controls.ribbonTabs) {
					tab.toggleAttribute("data-active", id === activeRibbon);
					tab.setAttribute("aria-selected", String(id === activeRibbon));
				}
				const heroChoices = nativeHeroChoiceTriggers();
				const permissionTrigger = nativePermissionTrigger();
				const modelTrigger = nativeModelTrigger();
				const models = modelLabels();
				setChoiceCopy(controls.workspace, labels.workspace, heroChoices.workspace?.textContent?.trim() || "-");
				controls.workspace.disabled = heroChoices.workspace === void 0 || heroChoices.workspace.disabled;
				setChoiceCopy(controls.preset, labels.preset, heroChoices.preset?.textContent?.trim() || "-");
				controls.preset.disabled = heroChoices.preset === void 0 || heroChoices.preset.disabled;
				setChoiceCopy(controls.permission, labels.permission, permissionLabel(permissionTrigger) || "-");
				controls.permission.disabled = permissionTrigger === void 0 || permissionTrigger.disabled;
				setChoiceCopy(controls.model, labels.model, models.model || "-");
				controls.model.disabled = modelTrigger?.disabled ?? true;
				setChoiceCopy(controls.thinking, labels.thinking, models.thinking || "-");
				controls.thinking.disabled = modelTrigger?.disabled ?? true;
				controls.rightbar.disabled = nativeRightbarToggle() === void 0;
				controls.rightbar.setAttribute("aria-pressed", String(rightbarOpen()));
				const desired = [];
				if (activeRibbon === "file") {
					const panels = nativePanelButtons().map((source, index) => {
						const proxy = proxyAt(panelProxies, index, `panel-${index}`, () => nativePanelButtons()[index]);
						setCopy(proxy, source.textContent?.trim() || source.getAttribute("aria-label") || `Panel ${index + 1}`);
						proxy.setAttribute("aria-pressed", String(source.getAttribute("aria-current") === "page"));
						return proxy;
					});
					desired.push([labels.groupNew, [controls.newSession, controls.newWorkspace]]);
					desired.push([labels.groupOptions, [controls.settings, ...panels]]);
				} else if (activeRibbon === "home") {
					const target = heroChoices.workspace !== void 0 || heroChoices.preset !== void 0 ? [controls.workspace, controls.preset] : [];
					const run = [
						controls.model,
						...models.thinking === "" ? [] : [controls.thinking],
						controls.permission
					];
					desired.push([labels.groupTarget, target], [labels.groupRun, run]);
				} else {
					const views = (header === null ? [] : nativeViewTabs()).map((source, index) => {
						const proxy = proxyAt(viewProxies, index, `view-${index}`, () => nativeViewTabs()[index]);
						setCopy(proxy, index === 0 ? labels.chat : source.textContent?.trim() || `View ${index + 1}`);
						proxy.setAttribute("role", "tab");
						proxy.setAttribute("aria-selected", source.getAttribute("aria-selected") ?? "false");
						proxy.disabled = source.disabled;
						return proxy;
					});
					desired.push([labels.groupSheets, views], [labels.groupWindow, [controls.sidebar, controls.rightbar]]);
				}
				const groups = desired.filter(([, items]) => items.length > 0);
				const toolsSignature = groups.map(([label, items]) => `${label}:${items.map((item) => item.dataset.skinControl ?? "").join(",")}`).join("|");
				if (controls.tools.dataset.ribbonSignature !== toolsSignature) {
					if (choiceAnchor !== null && !groups.some(([, items]) => items.includes(choiceAnchor))) closeChoiceMenu();
					controls.tools.replaceChildren(...groups.map(([label, items]) => toolGroup(label, items)));
					controls.tools.dataset.ribbonSignature = toolsSignature;
				}
				syncWorkbookTabs();
				const projected = conversationHeader();
				for (const source of document.querySelectorAll("[data-deepcel-header-source]")) if (source !== projected) delete source.dataset.deepcelHeaderSource;
				if (projected !== null) projected.dataset.deepcelHeaderSource = "";
				const title = header === null ? "DSH Workbook" : currentSessionTitle(header) || "DSH Workbook";
				if (controls.titleCell.textContent !== title) controls.titleCell.textContent = title;
			};
			const resizeFormulaInput = () => {
				body.style.setProperty("--deepcel-formula-height", `${FORMULA_HEIGHT}px`);
				body.style.setProperty("--deepcel-ribbon-height", `${RIBBON_HEIGHT}px`);
				const contentHeight = formulaInput === null ? FORMULA_HEIGHT : Math.max(FORMULA_HEIGHT, formulaInput.scrollHeight);
				const lines = Math.max(1, Math.ceil((contentHeight - 10) / FORMULA_LINE_HEIGHT));
				const nextHeight = Math.min(118, 10 + lines * FORMULA_LINE_HEIGHT);
				const attachmentHeight = activeComposer()?.querySelector("[data-slot='conversation.input.attachments'] > [class*='rail']") === null ? 0 : 72;
				const totalHeight = nextHeight + (formulaInput === null ? 0 : attachmentHeight);
				body.style.setProperty("--deepcel-editor-height", `${nextHeight}px`);
				body.style.setProperty("--deepcel-formula-height", `${totalHeight}px`);
				body.style.setProperty("--deepcel-ribbon-height", `${RIBBON_HEIGHT + totalHeight - FORMULA_HEIGHT}px`);
				formulaInput?.toggleAttribute("data-deepcel-formula-overflow", contentHeight > nextHeight);
				if (formulaHeight === totalHeight) return;
				formulaHeight = totalHeight;
				fillRowCoordinates(rows);
				worksheet.resize();
			};
			const syncFormulaInput = () => {
				const next = activeComposer()?.querySelector("[data-composer-input]") ?? null;
				const nextOwner = next?.closest("[data-composer-seat]") ?? null;
				for (const input of document.querySelectorAll("[data-deepcel-formula-input]")) if (input !== next) delete input.dataset.deepcelFormulaInput;
				for (const owner of document.querySelectorAll("[data-deepcel-formula-owner]")) if (owner !== nextOwner) delete owner.dataset.deepcelFormulaOwner;
				if (next !== formulaInput) {
					formulaInput?.removeEventListener("input", resizeFormulaInput);
					formulaInput = next;
					formulaInput?.addEventListener("input", resizeFormulaInput);
				}
				if (next !== null) next.dataset.deepcelFormulaInput = "";
				if (nextOwner !== null) nextOwner.dataset.deepcelFormulaOwner = "";
				resizeFormulaInput();
			};
			const onRibbonChange = (event) => {
				if (!(event instanceof CustomEvent) || typeof event.detail !== "string") return;
				if (!RIBBON_TABS.some((tab) => tab.id === event.detail)) return;
				activeRibbon = event.detail;
				syncRibbon();
			};
			workbook.addEventListener("deepcel-ribbon-change", onRibbonChange);
			const closeAddins = () => {
				if (layout.selectPanel !== void 0) layout.selectPanel(null);
				else {
					const current = sessions.list.getSnapshot().current;
					if (current !== void 0) sessions.open(current);
				}
			};
			addins.close.addEventListener("click", closeAddins);
			const syncAddins = () => {
				const open = nativeAddinsPanel() !== null;
				if (open !== body.hasAttribute("data-deepcel-addins")) body.toggleAttribute("data-deepcel-addins", open);
				if (addins.caption.hidden === open) addins.caption.hidden = !open;
			};
			const onAddinsKeydown = (event) => {
				if (event.key !== "Escape" || event.defaultPrevented || !body.hasAttribute("data-deepcel-addins")) return;
				if (document.querySelector("[aria-modal='true'], [role='menu'], [role='listbox']") !== null) return;
				closeAddins();
			};
			document.addEventListener("keydown", onAddinsKeydown);
			let shellFrame;
			const scheduleShellSync = () => {
				if (shellFrame !== void 0) cancelAnimationFrame(shellFrame);
				shellFrame = requestAnimationFrame(() => {
					shellFrame = void 0;
					concealNativeEntrypoints();
					syncShell();
					syncRibbon();
					syncFormulaInput();
					syncAddins();
				});
			};
			const syncCoordinates = () => {
				fillColumnCoordinates(columns);
				fillRowCoordinates(rows);
				worksheet.resize();
				scheduleShellSync();
			};
			const syncLocale = () => {
				language.textContent = localeStatus(locale.getLocale());
				syncCopy();
				syncRibbon();
			};
			window.addEventListener("resize", syncCoordinates);
			const shellObserver = new MutationObserver((records) => {
				if (records.some((record) => {
					if ((record.target instanceof HTMLElement ? record.target : record.target.parentElement)?.closest("[data-skin-chrome], [data-skin-grid], [data-skin-selection]") !== null) return false;
					if (record.type === "childList") return true;
					if (!(record.target instanceof HTMLElement)) return false;
					if (record.attributeName === "data-sidebar-collapsed") return true;
					if (record.attributeName === "aria-selected" || record.attributeName === "aria-expanded" || record.attributeName === "data-phase") return true;
					return record.attributeName === "style" && record.target === findShellParts()?.frame;
				})) scheduleShellSync();
			});
			shellObserver.observe(document.body, {
				attributes: true,
				childList: true,
				subtree: true
			});
			const unsubscribeLocale = locale.subscribe(syncLocale);
			body.append(worksheet.grid, worksheet.selection, workbook, rows, status, addins.caption);
			syncLocale();
			scheduleShellSync();
			document.title = SKIN_TITLE;
			ctx.effect(() => () => {
				window.removeEventListener("resize", syncCoordinates);
				document.removeEventListener("keydown", onAddinsKeydown);
				addins.caption.remove();
				body.removeAttribute("data-deepcel-addins");
				workbook.removeEventListener("deepcel-ribbon-change", onRibbonChange);
				shellObserver.disconnect();
				if (shellFrame !== void 0) cancelAnimationFrame(shellFrame);
				unsubscribeLocale();
				for (const button of document.querySelectorAll("[data-deepcel-native-proxy]")) delete button.dataset.deepcelNativeProxy;
				for (const composer of document.querySelectorAll("[data-deepcel-merged-input]")) delete composer.dataset.deepcelMergedInput;
				for (const header of document.querySelectorAll("[data-deepcel-header-source]")) delete header.dataset.deepcelHeaderSource;
				for (const input of document.querySelectorAll("[data-deepcel-formula-input]")) {
					delete input.dataset.deepcelFormulaInput;
					delete input.dataset.deepcelFormulaOverflow;
				}
				for (const owner of document.querySelectorAll("[data-deepcel-formula-owner]")) delete owner.dataset.deepcelFormulaOwner;
				for (const source of document.querySelectorAll("[data-deepcel-hero-choice-source]")) delete source.dataset.deepcelHeroChoiceSource;
				formulaInput?.removeEventListener("input", resizeFormulaInput);
				closeChoiceMenu();
				body.removeAttribute("data-dsh-deepcel");
				delete body.dataset.deepcelSidebar;
				delete body.dataset.deepcelModelProbing;
				body.style.removeProperty("--deepcel-sidebar-offset");
				body.style.removeProperty("--deepcel-formula-height");
				body.style.removeProperty("--deepcel-editor-height");
				body.style.removeProperty("--deepcel-ribbon-height");
				worksheet.dispose();
				workbook.remove();
				rows.remove();
				status.remove();
				if (document.title === SKIN_TITLE) document.title = originalTitle;
			}, "ui-skin-deepcel: workbook chrome");
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map