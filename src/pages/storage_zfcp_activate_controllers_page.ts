import { type Page } from "puppeteer-core";

export class StorageZfcpActivateControllersPage {
  protected readonly page: Page;

  private readonly acceptButton = () => this.page.locator("::-p-aria('Accept')");

  public readonly multipathText = () =>
    this.page.locator("::-p-text(The system seems to have multipath hardware)");

  private readonly controllerCheckbox = (controllerId: string) =>
    this.page.locator(`::-p-aria(${controllerId})`);

  public readonly allControllersActivatedText = () =>
    this.page.locator("::-p-aria('All the available zFCP controllers are already activated.')");

  constructor(page: Page) {
    this.page = page;
  }

  async accept() {
    await this.acceptButton().click();
  }

  async select(controllerIds: string[]) {
    for (const controllerId of controllerIds) {
      await this.controllerCheckbox(controllerId).click();
    }
  }
}
