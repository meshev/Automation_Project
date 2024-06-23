import { expect, Page } from "@playwright/test";

export default class ProductPage {
  constructor(private page: Page) {}

  async verifyFirstProductDetailPage() {
    await expect(this.page).toHaveTitle("Radiant Tee");
  }

  async selectRequiredItems() {
    await this.page.locator(".swatch-option.text").first().click();
    await this.page.locator(".swatch-option.color").first().click();
    await this.page.locator("#qty").fill("1");
  }

  async clickAddToCartBtn() {
    await this.page
      .getByRole("button")
      .filter({ hasText: "Add to Cart" })
      .click();
  }

  async verifyCartNumber() {
    await expect(this.page.locator(".counter-number")).toHaveText("1");
  }

  async verifySuccessMsgAddToCart() {
    await expect(this.page.locator(".success")).toHaveText(
      "You added Radiant Tee to your shopping cart.",
    );
  }

  async clickCartIcon() {
    await this.page.locator(".showcart").click();
  }

  async verifyProceedToCheckoutBtnIsSeen() {
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
