# E2E Test Recorder (Chrome Extension)

A Chrome Extension that records user interactions in the browser and exports them as **Playwright scripts** for end-to-end (E2E) testing.

---

## Features
-  **Record clicks and events** across any website
-  **Auto-generate Playwright scripts**
-  **Download scripts locally** with one click
-  Works across **all websites**
-  Easy to install and run locally (no external server needed)

---

##  Demo

(Demo)[link]

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v20.19+ or v22.12+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Supraja-Koppisetty/E2E-Test-Recorder.git
   cd E2E-Test-Recorder
2. **Install dependencies** 

    npm install


3. **Build the project**

    npm run build


4. **Load the extension in Chrome**

    Open chrome://extensions/

    Enable Developer Mode

    Click Load unpacked

    Select the dist/ folder

### Project Structure
 
E2E-Test-Recorder/

├── public/              # manifest.json, icons, static assets

├── src/                 # React popup UI

    ├── main.jsx         # Entry point
    ├── App.jsx          # Popup component
    └── components/      # Reusable UI components
├── background.js        # Service worker 
(event routing, downloads)

├── contentScript.js     # Captures DOM events

├── dist/                # Build output (loaded into Chrome)

├── package.json

└── README.md


### Tech Stack

- React + Vite – for popup UI

- Chrome Extensions Manifest v3

- Playwright – test script generation

- JavaScript ESNext

### Example Output

Here’s what a generated Playwright script looks like:

```js
import { test, expect } from '@playwright/test';

    test('Recorded user flow', async ({ page }) => {
     await page.goto('https://example.com');
     await page.click('button#start');
     await page.fill('input#name', 'Supraja');
     await page.click('button#submit');
    });
```

## Roadmap

 - [x] Record click events

 - [x] Export as Playwright script

 - [x] Download script locally

 - [ ] Add support for more event types (hover, scroll, input)

 - [ ] UI polish for popup

 - [ ] Publish on Chrome Web Store 

## Contributing

 Pull requests are welcome!
 If you’d like to contribute:

 - Fork this repo

- Create a new branch (feature/my-feature)

- Commit your changes

- Open a PR 

## License

MIT License © 2025 Supraja Koppisetty

## Acknowledgements

Playwright team for inspiration

Chrome Extension Developer Docs