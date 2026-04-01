import { type Page } from "puppeteer-core";

export class NetworkPage {
  private readonly page: Page;

  private readonly warningAlertHeading = () =>
    this.page.locator(`::-p-text(Installed system may not have network connections)`);

  private readonly actionsForTheWiredConnectionButton = () =>
    this.page.locator("::-p-aria(Actions for Wired Connection)");

  private readonly detailsButton = () => this.page.locator("::-p-text(Details)");

  constructor(page: Page) {
    this.page = page;
  }

  async selectConnectionDetails() {
    await this.actionsForTheWiredConnectionButton().click();
    await this.detailsButton().click();
  }

  async verifyWarningAlert() {
    await this.warningAlertHeading().wait();
  }
}
