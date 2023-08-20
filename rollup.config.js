import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import postcssNesting from "postcss-nesting";
import postcssImport from "postcss-import";

const bundleNames = ["all"];

const configs = bundleNames.map((name) => {
  return {
    input: `src/${name}.css`,
    output: {
      file: `dist/${name}.min.css`,
      format: "es",
    },
    plugins: [
      postcss({
        plugins: [
          postcssImport,
          postcssNesting,
          autoprefixer,
          postcssPresetEnv,
        ],
        minimize: true,
        sourceMap: false,
        extract: true,
        modules: false,
      }),
    ],
  };
});

export default configs;
