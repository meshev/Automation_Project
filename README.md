# Playwright TypeScript Automation Framework

## Overview

This repository contains a TypeScript-based automation framework utilizing Playwright for web application testing and automation. Playwright is a powerful tool that allows you to automate interactions with web browsers in a cross-browser fashion.

## Features

- **TypeScript Support:** Fully written in TypeScript for enhanced type safety and developer productivity.
- **Cross-Browser Testing:** Supports Chromium, Firefox, and WebKit browsers for comprehensive testing coverage.
- **Modular and Extendable:** Designed with a modular architecture for easy integration of new features and tests.
- **Configuration-Driven:** Centralized configuration for managing test environments and settings.
- **Continuous Integration Ready:** Suitable for integration into CI/CD pipelines for automated testing workflows.

## Prerequisites

- Node.js (v14 or later recommended)
- npm (Node Package Manager)
- Modern web browser (Chromium, Firefox, or WebKit)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/meshev/Automation_Project
   cd playwright-typescript-automation
   ```

2. Install dependencies:

   ```bash
   # For installing dependencies
   npm install
   # For downloading browsers
   npx playwright install
   ```

### Running Tests

To run the tests, execute:

```bash
npm test
```

### Configuration

Modify the configuration files (`playwright.config.ts`) to customize browser settings, test URLs, or any other environment-specific configurations.

## Folder Structure

```plaintext
playwright-typescript-automation/
│
├── src/
│   ├── config/
│   │   └── playwright.config.ts
│   ├── data/
│   │   └── test-data.json
│   ├── fixtures/
│   │   └── custom-fixtures.ts
│   ├── helpers/
│   │   └── playwright-helpers.ts
│   ├── pages/
│   │   └── pages.ts
│   └── tests/
│       └── example.test.ts
│
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md
```

## Additional Information

- **Contributing:** Contributions are welcome! Fork the repository and submit pull requests.
- **License:** This project is licensed under the MIT License. See `LICENSE` for details.

## Support

For any issues or questions, please [open an issue](https://github.com/meshev/Automation_Project/issues) on GitHub.
