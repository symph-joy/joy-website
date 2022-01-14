"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@symph/react");

var _routerDom = require("@symph/react/router-dom");

var _antd = require("antd");

var _emptyModule = _interopRequireDefault(require("@symph/joy/dist/build/babel-src/empty-module.js"));

var _icons = require("@ant-design/icons");

var _joy = require("@symph/joy");

var _docs = require("../model/docs.model");

var _core = require("@symph/core");

var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __jsx = _react.default.createElement;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

const {
  Content
} = _antd.Layout;
const {
  Paragraph
} = _antd.Typography;
let HelloController = (_dec = (0, _joy.Prerender)(), _dec2 = (0, _react2.ReactController)(), _dec3 = (0, _core.Inject)(), _dec4 = Reflect.metadata("design:type", typeof _docs.DocsModel === "undefined" ? Object : _docs.DocsModel), _dec(_class = _dec2(_class = (_class2 = class HelloController extends _react2.BaseReactController {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "docModel", _descriptor, this);
  }

  async initialModelStaticState() {
    await Promise.all([this.docModel.getSnippet("/docs/@snippets/hello-react-controller"), this.docModel.getSnippet("/docs/@snippets/hello-server-controller")]);
  }

  componentDidMount() {
    super.componentDidMount();
    window.VANTA.BIRDS({
      el: "#banner",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 390.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundAlpha: 0.0,
      color1: 0xfa541c,
      color2: 0xfaad14,
      colorMode: "variance"
    });
  }

  renderView() {
    const {
      snippets
    } = this.docModel.state;
    const docHelloReactController = snippets["/docs/@snippets/hello-react-controller"];
    const docHelloServerController = snippets["/docs/@snippets/hello-server-controller"];
    return _react.default.createElement('div', 'jsx placeholder');
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "docModel", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class);
exports.default = HelloController;