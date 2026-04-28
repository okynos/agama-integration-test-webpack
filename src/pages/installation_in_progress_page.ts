import { type Page } from "puppeteer-core";

export class InstallationInProgressPage {
  private readonly page: Page;
  readonly installationInProgressText = () =>
    this.page.locator("::-p-text(Installation in progress)");

  readonly prepareTheSystemText = () => this.page.locator("::-p-text(Prepare the system)");
  readonly installSoftwareText = () => this.page.locator("::-p-text(Install software)");
  readonly configureTheSystemText = () => this.page.locator("::-p-text(Configure the system)");

  constructor(page: Page) {
    this.page = page;
  }
}
