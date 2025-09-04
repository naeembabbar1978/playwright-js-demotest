export class BasePage {
  async click(page, locator) { await page.locator(locator).click(); }
  async type(page, locator, value) { await page.locator(locator).fill(value); }
  async go(page, url) { await page.goto(url); }
}
