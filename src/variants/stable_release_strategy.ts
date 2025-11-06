import { IProductTestStrategy } from "../lib/product_strategy_factory";
import { verifyPasswordStrengthWithoutTabs } from "../checks/root_authentication";
import {
  enableEncryptionWithoutTabs,
  verifyEncryptionEnabledWithoutTabs,
  disableEncryptionWithoutTabs,
} from "../checks/encryption";
import { prepareZfcpStorageWithoutTabs } from "../checks/storage_zfcp";
import { verifyDecryptDestructiveActionsWithoutTabs } from "../checks/storage_result_destructive_actions_planned";

export class StableReleaseStrategy implements IProductTestStrategy {
  verifyDecryptDestructiveActions(destructiveActions: string[]) {
    verifyDecryptDestructiveActionsWithoutTabs(destructiveActions);
  }

  enableEncryption(password: string) {
    enableEncryptionWithoutTabs(password);
  }

  verifyEncryptionEnabled() {
    verifyEncryptionEnabledWithoutTabs();
  }

  disableEncryption() {
    disableEncryptionWithoutTabs();
  }

  verifyPasswordStrength() {
    verifyPasswordStrengthWithoutTabs();
  }

  prepareZfcpStorage() {
    prepareZfcpStorageWithoutTabs();
  }
}
