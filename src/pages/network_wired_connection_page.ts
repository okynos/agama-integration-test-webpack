import { type Page } from "puppeteer-core";

export class NetworkWiredConnectionPage {
  private readonly page: Page;

  private readonly installationOnlyCheckboxNotChecked = () =>
    this.page.locator(`input[type='checkbox']:not(:checked)[role='switch']`);

  private readonly installationOnlyCheckboxChecked = () =>
    this.page.locator(`input[type='checkbox']:checked[role='switch']`);

  constructor(page: Page) {
    this.page = page;
  }

  async selectInstallationOnly() {
    await this.installationOnlyCheckboxNotChecked().click();
    await this.installationOnlyCheckboxChecked().wait();
  }
}
