import { expect, Page } from "@playwright/test";

export default class CartPage {
  constructor(private page: Page) {}

  async verifyProceedToCheckoutBtn() {
    await expect(
      this.page.getByRole("button").filter({ hasText: "Proceed to Checkout" }),
    ).toBeVisible();
  }

  async clickProceedToCheckoutBtn() {
    await this.page
      .getByRole("button")
      .filter({ hasText: "Proceed to Checkout" })
      .click();
  }
}
