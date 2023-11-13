// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import uiConfig from "tailwind-config/tailwind.config.ts";

const config: Pick<Config, "presets"> = {
  presets: [uiConfig],
};

export default config;
