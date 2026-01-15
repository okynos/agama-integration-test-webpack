import { type Page } from "puppeteer-core";

export class ConfirmInstallationPage {
  private readonly page: Page;
  private readonly continueButton = () =>
    this.page.locator('::-p-aria([name="Confirm and install"][role="button"])');

  constructor(page: Page) {
    this.page = page;
  }

  async confirmAndInstall() {
    await this.continueButton().click();
  }
}
