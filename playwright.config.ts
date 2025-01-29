import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "test-results",
  timeout: 30000 /* Each test is given 30 seconds. */,
  fullyParallel: true /* Run tests in files in parallel */,
  forbidOnly:
    !!process.env
      .CI /* Fail the build on CI if you accidentally left test.only in the source code. */,
  retries: process.env.CI ? 2 : 0 /* Retry on CI only */,
  workers: process.env.CI
    ? 1
    : undefined /* Opt out of parallel tests on CI. */,
  reporter: [["list"], ["html"]],

  use: {
    headless: false,
    launchOptions: {
      args: ["--start-maximized"],
      slowMo: 0,
    },
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },

  /* Dynamically create the projects array */
  projects: (() => {
    const projects = [];
    const browserType = process.env.BROWSER_TYPE || "chromium";

    if (browserType === "chromium") {
      projects.push({
        name: "chromium",
        use: {
          browserName: "chromium",
          viewport: null,
          headless: false,
          launchOptions: {
            args: ["--start-maximized"],
            slowMo: 0,
          },
          screenshot: "only-on-failure",
          trace: "retain-on-failure",
        },
      });
    }

    if (browserType === "firefox") {
      projects.push({
        name: "firefox",
        use: {
          browserName: "firefox",
          headless: false,
          viewport: null,
          ignoreHTTPSErrors: true,
          acceptDownloads: true,
          screenshot: "only-on-failure",
          video: "retain-on-failure",
          trace: "retain-on-failure",
          launchOptions: {
            args: ["--start-maximized"],
            slowMo: 0,
          },
        },
      });
    }

    if (browserType === "Edge") {
      projects.push({
        name: "Edge",
        use: {
          browserName: "chromium",
          channel: "msedge",
          headless: false,
          viewport: null,
          ignoreHTTPSErrors: true,
          acceptDownloads: true,
          screenshot: "only-on-failure",
          video: "retain-on-failure",
          trace: "retain-on-failure",
          launchOptions: {
            args: ["--start-maximized"],
            slowMo: 0,
          },
        },
      });
    }

    if (browserType === "webkit") {
      projects.push({
        name: "WebKit",
        use: {
          browserName: "webkit",
          headless: false,
          viewport: null,
          ignoreHTTPSErrors: true,
          acceptDownloads: true,
          screenshot: "only-on-failure",
          video: "retain-on-failure",
          trace: "retain-on-failure",
          launchOptions: {
            args: ["--start-maximized"],
            slowMo: 0,
          },
        },
      });
    }

    return projects;
  })(),
});
