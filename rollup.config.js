import postcss from "rollup-plugin-postcss";

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
        path: "src",
        modules: false,
        inject: false,
        minimize: true,
        extract: true,
        sourceMap: true,
      }),
    ],
  };
});

export default configs;
