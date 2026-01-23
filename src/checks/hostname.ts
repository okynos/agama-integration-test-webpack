import { it, page } from "../lib/helpers";
import { OverviewPage } from "../pages/overview_page";
import { HostnamePage } from "../pages/hostname_page";
import { SidebarPage } from "../pages/sidebar_page";
import { HeaderPage } from "../pages/header_page";

export function setPermanentHostname(hostname: string) {
  it("should allow setting static hostname", async function () {
    const overview = new OverviewPage(page);
    const header = new HeaderPage(page);
    const hostnamePage = new HostnamePage(page);

    await overview.goToHostname();
    await hostnamePage.useStaticHostname();
    await hostnamePage.fill(hostname);
    await hostnamePage.accept();
    await header.goToOverview();
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
