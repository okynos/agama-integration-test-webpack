import { ProductionReleaseStrategy } from "./production_release_strategy";
import { createAdministratorAccount, editRootUserLoginMethod } from "../checks/authentication";
import { setStaticHostname } from "../checks/hostname";
export class DevelopmentReleaseStrategy extends ProductionReleaseStrategy {
  createFirstUser(password: string) {
    createAdministratorAccount(password);
  }

  editRootUser(password: string) {
    editRootUserLoginMethod(password);
  }

  setStaticHostname(hostname: string): void {
    setStaticHostname(hostname);
  }
}
