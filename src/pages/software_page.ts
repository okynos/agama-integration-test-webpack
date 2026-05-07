import { type Page } from "puppeteer-core";

export class SoftwarePage {
  private readonly page: Page;
  private readonly changePatternsLink = () =>
    this.page.locator("a[href='#/software/patterns/select']");

  private readonly selectADesktopLink = () =>
    this.page.locator("a[href='#/software/desktops/select']");

  constructor(page: Page) {
    this.page = page;
  }

  async changePatterns() {
    await this.changePatternsLink().click();
  }

  async selectADesktop() {
    await this.selectADesktopLink().click();
  }
}
