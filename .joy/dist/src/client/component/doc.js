"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@symph/react");

var _core = require("@symph/core");

var _docs = require("../model/docs.model");

var _dec, _dec2, _dec3, _class, _class2, _descriptor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __jsx = _react.default.createElement;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Doc = (_dec = (0, _react2.ReactController)(), _dec2 = (0, _core.Inject)(), _dec3 = Reflect.metadata("design:type", typeof _docs.DocsModel === "undefined" ? Object : _docs.DocsModel), _dec(_class = (_class2 = class Doc extends _react2.BaseReactController {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "docsModel", _descriptor, this);
  }

  // async initialModelStaticState(): Promise<void | number> {
  //   let path = this.props.path || "/docs/docs/start/introduce";
  //   await this.fetchPageDocData(path);
  // }
  // async fetchPageDocData(path) {
  //   if (!path.startsWith("/")) {
  //     path = "/docs/" + path;
  //   }
  //   await this.docsModel.getDoc(path);
  // }
  renderView() {
    const {
      currentDoc
    } = this.docsModel.state;
    const className = this.props.className;
    return _react.default.createElement('div', 'jsx placeholder');
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "docsModel", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.default = Doc;