import { type Page } from "puppeteer-core";
import { sleep } from "../lib/helpers";

export class ZfcpPage {
  private readonly page: Page;

  private optionsDisk;

  private readonly activateDisk = () => this.page.locator("::-p-text('Activate')");

  private readonly backToDeviceSelectionButton = () =>
    this.page.locator("button::-p-text(Back to device selection)");

  private readonly enableMultipath = () => this.page.locator("::-p-text('Yes')");

  constructor(page: Page) {
    this.page = page;
  }

  async activateDevices() {
    await this.page.waitForSelector("button#zfcp_controllers_actions");
    this.optionsDisk = await this.page.$$("button#zfcp_controllers_actions");
    await this.optionsDisk[0].click();
    await this.activateDisk().click();

    // puppeteer goes too fast and screen is unresponsive after submit, a small delay helps
    await sleep(75000);

    // The button dissappears while activating so we need to refresh the array after sleep
    this.optionsDisk = await this.page.$$("button#zfcp_controllers_actions");
    await this.optionsDisk[1].click();
    await this.activateDisk().click();

    // puppeteer goes too fast and screen is unresponsive after submit, a small delay helps
    await sleep(20000);
  }

  async activateMultipath() {
    await this.enableMultipath().click();
  }

  async backToDeviceSelection() {
    await this.backToDeviceSelectionButton().click();
  }
}
