import { type Page } from "puppeteer-core";

export class StorageSettingsPage {
  private readonly page: Page;
  private readonly selectMoreDevicesButton = () => this.page.locator("::-p-text(More devices)");

  private readonly encryptionTab = () => this.page.locator("::-p-text(Encryption)");
  private readonly changeEncryptionLink = () =>
    this.page.locator('::-p-aria([name="Change"][role="link"])');

  public readonly encryptionIsEnabledText = () =>
    this.page.locator("::-p-text(Encryption is enabled)");

  public readonly encryptionIsDisabledText = () =>
    this.page.locator("::-p-text(Encryption is disabled)");

  private readonly manageDasdLink = () => this.page.locator("::-p-text(Manage DASD devices)");

  private readonly ActivateZfcpLink = () => this.page.locator("::-p-text(Activate zFCP disks)");

  private readonly expandPartitionsButton = () =>
    this.page.locator("::-p-text(New partitions will be created)");

  private readonly optionForRoot = () => this.page.locator("::-p-aria(Options for partition /)");
  private readonly editRootPartitionMenu = () =>
    this.page.locator("::-p-aria(Edit /[role='menuitem'])");

  constructor(page: Page) {
    this.page = page;
  }

  async selectMoreDevices() {
    await this.selectMoreDevicesButton().click();
  }

  async selectEncryption() {
    await this.encryptionTab().click();
  }

  async changeEncryption() {
    await this.changeEncryptionLink().click();
  }

  async manageDasd() {
    await this.manageDasdLink().click();
  }

  async activateZfcp() {
    await this.ActivateZfcpLink().click();
  }

  async waitForElement(element, timeout) {
    await this.page.locator(element).setTimeout(timeout).wait();
  }

  async editRootPartition() {
    await this.expandPartitionsButton().click();
    await this.optionForRoot().click();
    await this.editRootPartitionMenu().click();
  }
}
