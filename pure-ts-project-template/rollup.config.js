import typescript from "rollup-plugin-typescript2";
import cleaner from "rollup-plugin-cleaner";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import html from "@rollup/plugin-html";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

const prodPlugins = [terser()];
const devPlugins = [serve("dist"), livereload("dist"), html()];

export default ({ env }) => {
  const extendedPlugin = env.NODE_ENV === "prod" ? prodPlugins : devPlugins;
  return {
    input: "src/index.ts",
    output: { file: "dist/index.js", format: "iife", name: "lib" },
    plugins: [
      cleaner({ targets: ["dist"] }),
      commonjs(),
      resolve({
        preferBuiltins: true
      }),
      typescript(),
      ...extendedPlugin
    ]
  };
};
