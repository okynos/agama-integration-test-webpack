import { type Page } from "puppeteer-core";

export class SoftwarePage {
  private readonly page: Page;
  private readonly changePatternsButton = () => this.page.locator("::-p-text(Change patterns)");

  constructor(page: Page) {
    this.page = page;
  }

  async changePatterns() {
    await this.changePatternsButton().click();
  }
}
