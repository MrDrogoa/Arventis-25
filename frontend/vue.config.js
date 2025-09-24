const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  parallel: false,
  configureWebpack: {
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    },
  },
  outputDir: "dist",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: {
      "/api": {
        target:
          process.env.VUE_APP_API_URL ||
          "https://us-central1-casiangelesydemonios.cloudfunctions.net/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
