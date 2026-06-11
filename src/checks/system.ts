import { it, page } from "../lib/helpers";
import { OverviewPage } from "../pages/overview_page";
import { HostnamePage } from "../pages/hostname_page";
import { SystemPage } from "../pages/system_page";
import { SidebarPage } from "../pages/sidebar_page";
import { HeaderPage } from "../pages/header_page";

export function setStaticHostname(hostname: string) {
  it("should allow setting static hostname", async function () {
    const overview = new OverviewPage(page);
    const header = new HeaderPage(page);
    const systemPage = new SystemPage(page);

    await overview.goToSystem();
    await systemPage.selectStaticMode();
    await systemPage.fill(hostname);
    await systemPage.accept();
    await header.goToInstallation();
  });
}

export function setPermanentHostnameWithSidebar(hostname: string) {
  it("should allow setting static hostname", async function () {
    const sidebar = new SidebarPage(page);
    const hostnamePage = new HostnamePage(page);

    await sidebar.goToHostname();
    await hostnamePage.useStaticHostname();
    await hostnamePage.fill(hostname);
    await hostnamePage.accept();
  });
}

export function configureTimeSynchronizationServers(serverAddresses: string[]) {
  it("should allow to configure the NTP servers", async function () {
    const overview = new OverviewPage(page);
    const header = new HeaderPage(page);
    const system = new SystemPage(page);

    await overview.goToSystem();
    await system.selectCustomMode();
    for (const server of serverAddresses) await system.addServerAddress(server);
    await system.accept();
    await header.goToInstallation();
  });
}
