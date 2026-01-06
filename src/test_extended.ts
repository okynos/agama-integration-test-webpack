import { parse } from "./lib/cmdline";
import { test_init } from "./lib/helpers";

import { createFirstUser } from "./checks/first_user";
import { disableEncryption, enableEncryption, verifyEncryptionEnabled } from "./checks/encryption";
import { editRootUser, verifyPasswordStrength } from "./checks/root_authentication";
import { changeDiskToInstallTheSystem } from "./checks/storage_change_disk_to_install";
import { enterProductRegistration, verifyRegistrationWarniningAlerts } from "./checks/registration";
import { logIn, logInWithIncorrectPassword } from "./checks/login";
import { performInstallation, checkInstallation, finishInstallation } from "./checks/installation";
import { productSelection, productSelectionWithLicense } from "./checks/product_selection";
import { setPermanentHostname } from "./checks/hostname";
import { prepareZfcpStorage } from "./checks/storage_zfcp";
import { downloadLogs } from "./checks/download_logs";

const options = parse((cmd) =>
  cmd
    .option("--product-id <id>", "Product id to select a product to install", "none")
    .option(
      "--accept-license",
      "Accept license for a product with license (the default is a product without license)",
    )
    .option("--registration-code <code>", "Registration code")
    .option("--use-custom-registration-server", "Enable custom registration server")
    .option("--registration-server-url <url>", "Custom registration url")
    .option("--provide-registration-code", "provide registration code for customer registration")
    .option("--staticHostname <hostname>", "Static Hostname")
    .option("--install", "Proceed to install the system (the default is not to install it)"),
);

test_init(options);

logInWithIncorrectPassword();
logIn(options.password);
if (options.productId !== "none")
  if (options.acceptLicense) productSelectionWithLicense(options.productId);
  else productSelection(options.productId);
if (options.staticHostname) setPermanentHostname(options.staticHostname);
verifyRegistrationWarniningAlerts(
  options.useCustomRegistrationServer,
  options.registrationServerUrl,
);
if (options.registrationCode)
  enterProductRegistration({
    use_custom: options.useCustomRegistrationServer,
    code: options.registrationCode,
    provide_code: options.provideRegistrationCode,
  });
enableEncryption(options.password);
verifyEncryptionEnabled();
disableEncryption();
changeDiskToInstallTheSystem();
createFirstUser(options.password);
editRootUser(options.rootPassword);
verifyPasswordStrength();
if (options.prepareAdvancedStorage === "zfcp") prepareZfcpStorage();
downloadLogs();
if (options.install) {
  performInstallation();
  checkInstallation();
  finishInstallation();
}
