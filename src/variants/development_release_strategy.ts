import { ProductionReleaseStrategy } from "./production_release_strategy";
import { createAdministratorAccount, editRootUserLoginMethod } from "../checks/authentication";
import { setStaticHostname } from "../checks/hostname";
import { changeFileSystemToBtrfsWithoutSnapshotsAndAdjustToMinSize } from "../checks/storage_change_root_partition";
import { selectMoreDevices } from "../checks/storage_select_installation_device";
import { selectADesktop } from "../checks/software";
import { downloadLogs } from "../checks/download_logs";
export class DevelopmentReleaseStrategy extends ProductionReleaseStrategy {
  createFirstUser(password: string) {
    createAdministratorAccount(password);
  }

  editRootUser(password: string) {
    editRootUserLoginMethod(password);
  }

  setStaticHostname(hostname: string): void {
    setStaticHostname(hostname);
  }

  changeFileSystemToBtrfsWithoutSnapshotsAndAdjustToMinSize() {
    changeFileSystemToBtrfsWithoutSnapshotsAndAdjustToMinSize();
  }

  selectDesktop(desktop: string) {
    selectADesktop(desktop);
  }

  selectMoreDevices() {
    selectMoreDevices();
  }

  downloadLogs() {
    downloadLogs();
  }
}
