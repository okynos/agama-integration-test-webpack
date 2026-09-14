import { it, page } from "../lib/helpers";
import {
  ProductSelectionPage,
  ProductSelectionWithLicensePage,
} from "../pages/product_selection_page";
import { ProductSelectionWithLicenseAndModeAndVersionPage } from "../pages/product_selection_version_page";

export function productSelection(productId: string) {
  it(`should allow to select product ${productId}`, async function () {
    const productSelectionPage = new ProductSelectionPage(page);
    await productSelectionPage.choose(productId);
    await productSelectionPage.select();
  });
}

export function productSelectionWithLicense(productId: string) {
  let productSelection: ProductSelectionWithLicensePage;

  it(`should allow to choose product ${productId}`, async function () {
    productSelection = new ProductSelectionWithLicensePage(page);
    await productSelection.choose(productId);
  });
  it(`should allow to review its license`, async function () {
    await productSelection.openLicense();
    await productSelection.verifyLicense();
    await productSelection.closeLicense();
  });
  it(`should allow to accept its license`, async function () {
    await productSelection.acceptProductLicense();
  });
  it(`should allow to accept selected product`, async function () {
    await productSelection.select();
  });
}

export function productSelectionWithLicenseAndModeAndVersion(
  productId: string,
  productMode: string,
  productVersion: string,
) {
  let productSelection: ProductSelectionWithLicenseAndModeAndVersionPage;

  it(`should allow to choose product ${productId}`, async function () {
    productSelection = new ProductSelectionWithLicenseAndModeAndVersionPage(page);
    await productSelection.choose(productId);
  });
  it(`should allow to select mode ${productMode}`, async function () {
    await (productSelection as ProductSelectionWithLicenseAndModeAndVersionPage).selectMode(
      productMode,
    );
  });
  it(`should allow to review its license`, async function () {
    await productSelection.openLicense();
    await productSelection.verifyLicense();
    await productSelection.closeLicense();
  });
  it(`should allow to accept its license`, async function () {
    await productSelection.acceptProductLicense();
  });
  it(`should allow to accept selected product`, async function () {
    await productSelection.select(productMode, productVersion);
  });
}
