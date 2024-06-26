import {
  loginInValidUser,
  loginLogoutFlow,
  loginUserInChecckoutPage,
  loginValidUser,
  validateForgotYourPassword,
} from "../data/data.json";
import { test } from "../fixtures/custom-fixtures";

test.describe("User Authentication", async () => {

  test("loginValidUser", async ({ page, homePage, loginPage }) => {

    await page.goto(loginValidUser[0].url);
    await homePage.clickSignInLink();
    await loginPage.verifySignInPageTitle(loginValidUser[0].title);
    await loginPage.fillUserCredentials(
      loginValidUser[0].email,
      loginValidUser[0].password,
    );
    await loginPage.clickSignInBtn();
    await page.waitForTimeout(1000);
    await homePage.verifyNavigatedToHomePage(loginValidUser[0].url);
    await homePage.verifyLoggedInUserInHomePage();
  });

  test("loginInValidUser", async ({ page, homePage, loginPage }) => {

    await page.goto(loginInValidUser[0].url);
    await homePage.clickSignInLink();
    await loginPage.verifySignInPageTitle(loginInValidUser[0].title);
    await loginPage.fillUserCredentials(
      loginInValidUser[0].email,
      loginInValidUser[0].password,
    );
    await loginPage.clickSignInBtn();
    await loginPage.verifyErrorMsgForInValidUser(loginInValidUser[0].errorMsg);
  });

  test("loginLogoutFlow", async ({ page, homePage, loginPage }) => {

    await page.goto(loginLogoutFlow[0].url);
    await homePage.clickSignInLink();
    await loginPage.verifySignInPageTitle(loginLogoutFlow[0].title);
    await loginPage.fillUserCredentials(
      loginLogoutFlow[0].email,
      loginLogoutFlow[0].password,
    );
    await loginPage.clickSignInBtn();
    await page.waitForTimeout(1000);
    await homePage.verifyNavigatedToHomePage(loginLogoutFlow[0].url);
    await homePage.verifyLoggedInUserInHomePage();
    await homePage.clickDropDownArrow();
    await homePage.clickSignOutLink();
    await homePage.verifyNavigatedToSignOutPage(loginLogoutFlow[0].logOurUrl);
    await page.waitForTimeout(5000);
    await homePage.verifyNavigatedToHomePage(loginLogoutFlow[0].url);
  });

  test("validateForgotYourPassword", async ({ page, homePage, loginPage }) => {

    await page.goto(validateForgotYourPassword[0].url);
    await homePage.clickSignInLink();
    await loginPage.verifyForgotYourPasswordLinkIsVisible();
    await loginPage.clickForgotYourPasswordLink();
    await loginPage.verifyNavigatedToForgotYourPasswordPage(
      validateForgotYourPassword[0].forgotPasswordUrl,
    );
    await loginPage.fillEmailForResetPassword(
      validateForgotYourPassword[0].email,
    );
    await loginPage.clickResetMyPasswordBtn();
    await loginPage.verifySuccesMsgResetPassword(
      validateForgotYourPassword[0].successMsg,
    );
  });

  test("loginUserInChecckoutPage", async ({
    page,
    homePage,
    productPage,
    cartPage,
    checkoutPage,
  }) => {

    await page.goto(loginUserInChecckoutPage[0].url);
    await homePage.clickFirstProductLink();
    await productPage.verifyFirstProductDetailPage(
      loginUserInChecckoutPage[0].productName,
    );
    await productPage.selectRequiredItems(loginUserInChecckoutPage[0].quantity);
    await productPage.clickAddToCartBtn();
    await productPage.verifySuccessMsgAddToCart(
      loginUserInChecckoutPage[0].successMsg,
    );
    await productPage.verifyCartNumber(loginUserInChecckoutPage[0].number);
    await productPage.clickCartIcon();
    await cartPage.verifyProceedToCheckoutBtn();
    await cartPage.clickProceedToCheckoutBtn();
    await checkoutPage.verifyCheckoutPageTitle(loginUserInChecckoutPage[0].title);
    await checkoutPage.verifySignInBtn();
    await checkoutPage.clickSignInBtn();
    await checkoutPage.verifyLoginPopUP();
    await checkoutPage.fillLoginDetails(
      loginUserInChecckoutPage[0].email,
      loginUserInChecckoutPage[0].password,
    );
    await checkoutPage.clickSignInButton();
  });
});
