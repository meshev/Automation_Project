import { expect, Page } from "@playwright/test";

export default class ProductPage {
  private readonly sizeSelector = ".swatch-option.text";
  private readonly colorSelector = ".swatch-option.color";
  private readonly quantitySelector = "#qty";
  private readonly successSelector = ".success";
  private readonly cartNumberSelector = ".counter-number";
  private readonly cartIconSelector = ".showcart";

  constructor(private page: Page) {}

  async verifyFirstProductDetailPage(productName: string) {
    await expect(this.page).toHaveTitle(productName);
  }

  async selectRequiredItems(quantity: string) {
    await this.page.locator(this.sizeSelector).first().click();
    await this.page.locator(this.colorSelector).first().click();
    await this.page.locator(this.quantitySelector).fill(quantity);
  }

  async clickAddToCartBtn() {
    await this.page
      .getByRole("button")
      .filter({ hasText: "Add to Cart" })
      .click();
  }

  async verifyCartNumber(number: string) {
    await expect(this.page.locator(this.cartNumberSelector)).toHaveText(number);
  }

  async verifySuccessMsgAddToCart(successMsg: string) {
    await expect(this.page.locator(this.successSelector)).toHaveText(
      successMsg,
    );
  }

  async clickCartIcon() {
    await this.page.locator(this.cartIconSelector).click();
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
