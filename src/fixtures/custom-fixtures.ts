import { test as base } from '@playwright/test'
import { LoginPageSteps } from '@ui/page-steps/login-steps';

interface PageFixtures {
    loginPageSteps: LoginPageSteps
}

export const test = base.extend<PageFixtures>({
    loginPageSteps: async ({ page }, use) => {
        await use(new LoginPageSteps(page));
    }
});

export { expect } from "@playwright/test";