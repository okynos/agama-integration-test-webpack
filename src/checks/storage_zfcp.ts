import { it, page } from "../lib/helpers";
import { SidebarPage } from "../pages/sidebar_page";
import { StoragePage } from "../pages/storage_page";
import { SelectInstallationDevicePage } from "../pages/select_installation_device_page";
import { ZfcpPage } from "../pages/zfcp_page";

export function prepareZfcpStorage() {
  it("should prepare ZFCP storage", async function () {
    const storage = new StoragePage(page);
    const selectInstallationDevice = new SelectInstallationDevicePage(page);
    const zfcp = new ZfcpPage(page);
    const sidebar = new SidebarPage(page);

    await sidebar.goToStorage();
    await storage.changeInstallationDevice();
    await selectInstallationDevice.prepareZfcp();
    await zfcp.activateDevices();
    await zfcp.backToDeviceSelection();
    await zfcp.activateMultipath();
    await selectInstallationDevice.selectDevice(5);
  });
}
