//import { timeout } from "puppeteer-core";
import { type Page } from "puppeteer-core";
import { sleep } from "../lib/helpers";

export class ZfcpPage {
  private readonly page: Page;

  private readonly activateDisk = () => this.page.locator("::-p-text('Activate')");

  private readonly backToDeviceSelectionButton = () =>
    this.page.locator("button::-p-text(Back to device selection)");

  private readonly enableMultipath = () => this.page.locator("::-p-text('Yes')");

  constructor(page: Page) {
    this.page = page;
  }

  async activateDevice(index) {
    let selector;
    if (index === 0) selector = "::-p-text('0.0.fa00')";
    else selector = "::-p-text('0.0.fc00')";

    await this.page.waitForSelector("button#zfcp_controllers_actions");
    const optionsDisk = await this.page.$$("button#zfcp_controllers_actions");
    await optionsDisk[index].click();
    await this.activateDisk().click();
    await this.page.waitForSelector(selector, { timeout: 80000 });
    // puppeteer goes too fast and screen is unresponsive after submit, a small delay helps
    await sleep(2000);
  }

  async activateMultipath() {
    await this.enableMultipath().setTimeout(40000).click();
  }

  async backToDeviceSelection() {
    await this.backToDeviceSelectionButton().click();
  }
}
