import { type Page } from "puppeteer-core";

export class ConfigurePartitionPage {
  private readonly page: Page;

  private readonly sizeModeButton = () => this.page.locator("::-p-aria(Size[role='button'])");
  private readonly fixedOption = () =>
    this.page.locator("::-p-aria(Fixed Set a specific size[role='option'])");

  private readonly valueTextbox = () => this.page.locator("::-p-aria(Value[role='textbox'])");
  private readonly fileSystemButton = () =>
    this.page.locator("::-p-aria(File system[role='button'])");

  private readonly btrfsOption = () => this.page.locator("::-p-aria(Btrfs[role='option'])");
  private readonly acceptButton = () => this.page.locator("::-p-aria(Accept[role='button'])");

  constructor(page: Page) {
    this.page = page;
  }

  async setASpecificSize(value: string) {
    await this.sizeModeButton().click();
    await this.fixedOption().click();
    await this.valueTextbox().fill(value);
  }

  async changeFileSystemToBtrfs() {
    await this.fileSystemButton().click();
    await this.btrfsOption().click();
  }

  async accept() {
    await this.acceptButton().click();
  }
}
