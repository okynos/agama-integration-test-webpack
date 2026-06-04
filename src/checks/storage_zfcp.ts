import assert from "node:assert/strict";
import { it, page, getTextContent } from "../lib/helpers";
import { HeaderPage } from "../pages/header_page";
import { OverviewPage } from "../pages/overview_page";
import { SidebarPage } from "../pages/sidebar_page";
import { StorageSettingsPage as StorageNoDevicesFound } from "../pages/storage_settings_page";
import { StorageZfcpActivateControllersPage } from "../pages/storage_zfcp_activate_controllers_page";
import { ZfcpPage } from "../pages/zfcp_page";
import { ActivateControllersPage as StorageZfcpControllersNotActivatedPage } from "../pages/activate_controllers_page";
import { ActivateMultipathPage } from "../pages/activate_multipath_page";

export function prepareZfcpStorage() {
  it("should prepare zFCP storage", async function () {
    const storageNoDeviceFound = new StorageNoDevicesFound(page);
    const storageZfcpControllersNotActivated = new StorageZfcpControllersNotActivatedPage(page);
    const storageZfcpActivateControllers = new StorageZfcpActivateControllersPage(page);
    const header = new HeaderPage(page);
    const overview = new OverviewPage(page);
    const multipath = new ActivateMultipathPage(page);

    await overview.goToStorage();
    await storageNoDeviceFound.activateZfcpDisks();
    await storageZfcpControllersNotActivated.activateControllers();
    await storageZfcpActivateControllers.select(["0.0.fa00", "0.0.fc00"]);
    await storageZfcpActivateControllers.accept();

    const elementText = await getTextContent(multipath.multipathText());
    assert.deepEqual(
      elementText,
      "The system seems to have multipath hardware. Do you want to activate multipath?",
    );
    await multipath.activate();

    const controllersText = await getTextContent(
      storageZfcpActivateControllers.allControllersActivatedText(),
    );
    assert.deepEqual(controllersText, "All the available zFCP controllers are already activated.");
    await header.goToOverview();
  });
}

export function prepareZfcpStorageWithSidebar() {
  it(
    "should prepare zFCP storage",
    async function () {
      const storage = new StorageNoDevicesFound(page);
      const zfcp = new ZfcpPage(page);
      const sidebar = new SidebarPage(page);

      await sidebar.goToStorage();
      await storage.activateZfcpDisks();
      await zfcp.activateDevice("0.0.fa00");
      await zfcp.activateDevice("0.0.fc00");
      await zfcp.back();
      await zfcp.activateMultipath();
      // Workaround to wait for page to load, sometimes workers take more than 60 seconds to load storage
      await storage.waitForElement("::-p-text(Activate zFCP disks)", 100000);
    },
    3 * 60 * 1000,
  );
}
