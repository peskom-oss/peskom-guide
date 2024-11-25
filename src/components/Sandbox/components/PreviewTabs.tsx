import {
  UnstyledOpenInCodeSandboxButton,
  useSandpack,
  useSandpackNavigation,
  useSandpackConsole,
} from "@codesandbox/sandpack-react";
import { Layers3, Play, Repeat, X } from "lucide-react";

import ToolTip from "@/components/ToolTip";
import type { Tab } from "../DefaultSandbox";

interface Props {
  selectedTab: Tab;
  onTabSelect: (tab: Tab) => void;
  onClear: () => void;
}

export default function PreviewTabs({
  onClear,
  onTabSelect,
  selectedTab,
}: Props) {
  return (
    <div
      className="flex justify-between gap-2 px-2 py-2 h-[40px] w-full border border-border-color"
      style={{
        height: 40,
        borderBottom: "1px solid var(--border-color)",
        padding: "0 8px",
        // for uniformed bg
        background: "var(--sp-colors-surface1)",
      }}
    >
      <div className="flex gap-2">
        <button
          className="bg-transparent cursor-pointer border-none"
          onClick={() => onTabSelect("preview")}
          aria-selected={selectedTab === "preview"}
          style={{
            color:
              selectedTab === "preview" ? "var(--sp-colors-accent)" : "inherit",
          }}
        >
          <span className="transition-colors duration-150">Preview</span>
        </button>
        <button
          className="bg-transparent cursor-pointer border-none"
          onClick={() => onTabSelect("console")}
          aria-selected={selectedTab === "console"}
          style={{
            color:
              selectedTab === "console" ? "var(--sp-colors-accent)" : "inherit",
          }}
        >
          <span className="transition-colors duration-150">Console</span>
        </button>
      </div>
      <div className="flex gap-x-2">
        <CustomGoToSandboxButton />
        <CustomRunButton />
        <CustomRefreshButton />
        <CustomClearConsoleButton
          // Workaround to make console clear work
          onClear={onClear}
        />
      </div>
    </div>
  );
}

function CustomGoToSandboxButton() {
  return (
    <button>
      <UnstyledOpenInCodeSandboxButton>
        <Layers3 className="w-4 h-4" />
      </UnstyledOpenInCodeSandboxButton>
    </button>
  );
}

function CustomRunButton() {
  const { sandpack } = useSandpack();
  const { status, runSandpack } = sandpack;

  if (status === "running") {
    return null;
  }

  return (
    <ToolTip content="Play">
      <button aria-label="Run" onClick={runSandpack}>
        <Play className="w-4 h-4" />
      </button>
    </ToolTip>
  );
}

function CustomRefreshButton() {
  const { refresh } = useSandpackNavigation();

  return (
    <ToolTip content="Refresh Sandbox">
      <button aria-label="Refresh Sandbox" onClick={refresh}>
        <Repeat className="w-4 h-4" />
      </button>
    </ToolTip>
  );
}

function CustomClearConsoleButton({ onClear }: { onClear: () => void }) {
  const { reset } = useSandpackConsole({ resetOnPreviewRestart: true });

  return (
    <ToolTip content="Clear Console">
      <button
        aria-label="Clear Console"
        onClick={() => {
          reset();
          onClear();
        }}
      >
        <X className="w-4 h-4" />
      </button>
    </ToolTip>
  );
}
