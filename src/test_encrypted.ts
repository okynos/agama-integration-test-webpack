import { parse } from "./lib/cmdline";
import { test_init } from "./lib/helpers";

import { enableEncryption } from "./checks/encryption";
import { logIn } from "./checks/login";
import { performInstallation, finishInstallation } from "./checks/installation";

const options = parse((cmd) =>
  cmd.option("--install", "Proceed to install the system (the default is not to install it)"),
);

test_init(options);
logIn(options.password);
enableEncryption(options.password);
if (options.install) {
  performInstallation();
  finishInstallation();
}
