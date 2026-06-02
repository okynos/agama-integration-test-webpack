import { type Page } from "puppeteer-core";

export class ActivateControllersPage {
  protected readonly page: Page;

  private readonly activateControllersLink = () =>
    this.page.locator("::-p-aria(Activate controllers)");

  constructor(page: Page) {
    this.page = page;
  }

  async activateControllers() {
    await this.activateControllersLink().click();
  }
}
