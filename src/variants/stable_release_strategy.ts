import { IProductTestStrategy } from "../lib/product_strategy_factory";
import { setPermanentHostnameWithSidebar } from "../checks/hostname";
import {
  verifyRegistrationWarniningAlertsWithSidebar,
  RegistrationOptions,
  enterProductRegistrationWithSidebar,
  enterExtensionRegistrationHAWithSidebar,
} from "../checks/registration";
import {
  disableEncryptionWithSidebar,
  enableEncryptionWithSidebar,
  verifyEncryptionEnabledWithSidebar,
} from "../checks/encryption";
import { createFirstUserWithSidebar } from "../checks/first_user";
import { editRootUserWithSidebar } from "../checks/root_authentication";
import {
  finishInstallationCongratulation,
  performInstallationWithSidebar,
} from "../checks/installation";
import { logInWithIncorrectPasswordWithSidebar } from "../checks/login";

export class StableReleaseStrategy implements IProductTestStrategy {
  setPermanentHostname(hostname: string) {
    setPermanentHostnameWithSidebar(hostname);
  }

  verifyRegistrationWarniningAlerts(use_custom?: string, url?: string) {
    verifyRegistrationWarniningAlertsWithSidebar(use_custom, url);
  }

  enterProductRegistration({ use_custom, code, provide_code, url }: RegistrationOptions): void {
    enterProductRegistrationWithSidebar({ use_custom, code, provide_code, url });
  }

  enableEncryption(password: string) {
    enableEncryptionWithSidebar(password);
  }

  verifyEncryptionEnabled() {
    verifyEncryptionEnabledWithSidebar();
  }

  disableEncryption() {
    disableEncryptionWithSidebar();
  }

  enterExtensionRegistrationHA(code: string) {
    enterExtensionRegistrationHAWithSidebar(code);
  }

  createFirstUser(password: string) {
    createFirstUserWithSidebar(password);
  }

  editRootUser(password: string) {
    editRootUserWithSidebar(password);
  }

  performInstallation() {
    performInstallationWithSidebar();
  }

  logInWithIncorrectPassword() {
    logInWithIncorrectPasswordWithSidebar();
  }

  finishInstallation() {
    finishInstallationCongratulation();
  }
}
