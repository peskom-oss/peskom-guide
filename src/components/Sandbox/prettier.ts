// https://codesandbox.io/p/sandbox/sandpack-prettier-forked-6fqpvx?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cly4c8dpg00073p6lssbf5au9%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cly4c8dpg00033p6lyqxep3z0%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cly4c8dpg00043p6l4ehywsel%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cly4c8dpg00063p6lz7juh4e0%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B40%252C60%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cly4c8dpg00033p6lyqxep3z0%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cly4c8dpg00023p6l6fh1lwh1%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A34%252C%2522startColumn%2522%253A39%252C%2522endLineNumber%2522%253A34%252C%2522endColumn%2522%253A39%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.js%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522cly4i56oy00023p6jua6sx2to%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A8%252C%2522startColumn%2522%253A43%252C%2522endLineNumber%2522%253A8%252C%2522endColumn%2522%253A43%257D%255D%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522cly4c8dpg00033p6lyqxep3z0%2522%252C%2522activeTabId%2522%253A%2522cly4c8dpg00023p6l6fh1lwh1%2522%257D%252C%2522cly4c8dpg00063p6lz7juh4e0%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cly4c8dpg00053p6lvleptgmz%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522cly4c8dpg00063p6lz7juh4e0%2522%252C%2522activeTabId%2522%253A%2522cly4c8dpg00053p6lvleptgmz%2522%257D%252C%2522cly4c8dpg00043p6l4ehywsel%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522cly4c8dpg00043p6l4ehywsel%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Afalse%252C%2522sidebarPanelSize%2522%253A0%257D

import React from "react";
import { useSandpack } from "@codesandbox/sandpack-react";
import debounce from "lodash.debounce";

import prettier from "prettier/standalone";
import babelPlugin from "prettier/plugins/babel";
import htmlPlugin from "prettier/plugins/html";
import postcssPlugin from "prettier/plugins/postcss";
import typescriptPlugin from "prettier/plugins/typescript"

export function useIsPrettier() {
  const [prettier, setPrettier] = React.useState(false);
  const { sandpack } = useSandpack();

  React.useEffect(() => {
    const activeFile = sandpack.files[sandpack.activeFile];
    if (!activeFile) return;

    const fileExtension = sandpack.activeFile
      .split(".")
      .pop()
      ?.toLocaleLowerCase();
    if (!fileExtension) return;

    const prettierExtensions = [
      "js",
      "ts",
      "jsx",
      "tsx",
      "scss",
      "css",
      "html",
    ];
    const isPrettierSupported = !(
      activeFile.readOnly || !prettierExtensions.includes(fileExtension)
    );

    setPrettier(isPrettierSupported);
  }, [sandpack.files, sandpack.activeFile]);

  return { prettier };
}

export function usePrettier() {
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const { sandpack } = useSandpack();

  React.useEffect(() => {
    const handleKeyDown = async (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        await prettifyCode();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [sandpack.files, sandpack.activeFile]);

  const debouncedUpdate = React.useCallback(
    debounce((code) => {
      sandpack.updateCurrentFile(code, false);
    }, 150),
    [sandpack.activeFile, sandpack.files],
  );

  async function prettifyCode() {
    const activeFile = sandpack.files[sandpack.activeFile];
    const currentCode = activeFile.code;

    try {
      const fileExtension = sandpack.activeFile.split(".").pop()?.toLowerCase();
      let formattedCode = currentCode;

      if (fileExtension === "scss" || fileExtension === "css") {
        formattedCode = await prettier.format(currentCode, {
          parser: "scss",
          plugins: [postcssPlugin],
        });
      } else {
        formattedCode = await prettier.format(currentCode, {
          parser:
            fileExtension === "ts" || fileExtension === "tsx"
              ? "typescript"
              : "html",
          plugins: [babelPlugin, typescriptPlugin, htmlPlugin],
        });
      }

      setError(false);
      setSuccess(true);
      debouncedUpdate(formattedCode);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setTimeout(() => {
        setSuccess(false);
      }, 500);
    }
  }

  return { error, success, prettifyCode };
}
