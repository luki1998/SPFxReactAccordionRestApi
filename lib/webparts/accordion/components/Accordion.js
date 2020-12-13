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
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
var modules = {
    toolbar: [
        [{
                'header': [1, 2, 3, false]
            }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{
                'color': []
            }, {
                'background': []
            }],
        [{
                'list': 'ordered'
            }, {
                'list': 'bullet'
            }, {
                'indent': '-1'
            }, {
                'indent': '+1'
            }],
        ['link', 'image', 'video'],
        ['clean']
    ],
};
var formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video', 'background', 'color'];
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
            console.log(event.currentTarget.querySelector(".ql-editor").innerHTML);
            var itemTitle = event.currentTarget.CurrentTitle.value;
            var itemContent = String(event.currentTarget.querySelector(".ql-editor").innerHTML);
            _this.props.onAddListItem(itemTitle, itemContent);
        };
        _this.onUpdateListItemClicked = function (event) {
            event.preventDefault();
            _this.props.onUpdateListItem();
        };
        _this.onDeleteListItemClicked = function (event) {
            event.preventDefault();
            _this.props.onDeleteListItem(parseInt(event.currentTarget.id));
        };
        return _this;
    }
    Accordion.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.accordion },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("form", { onSubmit: this.onAddListItemClicked },
                            React.createElement("p", null, "Title"),
                            React.createElement("input", { type: 'text', name: 'CurrentTitle' }),
                            React.createElement("p", null, "Content"),
                            React.createElement(ReactQuill, { theme: "snow", modules: modules, formats: formats }),
                            React.createElement("input", { type: 'submit' })),
                        React.createElement("p", { className: styles.title }, "SharePoint Content!"),
                        React.createElement("a", { href: "#", className: styles.button, onClick: this.onGetListItemsClicked },
                            React.createElement("span", { className: styles.label }, "Get Counties")),
                        React.createElement("a", { href: "#", className: styles.button, onClick: this.onUpdateListItemClicked },
                            React.createElement("span", { className: styles.label }, "Update List Item")))),
                React.createElement("div", { className: styles.row },
                    React.createElement("ul", { className: styles.list }, this.props.spListItems &&
                        this.props.spListItems.map(function (list) {
                            return React.createElement("li", { key: list.Id, className: styles.item },
                                React.createElement("div", { style: { marginRight: "30px" } },
                                    React.createElement("strong", null, "Id:"),
                                    " ",
                                    list.Id,
                                    ", ",
                                    React.createElement("strong", null, "Title:"),
                                    " ",
                                    list.Title,
                                    " ",
                                    React.createElement("strong", null, "Content"),
                                    " ",
                                    React.createElement("div", { dangerouslySetInnerHTML: { __html: list.SPFxContent } })),
                                React.createElement("a", { href: "#", className: styles.button, id: list.Id, onClick: _this.onDeleteListItemClicked },
                                    React.createElement("span", { className: styles.label }, "Delete List Item")));
                        }))))));
    };
    return Accordion;
}(React.Component));
export default Accordion;
//# sourceMappingURL=Accordion.js.map