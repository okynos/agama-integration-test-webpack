import { type Page } from "puppeteer-core";

export class HostnamePage {
  private readonly page: Page;
  private readonly staticToggle = () => this.page.locator("input#hostname");
  private readonly hostnameField = () => this.page.locator("::-p-aria(Static hostname)");
  private readonly acceptButton = () => this.page.locator("::-p-text(Accept)");

  constructor(page: Page) {
    this.page = page;
  }

  async activateStatic() {
    await this.staticToggle().click();
  }

  async setHostname(static_hostname) {
    await this.hostnameField().fill(static_hostname);
  }

  async accept() {
    await this.acceptButton().click();
  }
}
