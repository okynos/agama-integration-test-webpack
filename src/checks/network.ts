import { it, page } from "../lib/helpers";
import { HeaderPage } from "../pages/header_page";
import { NetworkPage } from "../pages/network_page";
import { OverviewPage } from "../pages/overview_page";
import { SidebarPage } from "../pages/sidebar_page";

export function setOnlyInstallationNetwork() {
  it("should allow setting only installation network", async function () {
    const overview = new OverviewPage(page);
    const header = new HeaderPage(page);
    const networkPage = new NetworkPage(page);

    await overview.goToNetwork();
    await networkPage.selectWiredConnection();
    await networkPage.selectInstallationOnly();
    await header.goToOverview();
  });

  it("should alert no network after installation", async function () {
    const overview = new OverviewPage(page);
    const header = new HeaderPage(page);
    const networkPage = new NetworkPage(page);

    await overview.goToNetwork();
    await networkPage.verifyWarningAlert();
    await header.goToOverview();
  });
}

export function setOnlyInstallationNetworkWithSidebar() {
  it("should allow setting only installation network", async function () {
    const sidebar = new SidebarPage(page);
    const networkPage = new NetworkPage(page);

    await sidebar.goToNetwork();
    await networkPage.selectWiredConnection();
    await networkPage.selectInstallationOnly();
  });

  it("should alert no network after installation", async function () {
    const sidebar = new SidebarPage(page);
    const networkPage = new NetworkPage(page);

    await sidebar.goToNetwork();
    await networkPage.verifyWarningAlert();
  });
}
