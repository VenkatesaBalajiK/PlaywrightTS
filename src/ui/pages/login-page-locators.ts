import { Page } from "@playwright/test";
import { YamlLocatorUtility } from "@utils/playwright-utils/yaml-locator-utility";

export class LoginPageLocators {
    private readonly loginLocators: YamlLocatorUtility;

    constructor() {
        this.loginLocators = new YamlLocatorUtility('./src/ui/locators/login.yaml')
    }

    public getUserIdTextBox() {
        return this.loginLocators.getElements('LoginLocators').user_id_input
    }

    public getPasswordTextBox() {
        return this.loginLocators.getElements('LoginLocators').password_input
    }

    public getLoginButton() {
        return this.loginLocators.getElements('LoginLocators').login_button
    }
}
