import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  timeout: 30*1000,
  retries: 1,
  expect: {
    timeout: 5000,
  },
  workers: 1, // Number of parallel workers
  fullyParallel: false, // Run tests in parallel within a single worker
 use:{
    headless: false, // Set to true for headless mode
    viewport: { width: 1280, height: 720 }, // Set the viewport size
    screenshot:'only-on-failure', // Take screenshots only on test failure
    video: 'retain-on-failure', // Record video only on test failure
 },
 projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]], // Use list reporter and generate HTML report
});