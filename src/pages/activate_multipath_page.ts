import { type Page } from "puppeteer-core";

export class ActivateMultipathPage {
  protected readonly page: Page;

  public readonly multipathText = () =>
    this.page.locator("::-p-text(The system seems to have multipath hardware)");

  protected readonly activateButton = () => this.page.locator("::-p-aria(Yes[role='button'])");

  constructor(page: Page) {
    this.page = page;
  }

  async activate() {
    await this.activateButton().click();
  }
}
