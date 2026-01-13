import { it, page, getTextContent } from "../lib/helpers";
import { CongratulationPage } from "../pages/congratulation_page";
import { OverviewPage } from "../pages/overview_page";
import { SidebarPage } from "../pages/sidebar_page";
import assert from "node:assert/strict";
import { StartInstallationPage } from "../pages/start_installation_page";
import { SpinnerPage } from "../pages/spinner_page";

export function performInstallation() {
  it("should start installation", async function () {
    const overview = new OverviewPage(page);
    const installation = new StartInstallationPage(page);
    const sidebar = new SidebarPage(page);

    await sidebar.goToOverview();
    await overview.install();
    await installation.startInstallation();
  });
}

export function checkInstallation() {
  it("should check installation progress", async function () {
    const installation = new StartInstallationPage(page);
    const spinner = new SpinnerPage(page);

    spinner.spinnerProgressBar().click();

    assert.deepEqual(
      await getTextContent(installation.installSoftwareText()),
      "Install software (step 2 of 3)",
    );

    assert.deepEqual(
      await getTextContent(installation.configureTheSystemText()),
      "Configure the system (step 3 of 3)",
    );
  });
}

export function finishInstallation() {
  it(
    "should finish installation",
    async function () {
      const congratulation = new CongratulationPage(page);
      await congratulation.wait(20 * 60 * 1000);
    },
    21 * 60 * 1000,
  );
}
