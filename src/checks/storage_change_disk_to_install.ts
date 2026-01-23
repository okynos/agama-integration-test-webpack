import { it, page, getTextContent } from "../lib/helpers";
import { getElementInCell } from "../lib/table";
import { HeaderPage } from "../pages/header_page";
import { OverviewPage } from "../pages/overview_page";
import { SidebarPage } from "../pages/sidebar_page";
import { StorageSettingsChangeDiskPage } from "../pages/storage_settings_change_disk_page";
import { StorageSettingsPage } from "../pages/storage_settings_page";
import assert from "node:assert/strict";

export function changeDiskToInstallTheSystem() {
  it("should change the disk to install the system to one which fails to calculate a storage layout", async function () {
    const storage = new StorageSettingsPage(page);
    const storageSettingsChangeDisk = new StorageSettingsChangeDiskPage(page);
    const overview = new OverviewPage(page);
    const header = new HeaderPage(page);

    await overview.goToStorage();
    await storage.selectUsedDisk();
    await storage.changeTheDiskToInstallTheSystem();

    (
      await getElementInCell(
        page,
        storageSettingsChangeDisk.diskTableSelector,
        "Size",
        "5 GiB",
        "input[type='radio']",
      )
    ).click();
    await storageSettingsChangeDisk.confirm();
    assert.deepEqual(
      await getTextContent(storage.storageAllocationWarningText()),
      'It is not possible to allocate space for the boot partition and for "/" (at least 12.5 GiB) and "swap" (1 GiB - 2 GiB).',
    );

    await storage.moreOptions();
    await storage.resetToDefault();
    await header.goToOverview();
  });
}

export function changeDiskToInstallTheSystemWithSidebar() {
  it("should change the disk to install the system to one which fails to calculate a storage layout", async function () {
    const storage = new StorageSettingsPage(page);
    const storageSettingsChangeDisk = new StorageSettingsChangeDiskPage(page);
    const sidebar = new SidebarPage(page);

    await sidebar.goToStorage();
    await storage.selectUsedDisk();
    await storage.changeTheDiskToInstallTheSystem();

    (
      await getElementInCell(
        page,
        storageSettingsChangeDisk.diskTableSelector,
        "Size",
        "5 GiB",
        "input[type='radio']",
      )
    ).click();
    await storageSettingsChangeDisk.confirm();
    assert.deepEqual(
      await getTextContent(storage.storageAllocationWarningText()),
      'It is not possible to allocate space for the boot partition and for "/" (at least 12.5 GiB) and "swap" (1 GiB - 2 GiB).',
    );

    await storage.moreOptions();
    await storage.resetToDefault();
  });
}
