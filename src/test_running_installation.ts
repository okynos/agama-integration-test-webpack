import { describe } from "node:test";

import { parse } from "./lib/cmdline";
import { test_init } from "./lib/helpers";

import { logIn } from "./checks/login";
import { verifyActivateMultipath } from "./checks/multipath";
import { ProductStrategyFactory } from "./lib/product_strategy_factory";

const options = parse((cmd) => cmd.option("--activate-multipath", "Activate multipath"));

describe("Running installation", function () {
  test_init(options);

  const testStrategy = ProductStrategyFactory.create(options.productVersion, options.agamaVersion);

  logIn(options.password);
  if (options.activateMultipath) verifyActivateMultipath();
  testStrategy.finishInstallation();
});
