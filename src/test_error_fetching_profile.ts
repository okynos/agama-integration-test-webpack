import { parse } from "./lib/cmdline";
import { test_init } from "./lib/helpers";

import { logIn } from "./checks/login";
import { verifyErrorFetchingProfile } from "./checks/error_fetching_profile";

const options = parse((cmd) =>
  cmd.option("--install", "Proceed to install the system (the default is not to install it)"),
);

test_init(options);
logIn(options.password);
verifyErrorFetchingProfile();
