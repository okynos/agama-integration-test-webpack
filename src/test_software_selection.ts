import { parse, commaSeparatedList } from "./lib/cmdline";
import { test_init } from "./lib/helpers";
import { Option } from "commander";

import { logIn } from "./checks/login";
import { selectPatterns } from "./checks/software_selection";
import { prepareDasdStorage } from "./checks/storage_dasd";
import { performInstallation, finishInstallation } from "./checks/installation";

const options = parse((cmd) =>
  cmd
    .option("--patterns <pattern>...", "comma-separated list of patterns", commaSeparatedList)
    .option("--install", "Proceed to install the system (the default is not to install it)")
    .addOption(
      new Option(
        "--prepare-advanced-storage <storage-type>",
        "Prepare advance storage for installation",
      ).choices(["dasd", "zfcp"]),
    ),
);

test_init(options);
logIn(options.password);
if (options.patterns) selectPatterns(options.patterns);
if (options.prepareAdvancedStorage === "dasd") prepareDasdStorage();
if (options.install) {
  performInstallation();
  finishInstallation();
}
