// This code is based on https://github.com/MaximeHeckel/blog.maximeheckel.com/blob/main/core/components/Code/Sandpack.tsx
// licensed under the MIT License.
// Modified by Peskom-oss for providing demo to free open soruce learning guide for masses.

import React from "react";
import {
  SandpackProvider,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackConsole,
} from "@codesandbox/sandpack-react";
import { cyberpunk } from "@codesandbox/sandpack-themes";

import PreviewTabs from "./components/PreviewTabs";
import setupFiles from "./setupFiles";
import type { SandpackPredefinedTemplate } from "@codesandbox/sandpack-react";

export type Tab = "preview" | "console";

export interface DefaultSandboxProps {
  template: SandpackPredefinedTemplate;
  options?: SandpackOptions;
  // Type using Sandpack built in types
  files: Record<string, any>;
  dependencies?: Record<string, string>;
  autorun?: boolean;
  defaultTab?: Tab;
}

interface SandpackOptions {
  editorWidthPercentage: number;
  editorHeight: number;
}

const defaultEditorOptions = {
  showNavigator: false,
  showInlineErrors: true,
  showLineNumbers: true,
  editorHeight: 480,
};

export default function DefaultSandbox(props: DefaultSandboxProps) {
  const {
    template,
    files,
    dependencies = {},
    autorun = true,
    defaultTab = "preview",
  } = props;

  const [consoleKey, setConsoleKey] = React.useState(0);
  const [selectedTab, setSelectedTab] = React.useState<Tab>(defaultTab);

  return (
    <SandpackProvider
      template={template}
      theme={cyberpunk}
      files={{ ...setupFiles[template], ...files }}
      customSetup={{
        dependencies,
      }}
      options={{
        autorun,
      }}
    >
      <SandpackLayout className="flex gap-0">
        <div
          className="box-border flex flex-col justify-between gap-0 w-full md:w-1/2 min-w-0"
          style={{
            height: defaultEditorOptions.editorHeight,
          }}
        >
          <PreviewTabs
            onClear={() => setConsoleKey(consoleKey + 1)}
            onTabSelect={(tab) => setSelectedTab(tab)}
            selectedTab={selectedTab}
          />
          <SandpackConsole
            key={consoleKey}
            style={{
              display: selectedTab === "console" ? "flex" : "none",
              height: defaultEditorOptions.editorHeight - 40,
            }}
          />
          <SandpackPreview
            showNavigator={false}
            showRefreshButton={false}
            showOpenInCodeSandbox={false}
            style={{
              display: selectedTab === "preview" ? "flex" : "none",
              height: defaultEditorOptions.editorHeight - 40,
            }}
          />
        </div>
        <SandpackCodeEditor
          showLineNumbers={defaultEditorOptions.showLineNumbers}
          showInlineErrors={defaultEditorOptions.showInlineErrors}
          style={{
            height: defaultEditorOptions.editorHeight,
            borderLeft: "1px solid var(--border-color)",
            width: "100%",
          }}
          showRunButton={false}
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}
