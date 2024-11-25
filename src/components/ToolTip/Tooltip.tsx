import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

import type { TooltipContentProps } from "@radix-ui/react-tooltip";

interface Props {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: TooltipContentProps["side"];
}

export default function ToolTip(props: Props) {
  const { side = "top", children, content } = props;

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="text-sm text-text-secondary bg-foreground border-2 border-border-color font-semibold px-[4px] py-[10px] whitespace-nowrap pointer-events-none select-none"
            sideOffset={5}
            side={side}
          >
            {content}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
