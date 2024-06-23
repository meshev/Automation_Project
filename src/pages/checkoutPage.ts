import { expect, Page } from "@playwright/test";

export default class CheckoutPage {
  constructor(private page: Page) {}

  async verifyCheckoutPageTitle() {
    await expect(this.page).toHaveTitle("Checkout");
  }

  async verifySignInBtn() {
    await expect(this.page.locator(".action-auth-toggle")).toBeVisible();
  }

  async clickSignInButton() {
    await this.page
      .locator("[type='submit']:visible")
      .filter({ hasText: "Sign In" })
      .click();
  }

  async verifyLoginPopUP() {
    await expect(this.page.locator(".modal-inner-wrap:visible")).toBeVisible();
  }

  async fillLoginDetails() {
    await this.page.locator("#login-email").fill("rameshmtester1@gmail.com");
    await this.page.locator("#login-password").fill("Testing@123");
  }

  async clickSignInBtn() {
    await this.page.locator(".action-auth-toggle").click();
  }
}
