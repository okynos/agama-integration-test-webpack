import { parse } from "./lib/cmdline";
import { test_init } from "./lib/helpers";
import { ProductStrategyFactory } from "./lib/product_strategy_factory";

import { logIn } from "./checks/login";
import { performInstallation, finishInstallation } from "./checks/installation";
import { selectMoreDevices } from "./checks/storage_select_installation_device";

const options = parse((cmd) =>
  cmd.option("--install", "Proceed to install the system (the default is not to install it)"),
);

const testStrategy = ProductStrategyFactory.create(options.agamaVersion);

test_init(options);
logIn(options.password);
selectMoreDevices();
testStrategy.enableEncryption(options.password);
if (options.install) {
  performInstallation();
  finishInstallation();
}
