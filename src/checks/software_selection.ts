import { it, page } from "../lib/helpers";
import { HeaderPage } from "../pages/header_page";
import { OverviewPage } from "../pages/overview_page";
import { SidebarPage } from "../pages/sidebar_page";
import { SoftwarePage } from "../pages/software_page";
import { SoftwareWithSidebarPage } from "../pages/software_with_sidebar_page";
import { SoftwareSelectionPage } from "../pages/software_selection_page";
import { SoftwareSelectionWithoutOverlayPage } from "../pages/software_selection_without_overlay_page";

export function selectPatterns(patterns: string[]) {
  it(`should select patterns ${patterns.join(", ")}`, async function () {
    const overview = new OverviewPage(page);
    const header = new HeaderPage(page);
    const software = new SoftwarePage(page);
    const softwareSelection = new SoftwareSelectionPage(page);

    await overview.goToSoftware();
    await software.changePatterns();

    for (const pattern of patterns) await softwareSelection.selectPattern(pattern);
    header.goToOverview();
  });
}

export function selectPatternsWithSidebar(patterns: string[]) {
  it(`should select patterns ${patterns.join(", ")}`, async function () {
    const sidebar = new SidebarPage(page);
    const software = new SoftwareWithSidebarPage(page);
    const softwareSelection = new SoftwareSelectionWithoutOverlayPage(page);

    await sidebar.goToSoftware();
    await software.changeSelection();

    for (const pattern of patterns) await softwareSelection.selectPattern(pattern);
    await softwareSelection.close();
  });
}
