import { it, page } from "../lib/helpers";
import { OverviewPage } from "../pages/overview_page";
import { OverviewTransientPage } from "../pages/overview_transient_page";
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

export function setStaticHostnameTransient(hostname: string) {
  it("should allow setting static hostname", async function () {
    const overview = new OverviewTransientPage(page);
    const header = new HeaderPage(page);
    const hostnamePage = new HostnamePage(page);

    await overview.goToHostname();
    await hostnamePage.useStaticHostname();
    await hostnamePage.fill(hostname);
    await hostnamePage.accept();
    await header.goToInstallation();
    // prefer explicit wait over hard delay.
    await overview.ensureSystemInformationPresent();
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
