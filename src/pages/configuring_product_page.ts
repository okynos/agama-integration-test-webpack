import { type Page } from "puppeteer-core";

// ts-prune-ignore-next
export class ConfiguringProductPage {
  private readonly page: Page;
  private readonly configuringTheProductText = () =>
    this.page.locator("::-p-text(Configuring the product)");

  constructor(page: Page) {
    this.page = page;
  }

  async wait() {
    await this.configuringTheProductText().wait();
  }
}
