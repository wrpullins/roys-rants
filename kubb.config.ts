import { defineConfig } from "kubb/config";
import { pluginAxios } from "@kubb/plugin-axios";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import { pluginTs } from "@kubb/plugin-ts";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "VITE_");
const apiUrl = new URL(env.VITE_API_URL);

export default defineConfig({
  input: new URL("/v3/api-docs", apiUrl).href,
  output: {
    path: "./src/api/generated",
    clean: true,
  },
  plugins: [
    pluginTs(),
    // OpenAPI operation paths already include /api. Keep the host dynamic so
    // generated code works with either Vite mode without regenerating it.
    pluginAxios({ baseURL: "${new URL(import.meta.env.VITE_API_URL).origin}" }),
    pluginReactQuery({ hooks: true }),
  ],
});
