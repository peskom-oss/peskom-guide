import type { SandpackPredefinedTemplate } from "@codesandbox/sandpack-react";

import StaticSetupFiles from "./StaticSetupFiles";

const defaultFilesByTemplate = {
  static: StaticSetupFiles,
} as Record<SandpackPredefinedTemplate, any>;

export default defaultFilesByTemplate;
