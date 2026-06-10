import { type Page } from "puppeteer-core";

export class SystemPage {
  private readonly page: Page;
  private readonly modeButton = () => this.page.locator("::-p-aria(Mode[role='button'])");
  private readonly modeStaticOption = () =>
    this.page.locator("::-p-aria(Static Set manually[role='option'])");

  private readonly nameInput = () => this.page.locator("input#hostnameValue");
  private readonly acceptButton = () => this.page.locator("::-p-aria(Accept[role='button'])");

  constructor(page: Page) {
    this.page = page;
  }

  async selectStaticMode() {
    await this.modeButton().click();
    await this.modeStaticOption().click();
  }

  async fill(hostname) {
    await this.nameInput().fill(hostname);
  }

  async accept() {
    await this.acceptButton().click();
  }
}
