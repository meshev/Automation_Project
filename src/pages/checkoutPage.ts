import { expect, Page } from "@playwright/test";

export default class CheckoutPage {
  private readonly signInBtnSelector = ".action-auth-toggle";
  private readonly loginPopUpSelector = ".modal-inner-wrap:visible";
  private readonly emailSelector = "#login-email";
  private readonly passwordSelector = "#login-password";
  private readonly buttonSelector = "[type='submit']:visible";

  constructor(private page: Page) {}

  async verifyCheckoutPageTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }

  async verifySignInBtn() {
    await expect(this.page.locator(this.signInBtnSelector)).toBeVisible();
  }

  async clickSignInButton() {
    await this.page
      .locator(this.buttonSelector)
      .filter({ hasText: "Sign In" })
      .click();
  }

  async verifyLoginPopUP() {
    await expect(this.page.locator(this.loginPopUpSelector)).toBeVisible();
  }

  async fillLoginDetails(email: string, password: string) {
    await this.page.locator(this.emailSelector).fill(email);
    await this.page.locator(this.passwordSelector).fill(password);
  }

  async clickSignInBtn() {
    await this.page.locator(this.signInBtnSelector).click();
  }
}
