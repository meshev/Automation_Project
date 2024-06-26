import { expect, type Locator, type Page } from "@playwright/test";

export default class ProductPage {
  private readonly sizeLocator: Locator;
  private readonly colorLocator: Locator;
  private readonly quantityLocator: Locator;
  private readonly successLocator: Locator;
  private readonly cartNumberLocator: Locator;
  private readonly cartIconLocator: Locator;
  readonly AddToCartBtn: Locator;
  readonly ProceedToCheckoutBtn: Locator;
  constructor(private page: Page) {
    this.AddToCartBtn = this.page
      .getByRole("button")
      .filter({ hasText: "Add to Cart" })
    this.ProceedToCheckoutBtn = page.getByRole("button").filter({ hasText: "Proceed to Checkout" })
    this.sizeLocator = page.locator(".swatch-option.text")
    this.colorLocator = page.locator(".swatch-option.color")
    this.quantityLocator = page.locator("#qty")
    this.cartNumberLocator = page.locator(".counter-number")
    this.successLocator = page.locator(".success")
    this.cartIconLocator = page.locator(".showcart")
  }

  async verifyFirstProductDetailPage(productName: string) {
    await expect(this.page).toHaveTitle(productName);
  }

  async selectRequiredItems(quantity: string) {
    await this.sizeLocator.first().click();
    await this.colorLocator.first().click();
    await this.quantityLocator.fill(quantity);
  }

  async clickAddToCartBtn() {
    await this.AddToCartBtn
      .click();
  }

  async verifyCartNumber(number: string) {
    await expect(this.cartNumberLocator).toHaveText(number);
  }

  async verifySuccessMsgAddToCart(successMsg: string) {
    await expect(this.successLocator).toHaveText(
      successMsg,
    );
  }

  async clickCartIcon() {
    await this.cartIconLocator.click();
  }

  async verifyProceedToCheckoutBtnIsSeen() {
    await expect(
      this.ProceedToCheckoutBtn
    ).toBeVisible();
  }

  async clickProceedToCheckoutBtn() {
    await this.ProceedToCheckoutBtn
      .click();
  }
}
