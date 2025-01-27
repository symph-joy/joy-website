import React, { ReactNode } from "react";
import { BaseReactController, ReactController } from "@symph/react";
import { Link } from "@symph/react/router-dom";
import { Layout, Typography, Button, Row, Carousel } from "antd";
import styles from "./homepage.scss";
import {
  ClusterOutlined,
  CloudServerOutlined,
  BlockOutlined,
  LinkOutlined,
  AppstoreAddOutlined,
  DeploymentUnitOutlined,
  FundViewOutlined,
} from "@ant-design/icons";
import { Prerender } from "@symph/joy/react";
import { DocsModel } from "../model/docs.model";
import { Inject } from "@symph/core";

const { Content } = Layout;
const { Paragraph } = Typography;

@Prerender()
@ReactController()
export default class HelloController extends BaseReactController {
  @Inject()
  public docModel: DocsModel;

  private birds: any;

  async initModelStaticState(): Promise<void | number> {
    await Promise.all([
      this.docModel.getSnippet("/@snippets/hello-react-controller"),
      this.docModel.getSnippet("/@snippets/hello-server-controller"),
    ]);
  }

  loadScript = async (id: string, src: string) => {
    if (document.querySelector("#" + id)) {
      return;
    }
    const js = document.createElement("script");
    js.id = id;
    js.type = "text/javascript";
    js.src = src;
    document.body.appendChild(js);
    return new Promise((resolve, reject) => {
      js.onload = resolve;
      js.onerror = reject;
    });
  };

  async componentDidMount() {
    await this.loadScript("jsThree", "https://cdn.staticfile.org/three.js/r122/three.min.js");
    await this.loadScript("jsBirds", "https://cdn.staticfile.org/vanta/0.5.22/vanta.birds.min.js");
    this.birds = (window as any).VANTA.BIRDS({
      el: "#banner",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 500.0,
      minWidth: 200.0,
      top: -80,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundAlpha: 0.0,
      color1: 0xfa541c,
      color2: 0xfaad14,
      colorMode: "variance",
      separation: 20,
      alignment: 20,
      cohesion: 20,
    });
  }

  componentWillUnmount() {
    this.birds?.destroy();
  }

