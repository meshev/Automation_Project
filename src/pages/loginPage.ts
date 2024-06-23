import { expect, Page } from "@playwright/test";

export default class LoginPage {
  constructor(private page: Page) {}

  async verifySignInPageTitle() {
    await expect(this.page).toHaveTitle(/Customer Login/);
  }

  async fillValidUserCredentials() {
    await this.page.locator("#email").fill("rameshmtester@gmail.com");
    await this.page.locator("#pass").fill("Testing@123");
  }

  async clickSignInBtn() {
    await this.page.locator("[type='submit']").getByText("Sign In").click();
  }

  async fillInValidUserCredentials() {
    await this.page.locator("#email").fill("rameshmurugan@gmail.com");
    await this.page.locator("#pass").fill("Testing@123");
  }

  async verifyErrorMsgForInValidUser() {
    await expect(this.page.locator(".error")).toHaveText(
      "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.",
    );
  }

  async verifyForgotYourPasswordLinkIsVisible() {
    await expect(
      this.page.getByRole("link").filter({ hasText: "Forgot Your Password?" }),
    ).toBeVisible();
  }

  async clickForgotYourPasswordLink() {
    await this.page
      .getByRole("link")
      .filter({ hasText: "Forgot Your Password?" })
      .click();
  }

  async verifyNavigatedToForgotYourPasswordPage() {
    await expect(this.page).toHaveURL(
      "https://magento.softwaretestingboard.com/customer/account/forgotpassword/",
    );
  }

  async fillEmailForResetPassword() {
    await this.page.locator("#email_address").fill("rameshmtester@gmail.com");
  }

  async clickResetMyPasswordBtn() {
    await this.page
      .getByRole("button")
      .filter({ hasText: "Reset My Password" })
      .click();
  }

  async verifySuccesMsgResetPassword() {
    await expect(this.page.locator(".success")).toHaveText(
      "If there is an account associated with rameshmtester@gmail.com you will receive an email with a link to reset your password.",
    );
  }
}
