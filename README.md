# Playwright + JavaScript Starter

Simple demo repo for interview walkthrough.

## Structure
├── package.json
├── playwright.config.js
├── README.md
├── src/
│ ├── pages/
│ │ ├── BasePage.js
│ │ └── LoginPage.js
│ └── utils/
│ └── .gitkeep
└── tests/
├── sample-ui.spec.js # tagged @smoke
└── sample-api.spec.js


## Commands (if running locally/CI)
- `npm install`
- `npx playwright install`
- `npm test`            # run all
- `npm run test:ui`     # Playwright UI
- `npm run test:headed` # visible browser
- `npm run test:smoke`  # only tests with @smoke in title
