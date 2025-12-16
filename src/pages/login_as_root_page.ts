import { type Page } from "puppeteer-core";

export class LoginAsRootPage {
  private readonly page: Page;
  readonly passwordInput = () => this.page.locator("input#password");
  private readonly logInButton = () => this.page.locator("button[type='submit']");
  readonly couldNotLoginText = () => this.page.locator(`::-p-text(Could not log in)`);

  readonly passwordVisibilityButton = () =>
    this.page.locator("[aria-label='Password visibility button']");

  constructor(page: Page) {
    this.page = page;
  }

  async fillPassword(password: string) {
    await this.passwordInput().fill(password);
  }

  async logIn() {
    await this.logInButton().click();
  }

  async togglePasswordVisibility() {
    await this.passwordVisibilityButton().click();
  }
}
