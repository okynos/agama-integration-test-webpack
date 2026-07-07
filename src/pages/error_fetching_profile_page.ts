import { type Page } from "puppeteer-core";

export class ErrorFetchingProfilePage {
  private readonly page: Page;
  public readonly alertWarningMsg = () =>
    this.page.locator(
      "::-p-text(Configuration cannot be applied because it is invalid or could not be reached), ::-p-text(It was unreachable or invalid)",
    );

  constructor(page: Page) {
    this.page = page;
  }
}
