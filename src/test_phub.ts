import { parse, commaSeparatedList } from "./lib/cmdline";
import { test_init } from "./lib/helpers";

import { logIn } from "./checks/login";
import { ProductStrategyFactory } from "./lib/product_strategy_factory";

const options = parse((cmd) =>
  cmd
    .option("--register-package-hub", "Registration for PackageHub")
    .option("--patterns <pattern>...", "Comma-separated list of patterns", commaSeparatedList),
);

test_init(options);

const testStrategy = ProductStrategyFactory.create(options.productVersion, options.agamaVersion);

logIn(options.password);
testStrategy.enterExtensionRegistrationPHub();
testStrategy.selectPatterns(options.patterns);
testStrategy.verifyStorageOutOfSync?.();
testStrategy.performInstallation();
testStrategy.finishInstallation();
