import { type Page } from "puppeteer-core";

export class StartInstallationPage {
  private readonly page: Page;
  private readonly installWithPotentialDataLossButton = () =>
    this.page.locator("::-p-text(Install now with potential data loss)");

  readonly installSoftwareText = () =>
    this.page.locator(`::-p-text(Install software (step 2 of 3))`);

  readonly configureTheSystemText = () =>
    this.page.locator(`::-p-text(Configure the system (step 3 of 3))`);

  constructor(page: Page) {
    this.page = page;
  }

  async startInstallation() {
    await this.installWithPotentialDataLossButton().click();
  }
}
