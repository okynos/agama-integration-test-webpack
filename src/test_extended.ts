import { parse } from "./lib/cmdline";
import { test_init } from "./lib/helpers";
import { ProductStrategyFactory } from "./lib/product_strategy_factory";

import { createFirstUser } from "./checks/first_user";
import { editRootUser, verifyPasswordStrength } from "./checks/root_authentication";
import { changeDiskToInstallTheSystem } from "./checks/storage_change_disk_to_install";
import { logIn } from "./checks/login";
import { performInstallation, checkInstallation, finishInstallation } from "./checks/installation";
import { productSelection, productSelectionWithLicense } from "./checks/product_selection";
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

const testStrategy = ProductStrategyFactory.create(options.productVersion, options.agamaVersion);

testStrategy.logInWithIncorrectPassword();
logIn(options.password);
if (options.productId !== "none")
  if (options.acceptLicense) productSelectionWithLicense(options.productId);
  else productSelection(options.productId);
if (options.staticHostname) testStrategy.setPermanentHostname(options.staticHostname);
testStrategy.verifyRegistrationWarniningAlerts(
  options.useCustomRegistrationServer,
  options.registrationServerUrl,
);
if (options.registrationCode)
  testStrategy.enterProductRegistration({
    use_custom: options.useCustomRegistrationServer,
    code: options.registrationCode,
    provide_code: options.provideRegistrationCode,
  });
testStrategy.enableEncryption(options.password);
testStrategy.verifyEncryptionEnabled();
testStrategy.disableEncryption();
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
