import { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config";

/** @type {import('tailwindcss').Config} */
const config: Pick<Config, "presets"> = {
	presets: [sharedConfig],
};

export default config;
