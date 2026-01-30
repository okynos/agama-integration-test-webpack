import { parse } from "./lib/cmdline";
import { test_init } from "./lib/helpers";

import { logIn } from "./checks/login";
import { ProductStrategyFactory } from "./lib/product_strategy_factory";

const options = parse((cmd) =>
  cmd
    .option("--use-custom-registration-server", "Enable custom registration server")
    .option("--registration-server-url <url>", "Custom registration url")
    .option("--registration-code <code>", "Custom registration code")
    .option("--install", "Proceed to install the system (the default is not to install it"),
);

test_init(options);

const testStrategy = ProductStrategyFactory.create(options.productVersion, options.agamaVersion);

logIn(options.password);
testStrategy.enterProductRegistration({
  use_custom: options.useCustomRegistrationServer,
  url: options.registrationServerUrl,
  code: options.registrationCode,
});
if (options.install) {
  testStrategy.performInstallation();
  testStrategy.finishInstallation();
}
