import { parse, commaSeparatedList } from "./lib/cmdline";
import { test_init } from "./lib/helpers";
import { Option } from "commander";

import { logIn } from "./checks/login";
import { ProductStrategyFactory } from "./lib/product_strategy_factory";

const options = parse((cmd) =>
  cmd
    .option("--patterns <pattern>...", "comma-separated list of patterns", commaSeparatedList)
    .option("--install", "Proceed to install the system (the default is not to install it)")
    .option("--btrfs-without-snapshots", "Change the file system to Btrfs without snapshots")
    .addOption(
      new Option(
        "--prepare-advanced-storage <storage-type>",
        "Prepare advance storage for installation",
      ).choices(["dasd", "zfcp"]),
    ),
);

test_init(options);

const testStrategy = ProductStrategyFactory.create(options.productVersion, options.agamaVersion);

logIn(options.password);
if (options.btrfsWithoutSnapshots)
  testStrategy.changeFileSystemToBtrfsWithoutSnapshotsAndAdjustToMinSize();
if (options.patterns) testStrategy.selectPatterns(options.patterns);
if (options.prepareAdvancedStorage === "dasd") testStrategy.prepareDasdStorage();
if (options.install) {
  testStrategy.performInstallation();
  testStrategy.finishInstallation();
}
