"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@symph/react");

var _routerDom = require("@symph/react/router-dom");

var _docs = require("../../model/docs.model");

var _antd = require("antd");

var _emptyModule = _interopRequireDefault(require("@symph/joy/dist/build/babel-src/empty-module.js"));

var _icons = require("@ant-design/icons");

var _core = require("@symph/core");

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __jsx = _react.default.createElement;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let DocsLayout = (_dec = (0, _react2.ReactController)(), _dec2 = (0, _react2.RouteParam)({
  name: "path"
}), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _core.Inject)(), _dec5 = Reflect.metadata("design:type", typeof _docs.DocsModel === "undefined" ? Object : _docs.DocsModel), _dec(_class = (_class2 = class DocsLayout extends _react2.BaseReactController {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "docPath", _descriptor, this);

    _initializerDefineProperty(this, "docsModel", _descriptor2, this);

    this.state = {
      showDrawer: false,
      openKeys: null
    };

    this.onOpenChange = openKeys => {
      this.setState({
        openKeys: openKeys
      });
    };
  }

  async showDoc(menu) {
    this.props.navigate(`/docs${menu.path}`);
  }

  async initialModelStaticState() {
    const tem = this.props.location.pathname.split("/");
    let path = [tem[0], tem[2]].join("/") || "/docs/docs";
    await this.docsModel.getDocMenus(path);
  }

  renderMenuItem(items) {
    if (!items || items.length === 0) {
      return undefined;
    }

    const views = [];

    for (const item of items) {
      const {
        children,
        title,
        path
      } = item;

      if (children) {
        views.push(_react.default.createElement('div', 'jsx placeholder'));
      } else {
        views.push(_react.default.createElement('div', 'jsx placeholder'));
      }
    }

    return views;
  }

  renderView() {
    const {
      docMenus,
      defaultOpenKeys,
      currentDoc
    } = this.docsModel.state;
    return _react.default.createElement('div', 'jsx placeholder');
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "docPath", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "docsModel", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.default = DocsLayout;