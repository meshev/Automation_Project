import { test as base } from "@playwright/test";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productPage";
import CheckoutPage from "../pages/checkoutPage";
import CartPage from "../pages/cartPage";

type myFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  productPage: ProductPage;
  checkoutPage: CheckoutPage;
  cartPage: CartPage;
};

export const test = base.extend<myFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect } from "@playwright/test";
