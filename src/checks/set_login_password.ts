import { it, page, sleep } from "../lib/helpers";
import { SetARootLoginPasswordPage } from "../pages/root_password_login_page";

export function setLoginPassword(password: string) {
    it("should allow setting the first login password", async function () {
        const setARootLoginPassword = new SetARootLoginPasswordPage(page);

        await setARootLoginPassword.fillPassword(password);
        await setARootLoginPassword.confirm();
    });
}
