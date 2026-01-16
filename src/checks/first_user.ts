import { it, page, sleep } from "../lib/helpers";
import { CreateFirstUserPage } from "../pages/create_user_page";
import { UsersPage } from "../pages/users_page";
import { SidebarPage } from "../pages/sidebar_page";
import { OverviewPage } from "../pages/overview_page";
import { HeaderPage } from "../pages/header_page";

export function createFirstUser(password: string) {
  it("should create first user", async function () {
    const users = new UsersPage(page);
    const createFirstUser = new CreateFirstUserPage(page);
    const overview = new OverviewPage(page);
    const header = new HeaderPage(page);

    await overview.goToUsers();

    await users.defineAUserNow();
    await createFirstUser.fillFullName("Bernhard M. Wiedemann");
    await createFirstUser.fillUserName("bernhard");
    await createFirstUser.fillPassword(password);
    await createFirstUser.fillPasswordConfirmation(password);
    await createFirstUser.accept();
    // puppeteer goes too fast and screen is unresponsive after submit, a small delay helps
    await sleep(2000);
    await header.goToOverview();
  });
}

export function createFirstUserWithSidebar(password: string) {
  it("should create first user", async function () {
    const users = new UsersPage(page);
    const createFirstUser = new CreateFirstUserPage(page);
    const sidebar = new SidebarPage(page);

    await sidebar.goToUsers();

    await users.defineAUserNow();
    await createFirstUser.fillFullName("Bernhard M. Wiedemann");
    await createFirstUser.fillUserName("bernhard");
    await createFirstUser.fillPassword(password);
    await createFirstUser.fillPasswordConfirmation(password);
    await createFirstUser.accept();
    // puppeteer goes too fast and screen is unresponsive after submit, a small delay helps
    await sleep(2000);
  });
}
