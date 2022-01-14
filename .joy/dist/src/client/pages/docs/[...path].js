"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocsPrerenderGenerator = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@symph/react");

var _antd = require("antd");

var _emptyModule = _interopRequireDefault(require("@symph/joy/dist/build/babel-src/empty-module.js"));

var _react3 = require("@symph/joy/react");

var _docs = require("../../model/docs.model");

var _core = require("@symph/core");

var _doc = _interopRequireDefault(require("../../component/doc"));

var _dec, _dec2, _dec3, _class, _class2, _descriptor, _dec4, _dec5, _dec6, _dec7, _dec8, _class4, _class5, _descriptor2, _descriptor3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __jsx = _react.default.createElement;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

const {
  Link
} = _antd.Anchor;
let Path = (_dec4 = (0, _react2.ReactController)(), _dec5 = (0, _react2.RouteParam)({
  name: "path"
}), _dec6 = Reflect.metadata("design:type", String), _dec7 = (0, _core.Inject)(), _dec8 = Reflect.metadata("design:type", typeof _docs.DocsModel === "undefined" ? Object : _docs.DocsModel), _dec4(_class4 = (_class5 = class Path extends _react2.BaseReactController {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "docPath", _descriptor2, this);

    _initializerDefineProperty(this, "docsModel", _descriptor3, this);

    this.hash = void 0;
    this.state = {
      showDrawer: false
    };

    this.observe = (selector, callback) => {
      let startTime = Date.now(); // 检测超时, 最长 30s

      let MAX_OBSERVE_TIME = 30e3;
      let found = false; // 每隔 100ms 检测一次页面元素是否存在

      let intervalId = setInterval(function () {
        // 务必注意 return, 即 结束方法
        if (found) {
          clearInterval(intervalId);
          return;
        }

        let elapse = Date.now() - startTime;

        if (elapse > MAX_OBSERVE_TIME) {
          // console.log(`${selector} 元素检测超时 ${elapse} ms, 停止检测`);
          clearInterval(intervalId);
          return;
        }

        let element = document.getElementById(selector); // 如果没值, 则 return

        if (!element) {
          // console.log(`${selector} 元素不存在`);
          return;
        }

        found = true; // 向回调函数中传入 this

        callback(element);
      }, 100);
    };
  }

  async initialModelStaticState() {
    let path = this.docPath || "/docs/docs/start/introduce";
    await this.fetchPageDocData(path);
  }

  async fetchPageDocData(path) {
    if (!path.startsWith("/")) {
      path = "/docs/" + path;
    }

    await this.docsModel.getDoc(path);
  }

  componentDidUpdate() {
    this.scrollEle();
  }

  scrollEle() {
    const hash = window.location.hash?.slice(1);

    if (!hash) {
      window.scrollTo(0, 0);
      this.hash = "";
    } else {
      if (this.hash !== hash) {
        const ele = document.getElementById(hash);

        if (ele) {
          this.hash = hash;
          ele.scrollIntoView();
        }
      }
    }
  }

  renderView() {
    const {
      loadCurrentDocErr,
      loadingCurrentDoc,
      titleTrees
    } = this.docsModel.state;
    return _react.default.createElement('div', 'jsx placeholder');
  }

}, (_descriptor2 = _applyDecoratedDescriptor(_class5.prototype, "docPath", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "docsModel", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class5)) || _class4);
exports.default = Path;
let DocsPrerenderGenerator = (_dec = (0, _react3.Prerender)({
  routeComponent: Path
}), _dec2 = (0, _core.Inject)(), _dec3 = Reflect.metadata("design:type", typeof _docs.DocsModel === "undefined" ? Object : _docs.DocsModel), _dec(_class = (_class2 = class DocsPrerenderGenerator {
  constructor() {
    _initializerDefineProperty(this, "docsModel", _descriptor, this);
  }

  // getRoute(): string | BaseReactController<Record<string, unknown>, Record<string, unknown>, IApplicationContext> {
  //   return "/docs/*";
  // }
  isFallback() {
    return false;
  }

  async getPaths() {
    const menus = await this.docsModel.getAllDocsMenus();
    const paths = [];

    const addChildren = menus => {
      (menus || []).forEach(menu => {
        if (menu.children?.length) {
          addChildren(menu.children);
        } else {
          paths.push(`${menu.path}`);
        }
      });
    };

    addChildren(menus || []);
    return paths;
  }

  async getApis() {
    return [{
      path: "/docs/titleArray"
    }];
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "docsModel", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.DocsPrerenderGenerator = DocsPrerenderGenerator;