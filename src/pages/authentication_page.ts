import { type Page } from "puppeteer-core";
import { type GConstructor } from "../lib/helpers";

class AuthenticationBasePage {
  protected readonly page: Page;

  protected readonly defineAdminUserCheckbox = () =>
    this.page.locator("::-p-aria(Define an administrator user[role='checkbox'])");

  protected readonly rootLoginMethodButton = () =>
    this.page.locator("::-p-aria(Root login method[role='button'])");

  protected readonly acceptButton = () => this.page.locator("button::-p-text(Accept)");

  constructor(page: Page) {
    this.page = page;
  }

  async defineAnAdministratorUser() {
    await this.defineAdminUserCheckbox().click();
  }

  async pressRootLoginButton() {
    await this.rootLoginMethodButton().click();
  }

  async accept() {
    const button = await this.acceptButton().waitHandle();
    await button.scrollIntoView();
    await this.acceptButton().click();
  }
}

function AdminUserDefinable<TBase extends GConstructor<AuthenticationBasePage>>(Base: TBase) {
  return class extends Base {
    private readonly fullNameInput = () => this.page.locator("input#userFullName");

    private readonly usernameInput = () => this.page.locator("input#userName");

    private readonly userPasswordInput = () => this.page.locator("input#userPassword");

    private readonly userPasswordConfirmationInput = () =>
      this.page.locator("input#userPasswordConfirmation");

    async fillFullName(fullName: string) {
      await this.fullNameInput().fill(fullName);
    }

    async fillUserName(userName: string) {
      await this.usernameInput().fill(userName);
    }

    async fillPassword(password: string) {
      await this.userPasswordInput().fill(password);
    }

    async fillPasswordConfirmation(password: string) {
      await this.userPasswordConfirmationInput().fill(password);
    }
  };
}

function RootLoginMethodPasswordDefinable<TBase extends GConstructor<AuthenticationBasePage>>(
  Base: TBase,
) {
  return class extends Base {
    private readonly rootPasswordOption = () =>
      this.page.locator("::-p-aria(Password Log in using a password)");

    private readonly rootPasswordInput = () => this.page.locator("input#rootPassword");

    private readonly rootPasswordConfirmationInput = () =>
      this.page.locator("input#rootPasswordConfirmation");

    async selectRootLoginPasswordOption() {
      await this.rootPasswordOption().click();
    }

    async fillPassword(password: string) {
      await this.rootPasswordInput().fill(password);
    }

    async fillPasswordConfirmation(password: string) {
      await this.rootPasswordConfirmationInput().fill(password);
    }
  };
}

export class AuthenticationAdministratorAccountPage extends AdminUserDefinable(
  AuthenticationBasePage,
) {}
export class RootLoginMethodPage extends RootLoginMethodPasswordDefinable(AuthenticationBasePage) {}
