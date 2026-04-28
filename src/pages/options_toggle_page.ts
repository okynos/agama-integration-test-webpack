import { type Page } from "puppeteer-core";

export class OptionsTogglePage {
  protected readonly page: Page;

  private readonly moreInstallerOptionsToggle = () =>
    this.page.locator("::-p-aria(More installer options)");

  private readonly optionsToggle = () => this.page.locator("::-p-aria(Options toggle)");
  private readonly downloadLogsMenuItem = () => this.page.locator("::-p-aria(Download logs)");

  constructor(page: Page) {
    this.page = page;
  }

  async downloadLogs() {
    const toggle = await Promise.any([
      this.moreInstallerOptionsToggle().waitHandle(),
      this.optionsToggle().waitHandle(),
    ]);
    await toggle.click();
    await this.downloadLogsMenuItem().click();
  }
}
