import postcss from "rollup-plugin-postcss";
import postcssNesting from "postcss-nesting";

const bundleNames = ["backgrounds", "panels", "themes", "tooltip"];

const configs = bundleNames.map((name) => {
  return {
    input: `src/${name}.css`,
    output: {
      file: `dist/${name}.min.css`,
      format: "es",
    },
    plugins: [
      postcss([
        postcssNesting,
        {
          minimize: true,
          sourceMap: true,
          extract: true,
          modules: false,
        },
      ]),
    ],
  };
});

export default configs;
