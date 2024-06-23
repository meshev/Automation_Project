import { expect, Page } from "@playwright/test";

export default class LoginPage {
  private readonly emailSelector = "#email";
  private readonly passwordSelector = "#pass";
  private readonly buttonSelector = "[type='submit']";
  private readonly resetPasswordEmailSelector = "#email_address";

  constructor(private page: Page) {}

  async verifySignInPageTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }

  async fillUserCredentials(email: string, password: string) {
    await this.page.locator(this.emailSelector).fill(email);
    await this.page.locator(this.passwordSelector).fill(password);
  }

  async clickSignInBtn(text: string) {
    await this.page.locator(this.buttonSelector).getByText(text).click();
  }

  async verifyErrorMsgForInValidUser(errorMsg: string) {
    await expect(this.page.locator(".error")).toHaveText(errorMsg);
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

  async verifyNavigatedToForgotYourPasswordPage(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async fillEmailForResetPassword(email: string) {
    await this.page.locator(this.resetPasswordEmailSelector).fill(email);
  }

  async clickResetMyPasswordBtn() {
    await this.page
      .getByRole("button")
      .filter({ hasText: "Reset My Password" })
      .click();
  }

  async verifySuccesMsgResetPassword(successMsg: string) {
    await expect(this.page.locator(".success")).toHaveText(successMsg);
  }
}
