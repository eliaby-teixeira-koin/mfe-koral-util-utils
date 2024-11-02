const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const Dotenv = require("dotenv-webpack");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "koin",
    projectName: "mfe-koral-util-utils",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [new Dotenv()],
  });
};
