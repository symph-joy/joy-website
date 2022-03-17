import { BaseReactModel, ReactModel } from "@symph/react";
import { FetchError, ReactFetchService } from "@symph/joy/react";
import { Inject } from "@symph/core";

export interface DocMenuItem {
  title: string;
  path: string;
  children: DocMenuItem[];
}

export interface TreeItem {
  children?: TreeItem[];
  type?: string;
  raw?: string;
  depth?: number;
  text?: string;
  tokens?: [];
  id?: string;
  path?: string;
  file?: string;
}

export type DocsModelState = {
  docMenus: DocMenuItem[];
  titleTrees: TreeItem[];
  result: TreeItem[];
  loadingCurrentDoc: boolean;
  loadCurrentDocErr?: { code: number; message: string };
  currentDoc: DocMenuItem & { htmlContent };
  openKeys: Array<string>;
  snippets: Record<string, DocMenuItem & { htmlContent }>;
  defaultOpenKeys: Array<string>;
};

@ReactModel()
export class DocsModel extends BaseReactModel<DocsModelState> {
  constructor(@Inject("joyFetchService") private fetchService: ReactFetchService) {
    super();
  }

  getInitState(): DocsModelState {
    return {
      loadingCurrentDoc: false,
      docMenus: [],
      titleTrees: [],
      currentDoc: undefined,
      result: [],
      openKeys: [],
      snippets: {},
      defaultOpenKeys: [],
    };
  }
  // 所有可搜索的内容
  titleArrays = [];

  public handleString(string: string) {
    return string.toLowerCase().replace(/\s/g, "");
  }

  public async getSearch(value: string) {
    const res = [];
    let titleArray: TreeItem[];
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
        this.judgeTitleHasValue(h1, value, res, 1, h1, h1);
        if (h1.children) {
          for (const h2 of h1.children) {
            this.judgeTitleHasValue(h2, value, res, 2, h1, h1);
            if (h2.children) {
              for (const h3 of h2.children) {
                this.judgeTitleHasValue(h3, value, res, 3, h1, h2);
              }
            }
          }
        }
      }
    }
    this.setState({
      result: res,
    });
  }

  private judgeTitleHasValue(element: TreeItem, value: string, res: TreeItem[], level: number, h1: TreeItem, parent: TreeItem) {
    if (element.text.includes(value) || this.handleString(element.text).includes(this.handleString(value))) {
      const temp =
        level === 1
          ? res.find((value) => value.path === element.path)
          : level === 2
          ? res.find((value) => {
              if (value.children) {
                return value.children[0].text === element.text;
              }
            })
          : false;
      if (!temp) {
        let obj = {
          text: h1.text,
          id: h1.id,
          path: h1.path,
          file: h1.file,
          children:
            level === 1
              ? null
              : level === 2
              ? [
                  {
                    text: element.text,
                    id: element.id,
                  },
                ]
              : [
                  {
                    text: parent.text,
                    id: parent.id,
                    children: [
                      {
                        text: element.text,
                        id: element.id,
                      },
                    ],
                  },
                ],
        };
        res.push(obj);
      }
    }
  }

  public clearSearch() {
    this.setState({
      result: [],
    });
  }

  public async getDocMenus(path: string): Promise<DocMenuItem[]> {
    const resp = await this.fetchService.fetchApi("/docs/menus?path=" + encodeURIComponent(path));
    const respJson = await resp.json();
    const defaultOpenKeys = this.getDefaultOpenKeys(respJson.data);
    this.setState({
      docMenus: respJson.data,
      defaultOpenKeys,
    });
    return respJson.data;
  }

  public async getAllDocsMenus(): Promise<DocMenuItem[]> {
    const resp = await this.fetchService.fetchApi("/docs/allMenus");
    const respJson = await resp.json();
    return respJson.data;
  }

  private flatDocMenus(arr: DocMenuItem[], res: string[]) {
    if (Array.isArray(arr)) {
      for (const child of arr) {
        if (child.children) {
          res.push(child.path);
          this.flatDocMenus(child.children, res);
        }
      }
    }
  }

  public getDefaultOpenKeys(docMenus: DocMenuItem[]) {
    const res = [];
    this.flatDocMenus(docMenus, res);
    return res;
  }

  public async recurrencePreDocMenus(menu: DocMenuItem[], res: object[]) {
    for (const arr of menu) {
      if (arr.children) {
        if (arr.children.length > 0) {
          this.recurrencePreDocMenus(arr.children, res);
        }
      } else {
        res.push({
          doc: "/docs" + arr.path,
          detail: "/docs/detail" + arr.path,
        });
      }
    }
  }

  public async getSnippet(path: string) {
    try {
      const respJson = await this.fetchDocDetail(path);
      const doc = respJson.data;
      this.setState({
        snippets: {
          ...this.state.snippets,
          [path]: doc,
        },
      });
    } catch (e) {
      this.setState({
        snippets: {
          ...this.state.snippets,
          [path]: e,
        },
      });
    }
  }

  private async fetchDocDetail(path: string) {
    this.setState({
      loadingCurrentDoc: true,
    });

    const resp = await this.fetchService.fetchApi("/docs/detail" + path);
    const respJson = await resp.json();

    let code = resp.status;
    let message: string;
    if (resp.status === 404) {
      message = "文档不存在。";
    }

    if (code < 200 || code >= 300) {
      throw new FetchError(code, message || "服务器错误，请重试。");
    }
    return respJson;
  }

  public async getDoc(path: string) {
    this.setState({
      loadingCurrentDoc: true,
    });

    try {
      const respJson = await this.fetchDocDetail(path);
      const doc = respJson.data;
      this.setState({
        loadCurrentDocErr: null,
        currentDoc: doc,
        titleTrees: doc.anchor,
        loadingCurrentDoc: false,
      });
    } catch (e) {
      this.setState({
        loadCurrentDocErr: e,
        currentDoc: null,
        titleTrees: [],
        loadingCurrentDoc: false,
      });
    }
  }
}
