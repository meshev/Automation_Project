import { expect, type Locator, type Page } from "@playwright/test";

export default class CartPage {
  private readonly proceedToCheckoutBtnLocator: Locator
  constructor(private page: Page) {
    this.proceedToCheckoutBtnLocator = page.getByRole("button").filter({ hasText: "Proceed to Checkout" })
  }

  async verifyProceedToCheckoutBtn() {
    await expect(
      this.proceedToCheckoutBtnLocator
    ).toBeVisible();
  }

  async clickProceedToCheckoutBtn() {
    await this.proceedToCheckoutBtnLocator
      .click();
  }
}
