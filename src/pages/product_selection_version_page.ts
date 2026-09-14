import { type Page } from "puppeteer-core";
import { type GConstructor } from "../lib/helpers";

export class ProductSelectionVersionPage {
  protected readonly page: Page;
  protected readonly productText = (name: string) => this.page.locator(`::-p-text(${name})`);
  protected readonly productId = (id: string) =>
    this.page.locator("input#" + id.replaceAll(".", "\\."));

  protected readonly selectButton = (product: string, version: string) =>
    this.page.locator(
      `::-p-aria(Select ${product} SUSE Linux Enterprise Server ${version} Beta[role='button'])`,
    );

  constructor(page: Page) {
    this.page = page;
  }

  async choose(id: string) {
    (await this.productId(id).waitHandle()).scrollIntoView();
    await this.productId(id).click();
  }

  async select(product: string, version: string) {
    await this.selectButton(product, version).click();
  }
}

function LicenseAcceptable<TBase extends GConstructor<ProductSelectionVersionPage>>(Base: TBase) {
  return class extends Base {
    private readonly licenseAcceptanceCheckbox = () =>
      this.page.locator("::-p-text(I have read and)");

    private readonly licenseOpenButton = () => this.page.locator("::-p-text(license)");
    private readonly licenseCloseButton = () => this.page.locator("::-p-text(Close)");
    private readonly licenseText = () => this.page.locator("::-p-text(End User License Agreement)");

    async acceptLicense() {
      await this.licenseAcceptanceCheckbox().click();
    }

    async openLicense() {
      await this.licenseOpenButton().click();
    }

    async verifyLicense() {
      await this.licenseText().wait();
    }

    async closeLicense() {
      await this.licenseCloseButton().click();
    }

    async acceptProductLicense() {
      await this.acceptLicense();
    }
  };
}

function ModeSelectable<TBase extends GConstructor<ProductSelectionVersionPage>>(Base: TBase) {
  return class extends Base {
    protected readonly productModeButton = (productMode: string) =>
      this.page.locator(`::-p-aria([name="${productMode}"])`);

    async selectMode(productMode: string) {
      await this.productModeButton(productMode).click();
    }
  };
}

export class ProductSelectionWithLicenseAndVersionPage extends LicenseAcceptable(
  ProductSelectionVersionPage,
) {}
export class ProductSelectionWithLicenseAndModeAndVersionPage extends ModeSelectable(
  LicenseAcceptable(ProductSelectionVersionPage),
) {}
