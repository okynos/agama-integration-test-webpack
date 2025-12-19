import { type Page } from "puppeteer-core";

export class ConfigurePartitionPage {
  private readonly page: Page;
  private readonly fileSystemButton = () => this.page.locator("::-p-aria(File system)");
  private readonly btrfsOption = () => this.page.locator('::-p-aria(Btrfs[role="option"])');
  private readonly sizeModeToggleMenu = () => this.page.locator("::-p-aria(Size mode)");
  private readonly manualMenuItem = () =>
    this.page.locator("::-p-aria(Manual Define a custom size)");

  private readonly sizeGiBTextbox = () => this.page.locator("::-p-aria(Size)[type='text']");

  private readonly allowGrowingCheckBox = () => this.page.locator("::-p-aria(Allow growing)");
  private readonly acceptButton = () => this.page.locator("::-p-aria(Accept)");

  constructor(page: Page) {
    this.page = page;
  }

  async changeFilesystemToBtrfs() {
    await this.fileSystemButton().click();
    await this.btrfsOption().click();
  }

  async selectSizeMode() {
    await this.sizeModeToggleMenu().click();
  }

  async changeSizeModeToManual() {
    await this.manualMenuItem().click();
  }

  async inputPartitionSize(size: string) {
    await this.sizeGiBTextbox().fill(size);
  }

  async disableAllowGrowing() {
    await this.allowGrowingCheckBox().click();
  }

  async accept() {
    await this.acceptButton().click();
  }
}
