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
      customLaunchers: {
        ChromeHeadlessNoSandbox: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
        }
      },
      browsers: ['ChromeHeadlessNoSandbox'],
    reporters: ["progress", "coverage"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    // browsers: ["ChromeHeadless"],
    singleRun: true, // Set to true for CI/CD or headless mode
    restartOnFileChange: true,
  });
};


// maybe this ?

// services:
//   - name: docker
//     config:
//       options: --shm-size=2g


// npm install--save - dev karma - firefox - launcher
// browsers: ['FirefoxHeadless'],


// or this

// plugins: ['karma-parallel'],
// parallelOptions: {
//   executors: 4, // Number of processes
//   shardStrategy: 'round-robin',
// }



// karma start --grep=someTestGroup



// or this


// browsers: ['ChromeHeadless'],
// captureTimeout: 120000, // Increase capture timeout
// browserDisconnectTimeout: 10000, // Time to wait for a reconnect
// browserDisconnectTolerance: 3,  // Number of disconnects allowed
// browserNoActivityTimeout: 120000 // Timeout for no activity


// or this



// ng test some-product --include "/src/features/(apple|cherry|lemon)/**/*.spec.ts"