  renderView(): ReactNode {
    const { snippets } = this.docModel.state;
    const docHelloReactController = snippets["/@snippets/hello-react-controller"];
    const docHelloServerController = snippets["/@snippets/hello-server-controller"];

    return (
      <Layout className={styles.root}>
        <Content>
          {/* -------- banner -------- */}
          <section role="banner" id="banner" className={styles.banner}>
            <Paragraph className={styles.banner__paragraph}>
              <h1>
                <div>@symph/joy 让 JS/TS 应用</div>
                <div className={styles.banner__wordWrap}>
                  <div style={{ "--j": 0 }}>
                    <span style={{ "--i": 1 }}>现</span>
                    <span style={{ "--i": 2 }}>代</span>
                    <span style={{ "--i": 3 }}>工</span>
                    <span style={{ "--i": 4 }}>程</span>
                    <span style={{ "--i": 5 }}>化</span>
                    {/*<span style={{ "--i": 6 }}>n</span>*/}
                    {/*<span style={{ "--i": 7 }}>.</span>*/}
                  </div>
                  <div style={{ "--j": 1 }}>
                    <span style={{ "--i": 1 }}>快</span>
                    <span style={{ "--i": 2 }}>速</span>
                    <span style={{ "--i": 3 }}>响</span>
                    <span style={{ "--i": 4 }}>应</span>
                    <span style={{ "--i": 5 }}>变</span>
                    <span style={{ "--i": 6 }}>化</span>
                    {/*<span style={{ "--i": 7 }}>v</span>*/}
                    {/*<span style={{ "--i": 8 }}>e</span>*/}
                    {/*<span style={{ "--i": 9 }}>.</span>*/}
                  </div>
                  <div style={{ "--j": 2 }}>
                    <span style={{ "--i": 1 }}>高</span>
                    <span style={{ "--i": 2 }}>效</span>
                    <span style={{ "--i": 3 }}>发</span>
                    <span style={{ "--i": 4 }}>布</span>
                    <span style={{ "--i": 5 }}>产</span>
                    <span style={{ "--i": 6 }}>品</span>
                    {/*<span style={{ "--i": 7 }}>t</span>*/}
                    {/*<span style={{ "--i": 8 }}>i</span>*/}
                    {/*<span style={{ "--i": 9 }}>v</span>*/}
                    {/*<span style={{ "--i": 10 }}>e</span>*/}
                    {/*<span style={{ "--i": 11 }}>.</span>*/}
                  </div>
                </div>
              </h1>

              <Row justify="center">
                {/*<Button>了解 JOY</Button>*/}
                <Button>
                  <Link to="/joy/start/quick-started">快速开始</Link>
                </Button>
              </Row>
            </Paragraph>
          </section>

          {/* -------- news -------- */}
          {/*<section role="news" className={styles.news}>*/}
          {/*  <div className={styles.container}>*/}
          {/*    <div className={styles.news__list}>*/}
          {/*      <a href="#">最新公告</a>*/}
          {/*      /!*<a href="#">Bye Bye!</a>*!/*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</section>*/}

          {/* -------- function -------- */}
          <section role="function" className={styles.function}>
            <div className={styles.container}>
              <header>
                <h1 className={styles.function__title}>” Joy 可以做什么</h1>
              </header>
              <div>
                <ul className={styles.function__list}>
                  <li>
                    <Link to={"/joy/start/introduce"}>
                      <DeploymentUnitOutlined />
                      <h2>JS/TS 全栈框架</h2>
                      <p>@symph/joy 满足简单到复杂应用研发，开箱即用，渐进式迭代，能够快速开发、调试和发布应用。</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/react/start/introduce"}>
                      <FundViewOutlined />
                      <h2>React 应用</h2>
                      <p>提供一体的 React 应用解决方案，快速开发页面，管理状态，支持服务端渲染。</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/server/start/introduce"}>
                      <CloudServerOutlined />
                      <h2>Node.js 应用</h2>
                      <p>类似 Spring Boot，开箱即用，提供数据库、缓存、安全等常用组件。（开发中）</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/joy/container/dependency-inject"}>
                      <AppstoreAddOutlined />
                      <h2>容器化</h2>
                      <p>将面向对象软件开发方法运用到 JS/TS 应用中，能轻松应对复杂业务场景。</p>
                    </Link>
                  </li>

                  <li>
                    <Link to={"/joy/basic/dir-tree#前后端混合应用"}>
                      <BlockOutlined />
                      <h2>混合同构开发</h2>
                      <p>前后端一体开发，可一次编写数据结构、接口约定、处理方法等，前后端共同使用。</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/joy/advanced-features/export"}>
                      <ClusterOutlined />
                      <h2>前后端分离</h2>
                      <p>可将前端应用导出，独立运行和部署，或者前后端分离两工程独立开发。</p>
                    </Link>
                  </li>

                  <li>
                    <Link to={"/joy/advanced-features/typescript"}>
                      <LinkOutlined />
                      <h2>类型约束</h2>
                      <p>默认支持和推荐使用TypeScript，提供静态类型检查和高级语法特性。</p>
                    </Link>
                  </li>

                  {/*<li>*/}
                  {/*  <GithubOutlined />*/}
                  {/*  <h2>Event Driven</h2>*/}
                  {/*  <p>Dolore nisi ex sunt cillum nulla ad laboris minim laborum consequat cillum.</p>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <GitlabOutlined />*/}
                  {/*  <h2>Batch</h2>*/}
                  {/*  <p>Sunt in veniam commodo anim.</p>*/}
                  {/*</li>*/}
                </ul>
                <Carousel autoplay autoplaySpeed={5000} dots={true} effect="fade" className={styles.function__carousel}>
                  <div className={styles.function__description}>
                    <div dangerouslySetInnerHTML={{ __html: docHelloReactController?.htmlContent }}></div>
                    <div className={styles.function__description_info}>
                      <h2>开始 React 开发</h2>
                      <p>@symph/joy 让我们更专注于业务和体，创建第一个文件即开始创建界面</p>
                      <p>
                        刚接触 <span className="code">@symph/joy</span> React开发? 让我们 <Link to="docs/docs/basic/getting-started">快速开始</Link>{" "}
                        吧。
                      </p>
                    </div>
                  </div>
                  <div className={styles.function__description}>
                    <div dangerouslySetInnerHTML={{ __html: docHelloServerController?.htmlContent }}></div>
                    <div className={styles.function__description_info}>
                      <h2>开始 Server 服务开发</h2>
                      <p>使用 @symph/joy，只需要创建一个文件和少数的代码，即可创建第一个服务。</p>
                      <p>
                        刚接触 <span className="code">@symph/joy</span> 服务端开发? 让我们 <Link to="docs/docs/basic/getting-started">快速开始</Link>{" "}
                        吧。
                      </p>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </section>

          {/* -------- footer -------- */}
          <footer role="footer" className={styles.footer}>
            {/*<div className={styles.footer__top}>*/}
            {/*  <div className={styles.container}>*/}
            {/*    <ul>*/}
            {/*      <li>*/}
            {/*        <h3>Get ahead</h3>*/}
            {/*        <p>Deserunt dolor dolore excepteur ut ipsum in proident aliquip ut commodo aliqua aliquip ea.</p>*/}
            {/*        <a href="#">Learn more</a>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <h3>Get support</h3>*/}
            {/*        <p>Officia proident aliquip sint cupidatat.</p>*/}
            {/*        <a href="#">Learn more</a>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <h3>Upcoming events</h3>*/}
            {/*        <p>Ea nisi sit cillum irure labore nulla mollit sunt nulla eiusmod ea proident voluptate exercitation.</p>*/}
            {/*        <a href="#">Learn more</a>*/}
            {/*      </li>*/}
            {/*    </ul>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className={styles.footer__bottom}>
              <div className={styles.container}>
                <div className={styles.footer__contactUs}>
                  <div>联系我们</div>
                  <div>
                    Github Issue:{" "}
                    <a href="https://github.com/symph-joy/symph-joy/issues" target="_blank">
                      https://github.com/symph-joy/symph-joy/issues
                    </a>
                  </div>
                  <div>QQ群: 929743297</div>
                  <div>Email: lnlfps@gmail.com</div>
                </div>
                <div className={styles.footer__MIT}>本静态站点采用 @symph/joy 开发和渲染导出 | Open-source MIT Licensed | Copyright © 2022-present</div>
                {/*<ul>*/}
                {/*  <li>Learn</li>*/}
                {/*  <li>Quickstart</li>*/}
                {/*  <li>Guides</li>*/}
                {/*  <li>Blog</li>*/}
                {/*</ul>*/}
                {/*<ul>*/}
                {/*  <li>Community</li>*/}
                {/*  <li>Events</li>*/}
                {/*  <li>Team</li>*/}
                {/*</ul>*/}
                {/*<div className={styles.footer__bottom_subscribe}>*/}
                {/*  <h2>Get
                 the Symph Joy newsletter</h2>*/}
                {/*  <Input.Search size="large" placeholder="Email Address" enterButton={<Button>SUBSCRIBE</Button>} />*/}
                {/*  <Checkbox>Yes, I would like to be contacted by The Symph Joy Team for newsletters, promotions and events</Checkbox>*/}
                {/*</div>*/}
              </div>
            </div>
          </footer>
        </Content>
      </Layout>
    );
  }
}
