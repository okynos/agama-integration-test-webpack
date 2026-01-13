import { type Page } from "puppeteer-core";

export class SpinnerPage {
  private readonly page: Page;

  readonly spinnerProgressBar = () => this.page.locator('::-p-aria([role="progressbar"])');

  constructor(page: Page) {
    this.page = page;
  }

  async waitSpinnerHidden() {
    await this.page.waitForSelector('::-p-aria(Contents[role="progressbar"])', {
      hidden: true,
    });
    //await this.spinnerProgressBar().setVisibility("hidden").wait();
  }
}
