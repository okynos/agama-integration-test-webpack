import { type Page } from "puppeteer-core";

export class ExtensionRegistrationPHubPage {
  private readonly page: Page;

  private readonly registerButtonPHub = () =>
    this.page.locator("[id*='register-button-PackageHub']");

  private readonly trustKeyButton = () => this.page.locator("::-p-text(Trust)");

  public readonly trustKeyText = () =>
    this.page.locator("::-p-text(Do you want to trust this key?)");

  public readonly registeredText = () =>
    this.page.locator("::-p-text(The extension was registered without any registration code)");

  constructor(page: Page) {
    this.page = page;
  }

  async register() {
    await this.registerButtonPHub().click();
  }

  async trustKey() {
    await this.trustKeyButton().click();
  }
}
