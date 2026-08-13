window.__ModuleLoader__.load({
	id: "@dsh-external/dsh-client-ui-skin-deepcel",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0dsh-css:C:\Users\Ko_teiru\Documents\code\dsh\dsh-deepcel\deepcel\src\client\deepcel.module.css.mjs
		const css = "body[data-dsh-deepcel]{--deepcel-green:#217346;--deepcel-green-dark:#185c37;--deepcel-green-soft:#e2f0d9;--deepcel-grid:#c9c9c9;--deepcel-grid-strong:#a6a6a6;--deepcel-sheet:#fff;--deepcel-header:#f3f3f3;--deepcel-ink:#202020;--deepcel-muted:#666;--deepcel-highlight:#ffeb3b8f;--deepcel-highlight-solid:#fff2a8;--deepcel-selection:#107c41;--deepcel-bookmark:#2b579a;--deepcel-comment-accent:#c43e1c;--deepcel-comment-fill:#fff7c7;--deepcel-comment-header:#f7e89a;--deepcel-cell-width:60px;--deepcel-row-height:24px;--deepcel-row-gutter:40px;--deepcel-sidebar-offset:0px;--deepcel-sheet-origin:calc(var(--deepcel-sidebar-offset) + var(--deepcel-row-gutter));--deepcel-formula-height:28px;--deepcel-ribbon-height:136px;--dsw-font-family:Aptos, Calibri, \"Segoe UI\", \"Microsoft YaHei\", sans-serif;--ds-font-family-code:Consolas, \"SFMono-Regular\", monospace;--dsw-alias-bg-base:#fff;--dsw-alias-bg-layer-1:#fafafa;--dsw-alias-bg-layer-2:#f3f3f3;--dsw-alias-bg-layer-3:#e9e9e9;--dsw-alias-bg-overlay:#fff;--dsw-alias-bg-module-platform:#f7f7f7;--dsw-alias-border-l1:#e1e1e1;--dsw-alias-border-l2:#cfcfcf;--dsw-alias-border-l2-darkmode-thin:#cfcfcf;--dsw-alias-border-l3:#b8b8b8;--dsw-alias-border-l4:#8f8f8f;--dsw-alias-brand-primary:#217346;--dsw-alias-brand-text:#185c37;--dsw-alias-button-primary-fill:#217346;--dsw-alias-button-primary-hover:#185c37;--dsw-alias-button-info-fill:#217346;--dsw-alias-button-info-hover:#185c37;--dsw-alias-interactive-bg-hover:#edf5f0;--dsw-alias-interactive-bg-hover-solid:#e2f0d9;--dsw-alias-interactive-bg-active:#fff2a8;--dsw-alias-label-primary:#202020;--dsw-alias-label-secondary:#535353;--dsw-alias-label-tertiary:#757575;--dsw-alias-label-caption:#858585;--dsw-alias-markdown-code-block:#f7f7f7;--dsw-alias-markdown-code-block-banner:#ededed;--dsw-alias-markdown-inline-code:#f3f3f3;--dsw-specific-bubble:#fff;--dsw-specific-bubble-highlight:#fff2a8;--dsw-specific-input-major:#fff;--dsw-specific-menu:#fff;--dsw-specific-selector:#f3f3f3;--dsw-specific-sidebar-fill:#fafafa;--dsw-specific-sidebar-nav-item-active:#fff2a8;--dsw-specific-sidebar-nav-item-active-accent:#107c41;box-sizing:border-box;min-width:760px;padding:var(--deepcel-ribbon-height) 0 28px;color:var(--deepcel-ink);background-color:var(--deepcel-sheet)}body[data-dsh-deepcel][data-ds-dark-theme]{--deepcel-grid:#454545;--deepcel-grid-strong:#686868;--deepcel-sheet:#1e1e1e;--deepcel-header:#2b2b2b;--deepcel-ink:#f0f0f0;--deepcel-muted:#b7b7b7;--deepcel-highlight:#ffd60a57;--deepcel-highlight-solid:#6f5d00;--deepcel-selection:#33c481;--deepcel-bookmark:#5b9bd5;--deepcel-comment-accent:#ff8a65;--deepcel-comment-fill:#4b431f;--deepcel-comment-header:#625725;--dsw-alias-bg-base:#1e1e1e;--dsw-alias-bg-layer-1:#252525;--dsw-alias-bg-layer-2:#2b2b2b;--dsw-alias-bg-layer-3:#343434;--dsw-alias-bg-overlay:#292929;--dsw-alias-bg-module-platform:#292929;--dsw-alias-border-l1:#3d3d3d;--dsw-alias-border-l2:#505050;--dsw-alias-border-l2-darkmode-thin:#505050;--dsw-alias-border-l3:#666;--dsw-alias-border-l4:#858585;--dsw-alias-brand-primary:#33c481;--dsw-alias-brand-text:#57d997;--dsw-alias-button-primary-fill:#217346;--dsw-alias-button-primary-hover:#2a8f5a;--dsw-alias-button-info-fill:#217346;--dsw-alias-button-info-hover:#2a8f5a;--dsw-alias-interactive-bg-hover:#293b31;--dsw-alias-interactive-bg-hover-solid:#324a3b;--dsw-alias-interactive-bg-active:#6f5d00;--dsw-alias-label-primary:#f0f0f0;--dsw-alias-label-secondary:#cecece;--dsw-alias-label-tertiary:#adadad;--dsw-alias-label-caption:#929292;--dsw-alias-markdown-code-block:#252525;--dsw-alias-markdown-code-block-banner:#303030;--dsw-alias-markdown-inline-code:#303030;--dsw-specific-bubble:#252525;--dsw-specific-bubble-highlight:#6f5d00;--dsw-specific-input-major:#1e1e1e;--dsw-specific-menu:#292929;--dsw-specific-selector:#303030;--dsw-specific-sidebar-fill:#252525;--dsw-specific-sidebar-nav-item-active:#6f5d00;--dsw-specific-sidebar-nav-item-active-accent:#33c481;color:var(--deepcel-ink);background-color:var(--deepcel-sheet)}body[data-dsh-deepcel] *,body[data-dsh-deepcel] :before,body[data-dsh-deepcel] :after{border-radius:0!important}body[data-dsh-deepcel] ::selection{color:inherit;background:var(--deepcel-highlight)}body[data-dsh-deepcel] .wwO2oG_workbookChrome{z-index:1000000;grid-template-rows:30px 25px 34px var(--deepcel-formula-height) 19px;height:var(--deepcel-ribbon-height);color:#202020;user-select:none;pointer-events:none;background:#fff;border-bottom:1px solid #a6a6a6;font:12px/1 Aptos,Calibri,Segoe UI,sans-serif;display:grid;position:fixed;inset:0 0 auto;box-shadow:0 1px 2px #0000001f}body[data-dsh-deepcel] .wwO2oG_titleRow,body[data-dsh-deepcel] .wwO2oG_ribbonTabs,body[data-dsh-deepcel] .wwO2oG_toolRow,body[data-dsh-deepcel] .wwO2oG_columnRow,body[data-dsh-deepcel] .wwO2oG_statusChrome{align-items:stretch;display:flex}body[data-dsh-deepcel] .wwO2oG_titleRow,body[data-dsh-deepcel] .wwO2oG_ribbonTabs,body[data-dsh-deepcel] .wwO2oG_toolRow,body[data-dsh-deepcel] .wwO2oG_columnRow{pointer-events:auto}body[data-dsh-deepcel] .wwO2oG_ribbonTab[hidden]{display:none}body[data-dsh-deepcel] .wwO2oG_worksheetGrid{inset:calc(var(--deepcel-ribbon-height) - var(--deepcel-row-height)) 0 28px var(--deepcel-sheet-origin);z-index:0;grid-template-columns:repeat(var(--deepcel-grid-columns), var(--deepcel-cell-width));grid-auto-rows:var(--deepcel-row-height);pointer-events:none;transform:translateY(var(--deepcel-scroll-y,0px));will-change:transform;transition:left var(--ds-transition-duration-slow,.24s) var(--ds-ease-in-out,ease-in-out);background:0 0;place-content:start;display:grid;position:fixed;overflow:hidden}body[data-dsh-deepcel] .wwO2oG_worksheetCell{box-sizing:border-box;width:var(--deepcel-cell-width);height:var(--deepcel-row-height);border-right:1px solid var(--deepcel-grid);border-bottom:1px solid var(--deepcel-grid)}body[data-dsh-deepcel] .wwO2oG_worksheetSelection{z-index:1;top:calc(var(--deepcel-ribbon-height) + var(--deepcel-selection-y,0px) + var(--deepcel-row-offset-y,0px) + var(--deepcel-scroll-y,0px));left:calc(var(--deepcel-sheet-origin) + var(--deepcel-selection-x,0px));box-sizing:border-box;width:var(--deepcel-selection-width,var(--deepcel-cell-width));height:var(--deepcel-selection-height,var(--deepcel-row-height));border:2px solid var(--deepcel-selection);box-shadow:inset 0 0 0 1px var(--deepcel-sheet);pointer-events:none;transition:left var(--ds-transition-duration-slow,.24s) var(--ds-ease-in-out,ease-in-out);display:none;position:fixed}body[data-dsh-deepcel] .wwO2oG_worksheetSelection[data-active]{display:block}body[data-dsh-deepcel] .wwO2oG_worksheetSelection[data-overlay]{z-index:4}body[data-dsh-deepcel] .wwO2oG_worksheetSelection[data-active]:after{content:\"\";border:1px solid var(--deepcel-sheet);background:var(--deepcel-selection);width:7px;height:7px;position:absolute;bottom:-4px;right:-4px}body[data-dsh-deepcel] .wwO2oG_rowChrome{inset:calc(var(--deepcel-ribbon-height) - var(--deepcel-row-height)) auto 28px var(--deepcel-sidebar-offset);z-index:999999;width:var(--deepcel-row-gutter);color:var(--deepcel-muted);background:var(--deepcel-header);border-right:1px solid var(--deepcel-grid-strong);font:10px/var(--deepcel-row-height) Aptos, Calibri, \"Segoe UI\", sans-serif;user-select:none;pointer-events:none;transition:left var(--ds-transition-duration-slow,.24s) var(--ds-ease-in-out,ease-in-out);flex-direction:column;display:flex;position:fixed;overflow:hidden}body[data-dsh-deepcel] .wwO2oG_rowCell{box-sizing:border-box;flex:0 0 var(--deepcel-row-height);width:100%;height:var(--deepcel-row-height);border-bottom:1px solid var(--deepcel-grid);text-align:right;padding-right:6px}body[data-dsh-deepcel]>[class*=_card][style*=left]{z-index:1000001!important}body[data-dsh-deepcel] .wwO2oG_titleRow{color:#fff;background:var(--deepcel-green);align-items:center;position:relative}body[data-dsh-deepcel] .wwO2oG_quickCell,body[data-dsh-deepcel] .wwO2oG_accountCell{border-right:1px solid #ffffff38;align-items:center;height:100%;padding:0 12px;font-size:11px;display:inline-flex}body[data-dsh-deepcel] button.wwO2oG_quickCell,body[data-dsh-deepcel] button.wwO2oG_toolCell{appearance:none;color:inherit;font:inherit;cursor:pointer;background:0 0;margin:0}body[data-dsh-deepcel] button.wwO2oG_quickCell:hover,body[data-dsh-deepcel] button.wwO2oG_quickCell[aria-pressed=true]{background:#ffffff29}body[data-dsh-deepcel] .wwO2oG_titleCell{text-align:center;letter-spacing:.02em;pointer-events:none;justify-content:center;align-items:center;gap:8px;width:min(48vw,680px);min-width:0;font-weight:600;display:flex;position:absolute;left:50%;overflow:hidden;transform:translate(-50%)}body[data-dsh-deepcel] .wwO2oG_headerControls{align-items:stretch;min-width:0;height:100%;display:flex}body[data-dsh-deepcel] :is(.wwO2oG_topTitle,.wwO2oG_topMode,.wwO2oG_topToken){appearance:none;min-width:0;color:inherit;font:inherit;text-overflow:ellipsis;white-space:nowrap;background:0 0;border:0;align-items:center;margin:0;padding:0;display:inline-flex;overflow:hidden}body[data-dsh-deepcel] .wwO2oG_topMode,body[data-dsh-deepcel] .wwO2oG_topToken{opacity:.9;font-weight:400}body[data-dsh-deepcel] button.wwO2oG_topToken{cursor:pointer}body[data-dsh-deepcel] .wwO2oG_headerControls .wwO2oG_topToken{pointer-events:auto;border-right:1px solid #ffffff38;height:100%;padding:0 10px}body[data-dsh-deepcel] .wwO2oG_headerControls button.wwO2oG_topToken:hover,body[data-dsh-deepcel] .wwO2oG_headerControls button.wwO2oG_topToken[aria-pressed=true]{background:#ffffff29}body[data-dsh-deepcel] .wwO2oG_accountCell{border-left:1px solid #ffffff38;border-right:0;margin-left:auto}body[data-dsh-deepcel] .wwO2oG_ribbonTabs{background:#f7f7f7;border-bottom:1px solid #d4d4d4}body[data-dsh-deepcel] .wwO2oG_ribbonTab{appearance:none;font:inherit;cursor:pointer;color:#303030;background:0 0;border-right:1px solid #e2e2e2;align-items:center;margin:0;padding:0 16px;display:inline-flex}body[data-dsh-deepcel] .wwO2oG_ribbonTab[data-active]{color:#185c37;background:#fff2a8;font-weight:600;box-shadow:inset 0 -2px #217346}body[data-dsh-deepcel] .wwO2oG_toolRow{background:#fff;border-bottom:1px solid #d4d4d4;padding-left:8px}body[data-dsh-deepcel] .wwO2oG_toolCell{color:#3b3b3b;border-right:1px solid #e1e1e1;justify-content:center;align-items:center;min-width:62px;padding:0 10px;font-size:11px;display:inline-flex}body[data-dsh-deepcel] button.wwO2oG_toolCell{appearance:none;font:inherit;cursor:pointer;background:0 0;margin:0}body[data-dsh-deepcel] button.wwO2oG_toolCell[aria-selected=true]{color:#185c37;background:var(--deepcel-highlight-solid);box-shadow:inset 0 -2px var(--deepcel-selection);font-weight:600}body[data-dsh-deepcel] button.wwO2oG_toolCell:hover{background:var(--deepcel-green-soft)}body[data-dsh-deepcel] .wwO2oG_formulaRow{pointer-events:none;background:#fff;border-bottom:1px solid #bcbcbc;align-items:center;display:flex}body[data-dsh-deepcel] .wwO2oG_nameCell,body[data-dsh-deepcel] .wwO2oG_formulaLabel,body[data-dsh-deepcel] .wwO2oG_formulaCell{border-right:1px solid #cfcfcf;align-items:center;height:100%;display:inline-flex}body[data-dsh-deepcel] textarea[data-deepcel-formula-input]:focus{outline:2px solid var(--deepcel-selection)!important;outline-offset:-2px!important}body[data-dsh-deepcel][data-deepcel-model-probing] [role=menu]{visibility:hidden!important}body[data-dsh-deepcel] .wwO2oG_choiceOverlay{inset:var(--deepcel-ribbon-height) 0 28px var(--deepcel-sheet-origin);z-index:1000003;padding:var(--deepcel-row-height) var(--deepcel-cell-width);background:#0000001f;justify-content:flex-start;align-items:flex-start;display:flex;position:fixed}body[data-dsh-deepcel] .wwO2oG_choiceDialog{width:min(540px, calc(100vw - var(--deepcel-sheet-origin) - 120px));grid-template-rows:48px auto 48px;display:grid;border:1px solid var(--deepcel-grid-strong)!important;border-top:2px solid var(--deepcel-selection)!important;background:var(--deepcel-sheet)!important;box-shadow:2px 3px 8px #0000002e!important}body[data-dsh-deepcel] .wwO2oG_choiceHeading{border-bottom:1px solid var(--deepcel-grid-strong);align-items:center;padding:0 12px;font-weight:600;display:flex}body[data-dsh-deepcel] .wwO2oG_choiceSelect{border:1px solid var(--deepcel-grid-strong);background:var(--deepcel-sheet);min-height:38px;color:var(--deepcel-ink);margin:24px 60px;padding:0 10px}body[data-dsh-deepcel] .wwO2oG_choiceActions{border-top:1px solid var(--deepcel-grid);justify-content:flex-end;display:flex}body[data-dsh-deepcel] .wwO2oG_choiceButton{appearance:none;border:0;border-left:1px solid var(--deepcel-grid);background:var(--deepcel-sheet);min-width:72px;color:var(--deepcel-ink);cursor:pointer}body[data-dsh-deepcel] .wwO2oG_choiceButton:last-child{background:var(--deepcel-green-soft);color:var(--deepcel-green-dark);font-weight:600}body[data-dsh-deepcel] .wwO2oG_nameCell{color:#333;font-variant-numeric:tabular-nums;justify-content:center;width:72px}body[data-dsh-deepcel] .wwO2oG_formulaLabel{color:#666;justify-content:center;width:34px;font:italic 13px/1 Georgia,serif}body[data-dsh-deepcel] .wwO2oG_formulaCell{color:#222;white-space:nowrap;flex:1;gap:0;padding:0;font-family:Consolas,monospace;overflow:hidden}body[data-dsh-deepcel] .wwO2oG_formulaTitle,body[data-dsh-deepcel] .wwO2oG_formulaToken,body[data-dsh-deepcel] .wwO2oG_formulaCell>button{box-sizing:border-box;border:0;border-right:1px solid var(--deepcel-grid);color:inherit;white-space:nowrap;background:0 0;align-self:stretch;align-items:center;padding:0 10px;font:12px/1 Aptos,Calibri,Segoe UI,sans-serif;display:inline-flex}body[data-dsh-deepcel] .wwO2oG_formulaTitle{min-width:180px;font-weight:600}body[data-dsh-deepcel] .wwO2oG_formulaToken{color:var(--deepcel-muted)}body[data-dsh-deepcel] .wwO2oG_formulaCell>button{cursor:pointer;min-width:0}body[data-dsh-deepcel] .wwO2oG_formulaCell>button:hover{background:var(--deepcel-green-soft)}body[data-dsh-deepcel] .wwO2oG_columnRow{box-sizing:border-box;padding-left:var(--deepcel-sidebar-offset);transition:padding-left var(--ds-transition-duration-slow,.24s) var(--ds-ease-in-out,ease-in-out);background:#f3f3f3;border-bottom:1px solid #a6a6a6;overflow:hidden}body[data-dsh-deepcel] [data-deepcel-native-proxy],body[data-dsh-deepcel] [data-deepcel-hero-choice-source]{display:none!important}body[data-dsh-deepcel] .wwO2oG_cornerCell,body[data-dsh-deepcel] .wwO2oG_columnCell{box-sizing:border-box;color:#555;border-right:1px solid #c8c8c8;justify-content:center;align-items:center;height:19px;font-size:10px;display:inline-flex}body[data-dsh-deepcel] .wwO2oG_cornerCell{flex:0 0 var(--deepcel-row-gutter);width:var(--deepcel-row-gutter);background:linear-gradient(135deg,#0000 48%,#a6a6a6 49% 52%,#0000 53%)}body[data-dsh-deepcel] .wwO2oG_columnCell{flex:0 0 var(--deepcel-cell-width);width:var(--deepcel-cell-width)}body[data-dsh-deepcel] .wwO2oG_statusChrome{z-index:1000000;color:#333;user-select:none;background:#f3f3f3;border-top:1px solid #a6a6a6;height:28px;font:11px/27px Aptos,Calibri,Segoe UI,sans-serif;position:fixed;inset:auto 0 0}body[data-dsh-deepcel] .wwO2oG_sheetNavCell,body[data-dsh-deepcel] .wwO2oG_sheetTabCell,body[data-dsh-deepcel] .wwO2oG_newSheetCell,body[data-dsh-deepcel] .wwO2oG_statusCell,body[data-dsh-deepcel] .wwO2oG_zoomCell{white-space:nowrap;border-right:1px solid #d2d2d2;padding:0 14px}body[data-dsh-deepcel] .wwO2oG_workbookTabs{align-items:stretch;max-width:min(46vw,720px);display:flex;overflow:hidden}body[data-dsh-deepcel] button.wwO2oG_sheetNavCell{appearance:none;min-width:var(--deepcel-row-gutter);background:color-mix(in srgb, var(--deepcel-green-soft) 55%, var(--deepcel-header));color:var(--deepcel-green-dark);cursor:pointer;box-shadow:inset 3px 0 var(--deepcel-selection);border:0;border-right:1px solid #d2d2d2;margin:0;padding:0 12px;font:700 14px/27px Aptos,Calibri,Segoe UI,sans-serif;position:relative}body[data-dsh-deepcel] button.wwO2oG_sheetNavCell:after{content:\"\";background:var(--deepcel-selection);width:5px;height:5px;position:absolute;top:5px;right:5px;border-radius:50%!important}body[data-dsh-deepcel] .wwO2oG_sheetTabCell{color:#444;background:var(--deepcel-header);border-bottom:3px solid #0000;align-items:stretch;min-width:112px;max-width:220px;padding:0;display:flex;position:relative}body[data-dsh-deepcel] .wwO2oG_sheetTabCell[data-active]{color:#185c37;background:#fff2a8;border-bottom:3px solid #217346;font-weight:600}body[data-dsh-deepcel] button.wwO2oG_workbookTabLabel,body[data-dsh-deepcel] button.wwO2oG_workbookClose,body[data-dsh-deepcel] button.wwO2oG_newSheetCell{appearance:none;color:inherit;font:inherit;cursor:pointer;background:0 0;border:0;margin:0}body[data-dsh-deepcel] button.wwO2oG_workbookTabLabel{text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;padding:0 8px 0 14px;overflow:hidden}body[data-dsh-deepcel] button.wwO2oG_workbookClose{opacity:0;width:24px;padding:0;font-size:14px}body[data-dsh-deepcel] .wwO2oG_sheetTabCell:hover button.wwO2oG_workbookClose,body[data-dsh-deepcel] .wwO2oG_sheetTabCell:focus-within button.wwO2oG_workbookClose{opacity:1}body[data-dsh-deepcel] button.wwO2oG_workbookClose:hover{color:#fff;background:#c42b1c}body[data-dsh-deepcel] button.wwO2oG_newSheetCell:hover{background:var(--deepcel-green-soft)}body[data-dsh-deepcel] .wwO2oG_statusSpacer{flex:1}body[data-dsh-deepcel] .wwO2oG_statisticsCell{box-sizing:border-box;color:#555;font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap;border-left:1px solid #d2d2d2;border-right:1px solid #d2d2d2;max-width:min(62vw,980px);padding:0 14px;overflow:hidden}body[data-dsh-deepcel] .wwO2oG_statisticsCell[hidden]{display:none}body[data-dsh-deepcel] .wwO2oG_zoomCell{text-align:center;font-variant-numeric:tabular-nums;min-width:92px}body[data-dsh-deepcel][data-ds-dark-theme] .wwO2oG_workbookChrome,body[data-dsh-deepcel][data-ds-dark-theme] .wwO2oG_formulaRow,body[data-dsh-deepcel][data-ds-dark-theme] .wwO2oG_toolRow{color:#eee;background:#252525;border-color:#4a4a4a}body[data-dsh-deepcel][data-ds-dark-theme] .wwO2oG_ribbonTabs,body[data-dsh-deepcel][data-ds-dark-theme] .wwO2oG_columnRow,body[data-dsh-deepcel][data-ds-dark-theme] .wwO2oG_rowChrome,body[data-dsh-deepcel][data-ds-dark-theme] .wwO2oG_statusChrome{color:#ddd;background:#2b2b2b;border-color:#505050}body[data-dsh-deepcel][data-ds-dark-theme] :is(.wwO2oG_ribbonTab,.wwO2oG_toolCell,.wwO2oG_nameCell,.wwO2oG_formulaLabel,.wwO2oG_formulaCell,.wwO2oG_columnCell){color:#ddd;border-color:#4a4a4a}body[data-dsh-deepcel][data-ds-dark-theme] .wwO2oG_statisticsCell{color:#c8c8c8;border-color:#505050}body[data-dsh-deepcel][data-ds-dark-theme] .wwO2oG_ribbonTab[data-active],body[data-dsh-deepcel][data-ds-dark-theme] .wwO2oG_sheetTabCell[data-active]{color:#fff4b8;background:#6f5d00;border-color:#33c481}body[data-dsh-deepcel] [id=root]{min-height:calc(100vh - var(--deepcel-ribbon-height) - 28px);background:0 0;position:relative}body[data-dsh-deepcel] #root [class*=frame]:has(>[class*=sidebarCol]){background:0 0}body[data-dsh-deepcel] :is([class*=composerStack],[data-chat-flow-kind],[class*=userRow],[data-terminal],[data-variant=think],[data-question-key],[data-testid=todo-panel]){z-index:2;position:relative}body[data-dsh-deepcel] [data-pane]{background-color:color-mix(in srgb, var(--deepcel-sheet) 94%, transparent);border-color:var(--deepcel-grid)!important;box-shadow:none!important}body[data-dsh-deepcel] [data-pane=sidebar]{border-right:3px solid var(--deepcel-grid-strong)!important}body[data-dsh-deepcel] [data-pane=details]{border-left:3px solid var(--deepcel-grid-strong)!important}body[data-dsh-deepcel] [data-pane=conversation]{background:0 0}body[data-dsh-deepcel] [data-phase],body[data-dsh-deepcel] [data-conversation-scroll],body[data-dsh-deepcel] [data-pane=conversation]>div,body[data-dsh-deepcel] [data-pane=conversation] [class*=scrollBody]{background:0 0!important}body[data-dsh-deepcel] [data-pane=sidebar]>div{box-sizing:border-box;padding-left:var(--deepcel-row-gutter);background:linear-gradient(to bottom, transparent 23px, var(--deepcel-grid) 24px), color-mix(in srgb, var(--deepcel-header) 94%, transparent);background-size:100% 24px}body[data-dsh-deepcel] [class*=sidebarCol]>div{box-sizing:border-box;padding-left:0}body[data-dsh-deepcel] [class*=sidebarCol]{z-index:2;border-right:1px solid var(--deepcel-grid-strong);overflow:hidden}body[data-dsh-deepcel] [data-sidebar-collapsed] [class*=sidebarCol]{visibility:hidden;pointer-events:none;border-right:0}body[data-dsh-deepcel] [data-sidebar-collapsed] [class*=sidebarCol] :is([class*=_overlay],[class*=_root]):has(>[role=dialog]){visibility:visible;pointer-events:auto}body[data-dsh-deepcel] [data-sidebar-collapsed] [class*=centerCol]{width:calc(100% + 56px);margin-left:-56px}body[data-dsh-deepcel] [data-pane=sidebar]>div>:first-child,body[data-dsh-deepcel] [data-pane=conversation] header{background:var(--deepcel-header);border-bottom:2px solid var(--deepcel-grid-strong);box-shadow:none}body[data-dsh-deepcel] [data-deepcel-header-source]{display:none!important}body[data-dsh-deepcel] [data-pane=sidebar]>div>button{border:2px solid var(--deepcel-selection);background:var(--deepcel-sheet);color:var(--deepcel-ink);box-shadow:inset 0 0 0 1px var(--deepcel-sheet);font-weight:600}body[data-dsh-deepcel] [data-pane=sidebar]>div>button:hover{background:var(--deepcel-green-soft)}body[data-dsh-deepcel][data-ds-dark-theme] [data-pane=sidebar]>div>button:hover{background:#293b31}body[data-dsh-deepcel] [role=tree],body[data-dsh-deepcel] [role=treeitem]{border-color:var(--deepcel-grid)}body[data-dsh-deepcel] [role=treeitem]{min-height:var(--deepcel-row-height);border-bottom:1px solid var(--deepcel-grid);background:color-mix(in srgb, var(--deepcel-sheet) 96%, transparent)}body[data-dsh-deepcel] [role=treeitem]:hover{background:color-mix(in srgb, var(--deepcel-highlight-solid) 58%, var(--deepcel-sheet))}body[data-dsh-deepcel] [role=treeitem][aria-expanded]:has([class*=folderActive]){box-shadow:inset 3px 0 var(--deepcel-bookmark);position:relative}body[data-dsh-deepcel] [role=treeitem][aria-expanded]:has([class*=folderActive]):after{content:\"\";z-index:3;background:var(--deepcel-bookmark);clip-path:polygon(0 0,100% 0,100% 100%,50% 72%,0 100%);pointer-events:none;width:11px;height:18px;position:absolute;top:0;right:10px}body[data-dsh-deepcel] [class*=groupSection]{position:relative}body[data-dsh-deepcel] [class*=groupSection]:has(>:is([role=treeitem]:not([aria-expanded]),:has(>[role=treeitem]:not([aria-expanded])))):before{content:\"\";z-index:1;border-left:1px solid color-mix(in srgb, var(--deepcel-bookmark) 48%, var(--deepcel-grid));pointer-events:none;position:absolute;top:55px;bottom:17px;left:9px}body[data-dsh-deepcel] [class*=groupSection]>:is([role=treeitem]:not([aria-expanded]),:has(>[role=treeitem]:not([aria-expanded]))){box-sizing:border-box;width:calc(100% - 20px);margin-left:20px}body[data-dsh-deepcel] [class*=groupSection]>[role=treeitem]:not([aria-expanded]):before,body[data-dsh-deepcel] [class*=groupSection]>:has(>[role=treeitem]:not([aria-expanded]))>[role=treeitem]:before{content:\"├ ROW\";color:color-mix(in srgb, var(--deepcel-bookmark) 72%, var(--deepcel-muted));margin-left:-16px}body[data-dsh-deepcel] [class*=groupSection]>[role=treeitem]:not([aria-expanded]):last-child:before,body[data-dsh-deepcel] [class*=groupSection]>:has(>[role=treeitem]:not([aria-expanded])):last-child>[role=treeitem]:before{content:\"└ ROW\"}body[data-dsh-deepcel] :is([aria-selected=true],[aria-current=true],[data-state=active],[data-state=checked]){background:var(--deepcel-highlight-solid)!important;color:var(--deepcel-ink)!important;box-shadow:inset 3px 0 var(--deepcel-selection), inset 0 -1px var(--deepcel-selection)!important}body[data-dsh-deepcel][data-ds-dark-theme] :is([aria-selected=true],[aria-current=true],[data-state=active],[data-state=checked]){color:#fff8cf!important}body[data-dsh-deepcel] :is(input:not([class*=searchInput]),textarea,[contenteditable=true]){border:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important;color:var(--deepcel-ink)!important;box-shadow:none!important}body[data-dsh-deepcel] :is(input:not([class*=searchInput]),textarea,[contenteditable=true]):focus{border:2px solid var(--deepcel-selection)!important;box-shadow:inset 0 0 0 1px var(--deepcel-sheet)!important;outline:none!important}body[data-dsh-deepcel] [data-composer-card],body[data-dsh-deepcel] [data-question-key]>section,body[data-dsh-deepcel] [data-testid=todo-panel]{position:relative;border:2px solid var(--deepcel-selection)!important;background:linear-gradient(to right, transparent 59px, color-mix(in srgb, var(--deepcel-grid) 55%, transparent) 60px), linear-gradient(to bottom, transparent 23px, color-mix(in srgb, var(--deepcel-grid) 55%, transparent) 24px), var(--deepcel-sheet)!important;background-size:var(--deepcel-cell-width) var(--deepcel-row-height)!important;box-shadow:inset 0 0 0 1px var(--deepcel-sheet), 0 0 0 1px var(--deepcel-selection)!important}body[data-dsh-deepcel] [data-composer-card]:before{content:none}body[data-dsh-deepcel] [data-composer-card]:after,body[data-dsh-deepcel] [aria-selected=true]:after{content:\"\";box-sizing:border-box;border:1px solid var(--deepcel-sheet);background:var(--deepcel-selection);pointer-events:none;width:7px;height:7px;position:absolute;bottom:-4px;right:-4px}body[data-dsh-deepcel] [data-composer-card] :is(textarea,[contenteditable=true]){background:color-mix(in srgb, var(--deepcel-sheet) 90%, transparent)!important;border-color:#0000!important}body[data-dsh-deepcel] [data-phase=hero] [data-conversation-scroll]{justify-content:flex-start!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-seat]{width:100%;height:240px;margin-top:288px;position:relative;flex:0 0 240px!important}body[data-dsh-deepcel] [data-phase=active] [data-conversation-scroll][data-deepcel-workbook-flow]{grid-template-columns:calc(var(--deepcel-row-gutter) + var(--deepcel-chat-x,0px)) repeat(12, var(--deepcel-cell-width)) minmax(0, 1fr);grid-auto-rows:var(--deepcel-row-height);align-content:start;padding:var(--deepcel-flow-padding-top,0px) 0 calc(2 * var(--deepcel-row-height))!important;display:grid!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-deepcel-flow-container],body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-deepcel-cellized],body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-deepcel-cell-container]{display:contents!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-deepcel-composer-range]{grid-column:2/span 12;grid-row:span var(--deepcel-composer-rows,4);align-self:stretch;z-index:2!important;background:0 0!important;width:auto!important;height:auto!important;min-height:0!important;margin:0!important;padding:0!important;position:relative!important;bottom:auto!important;left:auto!important;right:auto!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [class*=composerStack]{box-sizing:border-box;gap:0!important;width:100%!important;max-width:none!important;margin:0!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-chat-flow]{background:0 0!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [class*=toBottomSlot]{right:var(--deepcel-cell-width);bottom:var(--deepcel-row-height);position:absolute!important}body[data-dsh-deepcel] [data-deepcel-message-range]{box-sizing:border-box;grid-column:2/span 12;grid-row:span var(--deepcel-message-rows,1);content-visibility:auto;contain-intrinsic-size:auto var(--deepcel-message-height,72px);background:0 0;border:0;width:auto;min-height:0;padding:0}body[data-dsh-deepcel] [data-deepcel-message-range][data-deepcel-single-line]:not([data-deepcel-cellized]){text-align:center;justify-content:center;align-items:center;display:flex}body[data-dsh-deepcel] [data-deepcel-message-range][data-deepcel-single-line]:not([data-deepcel-cellized]) *{line-height:var(--deepcel-row-height)!important;margin-block:0!important}body[data-dsh-deepcel] [data-deepcel-cell-container]{box-sizing:border-box;gap:0!important;margin:0!important;padding:0!important}body[data-dsh-deepcel] :is(ul,ol)[data-deepcel-cell-container]{list-style-position:inside}body[data-dsh-deepcel] [data-deepcel-content-cell]{z-index:2;box-sizing:border-box;grid-column:2/span 12;grid-row:span var(--deepcel-content-cell-rows,1);align-self:stretch;width:auto;height:auto;min-height:0;display:block;position:relative;overflow:hidden;border:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important;line-height:var(--deepcel-row-height)!important;border-bottom-width:0!important;border-radius:0!important;margin:0!important;padding:0 6px!important}body[data-dsh-deepcel] [data-deepcel-content-cell]:last-child{border-bottom-width:1px!important}body[data-dsh-deepcel] [data-deepcel-content-cell][data-deepcel-single-line]{text-align:center}body[data-dsh-deepcel] li[data-deepcel-content-cell]{list-style-position:inside;display:list-item;padding-left:18px!important}body[data-dsh-deepcel] :is([class~=md-code-block],[class*=tableScroll])[data-deepcel-content-cell]{overflow:auto}body[data-dsh-deepcel] img[data-deepcel-content-cell]{object-fit:contain}body[data-dsh-deepcel] [data-sample=bash][data-variant=bash][data-deepcel-content-cell]{height:var(--deepcel-row-height);align-items:center;gap:0;display:flex;overflow:hidden;padding:0 6px!important}body[data-dsh-deepcel] [data-sample=bash][data-variant=bash]+*>[data-deepcel-content-cell]{grid-column:2/span 12}body[data-dsh-deepcel] [data-sample=bash][data-variant=bash]+*>[data-terminal][data-deepcel-content-cell]{overflow:hidden;border:1px solid var(--deepcel-grid-strong)!important;margin:0!important;padding:0!important}body[data-dsh-deepcel] [data-sample=bash][data-variant=bash]+*>button[data-deepcel-content-cell]{height:var(--deepcel-row-height);opacity:1;justify-content:flex-start;align-items:center;display:flex;overflow:visible;border-radius:0!important;padding:0 8px!important}body[data-dsh-deepcel] [data-chat-flow-kind=turn-tail] [data-deepcel-content-cell]:has(>[data-produced-files-row]){min-height:var(--deepcel-row-height);grid-template-columns:max-content minmax(0,1fr);align-items:center;display:grid;overflow:hidden;gap:0 8px!important;padding:0 6px!important}body[data-dsh-deepcel] [data-chat-flow-kind=turn-tail] [data-produced-files-row]{min-width:0;height:var(--deepcel-row-height);line-height:var(--deepcel-row-height)}body[data-dsh-deepcel] [data-chat-flow-kind=turn-tail][data-deepcel-message-range]{content-visibility:visible;contain-intrinsic-size:none}body[data-dsh-deepcel] [data-chat-flow-kind=turn-tail] [data-time-hover-root]>[class*=actions][data-deepcel-content-cell]{height:var(--deepcel-row-height);align-items:center;gap:0;display:flex;overflow:visible;padding:0!important}body[data-dsh-deepcel] [data-chat-flow-kind=turn-tail] [data-time-hover-root]>[class*=actions]>button[aria-label]{width:auto;min-width:max-content;height:var(--deepcel-row-height);border-radius:0;padding:0 8px;border-right:1px solid var(--deepcel-grid)!important}body[data-dsh-deepcel] [data-chat-flow-kind=turn-tail] [data-time-hover-root] [role=tooltip]{z-index:1000003;white-space:pre-line;width:max-content;max-width:min(420px,50vw);padding:3px 7px;overflow:visible;color:#fff!important;background:#252525!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card]{grid-template-rows:minmax(calc(3 * var(--deepcel-row-height)), 1fr) var(--deepcel-row-height);box-sizing:border-box;background:var(--deepcel-sheet)!important;gap:0!important;width:100%!important;max-width:none!important;height:100%!important;min-height:0!important;padding:0!important;display:grid!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-deepcel-composer-range] :has(>[data-composer-card]){box-sizing:border-box;align-items:stretch!important;width:100%!important;margin:0!important;padding:0!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card]>[data-input-scroll]{box-sizing:border-box;border-bottom:1px solid var(--deepcel-grid-strong);background:var(--deepcel-sheet);grid-row:1;width:100%;height:100%;min-height:0;padding:0!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [data-input-backdrop],body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] textarea,body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [data-input-mirror]{font-size:14px;line-height:var(--deepcel-row-height);padding:0 6px!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card]>[class*=row]{box-sizing:border-box;width:100%;height:var(--deepcel-row-height);min-height:var(--deepcel-row-height);grid-row:2;align-items:stretch;display:flex;gap:0!important;padding:0!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] :is([class*=tools],[class*=modes],[class*=trailing]){height:var(--deepcel-row-height);align-items:stretch;gap:0!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=tools]{flex:auto}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=trailing]{flex:none;margin-left:auto}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] :is(button,select,[role=button]):not([role=menuitem]){box-sizing:border-box;min-width:var(--deepcel-cell-width);height:var(--deepcel-row-height);min-height:var(--deepcel-row-height);font:11px/var(--deepcel-row-height) Aptos, Calibri, \"Segoe UI\", sans-serif;border:0!important;border-right:1px solid var(--deepcel-grid)!important;background:var(--deepcel-sheet)!important;color:var(--deepcel-ink)!important;margin:0!important;padding:0 6px!important;transform:none!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=modes] :is(button,select,[role=button]),body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=trailing] :is(button,select,[role=button]){width:calc(2 * var(--deepcel-cell-width));max-width:calc(2 * var(--deepcel-cell-width))}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=trailing]>button:last-child{width:var(--deepcel-cell-width);min-width:var(--deepcel-cell-width);color:#fff!important;background:var(--deepcel-green)!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card]>[class*=row] button[aria-label]:has(svg):after,body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] button[aria-haspopup]:after{content:none!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] button[aria-haspopup=dialog]{width:var(--deepcel-cell-width);min-width:var(--deepcel-cell-width)}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] button[aria-haspopup=dialog]:after{content:\"Context\"!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=add]:after{content:\"Add\"!important}body[data-dsh-deepcel] [data-phase=active] [data-deepcel-workbook-flow] [data-composer-card] [class*=trailing]>button:last-child:after{content:\"Run\"!important}body[data-dsh-deepcel] [data-deepcel-stats-source]{display:none!important}body[data-dsh-deepcel] [data-phase=hero] [class*=composerStack]{top:0;left:calc(var(--deepcel-row-gutter) + var(--deepcel-composer-x,0px));box-sizing:border-box;transform:none;gap:0!important;width:540px!important;max-width:none!important;height:240px!important;padding:0!important;position:absolute!important}body[data-dsh-deepcel] [data-phase=hero] [class*=headline]:has(>[class*=headlineText]){z-index:3;box-sizing:border-box;border-top:1px solid var(--deepcel-grid-strong);border-right:1px solid var(--deepcel-grid-strong);border-bottom:1px solid var(--deepcel-grid-strong);border-left:1px solid var(--deepcel-grid-strong);background:var(--deepcel-sheet);pointer-events:auto;grid-template-columns:60px 300px 60px;align-items:center;column-gap:0;width:420px;height:24px;font-size:20px;font-weight:400;line-height:23px;display:grid;position:absolute;top:0;left:60px;overflow:hidden}body[data-dsh-deepcel] [data-phase=hero] [class*=headline]:has(>[class*=headlineText]):before{border-right:1px solid var(--deepcel-grid);justify-content:center;align-self:stretch;align-items:center;display:flex}body[data-dsh-deepcel] [data-phase=hero] [class*=headlineText]{z-index:1;background:var(--deepcel-sheet);color:var(--deepcel-ink);cursor:text;text-align:center;text-overflow:ellipsis;user-select:text;white-space:nowrap;justify-content:center;align-self:stretch;align-items:center;display:flex;position:relative;overflow:hidden}body[data-dsh-deepcel] [data-phase=hero] :is([class*=headlineText],[class*=previewBadge])[data-deepcel-selected-range]{z-index:4;outline:2px solid var(--deepcel-selection);outline-offset:-2px}body[data-dsh-deepcel] [data-phase=hero] :is([class*=headlineText],[class*=previewBadge])[data-deepcel-selected-range]:after{content:\"\";box-sizing:border-box;border:1px solid var(--deepcel-sheet);background:var(--deepcel-selection);pointer-events:none;width:7px;height:7px;position:absolute;bottom:0;right:0}body[data-dsh-deepcel] [data-phase=hero] [class*=headline][data-deepcel-selected-range=formula]:before{z-index:4;outline:2px solid var(--deepcel-selection);outline-offset:-2px;position:relative}body[data-dsh-deepcel] [data-phase=hero] [class*=previewBadge]{border-left:1px solid var(--deepcel-grid);background:var(--deepcel-sheet);border-top:0;border-bottom:0;border-right:0;border-radius:0;justify-content:center;align-self:stretch;align-items:center;margin:0;padding:0;font-size:12px;line-height:23px;display:flex}body[data-dsh-deepcel] tr[data-trajectory-row-key]>td:last-child{z-index:1;background:var(--deepcel-sheet);position:relative}body[data-dsh-deepcel] tr[data-trajectory-row-key]:hover>td:last-child{background:var(--dsw-alias-interactive-bg-hover)}body[data-dsh-deepcel] tr[data-trajectory-row-key][data-selected=true]>td:last-child{background:var(--deepcel-highlight-solid)}body[data-dsh-deepcel] [data-phase=hero] [class*=heroWorkspaceRow]{box-sizing:border-box;height:24px;position:absolute;top:48px;left:0;width:540px!important;padding:0!important}body[data-dsh-deepcel] [data-phase=hero] [class*=heroWorkspaceRow]>button{box-sizing:border-box;width:60px;height:24px;min-height:24px;font-size:11px;border:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important;padding:0 5px!important}body[data-dsh-deepcel] [data-phase=hero] [class*=heroWorkspaceRow]>button:after{content:none!important}body[data-dsh-deepcel] [data-phase=hero] :has(>[data-composer-card]){box-sizing:border-box;position:absolute;top:72px;left:0;width:540px!important;height:168px!important;padding:0!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card]{box-sizing:border-box;grid-template-rows:144px 24px;gap:0!important;width:540px!important;height:168px!important;min-height:168px!important;padding:0!important;display:grid!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card]>[class*=scroll]{grid-row:1;min-height:0;padding:0!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=grow]{height:100%}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] textarea{box-sizing:border-box;width:100%;font-size:12px;line-height:24px;height:100%!important;padding:0 5px!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card]>[class*=row]{box-sizing:border-box;border-top:1px solid var(--deepcel-grid-strong);grid-row:2;align-items:stretch;width:540px;height:24px;min-height:24px;position:absolute;bottom:-2px;left:-2px;padding:0!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] :is([class*=tools],[class*=trailing]){align-items:stretch;gap:0;height:23px}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=trailing]{margin-left:auto}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] :is(button,[role=button]):not([role=menuitem]){box-sizing:border-box;width:auto;min-width:60px;height:23px;min-height:23px;border:0!important;border-right:1px solid var(--deepcel-grid)!important;background:color-mix(in srgb, var(--deepcel-sheet) 94%, transparent)!important;padding:0 5px!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=trailing]>button:last-child{color:#fff!important;background:var(--deepcel-green)!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=add]:after{content:\"Add\"!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=modes] button:not([role=menuitem])>span,body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=trailing] button[aria-haspopup=menu]:not([role=menuitem])>span{display:none!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=modes] button:not([role=menuitem]):after{content:\"Access\"!important}body[data-dsh-deepcel] [data-phase=hero] [data-composer-card] [class*=trailing] button[aria-haspopup=menu]:not([role=menuitem]):after{content:\"Model\"!important}body[data-dsh-deepcel] [data-composer-card] [role=menu] [role=menuitem]>span{display:inline-flex!important}body[data-dsh-deepcel] [data-composer-card] [role=menu] [role=menuitem]:after{content:none!important;display:none!important}body[data-dsh-deepcel] :is([class*=bubble],[data-terminal],[data-variant=think]){border:1px solid var(--deepcel-grid)!important;background:color-mix(in srgb, var(--deepcel-sheet) 94%, transparent)!important;box-shadow:none!important}body[data-dsh-deepcel] [class*=userRow] [class*=bubble]{box-sizing:border-box;width:min(420px,100%);max-width:100%;position:relative;border:1px solid color-mix(in srgb, var(--deepcel-comment-accent) 52%, var(--deepcel-grid-strong))!important;border-left:4px solid var(--deepcel-comment-accent)!important;background:var(--deepcel-comment-fill)!important;box-shadow:2px 2px 0 color-mix(in srgb, var(--deepcel-grid-strong) 44%, transparent)!important;padding:29px 12px 8px!important}body[data-dsh-deepcel] [class*=userRow] [class*=bubble]:before{content:\"COMMENT\";box-sizing:border-box;height:var(--deepcel-row-height);border-bottom:1px solid color-mix(in srgb, var(--deepcel-comment-accent) 35%, var(--deepcel-grid));background:var(--deepcel-comment-header);color:var(--deepcel-comment-accent);font:600 9px/var(--deepcel-row-height) Consolas, monospace;letter-spacing:.08em;padding:0 8px;position:absolute;inset:0 0 auto}body[data-dsh-deepcel] [class*=userRow] [class*=bubble]:after{content:\"\";border-top:1px solid var(--deepcel-comment-accent);background:linear-gradient(45deg, transparent 48%, var(--deepcel-comment-fill) 49%);width:10px;height:10px;position:absolute;top:22px;right:-11px;transform:skewY(-35deg)}body[data-dsh-deepcel] :is([data-state=running],[data-status=running]){background-image:linear-gradient(transparent 42%, var(--deepcel-highlight) 42%, var(--deepcel-highlight) 86%, transparent 86%)!important}body[data-dsh-deepcel] :is(pre,code,[data-terminal]){font-variant-numeric:tabular-nums}body[data-dsh-deepcel] :is([role=menu],[role=listbox],[data-radix-popper-content-wrapper]>*,[role=dialog]){border:1px solid var(--deepcel-grid-strong)!important;border-top:4px solid var(--deepcel-green)!important;background:var(--deepcel-sheet)!important;color:var(--deepcel-ink)!important;box-shadow:2px 3px 8px #0000002e!important}body[data-dsh-deepcel] :is([class*=_overlay],[class*=_root]):has(>[role=dialog]){box-sizing:border-box;inset:var(--deepcel-ribbon-height) 0 28px var(--deepcel-sheet-origin)!important;z-index:999998!important;padding:var(--deepcel-row-height) var(--deepcel-cell-width)!important;backdrop-filter:none!important;background:0 0!important;justify-content:flex-start!important;align-items:flex-start!important;position:fixed!important}body[data-dsh-deepcel] :is([class*=_overlay],[class*=_root]):has(>[role=dialog])>[class*=_mask]{display:none!important}body[data-dsh-deepcel] [role=dialog]{border:1px solid var(--deepcel-grid-strong)!important;border-top:2px solid var(--deepcel-selection)!important;background:var(--deepcel-sheet)!important;box-shadow:none!important;margin:0!important}body[data-dsh-deepcel] [class*=_panel][role=dialog]{width:min(720px, calc(100vw - var(--deepcel-sheet-origin) - 120px))!important;height:min(672px, calc(100vh - var(--deepcel-ribbon-height) - 76px))!important;max-width:none!important}body[data-dsh-deepcel] [class*=_panel][role=dialog] [class*=_nav]{border-right:1px solid var(--deepcel-grid-strong);width:180px!important;padding:24px 0 0!important}body[data-dsh-deepcel] [class*=_panel][role=dialog] [class*=_navCell]{border-bottom:1px solid var(--deepcel-grid)!important;height:48px!important;padding:0 10px!important}body[data-dsh-deepcel] [class*=_panel][role=dialog] [class*=_header]{border-bottom:1px solid var(--deepcel-grid-strong);height:48px!important;padding:12px 10px!important}body[data-dsh-deepcel] [class*=_dialog][role=dialog]{width:min(540px, calc(100vw - var(--deepcel-sheet-origin) - 120px))!important;max-height:calc(100vh - var(--deepcel-ribbon-height) - 76px)!important;gap:0!important;padding-bottom:24px!important}body[data-dsh-deepcel] [class*=_dialog][role=dialog] [class*=_header]{box-sizing:border-box;border-bottom:1px solid var(--deepcel-grid-strong);height:48px;padding:12px 10px!important}body[data-dsh-deepcel] [class*=_dialog][role=dialog] [class*=_body]{margin-top:0!important;padding:24px 60px 0!important}body[data-dsh-deepcel] :is([role=menu],[role=listbox]):before{content:\"FILTER  |  Select values\";box-sizing:border-box;border-bottom:1px solid var(--deepcel-grid);background:var(--deepcel-header);min-height:25px;color:var(--deepcel-muted);letter-spacing:.04em;padding:6px 10px;font:10px/1.2 Consolas,monospace;display:block}body[data-dsh-deepcel] :is([role=menuitem],[role=option],[role=menuitemradio],[role=menuitemcheckbox]){min-height:25px;border-bottom:1px solid var(--deepcel-grid)!important}body[data-dsh-deepcel] :is([role=menuitem],[role=option],[role=menuitemradio],[role=menuitemcheckbox]):hover{background:var(--deepcel-highlight-solid)!important;color:var(--deepcel-ink)!important}body[data-dsh-deepcel] :is(select,button[aria-haspopup=menu],button[aria-haspopup=listbox]){border:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-header)!important;color:var(--deepcel-ink)!important}body[data-dsh-deepcel] :is(select,button[aria-haspopup=menu],button[aria-haspopup=listbox]):after{content:\" Filter v\";color:var(--deepcel-green-dark);padding-left:5px;font-size:10px}body[data-dsh-deepcel] svg{display:none!important}body[data-dsh-deepcel] [class*=_panel][role=dialog] [class*=_header] button:has(>svg):has(>span)>svg{width:14px!important;height:14px!important;color:var(--deepcel-ink)!important;opacity:1!important;visibility:visible!important;display:block!important}body[data-dsh-deepcel] [role=treeitem]:before{content:\"ROW\";color:var(--deepcel-muted);flex:none;margin-right:7px;font:9px/1 Consolas,monospace}body[data-dsh-deepcel] [role=treeitem][aria-expanded]:before{content:\"BOOK\";color:var(--deepcel-green-dark)}body[data-dsh-deepcel] [data-phase=hero] [class*=headline]:has(>[class*=headlineText]):before{content:\"FORMULA  \";color:var(--deepcel-green-dark);letter-spacing:.06em;vertical-align:middle;font:9px/1 Consolas,monospace}body[data-dsh-deepcel] button[aria-label]:has(>svg):after,body[data-dsh-deepcel] button[aria-label]:has(>span>svg):after{content:attr(aria-label);max-width:92px;color:inherit;text-overflow:ellipsis;white-space:nowrap;font:10px/1.2 Consolas,monospace;display:inline-block;overflow:hidden}body[data-dsh-deepcel] :is([data-pane=sidebar],[class*=sidebarCol]) [class*=searchButton][aria-expanded]>svg{display:none!important}body[data-dsh-deepcel] :is([data-pane=sidebar],[class*=sidebarCol]) [class*=searchButton][aria-expanded]:after{content:\"Find\";max-width:none}body[data-dsh-deepcel] :is([data-pane=sidebar],[class*=sidebarCol]) [class*=search]>input[class*=searchInput]{box-shadow:none!important;background:0 0!important;border:0!important}body[data-dsh-deepcel] :is([data-pane=sidebar],[class*=sidebarCol]) [class*=search][class*=searchExpanded]{border:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important}body[data-dsh-deepcel] [data-composer-card] [class*=trailing]>button:last-child:after{color:inherit;font:10px/1 Consolas,monospace;content:\"Run\"!important}body[data-dsh-deepcel] :is(button,[role=button]):focus-visible{outline:2px solid var(--deepcel-selection)!important;outline-offset:-1px!important}body[data-dsh-deepcel] [class*=titlebar]{display:none!important}@media (width<=900px){body[data-dsh-deepcel]{min-width:0}body[data-dsh-deepcel] .wwO2oG_toolCell:nth-last-child(-n+3),body[data-dsh-deepcel] .wwO2oG_columnCell:nth-last-child(-n+4),body[data-dsh-deepcel] .wwO2oG_statusCell{display:none}body[data-dsh-deepcel] .wwO2oG_ribbonTab{padding-inline:10px}}body[data-dsh-deepcel] #root [data-deepcel-composer-range]{border:0!important;height:0!important;min-height:0!important;margin:0!important;padding:0!important;overflow:visible!important}body[data-dsh-deepcel] #root [data-phase] [data-deepcel-formula-owner]{z-index:1000002!important;pointer-events:none!important;position:relative!important;overflow:visible!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card]{z-index:1000002!important;width:0!important;min-width:0!important;height:0!important;min-height:0!important;box-shadow:none!important;background:0 0!important;border:0!important;margin:0!important;padding:0!important;display:block!important;position:fixed!important;inset:0 auto auto 0!important;overflow:visible!important}body[data-dsh-deepcel] #root [data-phase] [data-composer-card] *{visibility:hidden!important}body[data-dsh-deepcel] #root [data-phase] textarea[data-deepcel-formula-input]{z-index:1000002!important;box-sizing:border-box!important;width:auto!important;height:var(--deepcel-formula-height)!important;min-height:var(--deepcel-formula-height)!important;max-height:var(--deepcel-formula-height)!important;visibility:visible!important;border:0!important;border-bottom:1px solid var(--deepcel-grid-strong)!important;background:var(--deepcel-sheet)!important;color:var(--deepcel-ink)!important;-webkit-text-fill-color:var(--deepcel-ink)!important;caret-color:var(--deepcel-selection)!important;resize:none!important;pointer-events:auto!important;cursor:text!important;opacity:1!important;margin:0!important;padding:5px 10px!important;font:12px/18px Consolas,monospace!important;display:block!important;position:fixed!important;inset:89px 0 auto 106px!important;overflow:hidden auto!important}@media (prefers-reduced-motion:reduce){body[data-dsh-deepcel] *,body[data-dsh-deepcel] :before,body[data-dsh-deepcel] :after{transition:none!important;animation:none!important}}";
		const tagId = "@dsh-external/dsh-client-ui-skin-deepcel/deepcel.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@dsh-external/dsh-client-ui-skin-deepcel";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var deepcel_module_css_default = {
			"ribbonTab": "wwO2oG_ribbonTab",
			"nameCell": "wwO2oG_nameCell",
			"workbookTabLabel": "wwO2oG_workbookTabLabel",
			"cornerCell": "wwO2oG_cornerCell",
			"sheetNavCell": "wwO2oG_sheetNavCell",
			"worksheetGrid": "wwO2oG_worksheetGrid",
			"statusSpacer": "wwO2oG_statusSpacer",
			"workbookTabs": "wwO2oG_workbookTabs",
			"formulaCell": "wwO2oG_formulaCell",
			"statisticsCell": "wwO2oG_statisticsCell",
			"titleCell": "wwO2oG_titleCell",
			"zoomCell": "wwO2oG_zoomCell",
			"formulaRow": "wwO2oG_formulaRow",
			"choiceOverlay": "wwO2oG_choiceOverlay",
			"choiceDialog": "wwO2oG_choiceDialog",
			"toolRow": "wwO2oG_toolRow",
			"rowCell": "wwO2oG_rowCell",
			"choiceButton": "wwO2oG_choiceButton",
			"choiceActions": "wwO2oG_choiceActions",
			"newSheetCell": "wwO2oG_newSheetCell",
			"statusCell": "wwO2oG_statusCell",
			"headerControls": "wwO2oG_headerControls",
			"formulaToken": "wwO2oG_formulaToken",
			"worksheetCell": "wwO2oG_worksheetCell",
			"topTitle": "wwO2oG_topTitle",
			"formulaLabel": "wwO2oG_formulaLabel",
			"ribbonTabs": "wwO2oG_ribbonTabs",
			"worksheetSelection": "wwO2oG_worksheetSelection",
			"columnRow": "wwO2oG_columnRow",
			"accountCell": "wwO2oG_accountCell",
			"statusChrome": "wwO2oG_statusChrome",
			"workbookChrome": "wwO2oG_workbookChrome",
			"choiceSelect": "wwO2oG_choiceSelect",
			"formulaTitle": "wwO2oG_formulaTitle",
			"titleRow": "wwO2oG_titleRow",
			"topToken": "wwO2oG_topToken",
			"columnCell": "wwO2oG_columnCell",
			"topMode": "wwO2oG_topMode",
			"workbookClose": "wwO2oG_workbookClose",
			"quickCell": "wwO2oG_quickCell",
			"choiceHeading": "wwO2oG_choiceHeading",
			"rowChrome": "wwO2oG_rowChrome",
			"sheetTabCell": "wwO2oG_sheetTabCell",
			"toolCell": "wwO2oG_toolCell"
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
				id: "manage",
				label: "Manage"
			},
			{
				id: "data",
				label: "Data"
			},
			{
				id: "review",
				label: "Review"
			},
			{
				id: "view",
				label: "View"
			}
		];
		const TOOL_CELLS = [
			"Filter",
			"Sort",
			"Merge",
			"Format"
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
		const cls = (name) => deepcel_module_css_default[name] ?? "";
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
				conversation: "Conversation",
				chat: "Chat",
				sidebarShow: "Show sidebar",
				sidebarHide: "Hide sidebar",
				manage: "Manage",
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
				confirm: "Confirm",
				cancel: "Cancel"
			};
			return {
				file: "文件",
				conversation: "会话",
				chat: "对话",
				sidebarShow: "打开侧边栏",
				sidebarHide: "收起侧边栏",
				manage: "管理",
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
				confirm: "确认",
				cancel: "取消"
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
			[...document.querySelector("[role='dialog']")?.querySelectorAll("button") ?? []].find((button) => ["关闭", "Close"].includes(button.textContent?.trim() ?? ""))?.click();
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
			const excluded = new Set(["Add workspace", "添加工作区"]);
			const choices = [...menu?.querySelectorAll("[role='menuitem'], [role='menuitemradio']") ?? []].filter((button) => !button.disabled).map(menuChoiceLabel).filter((label) => label !== "" && !excluded.has(label));
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
			for (const composer of document.querySelectorAll("[data-composer-card]")) {
				composer.dataset.deepcelMergedInput = "";
				const footer = composer.parentElement?.lastElementChild;
				if (footer instanceof HTMLElement && footer !== composer && footer.textContent?.trim() !== "") footer.dataset.deepcelStatsSource = "";
			}
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
		function hasOneVisualTextLine(element) {
			const range = document.createRange();
			range.selectNodeContents(element);
			if (typeof range.getClientRects !== "function") return void 0;
			const rects = [...range.getClientRects()].filter((rect) => rect.width > 0 && rect.height > 0);
			if (rects.length === 0) return void 0;
			const lineTops = [];
			for (const rect of rects) if (!lineTops.some((top) => Math.abs(top - rect.top) < 1)) lineTops.push(rect.top);
			return lineTops.length === 1;
		}
		function createWorksheetSurface(nameCell) {
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
			let baselineScrollTop = 0;
			let baselineFrame;
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
				const rows = document.querySelector("[data-skin-chrome=\"rows\"]");
				if (rows === null) return;
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
				const contentHeight = Math.max(message.scrollHeight, ...[...message.children].map((child) => child instanceof HTMLElement ? child.scrollHeight : 0));
				const text = message.textContent?.trim() ?? "";
				const visualSingleLine = hasOneVisualTextLine(message);
				const singleLine = text !== "" && !text.includes("\n") && (visualSingleLine ?? contentHeight <= ROW_HEIGHT * 1.5);
				const height = singleLine ? ROW_HEIGHT : Math.max(ROW_HEIGHT, Math.ceil(contentHeight / ROW_HEIGHT) * ROW_HEIGHT);
				const value = `${height}px`;
				if (message.style.getPropertyValue("--deepcel-message-height") !== value) message.style.setProperty("--deepcel-message-height", value);
				message.style.setProperty("--deepcel-message-rows", String(height / ROW_HEIGHT));
				if (singleLine) message.dataset.deepcelSingleLine = "";
				else delete message.dataset.deepcelSingleLine;
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
				if (message.querySelector("[class*='userRow']") !== null) return;
				const producedFilesRoot = message.querySelector("[data-produced-files-row]")?.parentElement;
				const shellSummary = message.querySelector("[data-sample='bash'][data-variant='bash']");
				const shellBody = shellSummary?.nextElementSibling;
				const shellBodyCells = shellBody === null || shellBody === void 0 ? [] : [...shellBody.children].filter((child) => child instanceof HTMLElement);
				const candidates = [...new Set([
					...producedFilesRoot === void 0 ? [] : [producedFilesRoot],
					...shellSummary === null ? [] : [shellSummary, ...shellBodyCells],
					...message.querySelectorAll(CONTENT_CELL_SELECTOR)
				])].filter((candidate) => {
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
			const messageResizeObserver = typeof ResizeObserver === "undefined" ? void 0 : new ResizeObserver((entries) => {
				for (const entry of entries) if (entry.target instanceof HTMLElement) sizeMessage(entry.target);
			});
			const syncMessages = () => {
				const live = new Set(document.querySelectorAll("[data-chat-flow-kind]"));
				for (const message of live) {
					if (messageElements.has(message)) continue;
					syncMessageCells(message);
					sizeMessage(message);
					messageResizeObserver?.observe(message);
				}
				for (const message of messageElements) {
					if (live.has(message)) continue;
					messageResizeObserver?.unobserve(message);
					clearMessageCells(message);
					delete message.dataset.deepcelMessageRange;
					delete message.dataset.deepcelSingleLine;
					message.style.removeProperty("--deepcel-message-height");
					message.style.removeProperty("--deepcel-message-rows");
				}
				messageElements.clear();
				for (const message of live) messageElements.add(message);
				for (const message of dirtyMessages) if (live.has(message)) syncMessageCells(message);
				dirtyMessages.clear();
			};
			const sizeComposer = () => {
				if (composerSeat === null) return;
				const card = composerSeat.querySelector("[data-composer-card]");
				const contentHeight = Math.max(composerSeat.scrollHeight, card?.scrollHeight ?? 0, card?.getBoundingClientRect().height ?? 0);
				composerSeat.style.setProperty("--deepcel-composer-rows", String(Math.max(1, Math.ceil(contentHeight / ROW_HEIGHT))));
				composerSeat.dataset.deepcelComposerRange = "";
			};
			const composerResizeObserver = typeof ResizeObserver === "undefined" ? void 0 : new ResizeObserver(() => {
				sizeComposer();
			});
			const syncFlowLayout = () => {
				const nextContainers = /* @__PURE__ */ new Set();
				const flow = scrollport?.querySelector("[data-chat-flow]") ?? null;
				if (scrollport !== null) if (flow === null) delete scrollport.dataset.deepcelWorkbookFlow;
				else scrollport.dataset.deepcelWorkbookFlow = "";
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
				const delta = scrollport.scrollTop - baselineScrollTop;
				const nextOffset = Math.trunc(delta / ROW_HEIGHT);
				const residual = delta - nextOffset * ROW_HEIGHT;
				document.body.style.setProperty("--deepcel-scroll-y", `${-residual}px`);
				document.body.style.setProperty("--deepcel-row-offset", String(nextOffset));
				document.body.style.setProperty("--deepcel-row-offset-y", `${-nextOffset * ROW_HEIGHT}px`);
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
				baselineScrollTop = scrollport.scrollTop;
				scrollport.addEventListener("scroll", onScroll, { passive: true });
				if (baselineFrame !== void 0) cancelAnimationFrame(baselineFrame);
				baselineFrame = requestAnimationFrame(() => {
					baselineFrame = requestAnimationFrame(() => {
						baselineFrame = void 0;
						if (scrollport === null) return;
						baselineScrollTop = scrollport.scrollTop;
						syncScrollCoordinates();
					});
				});
				syncFlowLayout();
				syncMessages();
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
				if (event.target.closest("#root [data-phase], #root [data-conversation-scroll]") === null) return;
				const origin = (Number.parseFloat(document.body.style.getPropertyValue("--deepcel-sidebar-offset")) || 0) + ROW_GUTTER;
				const ribbonHeight = currentRibbonHeight();
				if (event.clientX < origin || event.clientY < ribbonHeight || event.clientY >= window.innerHeight - STATUS_HEIGHT) return;
				const heroHeadline = event.target.closest("[data-phase='hero'] [class*='headline']:has(> [class*='headlineText'])");
				const heroHeadlineRect = heroHeadline?.getBoundingClientRect();
				if (heroHeadline !== null && heroHeadline !== void 0 && heroHeadlineRect !== void 0 && heroHeadlineRect.width > 0 && heroHeadlineRect.height > 0) {
					const relativeX = event.clientX - heroHeadlineRect.left;
					const title = heroHeadline.querySelector("[class*='headlineText']");
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
				for (const record of records) {
					const message = (record.target instanceof HTMLElement ? record.target : record.target.parentElement)?.closest("[data-chat-flow-kind]");
					if (message !== null && message !== void 0) dirtyMessages.add(message);
					for (const node of record.addedNodes) {
						if (!(node instanceof HTMLElement)) continue;
						const addedMessage = node.matches("[data-chat-flow-kind]") ? node : node.closest("[data-chat-flow-kind]");
						if (addedMessage !== null) dirtyMessages.add(addedMessage);
					}
				}
				if (reconcileFrame !== void 0) return;
				reconcileFrame = requestAnimationFrame(() => {
					reconcileFrame = void 0;
					bindScrollport();
				});
			});
			worksheetObserver.observe(document.body, {
				childList: true,
				subtree: true
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
					scrollport?.removeEventListener("scroll", onScroll);
					if (baselineFrame !== void 0) cancelAnimationFrame(baselineFrame);
					if (reconcileFrame !== void 0) cancelAnimationFrame(reconcileFrame);
					messageResizeObserver?.disconnect();
					composerResizeObserver?.disconnect();
					for (const message of messageElements) {
						clearMessageCells(message);
						delete message.dataset.deepcelMessageRange;
						delete message.dataset.deepcelSingleLine;
						message.style.removeProperty("--deepcel-message-height");
						message.style.removeProperty("--deepcel-message-rows");
					}
					for (const container of flowContainers) delete container.dataset.deepcelFlowContainer;
					if (composerSeat !== null) {
						delete composerSeat.dataset.deepcelComposerRange;
						composerSeat.style.removeProperty("--deepcel-composer-rows");
					}
					scrollport?.style.removeProperty("--deepcel-flow-padding-top");
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
			const titleCell = makeCell("titleCell", "DSH Workbook");
			const headerControls = document.createElement("div");
			headerControls.className = cls("headerControls");
			headerControls.dataset.headerControls = "";
			titleRow.append(makeCell("quickCell", "Save"), makeCell("quickCell", "Undo"), headerControls, titleCell, makeCell("accountCell", "Shared"));
			const tabs = document.createElement("div");
			tabs.className = cls("ribbonTabs");
			const ribbonTabs = /* @__PURE__ */ new Map();
			for (const spec of RIBBON_TABS) {
				const tab = makeControl("ribbonTab", `ribbon-${spec.id}`);
				tab.textContent = spec.label;
				tab.dataset.ribbonTab = spec.id;
				if (spec.id === "home") tab.hidden = true;
				tab.addEventListener("click", () => {
					chrome.dispatchEvent(new CustomEvent("deepcel-ribbon-change", { detail: spec.id }));
				});
				ribbonTabs.set(spec.id, tab);
				tabs.append(tab);
			}
			const tools = document.createElement("div");
			tools.className = cls("toolRow");
			const newSession = makeControl("toolCell", "new-session");
			const newWorkspace = makeControl("toolCell", "new-workspace");
			newWorkspace.addEventListener("click", () => {
				clickNativeButton([], ["添加工作区", "Add workspace"]);
			});
			const settings = makeControl("toolCell", "settings");
			settings.addEventListener("click", toggleNativeSettings);
			const workspace = makeControl("toolCell", "workspace");
			const preset = makeControl("toolCell", "preset");
			const permission = makeControl("toolCell", "permission");
			const model = makeControl("toolCell", "model");
			const thinking = makeControl("toolCell", "thinking");
			for (const label of TOOL_CELLS) tools.append(makeCell("toolCell", label));
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
					headerControls,
					newSession,
					newWorkspace,
					settings,
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
			const statistics = makeCell("statisticsCell", "");
			statistics.dataset.statisticsStatus = "";
			footer.append(sidebar, workbookTabs, addWorkbook, makeCell("statusSpacer", ""), makeCell("statusCell", "Ready"), statistics, language, makeCell("zoomCell", "-  100%  +"));
			return {
				footer,
				sidebar,
				workbookTabs,
				addWorkbook,
				language,
				statistics
			};
		}
		function activeSessionHeader() {
			return document.querySelector("#root [data-phase='active'] > header");
		}
		function selectedNativeSessionRow() {
			return document.querySelector("#root [class*='sessionRow'][role='treeitem'][aria-selected='true']") ?? void 0;
		}
		function proxyButton(source, text, action) {
			const proxy = makeControl("toolCell", action);
			proxy.textContent = text;
			proxy.disabled = source.disabled;
			proxy.setAttribute("aria-pressed", source.getAttribute("aria-selected") ?? "false");
			proxy.addEventListener("click", () => {
				source.click();
			});
			return proxy;
		}
		function currentSessionTitle(header) {
			const navigation = header.querySelector("nav");
			return (navigation?.querySelector("button:disabled") ?? navigation?.querySelector("button:last-of-type"))?.textContent?.trim() || navigation?.textContent?.trim() || "";
		}
		function headerActionProjections(actions) {
			if (actions === null || actions === void 0) return [];
			const projections = [];
			for (const entry of actions.children) {
				const buttons = entry instanceof HTMLButtonElement ? [entry] : [...entry.querySelectorAll("button")];
				if (buttons.length > 0) {
					for (const button of buttons) {
						const label = button.textContent?.trim() || button.getAttribute("aria-label") || "";
						if (label !== "") projections.push({
							label,
							source: button
						});
					}
					continue;
				}
				const label = entry.textContent?.trim() ?? "";
				if (label !== "") projections.push({ label });
			}
			return projections;
		}
		function createChoiceDialog(kind, labels, choices, current, onConfirm, onClose) {
			const overlay = document.createElement("div");
			overlay.className = cls("choiceOverlay");
			overlay.dataset.deepcelChoiceDialog = kind;
			const dialog = document.createElement("section");
			dialog.className = cls("choiceDialog");
			dialog.setAttribute("role", "dialog");
			dialog.setAttribute("aria-modal", "true");
			const heading = document.createElement("div");
			heading.className = cls("choiceHeading");
			heading.textContent = labels[kind];
			const select = document.createElement("select");
			select.className = cls("choiceSelect");
			for (const choice of choices) {
				const option = document.createElement("option");
				option.value = choice;
				option.textContent = choice;
				option.selected = choice === current;
				select.append(option);
			}
			const actions = document.createElement("div");
			actions.className = cls("choiceActions");
			const cancel = makeControl("choiceButton", "choice-cancel");
			cancel.textContent = labels.cancel;
			cancel.addEventListener("click", onClose);
			const confirm = makeControl("choiceButton", "choice-confirm");
			confirm.textContent = labels.confirm;
			confirm.disabled = choices.length === 0;
			confirm.addEventListener("click", () => {
				onConfirm(select.value);
			});
			actions.append(cancel, confirm);
			dialog.append(heading, select, actions);
			overlay.append(dialog);
			overlay.addEventListener("mousedown", (event) => {
				if (event.target === overlay) onClose();
			});
			return overlay;
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
			body.dataset.dshDeepcel = "";
			const { chrome: workbook, columns, controls, nameCell } = createWorkbookChrome();
			const worksheet = createWorksheetSurface(nameCell);
			const rows = createRowChrome();
			const { footer: status, sidebar: sidebarControl, workbookTabs, addWorkbook, language, statistics } = createStatusChrome(locale, layout);
			let sidebarOpen = false;
			let activeRibbon = "file";
			let hadActiveSession = false;
			let choiceDialog = null;
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
				if (phase === "settling") {
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
			const closeChoiceDialog = () => {
				choiceGeneration += 1;
				choiceDialog?.remove();
				choiceDialog = null;
			};
			const openChoiceDialog = (kind) => {
				const generation = ++choiceGeneration;
				choiceDialog?.remove();
				choiceDialog = null;
				(kind === "workspace" || kind === "preset" ? heroChoices(kind) : kind === "permission" ? permissionChoices() : modelChoices(kind)).then((choices) => {
					if (generation !== choiceGeneration) return;
					choiceDialog = createChoiceDialog(kind, labelsFor(locale.getLocale()), choices, kind === "workspace" || kind === "preset" ? nativeHeroChoiceTrigger(kind)?.textContent?.trim() ?? "" : kind === "permission" ? nativePermissionTrigger()?.textContent?.trim() ?? "" : modelLabels()[kind], (choice) => {
						if (kind === "workspace" || kind === "preset") applyHeroChoice(kind, choice);
						else if (kind === "permission") applyPermissionChoice(choice);
						else applyModelChoice(kind, choice);
						closeChoiceDialog();
					}, closeChoiceDialog);
					body.append(choiceDialog);
				});
			};
			controls.workspace.addEventListener("click", () => {
				openChoiceDialog("workspace");
			});
			controls.preset.addEventListener("click", () => {
				openChoiceDialog("preset");
			});
			controls.permission.addEventListener("click", () => {
				openChoiceDialog("permission");
			});
			controls.model.addEventListener("click", () => {
				openChoiceDialog("model");
			});
			controls.thinking.addEventListener("click", () => {
				openChoiceDialog("thinking");
			});
			const syncCopy = () => {
				const labels = labelsFor(locale.getLocale());
				sidebarControl.textContent = sidebarOpen ? "<" : ">";
				sidebarControl.title = sidebarOpen ? labels.sidebarHide : labels.sidebarShow;
				sidebarControl.setAttribute("aria-label", sidebarOpen ? labels.sidebarHide : labels.sidebarShow);
				controls.ribbonTabs.get("file").textContent = labels.file;
				controls.ribbonTabs.get("home").textContent = labels.conversation;
				controls.ribbonTabs.get("manage").textContent = labels.manage;
				controls.newSession.textContent = labels.newSession;
				controls.newSession.setAttribute("aria-label", labels.newSession);
				controls.newWorkspace.textContent = labels.newWorkspace;
				controls.newWorkspace.setAttribute("aria-label", labels.newWorkspace);
				controls.settings.textContent = labels.settings;
				controls.settings.setAttribute("aria-label", labels.settings);
				controls.workspace.setAttribute("aria-label", labels.workspace);
				controls.preset.setAttribute("aria-label", labels.preset);
				controls.permission.setAttribute("aria-label", labels.permission);
				controls.model.setAttribute("aria-label", labels.model);
				controls.thinking.setAttribute("aria-label", labels.thinking);
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
				body.dataset.deepcelSidebar = sidebarOpen ? "open" : "closed";
				body.style.setProperty("--deepcel-sidebar-offset", `${offset}px`);
				sidebarControl.setAttribute("aria-pressed", String(sidebarOpen));
				syncCopy();
			};
			const syncRibbon = () => {
				controls.settings.setAttribute("aria-pressed", String(nativeSettingsTrigger()?.getAttribute("aria-expanded") === "true"));
				const header = activeSessionHeader();
				const hasActiveSession = header !== null;
				if (hasActiveSession && !hadActiveSession) activeRibbon = "home";
				if (!hasActiveSession && hadActiveSession && activeRibbon === "home") activeRibbon = "file";
				hadActiveSession = hasActiveSession;
				controls.ribbonTabs.get("home").hidden = !hasActiveSession;
				for (const [id, tab] of controls.ribbonTabs) tab.toggleAttribute("data-active", id === activeRibbon);
				const labels = labelsFor(locale.getLocale());
				const heroChoices = nativeHeroChoiceTriggers();
				const permissionTrigger = nativePermissionTrigger();
				const models = modelLabels();
				controls.workspace.textContent = `${labels.workspace}: ${heroChoices.workspace?.textContent?.trim() || "-"}`;
				controls.workspace.disabled = heroChoices.workspace === void 0 || heroChoices.workspace.disabled;
				controls.preset.textContent = `${labels.preset}: ${heroChoices.preset?.textContent?.trim() || "-"}`;
				controls.preset.disabled = heroChoices.preset === void 0 || heroChoices.preset.disabled;
				controls.permission.textContent = `${labels.permission}: ${permissionTrigger?.textContent?.trim() || "-"}`;
				controls.permission.disabled = permissionTrigger === void 0 || permissionTrigger.disabled;
				controls.model.textContent = `${labels.model}: ${models.model || "-"}`;
				controls.model.disabled = nativeModelTrigger()?.disabled ?? true;
				controls.thinking.textContent = `${labels.thinking}: ${models.thinking || "-"}`;
				controls.thinking.disabled = nativeModelTrigger()?.disabled ?? true;
				const desired = [];
				if (activeRibbon === "file") desired.push(controls.newWorkspace, controls.newSession, controls.settings);
				else if (activeRibbon === "home" && header !== null) {
					const sources = [...header.querySelectorAll("[role='tablist'] [role='tab']")];
					if (sources.length === 0) {
						const chat = makeControl("toolCell", "view-chat");
						chat.textContent = labels.chat;
						chat.setAttribute("role", "tab");
						chat.setAttribute("aria-selected", "true");
						desired.push(chat);
					}
					for (const [index, source] of sources.entries()) {
						const proxy = proxyButton(source, index === 0 ? labels.chat : source.textContent?.trim() || `View ${index + 1}`, `view-${index}`);
						proxy.setAttribute("role", "tab");
						proxy.setAttribute("aria-selected", source.getAttribute("aria-selected") ?? "false");
						desired.push(proxy);
					}
				} else if (activeRibbon === "manage") {
					if (heroChoices.workspace !== void 0 || heroChoices.preset !== void 0) desired.push(controls.workspace, controls.preset);
					desired.push(controls.permission, controls.model, controls.thinking);
				} else for (const label of TOOL_CELLS) desired.push(makeCell("toolCell", label));
				const toolsSignature = `${activeRibbon}|${desired.map((item) => `${item.textContent}:${item.getAttribute("aria-selected")}`).join("|")}`;
				if (controls.tools.dataset.ribbonSignature !== toolsSignature) {
					controls.tools.replaceChildren(...desired);
					controls.tools.dataset.ribbonSignature = toolsSignature;
				}
				syncWorkbookTabs();
				for (const source of document.querySelectorAll("[data-deepcel-header-source]")) if (source !== header) delete source.dataset.deepcelHeaderSource;
				if (header === null) {
					controls.titleCell.textContent = "DSH Workbook";
					controls.headerControls.replaceChildren();
					delete controls.titleCell.dataset.titleSignature;
					return;
				}
				header.dataset.deepcelHeaderSource = "";
				const title = currentSessionTitle(header);
				const actions = header.firstElementChild?.lastElementChild;
				const actionItems = headerActionProjections(actions);
				const modeItem = actionItems.find((item) => item.source === void 0);
				const controlItems = actionItems.filter((item) => item !== modeItem);
				const titleSignature = [
					title,
					modeItem?.label ?? "",
					...controlItems.map((item) => item.label)
				].join("|");
				if (controls.titleCell.dataset.titleSignature !== titleSignature) {
					const projected = [makeCell("topTitle", title)];
					if (modeItem !== void 0) projected.push(makeCell("topMode", `| ${modeItem.label}`));
					const projectedControls = [];
					for (const item of controlItems) {
						const index = actionItems.indexOf(item);
						if (item.source === void 0) projectedControls.push(makeCell("topToken", item.label));
						else {
							const proxy = makeControl("topToken", `header-action-${index}`);
							proxy.textContent = item.label;
							proxy.addEventListener("click", () => {
								item.source?.click();
							});
							projectedControls.push(proxy);
						}
					}
					controls.titleCell.replaceChildren(...projected);
					controls.headerControls.replaceChildren(...projectedControls);
					controls.titleCell.dataset.titleSignature = titleSignature;
				}
			};
			const resizeFormulaInput = () => {
				body.style.setProperty("--deepcel-formula-height", `${FORMULA_HEIGHT}px`);
				body.style.setProperty("--deepcel-ribbon-height", `${RIBBON_HEIGHT}px`);
				const contentHeight = formulaInput === null ? FORMULA_HEIGHT : Math.max(FORMULA_HEIGHT, formulaInput.scrollHeight);
				const lines = Math.max(1, Math.ceil((contentHeight - 10) / FORMULA_LINE_HEIGHT));
				const nextHeight = Math.min(118, 10 + lines * FORMULA_LINE_HEIGHT);
				body.style.setProperty("--deepcel-formula-height", `${nextHeight}px`);
				body.style.setProperty("--deepcel-ribbon-height", `${RIBBON_HEIGHT + nextHeight - FORMULA_HEIGHT}px`);
				formulaInput?.toggleAttribute("data-deepcel-formula-overflow", contentHeight > nextHeight);
				if (formulaHeight === nextHeight) return;
				formulaHeight = nextHeight;
				fillRowCoordinates(rows);
				worksheet.resize();
			};
			const syncFormulaInput = () => {
				const next = activeComposer()?.querySelector("textarea") ?? null;
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
			let shellFrame;
			const scheduleShellSync = () => {
				if (shellFrame !== void 0) cancelAnimationFrame(shellFrame);
				shellFrame = requestAnimationFrame(() => {
					shellFrame = void 0;
					concealNativeEntrypoints();
					syncShell();
					syncRibbon();
					syncFormulaInput();
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
			const syncStatistics = () => {
				const text = [...document.querySelectorAll("[data-deepcel-stats-source]")].findLast((source) => source.isConnected)?.textContent?.trim() ?? "";
				if (statistics.textContent !== text) statistics.textContent = text;
				statistics.toggleAttribute("hidden", text === "");
			};
			window.addEventListener("resize", syncCoordinates);
			const shellObserver = new MutationObserver((records) => {
				if (records.some((record) => {
					if (record.type === "childList") return true;
					if (!(record.target instanceof HTMLElement)) return false;
					if (record.attributeName === "data-sidebar-collapsed") return true;
					if (record.attributeName === "aria-selected" || record.attributeName === "aria-expanded" || record.attributeName === "data-phase") return true;
					return record.attributeName === "style" && record.target === findShellParts()?.frame;
				})) {
					scheduleShellSync();
					requestAnimationFrame(syncStatistics);
				}
			});
			shellObserver.observe(document.body, {
				attributes: true,
				childList: true,
				subtree: true
			});
			const unsubscribeLocale = locale.subscribe(syncLocale);
			body.append(worksheet.grid, worksheet.selection, workbook, rows, status);
			syncLocale();
			syncStatistics();
			scheduleShellSync();
			document.title = SKIN_TITLE;
			ctx.effect(() => () => {
				window.removeEventListener("resize", syncCoordinates);
				workbook.removeEventListener("deepcel-ribbon-change", onRibbonChange);
				shellObserver.disconnect();
				if (shellFrame !== void 0) cancelAnimationFrame(shellFrame);
				unsubscribeLocale();
				for (const button of document.querySelectorAll("[data-deepcel-native-proxy]")) delete button.dataset.deepcelNativeProxy;
				for (const composer of document.querySelectorAll("[data-deepcel-merged-input]")) delete composer.dataset.deepcelMergedInput;
				for (const source of document.querySelectorAll("[data-deepcel-stats-source]")) delete source.dataset.deepcelStatsSource;
				for (const header of document.querySelectorAll("[data-deepcel-header-source]")) delete header.dataset.deepcelHeaderSource;
				for (const input of document.querySelectorAll("[data-deepcel-formula-input]")) {
					delete input.dataset.deepcelFormulaInput;
					delete input.dataset.deepcelFormulaOverflow;
				}
				for (const owner of document.querySelectorAll("[data-deepcel-formula-owner]")) delete owner.dataset.deepcelFormulaOwner;
				for (const source of document.querySelectorAll("[data-deepcel-hero-choice-source]")) delete source.dataset.deepcelHeroChoiceSource;
				formulaInput?.removeEventListener("input", resizeFormulaInput);
				closeChoiceDialog();
				delete body.dataset.dshDeepcel;
				delete body.dataset.deepcelSidebar;
				delete body.dataset.deepcelModelProbing;
				body.style.removeProperty("--deepcel-sidebar-offset");
				body.style.removeProperty("--deepcel-formula-height");
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