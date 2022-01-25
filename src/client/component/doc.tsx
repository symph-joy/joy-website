import React, { ReactNode } from "react";
import { BaseReactController, ReactController } from "@symph/react";
import { Inject } from "@symph/core";
import { DocsModel } from "../model/docs.model";
@ReactController()
export default class Doc extends BaseReactController {
  @Inject()
  public docsModel: DocsModel;

  async initModelStaticState(): Promise<void | number> {
    const path = this.props.path as string;
    await this.docsModel.getDoc(path);
  }

  addMermaid() {
    function initMermaid() {
      (window as any).mermaid.initialize({ theme: "base", themeVariables: { primaryColor: "#ffd8bf" } });
      (window as any).mermaid.init(undefined, ".language-mermaid");
    }
    let script: HTMLScriptElement | undefined = document.getElementById("mermaid-script") as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = "mermaid-script";
      script.type = "text/javascript";
      script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
      document.body.appendChild(script);
      script.onload = () => {
        initMermaid();
      };
    } else {
      initMermaid();
    }
  }

  componentDidMount() {
    this.addMermaid();
  }

  renderView(): ReactNode {
    const { currentDoc } = this.docsModel.state;
    const className = this.props.className as string;
    return <>{currentDoc ? <div className={className} dangerouslySetInnerHTML={{ __html: currentDoc.htmlContent }} /> : undefined}</>;
  }
}
