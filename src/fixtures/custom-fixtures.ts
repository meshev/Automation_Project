import { test as base } from "@playwright/test";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import MyAccountPage from '../pages/myAccountPage';
import ProductPage from "../pages/productPage";


type myFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  productPage: ProductPage;
  checkoutPage: CheckoutPage;
  cartPage: CartPage;
  myAccountPage: MyAccountPage
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

  myAccountPage: async ({ page }, use) => {
    await use(new MyAccountPage(page));
  },

});

export { defineConfig, expect } from "@playwright/test";
