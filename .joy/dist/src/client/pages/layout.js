"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _core = require("@symph/core");

var _docs = require("../model/docs.model");

var _react2 = require("@symph/react");

var _routerDom = require("@symph/react/router-dom");

var _icons = _interopRequireWildcard(require("@ant-design/icons"));

var _emptyModule = _interopRequireDefault(require("@symph/joy/dist/build/babel-src/empty-module.js"));

var _layout = require("../model/layout.model");

var _theme = require("../utils/theme");

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __jsx = _react.default.createElement;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

const {
  Content
} = _antd.Layout;
const {
  Item: MenuItem
} = _antd.Menu;

const SunSvg = () => _react.default.createElement('div', 'jsx placeholder');

const MoonSvg = () => _react.default.createElement('div', 'jsx placeholder');

let MainLayout = (_dec = (0, _react2.ReactController)(), _dec2 = (0, _core.Inject)(), _dec3 = Reflect.metadata("design:type", typeof _layout.LayoutModel === "undefined" ? Object : _layout.LayoutModel), _dec4 = (0, _core.Inject)(), _dec5 = Reflect.metadata("design:type", typeof _docs.DocsModel === "undefined" ? Object : _docs.DocsModel), _dec(_class = (_class2 = class MainLayout extends _react2.BaseReactController {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "layoutModel", _descriptor, this);

    _initializerDefineProperty(this, "docsModel", _descriptor2, this);

    this.state = {
      search: "",
      observer: undefined,
      hash: "",
      themeSelectAfterVisible: false
    };

    this.onChange = value => {
      this.setState({
        search: value
      });

      if (value) {
        this.docsModel.getSearch(value);
      } else {
        this.docsModel.clearSearch();
      }
    };

    this.onSelect = v => {
      const value = JSON.parse(v);
      const prePath = window.location.pathname;

      if (value?.children) {
        this.pushHistory(`${value.path}${value.children[0]?.id}`);

        if (prePath === value.path) {
          this.scrollEle();
        }
      } else {
        this.pushHistory(`${value.path}`);
      } // 将前一个值赋值给当前search


      this.setState({
        search: this.state.search
      });
      this.docsModel.getSearch(this.state.search);
    };

    this.handleToggleThemeClick = () => {
      (0, _theme.changeTheme)();
    };

    this.handleToggleCollapsed = () => {
      const {
        collapsed
      } = this.layoutModel.state;
      this.layoutModel.changeCollapsed(!collapsed);
    };

    this.pushHistory = url => {
      const {
        navigate
      } = this.props;
      navigate(url);
    };

    this.handleThemeSelectMouseEnter = () => {
      this.setState({
        themeSelectAfterVisible: true
      });
    };
  }

  scrollEle() {
    const hash = window.location.hash?.slice(1);
    const ele = document.getElementById(hash);

    if (ele) {
      ele.scrollIntoView();
    }
  }

  componentDidMount() {
    super.componentDidMount();
    const theme = (0, _theme.getTheme)();
    const oBtn = document.getElementById("collapseBtn");
    const oBody = document.getElementsByTagName("body")[0];
    oBody.setAttribute("data-theme", theme);
    const observer = new IntersectionObserver(([entry]) => {
      const {
        intersectionRatio
      } = entry;

      if (intersectionRatio > 0) {
        this.layoutModel.changeIsMobile(true);
        oBody.setAttribute("data-is-mobile", "true");
      } else {
        this.layoutModel.changeIsMobile(false);
        oBody.setAttribute("data-is-mobile", "false");
      }
    });
    observer.observe(oBtn);
    this.setState({
      observer
    });
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    const {
      observer
    } = this.state;
    const oBtn = document.getElementById("collapseBtn");
    observer && observer.unobserve(oBtn);
  } // 处理切换主题按钮点击事件


  renderView() {
    const {
      result
    } = this.docsModel.state;
    const {
      collapsed,
      isMobile
    } = this.layoutModel.state;
    return _react.default.createElement('div', 'jsx placeholder');
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "layoutModel", [_dec2, _dec3], {
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
exports.default = MainLayout;