import { IProductTestStrategy } from "../lib/product_strategy_factory";
import { setPermanentHostname } from "../checks/hostname";
import {
  RegistrationOptions,
  enterExtensionRegistrationHA,
  enterExtensionRegistrationPHub,
  enterProductRegistration,
  verifyRegistrationWarniningAlerts,
} from "../checks/registration";
import { disableEncryption, enableEncryption, verifyEncryptionEnabled } from "../checks/encryption";
import { createFirstUser, editRootUser, verifyPasswordStrength } from "../checks/authentication";
import { checkInstallation, finishInstallation, performInstallation } from "../checks/installation";
import { logInWithIncorrectPassword } from "../checks/login";
import { changeDeviceToInstallTheSystem } from "../checks/storage_change_device_to_install";
import { prepareDasdStorage } from "../checks/storage_dasd";
import { changePatterns, selectADesktop } from "../checks/software";
import { changeFileSystemToBtrfsWithoutSnapshotsAndAdjustToMinSize } from "../checks/storage_change_root_partition";
import { prepareZfcpStorage } from "../checks/storage_zfcp";
import { ensureLandingOnOverview } from "../checks/overview";
import { selectMoreDevices } from "../checks/storage_select_installation_device";
import { setOnlyInstallationNetwork } from "../checks/network";
import { verifyDecryptDestructiveActions } from "../checks/storage_result_destructive_actions_planned";
import { verifyStorageOutOfSync } from "../checks/storage_out_of_sync";

export class ProductionReleaseStrategy implements IProductTestStrategy {
  setPermanentHostname(hostname: string) {
    setPermanentHostname(hostname);
  }

  verifyRegistrationWarniningAlerts() {
    verifyRegistrationWarniningAlerts();
  }

  enterProductRegistration({ use_custom, code, provide_code, url }: RegistrationOptions): void {
    enterProductRegistration({ use_custom, code, provide_code, url });
  }

  enableEncryption(password: string) {
    enableEncryption(password);
  }

  verifyEncryptionEnabled() {
    verifyEncryptionEnabled();
  }

  disableEncryption() {
    disableEncryption();
  }

  enterExtensionRegistrationHA(code: string) {
    enterExtensionRegistrationHA(code);
  }

  enterExtensionRegistrationPHub() {
    enterExtensionRegistrationPHub();
  }

  createFirstUser(password: string) {
    createFirstUser(password);
  }

  editRootUser(password: string) {
    editRootUser(password);
  }

  performInstallation() {
    performInstallation();
  }

  logInWithIncorrectPassword() {
    logInWithIncorrectPassword();
  }

  checkInstallation() {
    checkInstallation();
  }

  finishInstallation() {
    finishInstallation();
  }

  changeDeviceToInstallTheSystem() {
    changeDeviceToInstallTheSystem();
  }

  verifyPasswordStrength() {
    verifyPasswordStrength();
  }

  prepareZfcpStorage() {
    prepareZfcpStorage();
  }

  prepareDasdStorage() {
    prepareDasdStorage();
  }

  changePatterns(patterns: string[]) {
    changePatterns(patterns);
  }

  selectDesktop(desktop: string) {
    selectADesktop(desktop);
  }

  changeFileSystemToBtrfsWithoutSnapshotsAndAdjustToMinSize() {
    changeFileSystemToBtrfsWithoutSnapshotsAndAdjustToMinSize();
  }

  selectMoreDevices() {
    selectMoreDevices();
  }

  setOnlyInstallationNetwork() {
    setOnlyInstallationNetwork();
  }

  verifyDecryptDestructiveActions(destructiveActions: string[]) {
    verifyDecryptDestructiveActions(destructiveActions);
  }

  verifyStorageOutOfSync() {
    verifyStorageOutOfSync();
  }

  ensureLandingOnOverview() {
    ensureLandingOnOverview();
  }
}
