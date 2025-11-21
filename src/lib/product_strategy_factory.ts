import { PreReleaseStrategy } from "../variants/pre_release_strategy";
import { StableReleaseStrategy } from "../variants/stable_release_strategy";

export interface IProductTestStrategy {
  verifyDecryptDestructiveActions(destructiveActions: string[]): void;
  enableEncryption(password: string): void;
  verifyEncryptionEnabled(): void;
  disableEncryption(): void;
  verifyPasswordStrength(): void;
  prepareZfcpStorage(): void;
}

export class ProductStrategyFactory {
  public static create(productVersion: string, agamaVersion: string): IProductTestStrategy {
    const major_version = parseInt(productVersion.split('.')[0]);
    const minor_version = parseInt(productVersion.split('.')[1]);
    if (( major_version === 16 && minor_version >= 1) || agamaVersion.includes("pre")) {
      return new PreReleaseStrategy();
    }
    return new StableReleaseStrategy();
  }
}
