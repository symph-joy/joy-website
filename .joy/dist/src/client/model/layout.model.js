"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutModel = void 0;

var _react = require("@symph/react");

var _dec, _class;

let LayoutModel = (_dec = (0, _react.ReactModel)(), _dec(_class = class LayoutModel extends _react.BaseReactModel {
  getInitState() {
    return {
      collapsed: true,
      isMobile: false
    };
  }

  changeCollapsed(collapsed) {
    this.setState({
      collapsed
    });
  }

  changeIsMobile(isMobile) {
    this.setState({
      isMobile
    });
  }

}) || _class);
exports.LayoutModel = LayoutModel;