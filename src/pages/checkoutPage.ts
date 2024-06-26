import { expect, type Locator, type Page } from "@playwright/test";

export default class CheckoutPage {
  private readonly signInBtnLocator: Locator
  private readonly loginPopUpLocator: Locator
  private readonly emailLocator: Locator
  private readonly passwordLocator: Locator
  private readonly buttonLocator: Locator

  constructor(private page: Page) {
    this.emailLocator = page.locator("#login-email").first()
    this.passwordLocator = page.locator("#login-password")
    this.loginPopUpLocator = page.locator(".modal-inner-wrap:visible")
    this.signInBtnLocator = page.locator(".action-auth-toggle")
    this.buttonLocator = page
      .locator("[type='submit']:visible")
      .filter({ hasText: "Sign In" })
  }

  async verifyCheckoutPageTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }

  async verifySignInBtn() {
    await expect(this.signInBtnLocator).toBeVisible();
  }

  async clickSignInButton() {
    await this.buttonLocator
      .click();
  }

  async verifyLoginPopUP() {
    await expect(this.loginPopUpLocator).toBeVisible();
  }

  async fillLoginDetails(email: string, password: string) {
    await this.emailLocator.fill(email);
    await this.passwordLocator.fill(password);
  }

  async clickSignInBtn() {
    await this.signInBtnLocator.click();
  }
}
