import { ProductionReleaseStrategy } from "./production_release_strategy";
import { createAdministratorAccount, editRootUserLoginMethod } from "../checks/authentication";
export class DevelopmentReleaseStrategy extends ProductionReleaseStrategy {
  createFirstUser(password: string) {
    createAdministratorAccount(password);
  }

  editRootUser(password: string) {
    editRootUserLoginMethod(password);
  }
}
