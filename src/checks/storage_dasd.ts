import { it, page, sleep } from "../lib/helpers";
import { SidebarPage } from "../pages/sidebar_page";
import { StoragePage } from "../pages/storage_page";
import { DasdPage } from "../pages/dasd_page";

export function prepareDasdStorage() {
  it("should prepare DASD storage", async function () {
    const storage = new StoragePage(page);
    const dasd = new DasdPage(page);
    const sidebar = new SidebarPage(page);

    await sidebar.goToStorage();
    await storage.manageDasd();
    await dasd.activateDevice();
    await dasd.back();
    // puppeteer goes too fast and screen is unresponsive after submit, a small delay helps
    await sleep(2000);
    await dasd.reload();
  });
}
