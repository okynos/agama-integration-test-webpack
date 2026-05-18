import {
  verifyRegistrationWarniningAlerts,
  RegistrationOptions,
  enterProductRegistration,
} from "../checks/registration";
import { changePatterns, selectADesktop } from "../checks/software";
import { TransientReleaseStrategy } from "./transient_release_strategy";

export class DevelReleaseStrategy extends TransientReleaseStrategy {
  verifyRegistrationWarniningAlerts() {
    verifyRegistrationWarniningAlerts();
  }

  enterProductRegistration({ use_custom, code, provide_code, url }: RegistrationOptions): void {
    enterProductRegistration({ use_custom, code, provide_code, url });
  }

  changePatterns(patterns: string[]) {
    changePatterns(patterns);
  }

  selectDesktop(desktop: string) {
    selectADesktop(desktop);
  }
}
