import { it, page } from "../lib/helpers";
import { SidebarPage } from "../pages/sidebar_page";
import { StorageSettingsPage } from "../pages/storage_settings_page";
import { DasdPage } from "../pages/dasd_page";
import { OverviewPage } from "../pages/overview_page";
import { HeaderPage } from "../pages/header_page";

export function prepareDasdStorage() {
  it(
    "should prepare DASD storage",
    async function () {
      const storage = new StorageSettingsPage(page);
      const dasd = new DasdPage(page);
      const overview = new OverviewPage(page);
      const header = new HeaderPage(page);

      await overview.goToStorage();
      await storage.manageDasd();
      await dasd.activateDevice();
      await dasd.formatDevice();
      await dasd.waitFormattingDevice();
      await dasd.back();
      await storage.waitForElement("::-p-text(Installation devices)", 60000);
      await header.goToOverview();
    },
    6 * 60 * 1000,
  );
}

export function prepareDasdStorageWithSidebar() {
  it(
    "should prepare DASD storage",
    async function () {
      const storage = new StorageSettingsPage(page);
      const dasd = new DasdPage(page);
      const sidebar = new SidebarPage(page);

      await sidebar.goToStorage();
      await storage.manageDasd();
      await dasd.activateDevice();
      await dasd.formatDevice();
      await dasd.waitFormattingDevice();
      await dasd.back();
      await storage.waitForElement("::-p-text(Installation devices)", 60000);
    },
    6 * 60 * 1000,
  );
}
