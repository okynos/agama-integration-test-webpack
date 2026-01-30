import { parse, commaSeparatedList } from "./lib/cmdline";
import { test_init } from "./lib/helpers";

import { logIn } from "./checks/login";
import { ProductStrategyFactory } from "./lib/product_strategy_factory";
import { verifyStorageOutOfSync } from "./checks/storage_out_of_sync";

const options = parse((cmd) =>
  cmd
    .option("--register-package-hub", "Registration for PackageHub")
    .option("--patterns <pattern>...", "comma-separated list of patterns", commaSeparatedList),
);

test_init(options);

const testStrategy = ProductStrategyFactory.create(options.productVersion, options.agamaVersion);

logIn(options.password);
testStrategy.enterExtensionRegistrationPHub();
testStrategy.selectPatterns(options.patterns);
verifyStorageOutOfSync();
testStrategy.performInstallation();
testStrategy.finishInstallation();
