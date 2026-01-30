import { type Page } from "puppeteer-core";

export class StoragePage {
  private readonly page: Page;
  private readonly changeDiskButton = () =>
    this.page.locator('::-p-aria([name="Change"][role="button"])');

  private readonly selectADiskToInstallTheSystemButton = () =>
    this.page.locator("::-p-text(Select a disk to install the system)");

  private readonly otherOptionsButton = () => this.page.locator("::-p-text(Other options)");

  public readonly storageAllocationWarningText = () =>
    this.page.locator("::-p-text(It is not possible to allocate space for the boot partition)");

  private readonly resetToDefaultsButton = () => this.page.locator("::-p-text(Reset to defaults)");

  constructor(page: Page) {
    this.page = page;
  }

  async selectChangeDisk() {
    await this.changeDiskButton().click();
  }

  async selectADiskToInstallTheSystem() {
    await this.selectADiskToInstallTheSystemButton().click();
  }

  async otherOptions() {
    await this.otherOptionsButton().click();
  }

  async resetToDefault() {
    await this.resetToDefaultsButton().click();
  }
}
