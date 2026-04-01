import { it, page } from "../lib/helpers";
import { HeaderPage } from "../pages/header_page";
import { NetworkPage } from "../pages/network_page";
import { NetworkWiredConnectionPage } from "../pages/network_wired_connection_page";
import { NetworkWithSidebarPage } from "../pages/network_with_sidebar_page";
import { OverviewPage } from "../pages/overview_page";
import { SidebarPage } from "../pages/sidebar_page";

export function setOnlyInstallationNetwork() {
  it("should allow setting only installation network", async function () {
    const overview = new OverviewPage(page);
    const header = new HeaderPage(page);
    const networkPage = new NetworkPage(page);
    const networkWiredConnectionPage = new NetworkWiredConnectionPage(page);

    await overview.goToNetwork();
    await networkPage.selectConnectionDetails();
    await networkWiredConnectionPage.selectInstallationOnly();
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
    const networkPage = new NetworkWithSidebarPage(page);

    await sidebar.goToNetwork();
    await networkPage.selectWiredConnection();
    await networkPage.selectInstallationOnly();
  });

  it("should alert no network after installation", async function () {
    const sidebar = new SidebarPage(page);
    const networkPage = new NetworkWithSidebarPage(page);

    await sidebar.goToNetwork();
    await networkPage.verifyWarningAlert();
  });
}
