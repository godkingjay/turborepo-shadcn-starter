// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import uiConfig from "ui/tailwind.config";

const config: Pick<Config, "presets"> = {
  presets: [uiConfig],
};

export default config;
