import Document, { Head, Main, JoyScript, Html } from "@symph/joy/document";
// import { disable as darkreaderDisable, enable as darkreaderEnable } from "@umijs/ssr-darkreader";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link href="/static/antd.css" rel="stylesheet"></link> */}
          {/* add custom style */}
          <style id="theme-color">
            {`:root {
              --ant-primary-color: rgb(250, 84, 28);
              --ant-primary-color-disabled: #ffd8bf;
              --ant-primary-color-hover: #ff7a45;
              --ant-primary-color-active: #ad2102;
              --ant-primary-color-outline: rgba(250, 84, 28, 0.2);
              --ant-primary-color-deprecated-bg: #ffd8bf;
              --ant-primary-color-deprecated-border: #ff9c6e;
              --ant-primary-1: #fff2e8;
              --ant-primary-2: #ffd8bf;
              --ant-primary-3: #ffbb96;
              --ant-primary-4: #ff9c6e;
              --ant-primary-5: #ff7a45;
              --ant-primary-6: #fa541c;
              --ant-primary-7: #d4380d;
              --ant-primary-8: #ad2102;
              --ant-primary-9: #871400;
              --ant-primary-10: #610b00;
              --ant-primary-color-deprecated-l-35: rgb(254, 216, 203);
              --ant-primary-color-deprecated-l-20: rgb(252, 159, 128);
              --ant-primary-color-deprecated-t-20: rgb(251, 118, 73);
              --ant-primary-color-deprecated-t-50: rgb(253, 170, 142);
              --ant-primary-color-deprecated-f-12: rgba(250, 84, 28, 0.12);
              --ant-primary-color-active-deprecated-f-30: rgba(255, 242, 232, 0.3);
              --ant-primary-color-active-deprecated-d-02: rgb(255, 236, 222);
            }`}
          </style>
          <link rel="stylesheet" href="/static/antd.variable.css" />
        </Head>
        <body>
          <Main />
          <JoyScript />
          
          <script src="https://cdnjs.cloudflare.com/ajax/libs/darkreader/4.9.44/darkreader.min.js" />
          <script dangerouslySetInnerHTML={{
            __html: 
              `
                if (typeof window !== "undefined") {
                  const theme = window.localStorage.getItem("theme");
                  const oBody = document.getElementsByTagName("body")[0];
                  oBody.setAttribute("data-theme", theme);

                  if (theme === "dark") {
                    const defaultTheme = {
                      brightness: 100,
                      contrast: 90,
                      sepia: 10,
                    };

                    const defaultFixes = {
                      invert: [],
                      css: "",
                      ignoreInlineStyle: [".react-switch-handle"],
                      ignoreImageAnalysis: [],
                      disableStyleSheetsProxy: true,
                    };
                    if (window.MutationObserver) DarkReader.enable(defaultTheme, defaultFixes);
                  } else {
                    if (window.MutationObserver) DarkReader.disable();
                  }
                }
              `
            }} 
          />
        </body>
      </Html>
    );
  }
}
