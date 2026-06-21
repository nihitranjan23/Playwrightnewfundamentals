# Chapter 19: Playwright Basics

This folder contains the Playwright test automation setup and basics.

## Installation

Playwright has been installed in this project using:

```bash
npm init -y
npm install @playwright/test
npx playwright install
```

## Playwright Version

- **Version:** 1.61.0

## Running Tests

To run Playwright tests, use:

```bash
npx playwright test
```

To run tests in headed mode (with browser UI):

```bash
npx playwright test --headed
```

To run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

## Useful Commands

| Command | Description |
|---------|-------------|
| `playwright --version` | Check installed Playwright version |
| `npx playwright test` | Run all tests |
| `npx playwright test --headed` | Run tests with browser visible |
| `npx playwright test --debug` | Run tests in debug mode |
| `npx playwright codegen` | Record actions and generate code |
| `npx playwright show-report` | Open the HTML test report |

## Project Structure

- `tests/` - Add your test files here
- `playwright.config.js` - Playwright configuration file
- `package.json` - Project dependencies

## Getting Started

1. Navigate to this folder in terminal:
   ```bash
   cd "D:\New folder\playwright 2x\CHapter19_Playwright_basics"
   ```

2. Run tests:
   ```bash
   npx playwright test
   ```

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
