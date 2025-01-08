const path = require("path");

// Set CHROME_BIN to Puppeteer's Chromium executable
process.env.CHROME_BIN = require("puppeteer").executablePath();
console.log('Using Chrome/Chromium binary at:', process.env.CHROME_BIN);
module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: path.join(__dirname, "./coverage/my-angular-app"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },
    reporters: ["progress", "coverage"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["ChromeHeadless"],
    singleRun: true, // Set to true for CI/CD or headless mode
    restartOnFileChange: true,
  });
};
