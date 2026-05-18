import { type Page } from "puppeteer-core";

export class SoftwareDesktopSelectionPage {
  private readonly page: Page;
  private readonly desktopCheckbox = (pattern: string) =>
    this.page.locator(`::-p-aria(${pattern}[role="checkbox"])`);

  private readonly acceptButton = () => this.page.locator("::-p-aria(Accept)");

  constructor(page: Page) {
    this.page = page;
  }

  async select(desktop: string) {
    await this.desktopCheckbox(desktop).click();
  }

  async accept() {
    await this.acceptButton().click();
  }
}
