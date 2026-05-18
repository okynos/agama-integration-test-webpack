import { type Page } from "puppeteer-core";

export class SoftwarePatternsSelectionPage {
  private readonly page: Page;
  private readonly patternCheckbox = (pattern: string) =>
    this.page.locator(`::-p-aria(${pattern}[role="checkbox"])`);

  private readonly acceptButton = () => this.page.locator("::-p-aria(Accept)");

  constructor(page: Page) {
    this.page = page;
  }

  async select(pattern: string) {
    await this.patternCheckbox(pattern).click();
  }

  async accept() {
    await this.acceptButton().click();
  }
}
