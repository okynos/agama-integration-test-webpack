import { it, page } from "../lib/helpers";
import { HostnamePage } from "../pages/hostname_page";
import { SidebarPage } from "../pages/sidebar_page";

export function enterHostname(static_hostname: string) {
  it("should allow setting static hostname", async function () {
    const sidebar = new SidebarPage(page);
    const hostname = new HostnamePage(page);

    await sidebar.goToHostname();
    await hostname.activateStatic();
    await hostname.setHostname(static_hostname);
    await hostname.accept();
  });
}
