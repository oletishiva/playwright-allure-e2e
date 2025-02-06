
# 🚀 Welcome to our `playwright-allure-e2e` repository!
# playwright E2E framework with allure,custom reporting,CircleCi and slack notifications

💡 **Why Playwright?** Playwright enables the automation of web browser interactions across different platforms, making it the perfect tool for developers and QA engineers looking to craft seamless testing experiences. 🌐✨

## Below is a step by step instructions to run examples from this repository 🌱! 

## 1. Install VSCode! ✨
<details>
<summary>📥 How to Install VSCode </summary>
🔍 Seek out the official Visual Studio Code website and claim the version meant for your realm (operating system).
📦 Open the downloaded artifact and adhere to the guidance of the installation spirit.
</details>

## 2. Check that Node.js is installed! 🌐
Open the terminal and paste the next line of code there. 

```bash
node -v  
npm -v
```
🔮 Press Enter! 

If they are installed, you will see the version of each of the Node and npm, and you can move forward!  
If not, below are the instructions on how to install them! 🛠

## 2.a. Install Node.js if it is not installed

<details>
  <summary>🌟 How to install Node.js! </summary>
🏰 Venture forth to the official Node.js website and secure the Windows installer treasure.
📜 Open the treasure chest (the downloaded file) and follow the mystical instructions provided by the installer.
    
### **Confirm the success** of your spell by invoking the next line of code in the terminal.

```bash
node -v  
npm -v
```
🔮 Press Enter! 
👀 To witness the versions of Node.js and npm materialize before your eyes.

</details>

## 3 How to Define and Run tags

<details>
test('test login page', {
  tag: '@smoke',
}, async ({ page }) => {
  // ...
});

** npx playwright test --grep @smoke   
</details>

## command Line
** various commandLine tools used in playwright
<details>
*Run all the tests

npx playwright test

*Run a single test file

npx playwright test tests/todo-page.spec.ts

-Run a set of test files

npx playwright test tests/todo-page/ tests/landing-page/

Run files that have my-spec or my-spec-2 in the file name

npx playwright test my-spec my-spec-2

Run tests that are in line 42 in my-spec.ts

npx playwright test my-spec.ts:42

Run the test with the title

npx playwright test -g "add a todo item"

Run tests in headed browsers

npx playwright test --headed

Run all the tests against a specific project

npx playwright test --project=chromium

Disable parallelization

npx playwright test --workers=1

Choose a reporter

npx playwright test --reporter=dot

Run in debug mode with Playwright Inspector

npx playwright test --debug

Run tests in interactive UI mode, with a built-in watch mode (Preview)

npx playwright test --ui

Ask for help

npx playwright test --help
</details>