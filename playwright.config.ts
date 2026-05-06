import { defineConfig, devices } from '@playwright/test';


const desktopChrome8 = devices['Desktop Chrome']

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  updateSnapshots:'none',
  //grep: /@npage|@auth/,
  //grep: /@alert|@elements|@frame|@npage|@widgets/,
  //grep: /@frame/,
  grep: /@alert|@elements|@frame|@npage|@widgets/,
  //grep: /@widgets/,
  grepInvert : /@confirm/,
  expect : {toHaveScreenshot: {
    scale : 'css',
    maxDiffPixelRatio : 0.95,
  }},
 // testDir: './demo/tests',
  testDir: './demoqa',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 3,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : 4,
  workers : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',
  //reporter: [['json', { outputFile: 'results.json' }]],
   reporter: [['allure-playwright']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    
    //viewport: {height : 1200, width : 1920},
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    baseURL : 'https://demoqa.com/',
    trace: 'on-first-retry',
    navigationTimeout : 30000,
    actionTimeout : 60000,
    //viewport : { width : 1920, height : 1080 },
    launchOptions : {
      headless : true,
      slowMo : 2000,
      args : ['--start-maximized']
    },
    
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      workers : 8,
      use: { ...devices['Desktop Chrome'],
        // viewport : Object.getOwnPropertyDescriptor(desktopChrome8,'screen')?.value,
        // deviceScaleFactor : undefined,
        viewport : null,
        deviceScaleFactor : undefined,
        navigationTimeout : 30000,
        actionTimeout : 60000,
        launchOptions: {
          args: ['--start-maximized'],
          headless:false,
          slowMo : 50
        },
       },
    }
	/*,{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
