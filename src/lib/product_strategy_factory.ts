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
  public static create(agamaVersion: string): IProductTestStrategy {
    if (agamaVersion.includes("pre")) {
      return new PreReleaseStrategy();
    }
    return new StableReleaseStrategy();
  }
}
