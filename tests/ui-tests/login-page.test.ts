import { test, expect } from "@fixtures/custom-fixtures";
import { Page } from "@playwright/test";

test(
    `login test`,
    { tag: "@Validlogin" },
    async ({ loginPageSteps }) => {
        await loginPageSteps.navigateToUrl('http://192.168.1.51:8081/matero/')
        await loginPageSteps.performLogin('Venkat', '123')
    },
  );