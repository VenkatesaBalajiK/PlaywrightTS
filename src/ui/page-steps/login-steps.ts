import { test, expect } from "@fixtures/custom-fixtures";
import { Page } from "@playwright/test";
import { LoginPageLocators } from "@ui/pages/login-page-locators";
import { YamlLocatorUtility } from "@utils/playwright-utils/yaml-locator-utility";

export class LoginPageSteps {
    private page: Page;
    private loginLocators;

    constructor(page: Page) {
        this.page = page;
        this.loginLocators = new LoginPageLocators();
    }

    async navigateToUrl(url: string) {
        await test.step('Navigate to app url', async () => {
            await this.page.goto(url);
        });
    }

    async performLogin(userId: string, passowrd: string) {
        await test.step('Logging into application', async () => {
            await this.page.locator(this.loginLocators.getUserIdTextBox()).fill(userId);
            await this.page.locator(this.loginLocators.getPasswordTextBox()).fill(passowrd);
            await this.page.locator(this.loginLocators.getLoginButton()).click();
        });
    }
}