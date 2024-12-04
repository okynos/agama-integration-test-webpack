import { type Page } from "puppeteer-core";

export class SetARootLoginPasswordPage {
    private readonly page: Page;
    private readonly passwordInput = () => this.page.locator("input[id='rootPassword']");
    private readonly confirmButton = () => this.page.locator("button[form='rootAuthMethods']");

    constructor(page: Page) {
        this.page = page;
    }

    async fillPassword(password: string) {
        await this.passwordInput().fill(password);
    }

    async confirm() {
        await this.confirmButton().click();
    }
}
