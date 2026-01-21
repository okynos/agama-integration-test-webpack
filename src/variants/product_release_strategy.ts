import { IProductTestStrategy } from "../lib/product_strategy_factory";
import { setPermanentHostname } from "../checks/hostname";
import {
  verifyRegistrationWarniningAlerts,
  RegistrationOptions,
  enterProductRegistration,
  enterExtensionRegistrationHA,
} from "../checks/registration";
import { disableEncryption, enableEncryption, verifyEncryptionEnabled } from "../checks/encryption";
import { createFirstUser } from "../checks/first_user";
import { editRootUser } from "../checks/root_authentication";
import { performInstallation } from "../checks/installation";
import { logInWithIncorrectPassword } from "../checks/login";

export class ProductReleaseStrategy implements IProductTestStrategy {
  setPermanentHostname(hostname: string) {
    setPermanentHostname(hostname);
  }

  verifyRegistrationWarniningAlerts(use_custom?: string, url?: string) {
    verifyRegistrationWarniningAlerts(use_custom, url);
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
}
