import { parse, commaSeparatedList } from "./lib/cmdline";
import { test_init } from "./lib/helpers";

import { verifyNotImplemented, verifyNotSupported, abort } from "./checks/autoyast_unsupported";
import { logIn } from "./checks/login";

const options = parse((cmd) =>
  cmd
    .option(
      "--not-implemented <elements>",
      "comma-separated list of not implemented yet elements",
      commaSeparatedList,
    )
    .option(
      "--not-supported <elements>",
      "comma-separated list of not supported elements",
      commaSeparatedList,
    ),
);

test_init(options);
logIn(options.password);
if (options.notImplemented) verifyNotImplemented(options.notImplemented);
verifyNotSupported(options.notSupported);
abort();
