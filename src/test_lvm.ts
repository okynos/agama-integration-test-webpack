import { parse } from "./lib/cmdline";
import { test_init } from "./lib/helpers";

import { selectMoreDevices } from "./checks/storage_select_installation_device";
import { setOnlyInstallationNetwork } from "./checks/network";
import { logIn } from "./checks/login";
import { performInstallation, finishInstallation } from "./checks/installation";

const options = parse((cmd) =>
  cmd
    .option("--install", "Proceed to install the system (the default is not to install it)")
    .option(
      "--connections-only-for-installation",
      "The connections will be used only during installation",
    ),
);

test_init(options);
logIn(options.password);
selectMoreDevices();
if (options.connectionsOnlyForInstallation) setOnlyInstallationNetwork();
if (options.install) {
  performInstallation();
  finishInstallation();
}
