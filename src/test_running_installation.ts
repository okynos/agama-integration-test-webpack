import { describe } from "node:test";

import { parse } from "./lib/cmdline";
import { test_init } from "./lib/helpers";

import { finishInstallation } from "./checks/installation";
import { logIn } from "./checks/login";

const options = parse();

describe("Running installation", function () {
  test_init(options);

  logIn(options.password);
  finishInstallation();
});
