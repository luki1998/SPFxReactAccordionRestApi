define("c2bc253c-a515-4854-a0fa-2a4cad5b6e52_0.0.1",["@microsoft/sp-property-pane","@microsoft/sp-core-library","AccordionWebPartStrings","@microsoft/sp-webpart-base","react","react-dom","@microsoft/sp-http"],function(t,e,n,o,i,r,s){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="/0x+")}({"/0x+":function(t,e,n){"use strict";n.r(e);var o=n("cDcd"),i=n("faye"),r=n("UWqr"),s=n("26ea"),a=n("br4S"),c=n("aARG");n("7R/D");var l,u={accordion:"accordion_6490b2ef",container:"container_6490b2ef",row:"row_6490b2ef",column:"column_6490b2ef","ms-Grid":"ms-Grid_6490b2ef",title:"title_6490b2ef",subTitle:"subTitle_6490b2ef",description:"description_6490b2ef",button:"button_6490b2ef",label:"label_6490b2ef",list:"list_6490b2ef",item:"item_6490b2ef"},f=(l=function(t,e){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onGetListItemsClicked=function(t){t.preventDefault(),e.props.onGetListItems()},e.onAddListItemClicked=function(t){t.preventDefault(),e.props.onAddListItem()},e.onUpdateListItemClicked=function(t){t.preventDefault(),e.props.onUpdateListItem()},e.onDeleteListItemClicked=function(t){t.preventDefault(),e.props.onDeleteListItem()},e}return f(e,t),e.prototype.render=function(){return o.createElement("div",{className:u.accordion},o.createElement("div",{className:u.container},o.createElement("div",{className:u.row},o.createElement("div",{className:u.column},o.createElement("p",{className:u.title},"SharePoint Content!"),o.createElement("a",{href:"#",className:u.button,onClick:this.onGetListItemsClicked},o.createElement("span",{className:u.label},"Get Counties")),o.createElement("a",{href:"#",className:u.button,onClick:this.onAddListItemClicked},o.createElement("span",{className:u.label},"Add List Item")),o.createElement("a",{href:"#",className:u.button,onClick:this.onUpdateListItemClicked},o.createElement("span",{className:u.label},"Update List Item")),o.createElement("a",{href:"#",className:u.button,onClick:this.onDeleteListItemClicked},o.createElement("span",{className:u.label},"Delete List Item")))),o.createElement("div",{className:u.row},o.createElement("ul",{className:u.list},this.props.spListItems&&this.props.spListItems.map(function(t){return o.createElement("li",{key:t.Id,className:u.item},o.createElement("strong",null,"Id:")," ",t.Id,", ",o.createElement("strong",null,"Title:")," ",t.Title)})))))},e}(o.Component),d=n("vlQI"),b=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._listItems=[],e._onGetListItems=function(){e._getListItems().then(function(t){e._listItems=t,e.render()})},e._onAddListItem=function(){e._addListItem().then(function(){e._getListItems().then(function(t){e._listItems=t,e.render()})})},e._onUpdateListItem=function(){e._updateListItem().then(function(){e._getListItems().then(function(t){e._listItems=t,e.render()})})},e._onDeleteListItem=function(){e._deleteListItem().then(function(){e._getListItems().then(function(t){e._listItems=t,e.render()})})},e}return b(e,t),e.prototype.render=function(){var t=o.createElement(p,{description:this.properties.description,listName:this.properties.listName,spListItems:this._listItems,onGetListItems:this._onGetListItems,onAddListItem:this._onAddListItem,onUpdateListItem:this._onUpdateListItem,onDeleteListItem:this._onDeleteListItem});""==this.properties.listName&&(this.properties.listName=this.context.pageContext.web.title),i.render(t,this.domElement)},e.prototype._getListItems=function(){return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl+"/_api/web/lists/getbytitle('AccordionList')/items?$select=Id,Title",d.SPHttpClient.configurations.v1).then(function(t){return t.json()}).then(function(t){return t.value})},e.prototype._getItemEntityType=function(){return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl+"/_api/web/lists/getbytitle('AccordionList')?$select=ListItemEntityTypeFullName",d.SPHttpClient.configurations.v1).then(function(t){return t.json()}).then(function(t){return t.ListItemEntityTypeFullName})},e.prototype._addListItem=function(){var t=this;return this._getItemEntityType().then(function(e){var n={};return n.body=JSON.stringify({Title:(new Date).toUTCString(),"@odata.type":e}),t.context.spHttpClient.post(t.context.pageContext.web.absoluteUrl+"/_api/web/lists/getbytitle('AccordionList')/items",d.SPHttpClient.configurations.v1,n)})},e.prototype._updateListItem=function(){var t=this;return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl+"/_api/web/lists/getbytitle('AccordionList')/items?$select=Id,Title&$filter=Title eq 'United States'",d.SPHttpClient.configurations.v1).then(function(t){return t.json()}).then(function(t){return t.value[0]}).then(function(e){e.Title="USA";var n={};return n.headers={"X-HTTP-Method":"MERGE","IF-MATCH":e["@odata.etag"]},n.body=JSON.stringify(e),t.context.spHttpClient.post(t.context.pageContext.web.absoluteUrl+"/_api/web/lists/getbytitle('AccordionList')/items("+e.Id+")",d.SPHttpClient.configurations.v1,n)})},e.prototype._deleteListItem=function(){var t=this;return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl+"/_api/web/lists/getbytitle('AccordionList')/items?$select=Id,Title&$orderby=ID desc&$top=1",d.SPHttpClient.configurations.v1).then(function(t){return t.json()}).then(function(t){return t.value[0]}).then(function(e){var n={headers:{"X-HTTP-Method":"DELETE","IF-MATCH":"*"}};return n.body=JSON.stringify(e),t.context.spHttpClient.post(t.context.pageContext.web.absoluteUrl+"/_api/web/lists/getbytitle('AccordionList')/items("+e.Id+")",d.SPHttpClient.configurations.v1,n)})},e.prototype.onDispose=function(){i.unmountComponentAtNode(this.domElement)},Object.defineProperty(e.prototype,"dataVersion",{get:function(){return r.Version.parse("1.0")},enumerable:!0,configurable:!0}),e.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:c.PropertyPaneDescription},groups:[{groupName:c.BasicGroupName,groupFields:[Object(s.PropertyPaneTextField)("description",{label:c.DescriptionFieldLabel}),Object(s.PropertyPaneTextField)("listName",{label:c.ListNameFieldLabel})]}]}]}},e}(a.BaseClientSideWebPart);e.default=m},"26ea":function(e,n){e.exports=t},"7R/D":function(t,e,n){var o=n("IGet"),i=n("ruv1");"string"==typeof o&&(o=[[t.i,o]]);for(var r=0;r<o.length;r++)i.loadStyles(o[r][1],!0);o.locals&&(t.exports=o.locals)},IGet:function(t,e,n){(t.exports=n("JPst")(!1)).push([t.i,'.accordion_6490b2ef .container_6490b2ef{max-width:700px;margin:0 auto;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.accordion_6490b2ef .row_6490b2ef{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;background-color:#005a9e;padding:20px}.accordion_6490b2ef .row_6490b2ef:after,.accordion_6490b2ef .row_6490b2ef:before{display:table;content:"";line-height:0}.accordion_6490b2ef .row_6490b2ef:after{clear:both}.accordion_6490b2ef .column_6490b2ef{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box}[dir=ltr] .accordion_6490b2ef .column_6490b2ef{float:left}[dir=rtl] .accordion_6490b2ef .column_6490b2ef{float:right}.accordion_6490b2ef .column_6490b2ef .ms-Grid_6490b2ef{padding:0}@media (min-width:640px){.accordion_6490b2ef .column_6490b2ef{width:83.33333333333334%}}@media (min-width:1024px){.accordion_6490b2ef .column_6490b2ef{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .accordion_6490b2ef .column_6490b2ef{left:16.66667%}[dir=rtl] .accordion_6490b2ef .column_6490b2ef{right:16.66667%}}@media (min-width:640px){[dir=ltr] .accordion_6490b2ef .column_6490b2ef{left:8.33333%}[dir=rtl] .accordion_6490b2ef .column_6490b2ef{right:8.33333%}}.accordion_6490b2ef .title_6490b2ef{font-size:21px;font-weight:100;color:#fff}.accordion_6490b2ef .description_6490b2ef,.accordion_6490b2ef .subTitle_6490b2ef{font-size:17px;font-weight:300;color:#fff}.accordion_6490b2ef .button_6490b2ef{text-decoration:none;height:32px;min-width:80px;background-color:#0078d4;border-color:#0078d4;color:#fff;outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.accordion_6490b2ef .button_6490b2ef .label_6490b2ef{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}.accordion_6490b2ef .list_6490b2ef{background-color:#c7e0f4;padding:10px 0 100px;line-height:50px;list-style-type:none}.accordion_6490b2ef .item_6490b2ef,.accordion_6490b2ef .list_6490b2ef{color:#005a9e;font-family:Segoe UI Regular WestEuropean,Segoe UI,Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0}.accordion_6490b2ef .item_6490b2ef{background-color:#eff6fc;vertical-align:center;-webkit-box-shadow:none;box-shadow:none;padding:0 15px;position:relative;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}',""])},JPst:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(r).concat([i]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];null!=s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},UWqr:function(t,n){t.exports=e},aARG:function(t,e){t.exports=n},br4S:function(t,e){t.exports=o},cDcd:function(t,e){t.exports=i},faye:function(t,e){t.exports=r},ruv1:function(t,e,n){"use strict";(function(t){var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o="undefined"==typeof window?t:window,i=o&&o.CSPSettings&&o.CSPSettings.nonce,r=function(){var t=o.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};t.runState||(t=n({},t,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}}));t.registeredThemableStyles||(t=n({},t,{registeredThemableStyles:[]}));return o.__themeState__=t,t}(),s=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,a=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function c(t){var e=a();t();var n=a();r.perf.duration+=n-e}function l(){c(function(){var t=r.runState.buffer.slice();r.runState.buffer=[];var e=[].concat.apply([],t);e.length>0&&u(e)})}function u(t,e){r.loadStyles?r.loadStyles(d(t).styleString,t):function(t){if("undefined"==typeof document)return;var e=document.getElementsByTagName("head")[0],n=document.createElement("style"),o=d(t),s=o.styleString,a=o.themable;n.setAttribute("data-load-themed-styles","true"),n.type="text/css",i&&n.setAttribute("nonce",i);n.appendChild(document.createTextNode(s)),r.perf.count++,e.appendChild(n);var c=document.createEvent("HTMLEvents");c.initEvent("styleinsert",!0,!1),c.args={newStyle:n},document.dispatchEvent(c);var l={styleElement:n,themableStyle:t};a?r.registeredThemableStyles.push(l):r.registeredStyles.push(l)}(t)}function f(t){void 0===t&&(t=3),3!==t&&2!==t||(p(r.registeredStyles),r.registeredStyles=[]),3!==t&&1!==t||(p(r.registeredThemableStyles),r.registeredThemableStyles=[])}function p(t){t.forEach(function(t){var e=t&&t.styleElement;e&&e.parentElement&&e.parentElement.removeChild(e)})}function d(t){var e=r.theme,n=!1;return{styleString:(t||[]).map(function(t){var o=t.theme;if(o){n=!0;var i=e?e[o]:void 0,r=t.defaultValue||"inherit";return e&&!i&&console,i||r}return t.rawString}).join(""),themable:n}}function b(t){var e=[];if(t){for(var n=0,o=void 0;o=s.exec(t);){var i=o.index;i>n&&e.push({rawString:t.substring(n,i)}),e.push({theme:o[1],defaultValue:o[2]}),n=s.lastIndex}e.push({rawString:t.substring(n)})}return e}e.loadStyles=function(t,e){void 0===e&&(e=!1),c(function(){var n=Array.isArray(t)?t:b(t),o=r.runState,i=o.mode,s=o.buffer,a=o.flushTimer;e||1===i?(s.push(n),a||(r.runState.flushTimer=setTimeout(function(){r.runState.flushTimer=0,l()},0))):u(n)})},e.configureLoadStyles=function(t){r.loadStyles=t},e.configureRunMode=function(t){r.runState.mode=t},e.flush=l,e.loadTheme=function(t){r.theme=t,function(){if(r.theme){for(var t=[],e=0,n=r.registeredThemableStyles;e<n.length;e++){var o=n[e];t.push(o.themableStyle)}t.length>0&&(f(1),u([].concat.apply([],t)))}}()},e.clearStyles=f,e.detokenize=function(t){return t&&(t=d(b(t)).styleString),t},e.splitStyles=b}).call(this,n("yLpj"))},vlQI:function(t,e){t.exports=s},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}})});