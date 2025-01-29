# Matero Playwright Test Automation

This repository contains the Playwright-based test automation framework for **Matero**. Playwright is a powerful Node.js library for browser automation that supports modern web apps and provides a reliable way to test across Chromium, Firefox, and WebKit.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Running Tests](#running-tests)
3. [Test Structure](#test-structure)
4. [Configuration](#configuration)
5. [Reports](#reports)
6. [Contributing](#contributing)
7. [License](#license)

## Project Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>= 16.x)
- npm or yarn

### Installing Dependencies

Clone the repository and install the required dependencies.

```bash
git clone https://github.com/yourusername/matero-playwright-automation.git
cd matero-playwright-automation
npm install
```

### Browser Installations

Playwright supports multiple browsers (Chromium, Firefox, WebKit). You can install the necessary browsers by running:

```bash
npx playwright install
```

## Running Tests

### Running All Tests

To run all tests, use the following command:

```bash
npx playwright test
```

### Running Specific Tests

You can run a specific test or test suite using:

```bash
npx playwright test tests/myTest.spec.ts
```

### Running Tests in Parallel

Playwright runs tests in parallel by default. You can control the number of workers by specifying the `--workers` flag:

```bash
npx playwright test --workers=4
```

### Running Tests in a Specific Browser

By default, Playwright runs tests in Chromium. To run tests in Firefox or WebKit, use the `--project` flag:

```bash
npx playwright test --project=firefox
```

## Test Structure

Your test files should be placed in the `tests/` directory. Example:

```
tests/
  ├── login.spec.ts
  ├── homepage.spec.ts
  └── checkout.spec.ts
```

Each test file should export a test suite using the `test()` function from Playwright.

Example:

```typescript
import { test, expect } from "@playwright/test";

test("login page loads correctly", async ({ page }) => {
  await page.goto("https://matero.com/login");
  await expect(page).toHaveTitle("Login - Matero");
});
```

## Configuration

Playwright allows for configuration via the `playwright.config.ts` file. You can customize the following:

- Test retries
- Timeouts
- Projects (to run tests on different browsers)
- Test reporter

Example `playwright.config.ts`:

```typescript
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  timeout: 30000,
  retries: 2,
  projects: [
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
```

## Reports

You can generate reports for your test runs using reporters. Playwright supports the following types of reporters:

- **Dot reporter** (default)
- **Line reporter**
- **JSON reporter**
- **HTML reporter**

To generate an HTML report:

```bash
npx playwright test --reporter=html
```

The report will be saved in the `playwright-report/` directory.

## Contributing

We welcome contributions! If you would like to improve this project, please:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request.

# Project Module Paths

This project leverages TypeScript path aliases for cleaner imports and better code organization. Below are the configured path aliases used in the project:

## Folder Structure and Path Aliases

### Base Directory

The base directory for module resolution is defined as `./src` in the `tsconfig.json` file.

### Path Aliases

Here are the aliases and their corresponding folders:

| Alias                           | Folder Path                        |
| ------------------------------- | ---------------------------------- |
| `@api/*`                        | `src/api/*`                        |
| `@api/models/request-models/*`  | `src/api/models/request-models/*`  |
| `@api/models/response-models/*` | `src/api/models/response-models/*` |
| `@api/services/*`               | `src/api/services/*`               |
| `@configs/*`                    | `src/configs/*`                    |
| `@database/*`                   | `src/database/*`                   |
| `@factories/*`                  | `src/factories/*`                  |
| `@fixtures/*`                   | `src/fixtures/*`                   |
| `@setup/*`                      | `src/setup/*`                      |
| `@ui/locators/*`                | `src/ui/locators/*`                |
| `@ui/pages/*`                   | `src/ui/pages/*`                   |
| `@utils/*`                      | `src/utils/*`                      |
| `@utils/file-utils/*`           | `src/utils/file-utils/*`           |
| `@utils/nflows-utils/*`         | `src/utils/nflows-utils/*`         |
| `@utils/playwright-utils/*`     | `src/utils/playwright-utils/*`     |
| `@test-data/*`                  | `src/test-data/*`                  |
| `@test-reports/*`               | `src/test-reports/*`               |
| `@test-results/*`               | `src/test-results/*`               |
| `@tests/*`                      | `src/tests/*`                      |

## Example Usage

To import a module using the path aliases, use the `@` prefix followed by the alias. For example:

```typescript
// Importing a service from the api folder
import { ApiService } from "@api/services/ApiService";

// Importing a model from the request-models folder
import { RequestModel } from "@api/models/request-models/RequestModel";

// Importing a utility function
import { FileUtil } from "@utils/file-utils/FileUtil";
```

## Configuration in `tsconfig.json`

The path aliases are configured in the `compilerOptions` section of the `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@api/*": ["api/*"],
      "@api/models/request-models/*": ["api/models/request-models/*"],
      "@api/models/response-models/*": ["api/models/response-models/*"],
      "@api/services/*": ["api/services/*"],
      "@configs/*": ["configs/*"],
      "@database/*": ["database/*"],
      "@factories/*": ["factories/*"],
      "@fixtures/*": ["fixtures/*"],
      "@setup/*": ["setup/*"],
      "@ui/locators/*": ["ui/locators/*"],
      "@ui/pages/*": ["ui/pages/*"],
      "@utils/*": ["utils/*"],
      "@utils/file-utils/*": ["utils/file-utils/*"],
      "@utils/nflows-utils/*": ["utils/nflows-utils/*"],
      "@utils/playwright-utils/*": ["utils/playwright-utils/*"],
      "@test-data/*": ["test-data/*"],
      "@test-reports/*": ["test-reports/*"],
      "@test-results/*": ["test-results/*"],
      "@tests/*": ["tests/*"]
    }
  }
}
```

With these configurations, you can use the path aliases to simplify imports and maintain a clean and organized project structure.

## Framework Folder Structure

```plaintext
nFlows/
├── .github/                     # Configuration files for GitHub workflows and actions
├── docs/                        # Documentation related to the project
├── downloads/                   # Directory for storing downloaded files during tests
├── logs/                        # Logs generated during test execution
├── node_modules/                # Dependencies installed via npm
├── screenshots/                 # Screenshots captured during UI tests
├── src/                         # Source code for the framework
│   ├── api/                     # API-related implementation
│   │   ├── models/              # API request and response models
│   │   │   ├── request-models/  # Models for API requests
│   │   │   └── response-models/ # Models for API responses
│   │   ├── services/            # API service layer for handling requests
│   │   ├── configs/             # Configuration files for API tests
│   │   ├── database/            # Database-related utilities and scripts
│   │   ├── factories/           # Factory methods for generating test data
│   │   ├── fixtures/            # Predefined data or setup files for tests
│   │   └── setup/               # Initialization and setup scripts
│   ├── ui/                      # UI-related implementation
│   │   ├── locators/            # UI element locators for page objects
│   │   └── pages/               # Page objects representing application screens
│   └── utils/                   # Utility functions and helpers
│       ├── file-utils/          # File handling utilities
│       ├── nflows-utils/        # Utilities specific to "nflows" functionality
│       └── playwright-utils/    # Utilities and helpers for Playwright testing
├── test-data/                   # Test data used in test cases
│   ├── api-test-data/           # Test data for API tests
│   └── ui-test-data/            # Test data for UI tests
├── test-reports/                # Reports generated after test execution
│   ├── allure/                  # Allure reports for test results
│   └── playwright/              # Playwright-specific test reports
├── tests/                       # Test cases for the framework
│   ├── api-tests/               # Test cases for API testing
│   └── ui-tests/                # Test cases for UI testing
├── .gitignore                   # Git ignore file to exclude certain files/folders
├── example.spec.ts              # Example test specification file
├── package-lock.json            # Auto-generated file for npm dependencies
├── package.json                 # Project configuration and dependency management
├── playwright.config.ts         # Configuration file for Playwright framework
└── README.md                    # Project README file
```
