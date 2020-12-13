var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'AccordionWebPartStrings';
import Accordion from './components/Accordion';
import { SPHttpClient } from '@microsoft/sp-http';
import { sp } from "@pnp/sp/presets/all";
var AccordionWebPart = /** @class */ (function (_super) {
    __extends(AccordionWebPart, _super);
    function AccordionWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._listItems = [];
        _this._onGetListItems = function () {
            _this._getListItems()
                .then(function (response) {
                _this._listItems = response;
                _this.render();
            });
        };
        _this._onAddListItem = function (title, content) {
            _this._addListItem(title, content)
                .then(function () {
                _this._getListItems()
                    .then(function (response) {
                    _this._listItems = response;
                    _this.render();
                });
            });
        };
        _this._onUpdateListItem = function () {
            _this._updateListItem()
                .then(function () {
                _this._getListItems()
                    .then(function (response) {
                    _this._listItems = response;
                    _this.render();
                });
            });
        };
        _this._onDeleteListItem = function (id) {
            _this._deleteListItem(id)
                .then(function () {
                _this._getListItems()
                    .then(function (response) {
                    _this._listItems = response;
                    _this.render();
                });
            });
        };
        return _this;
    }
    AccordionWebPart.prototype.render = function () {
        var element = React.createElement(Accordion, {
            description: this.properties.description,
            listName: this.properties.listName,
            spListItems: this._listItems,
            onGetListItems: this._onGetListItems,
            onAddListItem: this._onAddListItem,
            onUpdateListItem: this._onUpdateListItem,
            onDeleteListItem: this._onDeleteListItem
        });
        //Set listName default value to page title.
        if (this.properties.listName == "") {
            this.properties.listName = this.context.pageContext.web.title;
        }
        ReactDom.render(element, this.domElement);
    };
    AccordionWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    AccordionWebPart.prototype._getListItems = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('AccordionList')/items?$select=Id,Title,SPFxContent,SPFxSortOrder", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (jsonResponse) {
            return jsonResponse.value;
        });
    };
    AccordionWebPart.prototype._getItemEntityType = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('AccordionList')?$select=ListItemEntityTypeFullName", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (jsonResponse) {
            return jsonResponse.ListItemEntityTypeFullName;
        });
    };
    AccordionWebPart.prototype._addListItem = function (title, content) {
        var _this = this;
        return this._getItemEntityType()
            .then(function (spEntityType) {
            var request = {};
            request.body = JSON.stringify({
                Title: title,
                SPFxContent: content,
                SPFxSortOrder: 1,
                '@odata.type': spEntityType
            });
            return _this.context.spHttpClient.post(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('AccordionList')/items", SPHttpClient.configurations.v1, request);
        });
    };
    AccordionWebPart.prototype._updateListItem = function () {
        var _this = this;
        // get the first item
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('AccordionList')/items?$select=Id,Title,SPFxContent,SPFxSortOrder&$orderby=ID desc&$top=1'", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (jsonResponse) {
            return jsonResponse.value[0];
        })
            .then(function (listItem) {
            // update item
            listItem.Title = 'USA';
            // save it
            var request = {};
            request.headers = {
                'X-HTTP-Method': 'MERGE',
                'IF-MATCH': listItem['@odata.etag']
            };
            request.body = JSON.stringify(listItem);
            return _this.context.spHttpClient.post(_this.context.pageContext.web.absoluteUrl + ("/_api/web/lists/getbytitle('AccordionList')/items(" + listItem.Id + ")"), SPHttpClient.configurations.v1, request);
        });
    };
    AccordionWebPart.prototype._deleteListItem = function (id) {
        var _this = this;
        // get the last item
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + ("/_api/web/lists/getbytitle('AccordionList')/items?$select=Id,Title&$filter=Id eq " + id), SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (jsonResponse) {
            return jsonResponse.value[0];
        })
            .then(function (listItem) {
            var request = {};
            request.headers = {
                'X-HTTP-Method': 'DELETE',
                'IF-MATCH': '*'
            };
            request.body = JSON.stringify(listItem);
            return _this.context.spHttpClient.post(_this.context.pageContext.web.absoluteUrl + ("/_api/web/lists/getbytitle('AccordionList')/items(" + listItem.Id + ")"), SPHttpClient.configurations.v1, request);
        });
    };
    AccordionWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(AccordionWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    AccordionWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                }),
                                PropertyPaneTextField('listName', {
                                    label: strings.ListNameFieldLabel,
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return AccordionWebPart;
}(BaseClientSideWebPart));
export default AccordionWebPart;
//# sourceMappingURL=AccordionWebPart.js.map