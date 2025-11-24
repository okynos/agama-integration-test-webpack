import { IProductTestStrategy } from "../lib/product_strategy_factory";
import { verifyPasswordStrength } from "../checks/root_authentication";
import { enableEncryption, verifyEncryptionEnabled, disableEncryption } from "../checks/encryption";
import { prepareZfcpStorage } from "../checks/storage_zfcp";
import { verifyDecryptDestructiveActions } from "../checks/storage_result_destructive_actions_planned";

export class ProductReleaseStrategy implements IProductTestStrategy {
  verifyDecryptDestructiveActions(destructiveActions: string[]) {
    verifyDecryptDestructiveActions(destructiveActions);
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

  verifyPasswordStrength() {
    verifyPasswordStrength();
  }

  prepareZfcpStorage() {
    prepareZfcpStorage();
  }
}
