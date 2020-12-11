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
import styles from './Accordion.module.scss';
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onGetListItemsClicked = function (event) {
            event.preventDefault();
            _this.props.onGetListItems();
        };
        _this.onAddListItemClicked = function (event) {
            event.preventDefault();
            _this.props.onAddListItem();
        };
        _this.onUpdateListItemClicked = function (event) {
            event.preventDefault();
            _this.props.onUpdateListItem();
        };
        _this.onDeleteListItemClicked = function (event) {
            event.preventDefault();
            _this.props.onDeleteListItem();
        };
        return _this;
    }
    Accordion.prototype.render = function () {
        return (React.createElement("div", { className: styles.accordion },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("p", { className: styles.title }, "SharePoint Content!"),
                        React.createElement("a", { href: "#", className: styles.button, onClick: this.onGetListItemsClicked },
                            React.createElement("span", { className: styles.label }, "Get Counties")),
                        React.createElement("a", { href: "#", className: styles.button, onClick: this.onAddListItemClicked },
                            React.createElement("span", { className: styles.label }, "Add List Item")),
                        React.createElement("a", { href: "#", className: styles.button, onClick: this.onUpdateListItemClicked },
                            React.createElement("span", { className: styles.label }, "Update List Item")),
                        React.createElement("a", { href: "#", className: styles.button, onClick: this.onDeleteListItemClicked },
                            React.createElement("span", { className: styles.label }, "Delete List Item")))),
                React.createElement("div", { className: styles.row },
                    React.createElement("ul", { className: styles.list }, this.props.spListItems &&
                        this.props.spListItems.map(function (list) {
                            return React.createElement("li", { key: list.Id, className: styles.item },
                                React.createElement("strong", null, "Id:"),
                                " ",
                                list.Id,
                                ", ",
                                React.createElement("strong", null, "Title:"),
                                " ",
                                list.Title);
                        }))))));
    };
    return Accordion;
}(React.Component));
export default Accordion;
//# sourceMappingURL=Accordion.js.map