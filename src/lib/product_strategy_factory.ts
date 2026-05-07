import { DevelReleaseStrategy } from "../variants/devel_release_strategy";
import { TransientReleaseStrategy } from "../variants/transient_release_strategy";
import { StableReleaseStrategy } from "../variants/stable_release_strategy";
import { RegistrationOptions } from "../checks/registration";

export interface IProductTestStrategy {
  setPermanentHostname(hostname: string): void;
  verifyRegistrationWarniningAlerts(use_custom?: string, url?: string): void;
  enterProductRegistration({ use_custom, code, provide_code, url }: RegistrationOptions): void;
  enableEncryption(password: string): void;
  verifyEncryptionEnabled(): void;
  disableEncryption(): void;
  enterExtensionRegistrationHA(code: string): void;
  enterExtensionRegistrationPHub(): void;
  createFirstUser(password: string): void;
  editRootUser(password: string): void;
  performInstallation(): void;
  logInWithIncorrectPassword(): void;
  checkInstallation(): void;
  finishInstallation(): void;
  changeDeviceToInstallTheSystem(): void;
  verifyPasswordStrength(): void;
  prepareZfcpStorage(): void;
  prepareDasdStorage(): void;
  changePatterns(patterns: string[]): void;
  selectDesktop?(desktop: string): void;
  changeFileSystemToBtrfsWithoutSnapshotsAndAdjustToMinSize(): void;
  selectMoreDevices(): void;
  setOnlyInstallationNetwork(): void;
  verifyDecryptDestructiveActions(destructiveActions: string[]): void;
  verifyStorageOutOfSync?(): void;
  ensureLandingOnOverview(): void;
}

export class ProductStrategyFactory {
  public static create(productVersion: string, agamaVersion: string, agamaWebUiPackageVersion: string): IProductTestStrategy {
    if (productVersion === "16.1" && agamaVersion.includes("21") && agamaWebUiPackageVersion.includes("20")) {
      return new DevelReleaseStrategy();
    } else if (productVersion === "16.1" && agamaVersion.includes("20") && agamaWebUiPackageVersion.includes("19")) {
      return new TransientReleaseStrategy();
    }
    return new StableReleaseStrategy();
  }
}
