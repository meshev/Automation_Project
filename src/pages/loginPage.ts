import { expect, type Locator, Page } from "@playwright/test";

export default class LoginPage {
  private readonly emailLocator: Locator;
  private readonly emailNewUserLocator: Locator;
  private readonly passwordLocator: Locator;
  private readonly resetPasswordEmailLocator: Locator;
  private readonly errorLocator: Locator;
  private readonly signInBtnLocator: Locator;
  private readonly successLocator: Locator;
  private readonly resetPasswordBtnLocator: Locator;
  private readonly forgotYourPasswordLinkLocator: Locator;
  private readonly passwordNewUserLocator: Locator
  private readonly confirmpasswordNewUserLocator: Locator
  private readonly firstNameLocator: Locator
  private readonly lastNameLocator: Locator
  private readonly createAccountBtnLocator: Locator

  constructor(private page: Page) {
    this.emailNewUserLocator = page.locator("#email_address")
    this.passwordNewUserLocator = page.locator("#password")
    this.confirmpasswordNewUserLocator = page.locator("#password-confirmation")
    this.firstNameLocator = page.locator("#firstname")
    this.lastNameLocator = page.locator("#lastname")
    this.emailLocator = page.locator("#email")
    this.passwordLocator = page.locator("#pass")
    this.errorLocator = page.locator(".error")
    this.signInBtnLocator = page.locator("[type='submit']").getByText("Sign In")
    this.successLocator = page.locator(".success")
    this.resetPasswordBtnLocator = page
      .getByRole("button")
      .filter({ hasText: "Reset My Password" })
    this.forgotYourPasswordLinkLocator = page
      .getByRole("link")
      .filter({ hasText: "Forgot Your Password?" })
    this.resetPasswordEmailLocator = page.locator("#email_address")
    this.createAccountBtnLocator = page.getByRole("button").getByText("Create an Account")
  }

  async verifySignInPageTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }

  async fillUserCredentials(email: string, password: string) {
    await this.emailLocator.fill(email);
    await this.passwordLocator.fill(password);
  }

  async clickSignInBtn() {
    await this.signInBtnLocator.click();
  }

  async verifyErrorMsgForInValidUser(errorMsg: string) {
    await expect(this.errorLocator).toHaveText(errorMsg);
  }

  async verifyForgotYourPasswordLinkIsVisible() {
    await expect(
      this.forgotYourPasswordLinkLocator,
    ).toBeVisible();
  }

  async clickForgotYourPasswordLink() {
    await this.forgotYourPasswordLinkLocator
      .click();
  }

  async verifyNavigatedToForgotYourPasswordPage(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async fillEmailForResetPassword(email: string) {
    await this.resetPasswordEmailLocator.fill(email);
  }

  async clickResetMyPasswordBtn() {
    await this.resetPasswordBtnLocator
      .click();
  }

  async verifySuccesMsgResetPassword(successMsg: string) {
    await expect(this.successLocator).toHaveText(successMsg);
  }

  async verifyNewUserPageTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }

  async fillNewUserDetails(firstname: string, lastname: string, email: string, password: string) {
    await this.firstNameLocator.fill(firstname)
    await this.lastNameLocator.fill(lastname)
    await this.emailNewUserLocator.fill(email);
    await this.passwordNewUserLocator.fill(password);
    await this.confirmpasswordNewUserLocator.fill(password);
  }
  async clickCreateAccountBtn() {
    await this.createAccountBtnLocator.click();
  }
}
