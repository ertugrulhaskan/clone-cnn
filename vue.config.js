const fs = require("fs");

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4200,
    host: "localhost",
    compress: true,
    hot: true,
    https: {
      key: fs.readFileSync("./certificate/key.pem"),
      cert: fs.readFileSync("./certificate/cert.pem"),
    },
  },
});
