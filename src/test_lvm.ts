import { parse } from "./lib/cmdline";
import { test_init } from "./lib/helpers";

import { logIn } from "./checks/login";
import { ProductStrategyFactory } from "./lib/product_strategy_factory";

const options = parse((cmd) =>
  cmd
    .option("--install", "Proceed to install the system (the default is not to install it)")
    .option(
      "--connections-only-for-installation",
      "The connections will be used only during installation",
    ),
);

test_init(options);

const testStrategy = ProductStrategyFactory.create(options.productVersion, options.agamaVersion);

logIn(options.password);
testStrategy.selectMoreDevices();
if (options.connectionsOnlyForInstallation) testStrategy.setOnlyInstallationNetwork();
if (options.install) {
  testStrategy.performInstallation();
  testStrategy.finishInstallation();
}
