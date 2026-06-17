import { type Page } from "puppeteer-core";

export class HeaderPage {
  protected readonly page: Page;
  private readonly installationLink = () => this.page.locator("a[href='#/overview']");

  constructor(page: Page) {
    this.page = page;
  }

  async goToInstallation() {
    await this.installationLink().click();
  }
}
