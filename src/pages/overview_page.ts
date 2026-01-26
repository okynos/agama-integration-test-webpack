import { type Page } from "puppeteer-core";
import { type GConstructor } from "../lib/helpers";

export class OverviewPage {
  protected readonly page: Page;
  private readonly hostnameLink = () => this.page.locator("a[href='#/hostname']");
  private readonly localizationLink = () => this.page.locator("a[href='#/l10n']");
  private readonly networkLink = () => this.page.locator("a[href='#/network']");
  private readonly storageLink = () => this.page.locator("a[href='#/storage']");
  private readonly softwareLink = () => this.page.locator("a[href='#/software']");
  private readonly usersLink = () => this.page.locator("a[href='#/users']");

  readonly installButton = () =>
    this.page.locator('::-p-aria([name="Install now"][role="button"])');

  private readonly overviewHeading = () =>
    this.page.locator('::-p-aria([name="System Information"][role="heading"])');

  constructor(page: Page) {
    this.page = page;
  }

  async waitVisible(timeout: number) {
    await this.overviewHeading().setTimeout(timeout).wait();
  }

  async install() {
    await this.installButton().click();
  }

  async goToHostname() {
    await this.hostnameLink().click();
  }

  async goToLocalization() {
    await this.localizationLink().click();
  }

  async goToNetwork() {
    await this.networkLink().click();
  }

  async goToStorage() {
    await this.storageLink().click();
  }

  async goToSoftware() {
    await this.softwareLink().click();
  }

  async goToUsers() {
    await this.usersLink().click();
  }
}

function RegistrationNavigable<TBase extends GConstructor<OverviewPage>>(Base: TBase) {
  return class extends Base {
    private readonly registrationLink = () => this.page.locator("a[href='#/registration']");

    async goToRegistration() {
      await this.registrationLink().click();
    }
  };
}

export class OverviewWithRegistrationPage extends RegistrationNavigable(OverviewPage) {}
