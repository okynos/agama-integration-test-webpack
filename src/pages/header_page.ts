import { type Page } from "puppeteer-core";

export class HeaderPage {
  protected readonly page: Page;
  private readonly overviewLink = () => this.page.locator("a[href='#/overview']");

  constructor(page: Page) {
    this.page = page;
  }

  async goToOverview() {
    await this.overviewLink().click();
  }
}
