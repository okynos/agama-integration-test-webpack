import { type Page } from "puppeteer-core";

export class StorageWarningOutOfSyncPage {
  private readonly page: Page;

  readonly configurationOutOfSyncWarningAlert = () =>
    this.page.locator("::-p-text(Configuration out of sync)");

  private readonly reloadButton = () => this.page.locator("::-p-text(Reload now)");

  constructor(page: Page) {
    this.page = page;
  }

  async reload() {
    await this.reloadButton().setTimeout(60000).click();
  }
}
