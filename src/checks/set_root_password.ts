import { it, page, sleep } from "../lib/helpers";
import { SetARootLoginPasswordPage } from "../pages/root_password_page";

export function setRootPassword(password: string) {
    it("should allow setting the first login password", async function () {
        const setARootLoginPassword = new SetARootLoginPasswordPage(page);

        await setARootLoginPassword.fillPassword(password);
        await setARootLoginPassword.confirm();
    });
}
