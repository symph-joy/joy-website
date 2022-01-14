"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocsModel = void 0;

var _react = require("@symph/react");

var _joy = require("@symph/joy");

var _core = require("@symph/core");

var _dec, _dec2, _dec3, _dec4, _class;

let DocsModel = (_dec = (0, _react.ReactModel)(), _dec2 = function (target, key) {
  return (0, _core.Inject)("joyFetchService")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _joy.ReactFetchService === "undefined" ? Object : _joy.ReactFetchService]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DocsModel extends _react.BaseReactModel {
  constructor(fetchService) {
    super();
    this.fetchService = fetchService;
    this.titleArrays = [];
  }

  getInitState() {
    return {
      loadingCurrentDoc: false,
      docMenus: [],
      titleTrees: [],
      currentDoc: undefined,
      result: [],
      openKeys: [],
      snippets: {},
      defaultOpenKeys: []
    };
  } // 所有可搜索的内容


  handleString(string) {
    return string.toLowerCase().replace(/\s/g, "");
  }

  async getSearch(value) {
    const res = [];
    let titleArray;

    if (this.titleArrays.length === 0) {
      const resp = await this.fetchService.fetchApi("/docs/titleArray");
      const respJson = await resp.json();
      titleArray = respJson.data;
      this.titleArrays = titleArray;
    } else {
      titleArray = this.titleArrays;
    }

    if (value) {
      for (const h1 of titleArray) {
        if (h1.text.includes(value) || this.handleString(h1.text).includes(this.handleString(value))) {
          const temp = res.find(value => value.path === h1.path);

          if (!temp) {
            let obj = {
              text: h1.text,
              id: h1.id,
              path: h1.path,
              file: h1.file
            };
            res.push(obj);
          }
        }

        if (h1.children) {
          for (const h2 of h1.children) {
            if (h2.text.includes(value) || this.handleString(h2.text).includes(this.handleString(value))) {
              let obj = {
                text: h1.text,
                id: h1.id,
                path: h1.path,
                file: h1.file,
                children: [{
                  text: h2.text,
                  id: h2.id
                }]
              };
              res.push(obj);
            }
          }
        }
      }
    }

    this.setState({
      result: res
    });
  }

  clearSearch() {
    this.setState({
      result: []
    });
  }

  async getDocMenus(path) {
    const resp = await this.fetchService.fetchApi("/docs/menus?path=" + encodeURIComponent(path));
    const respJson = await resp.json();
    const defaultOpenKeys = this.getDefaultOpenKeys(respJson.data);
    this.setState({
      docMenus: respJson.data,
      defaultOpenKeys
    });
    return respJson.data;
  }

  async getAllDocsMenus() {
    const resp = await this.fetchService.fetchApi("/docs/allMenus");
    const respJson = await resp.json();
    return respJson.data;
  }

  flatDocMenus(arr, res) {
    if (Array.isArray(arr)) {
      for (const child of arr) {
        if (child.children) {
          res.push("/docs" + child.path);
          this.flatDocMenus(child.children, res);
        }
      }
    }
  }

  getDefaultOpenKeys(docMenus) {
    const res = [];
    this.flatDocMenus(docMenus, res);
    return res;
  }

  async recurrencePreDocMenus(menu, res) {
    for (const arr of menu) {
      if (arr.children) {
        if (arr.children.length > 0) {
          this.recurrencePreDocMenus(arr.children, res);
        }
      } else {
        res.push({
          doc: "/docs" + arr.path,
          detail: "/docs/detail" + arr.path
        });
      }
    }
  }

  async getSnippet(path) {
    try {
      const respJson = await this.fetchDocDetail(path);
      const doc = respJson.data;
      this.setState({
        snippets: { ...this.state.snippets,
          [path]: doc
        }
      });
    } catch (e) {
      this.setState({
        snippets: { ...this.state.snippets,
          [path]: e
        }
      });
    }
  }

  async fetchDocDetail(path) {
    this.setState({
      loadingCurrentDoc: true
    });
    const resp = await this.fetchService.fetchApi("/docs/detail" + path);
    const respJson = await resp.json();
    let code = resp.status;
    let message;

    if (resp.status === 404) {
      message = "文档不存在。";
    }

    if (code < 200 || code >= 300) {
      throw new _joy.FetchError(code, message || "服务器错误，请重试。");
    }

    return respJson;
  }

  async getDoc(path) {
    this.setState({
      loadingCurrentDoc: true
    });

    try {
      const respJson = await this.fetchDocDetail(path);
      const doc = respJson.data;
      this.setState({
        loadCurrentDocErr: undefined,
        currentDoc: doc,
        titleTrees: doc.anchor,
        loadingCurrentDoc: false
      });
    } catch (e) {
      this.setState({
        loadCurrentDocErr: e,
        currentDoc: undefined,
        loadingCurrentDoc: false
      });
    }
  }

}) || _class) || _class) || _class) || _class);
exports.DocsModel = DocsModel;