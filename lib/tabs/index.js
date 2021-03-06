"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactIs = require("react-is");
var react_dom_1 = require("react-dom");
var ripple_1 = require("../ripple");
var classnames_1 = require("classnames");
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tab = React.createRef();
        _this.ripple = React.createRef();
        _this.createRipple = function (e) {
            _this.ripple.current.createRipple(e);
        };
        return _this;
    }
    Tab.prototype.render = function () {
        var _this = this;
        var _a = this.props, active = _a.active, onClick = _a.onClick, style = _a.style, width = _a.width, type = _a.type;
        return (React.createElement("div", { className: classnames_1.default('ze-tab', type !== 'easy' && 'ze-clickable', active && 'ze-active'), onMouseDown: function (e) { return type !== 'easy' && _this.createRipple(e); }, onClick: onClick, style: Object.assign({}, style, { width: width }), ref: this.tab },
            this.props.children,
            type !== 'easy' && React.createElement(ripple_1.default, { ref: this.ripple })));
    };
    return Tab;
}(React.Component));
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeBar = React.createRef();
        _this.activeTab = React.createRef();
        _this.handleClickTab = function (_, value, index) {
            if (_this.props.onChange) {
                _this.props.onChange(value, index);
            }
        };
        _this.handleChangeBar = function () {
            if (_this.activeTab.current) {
                var el = react_dom_1.findDOMNode(_this.activeTab.current);
                var offsetWidth = el.offsetWidth, offsetLeft = el.offsetLeft;
                _this.activeBar.current.style.width = offsetWidth + 'px';
                _this.activeBar.current.style.left = offsetLeft + 'px';
            }
            else {
                _this.activeBar.current.style.width = 0 + 'px';
            }
        };
        return _this;
    }
    Tabs.prototype.componentDidUpdate = function () {
        this.handleChangeBar();
    };
    Tabs.prototype.componentDidMount = function () {
        this.handleChangeBar();
    };
    Tabs.prototype.render = function () {
        var _this = this;
        var _a = this.props, value = _a.value, type = _a.type;
        var children = this.props.children;
        if (ReactIs.isFragment(children)) {
            children = children.props.children;
        }
        return (React.createElement("div", { className: classnames_1.default("ze-tabs", type && "ze-tabs-" + type) },
            children &&
                React.Children.map(children, function (child, index) {
                    var valueIsValid = child.props.value || typeof child.props.value === 'number';
                    var tabValue = valueIsValid ? child.props.value : index;
                    var active = tabValue === value;
                    return React.cloneElement(child, {
                        onClick: function (e) {
                            _this.handleClickTab(e, tabValue, index);
                            child.props.onClick && child.props.onClick(e);
                        },
                        active: active,
                        ref: active ? _this.activeTab : null,
                        value: tabValue,
                        type: type
                    });
                }),
            React.createElement("div", { className: "ze-tab-bar", ref: this.activeBar })));
    };
    Tabs.Item = Tab;
    return Tabs;
}(React.Component));
exports.default = Tabs;
