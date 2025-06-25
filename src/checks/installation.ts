import { it, page } from "../lib/helpers";
import { ConfirmInstallationPage } from "../pages/confirm_installation_page";
import { CongratulationPage } from "../pages/congratulation_page";
import { OverviewPage } from "../pages/overview_page";
import { SidebarPage } from "../pages/sidebar_page";

export function performInstallation() {
  it("should start installation", async function () {
    const confirmInstallation = new ConfirmInstallationPage(page);
    const overview = new OverviewPage(page);
    const sidebar = new SidebarPage(page);

    await sidebar.goToOverview();
    await overview.install();
    await confirmInstallation.continue();
  });
}
