import { it, page, getTextContent } from "../lib/helpers";
import util from "util";
import assert from "node:assert/strict";
import { exec } from "child_process";

import { StorageOutOfSyncAlertPage } from "../pages/storage_out_of_sync_alert_page";

export function verifyStorageOutOfSync() {
  it("should verify storage out of sync popup", async function () {
    const storageOutOfSyncAlertPage = new StorageOutOfSyncAlertPage(page);
    const execPromise = util.promisify(exec);

    await execPromise("agama probe");

    assert.deepEqual(
      await getTextContent(storageOutOfSyncAlertPage.configurationOutOfSyncWarningAlert()),
      "Configuration out of sync",
    );

    await storageOutOfSyncAlertPage.reload();
  });
}
