import { test } from "../fixtures/base";

test("loginValidUser", async ({ page, homePage, loginPage }) => {
  await page.goto("/");
  await homePage.clickSignInLink();
  await loginPage.verifySignInPageTitle();
  await loginPage.fillValidUserCredentials();
  await loginPage.clickSignInBtn();
  await page.waitForTimeout(1000);
  await homePage.verifyNavigatedToHomePage();
  await homePage.verifyLoggedInUserInHomePage();
});

test("loginInValidUser", async ({ page, homePage, loginPage }) => {
  await page.goto("/");
  await homePage.clickSignInLink();
  await loginPage.verifySignInPageTitle();
  await loginPage.fillInValidUserCredentials();
  await loginPage.clickSignInBtn();
  await loginPage.verifyErrorMsgForInValidUser();
});

test("loginLogoutFlow", async ({ page, homePage, loginPage }) => {
  await page.goto("/");
  await homePage.clickSignInLink();
  await loginPage.verifySignInPageTitle();
  await loginPage.fillValidUserCredentials();
  await loginPage.clickSignInBtn();
  await page.waitForTimeout(1000);
  await homePage.verifyNavigatedToHomePage();
  await homePage.verifyLoggedInUserInHomePage();
  await homePage.clickDropDownArrow();
  await homePage.clickSignOutLink();
  await homePage.verifyNavigatedToSignOutPage();
  await page.waitForTimeout(5000);
  await homePage.verifyNavigatedToHomePage();
});

test("ValidateForgotYourPassword?", async ({ page, homePage, loginPage }) => {
  await page.goto("/");
  await homePage.clickSignInLink();
  await loginPage.verifyForgotYourPasswordLinkIsVisible();
  await loginPage.clickForgotYourPasswordLink();
  await loginPage.verifyNavigatedToForgotYourPasswordPage();
  await loginPage.fillEmailForResetPassword();
  await loginPage.clickResetMyPasswordBtn();
  await loginPage.verifySuccesMsgResetPassword();
});

test("loginUserInChecckoutPage", async ({
  page,
  homePage,
  productPage,
  cartPage,
  checkoutPage,
}) => {
  await page.goto("/");
  await homePage.clickFirstProductLink();
  await productPage.verifyFirstProductDetailPage();
  await productPage.selectRequiredItems();
  await productPage.clickAddToCartBtn();
  await productPage.verifySuccessMsgAddToCart();
  await productPage.verifyCartNumber();
  await productPage.clickCartIcon();
  await cartPage.verifyProceedToCheckoutBtn();
  await cartPage.clickProceedToCheckoutBtn();
  await checkoutPage.verifyCheckoutPageTitle();
  await checkoutPage.verifySignInBtn();
  await checkoutPage.clickSignInBtn();
  await checkoutPage.verifyLoginPopUP();
  await checkoutPage.fillLoginDetails();
  await checkoutPage.clickSignInButton();
});
