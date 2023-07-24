import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import postcssNesting from "postcss-nesting";

const bundleNames = ["all", "backgrounds", "panels", "themes", "tooltip"];

const configs = bundleNames.map((name) => {
  return {
    input: `src/${name}.css`,
    output: {
      file: `dist/${name}.min.css`,
      format: "es",
    },
    plugins: [
      postcss({
        plugins: [postcssNesting, autoprefixer, postcssPresetEnv],
        path: "src",
        modules: false,
        inject: false,
        // minimize: true,
        extract: true,
        sourceMap: true,
      }),
    ],
  };
});

export default configs;
