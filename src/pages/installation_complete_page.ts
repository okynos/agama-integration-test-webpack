import { type Page } from "puppeteer-core";

export class InstallationCompletePage {
  private readonly page: Page;
  private readonly installationCompleteText = () =>
    this.page.locator("::-p-aria('Installation complete')");

  constructor(page: Page) {
    this.page = page;
  }

  async wait(timeout: number) {
    await this.installationCompleteText().setTimeout(timeout).wait();
  }
}
