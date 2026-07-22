import { type Page } from "puppeteer-core";

export class SystemPage {
  private readonly page: Page;

  protected readonly hostnameModeButton = () =>
    this.page.locator("::-p-aria(Hostname Mode[role='button'])");

  private readonly modeStaticOption = () =>
    this.page.locator("::-p-aria(Static Set manually[role='option'])");

  private readonly nameTextbox = () => this.page.locator("::-p-aria(Name[role='textbox'])");
  protected readonly ntpModeButton = () =>
    this.page.locator("::-p-aria(Time Synchronization Servers Mode[role='button'])");

  protected readonly customModeOption = () =>
    this.page.locator("::-p-aria(Custom Set NTP servers manually[role='option'])");

  protected readonly serverAddressesTextbox = () =>
    this.page.locator("::-p-aria(Server addresses[role='textbox'])");

  private readonly acceptButton = () => this.page.locator("::-p-aria(Accept[role='button'])");

  constructor(page: Page) {
    this.page = page;
  }

  async selectStaticMode() {
    await this.hostnameModeButton().click();
    await this.modeStaticOption().click();
  }

  async fill(hostname) {
    await this.nameTextbox().fill(hostname);
  }

  async selectCustomMode() {
    await this.ntpModeButton().click();
    await this.customModeOption().click();
  }

  async addServerAddress(address: string) {
    const inputElement = this.serverAddressesTextbox();
    const inputHandle = await this.serverAddressesTextbox().waitHandle();

    await inputElement.fill(address);
    await inputHandle.press("Enter");
  }

  async accept() {
    await this.acceptButton().click();
  }
}
