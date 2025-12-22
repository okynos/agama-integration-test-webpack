import { ProductReleaseStrategy } from "../variants/product_release_strategy";

export interface IProductTestStrategy {
  verifyDecryptDestructiveActions(destructiveActions: string[]): void;
  enableEncryption(password: string): void;
  verifyEncryptionEnabled(): void;
  disableEncryption(): void;
  verifyPasswordStrength(): void;
  prepareZfcpStorage(): void;
}

export class ProductStrategyFactory {
  public static create(productVersion: string): IProductTestStrategy {
    if (productVersion === "16.1") {
      return new ProductReleaseStrategy();
    }
  }
}
