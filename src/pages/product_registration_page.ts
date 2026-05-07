import { type Page } from "puppeteer-core";
import { type GConstructor } from "../lib/helpers";

class RegistrationBasePage {
  protected readonly page: Page;

  protected readonly codeInput = () =>
    this.page.locator("::-p-aria('Registration code (optional)')[type='password']");

  protected readonly registerButton = () => this.page.locator("::-p-aria(Register)");

  protected readonly doNotRegisterButton = () => this.page.locator("::-p-text(Do not register)");

  readonly infoHasBeenRegisteredText = () =>
    this.page.locator("::-p-text(has been registered with below information)");

  // legacy alert warning for QU to be dropped
  readonly connectionToRegistrationServerFailedText = () =>
    this.page.locator("::-p-text(Connection to registration server failed:)");

  readonly alertWarningUnknownRegistrationCodeText = () =>
    this.page.locator("::-p-text(Unknown Registration Code.)");

  readonly alertWarningEnterARegistrationCodeText = () =>
    this.page.locator("::-p-text(Enter a registration code)");

  readonly alertWarningNetworkErrorText = () => this.page.locator("::-p-text(Network error)");

  constructor(page: Page) {
    this.page = page;
  }

  async fillCode(code: string) {
    await this.codeInput().fill(code);
  }

  async register() {
    // prefer explicit wait over hard delay.
    await this.registerButton().setTimeout(40000).click();
  }

  async doNotRegister() {
    // prefer explicit wait over hard delay.
    await this.doNotRegisterButton().click({ delay: 1000 });
  }
}

function CustomRegistrable<TBase extends GConstructor<RegistrationBasePage>>(Base: TBase) {
  return class extends Base {
    private readonly registrationServerButton = () =>
      this.page.locator("::-p-aria(Registration server)");

    private readonly registrationServerCustomOption = () =>
      this.page.locator("::-p-aria(Custom Register using a custom registration server)");

    private readonly registrationServerSCCOption = () =>
      this.page.locator("::-p-aria(SUSE Customer Center (SCC) Register using SUSE server)");

    private readonly serverUrlTextbox = () =>
      this.page.locator("::-p-aria(Server URL)[type='text']");

    async selectCustomRegistrationServer() {
      await this.registrationServerButton().click();
      await this.registrationServerCustomOption().wait();
      await this.registrationServerCustomOption().click();
    }

    async selectSCCRegistrationServer() {
      await this.registrationServerButton().click();
      await this.registrationServerSCCOption().click();
    }

    async fillServerUrl(url: string, timeout: number = 30 * 1000) {
      await this.serverUrlTextbox().setTimeout(timeout).fill(url);
    }
  };
}

export class ProductRegistrationPage extends RegistrationBasePage {}
export class CustomRegistrationPage extends CustomRegistrable(RegistrationBasePage) {}
