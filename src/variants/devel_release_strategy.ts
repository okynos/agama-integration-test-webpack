import { ProductionReleaseStrategy } from "./production_release_strategy";
import { createAdministratorAccount } from "../checks/first_user";
import { editRootUserLoginMethod } from "../checks/root_authentication";
export class DevelReleaseStrategy extends ProductionReleaseStrategy {
  createFirstUser(password: string) {
    createAdministratorAccount(password);
  }

  editRootUser(password: string) {
    editRootUserLoginMethod(password);
  }
}
