import React, { ReactNode } from "react";
import { BaseReactController, ReactController, RouteParam } from "@symph/react";
import { Link, Outlet } from "@symph/react/router-dom";
import { DocMenuItem, DocsModel } from "../../model/docs.model";
import { Affix, Menu, Drawer, Popover } from "antd";
import styles from "./docs.less";
import { MenuUnfoldOutlined, BarsOutlined } from "@ant-design/icons";
import { Inject } from "@symph/core";

@ReactController()
export default class DocsLayout extends BaseReactController {
  @RouteParam({ name: "path" })
  docPath: string;

  @Inject()
  public docsModel: DocsModel;

  state = {
    showDrawer: false,
    openKeys: null,
  };

  private async showDoc(menu: DocMenuItem) {
    this.props.navigate(`${menu.path}`);
  }

  async initModelStaticState(): Promise<void | number> {
    const tem = this.props.location.pathname.split("/");
    let path = [tem[0], tem[1]].join("/") || "/docs";
    await this.docsModel.getDocMenus(path);
  }

  private renderMenuItem(items: DocMenuItem[] | undefined) {
    if (!items || items.length === 0) {
      return undefined;
    }
    const views = [];
    for (const item of items) {
      const { children, title, path } = item;
      if (children) {
        views.push(
          <Menu.SubMenu key={path} title={title}>
            {this.renderMenuItem(children)}
          </Menu.SubMenu>
        );
      } else {
        views.push(
          <Menu.Item key={path} onClick={this.showDoc.bind(this, item)}>
            {title}
          </Menu.Item>
        );
      }
    }
    return views;
  }

  onOpenChange = (openKeys) => {
    this.setState({
      openKeys: openKeys,
    });
  };

  projectMenus = (
    <Menu>
      <Menu.Item key="joy">
        <Link to={"/joy/start/introduce"}>@symph/joy</Link>
      </Menu.Item>
      <Menu.Item key="react">
        <Link to={"/react/start/introduce"}>@symph/react</Link>
      </Menu.Item>
      <Menu.Item key="server">
        <Link to={"/server/start/introduce"}>@symph/server</Link>
      </Menu.Item>
      <Menu.Item key="core">
        <Link to={"/joy/container/dependency-inject"}>@symph/core</Link>
      </Menu.Item>
      <Menu.Item key="config">
        <Link to={"/joy/config/config-manager"}>@symph/config</Link>
      </Menu.Item>
    </Menu>
  );

  renderView(): ReactNode {
    const { docMenus, defaultOpenKeys, currentDoc } = this.docsModel.state;
    const { pathname } = this.location;
    let title = undefined; // TODO 通过菜单获取当前目录的名称。
    if (pathname) {
      if (pathname.startsWith("/react")) {
        title = "@symph/react";
      } else if (pathname.startsWith("/joy")) {
        title = "@symph/joy";
      } else if (pathname.startsWith("/server")) {
        title = "@symph/server";
      }
    }

    return (
      <div className={styles.layoutContent}>
        <Affix className={styles.docMenus}>
          {title ? (
            <div className={styles.titleContainer}>
              {" "}
              <Popover placement="topRight" content={this.projectMenus} title="项目列表">
                <BarsOutlined style={{ marginRight: 4 }} />
              </Popover>{" "}
              {title}
            </div>
          ) : undefined}

          <Menu selectedKeys={[currentDoc?.path]} mode="inline" openKeys={this.state.openKeys || defaultOpenKeys} onOpenChange={this.onOpenChange}>
            {this.renderMenuItem(docMenus)}
          </Menu>
        </Affix>
        <div
          className={styles.menuIcon}
          onClick={() => {
            this.setState({
              showDrawer: true,
            });
          }}
        >
          <MenuUnfoldOutlined />
        </div>
        <Drawer
          placement="left"
          onClose={() => {
            this.setState({
              showDrawer: false,
            });
          }}
          visible={this.state.showDrawer}
        >
          <Menu selectedKeys={[currentDoc?.path]} mode="inline" openKeys={defaultOpenKeys} style={{ height: "calc(100vh - 64px)" }}>
            {this.renderMenuItem(docMenus)}
          </Menu>
        </Drawer>
        <Outlet />
      </div>
    );
  }
}
