import { expect, Page } from "@playwright/test";

export default class HomePage {
  readonly FirstProduct = this.page
    .locator(".product-item-name")
    .first()
    .textContent();
  constructor(private page: Page) {}

  async navigateToUrl() {
    await this.page.goto("/");
  }

  async clickSignInLink() {
    await this.page.getByRole("link").getByText("Sign In").click();
  }

  async verifyLoggedInUserInHomePage() {
    await expect(
      this.page.getByRole("banner").getByText("Welcome, Ramesh Murugan!"),
    ).toBeVisible();
  }

  async verifyNavigatedToHomePage() {
    await expect(this.page).toHaveURL(
      "https://magento.softwaretestingboard.com/",
    );
  }

  async clickDropDownArrow() {
    await this.page
      .getByRole("button")
      .locator("[data-action='customer-menu-toggle']:visible")
      .click();
  }

  async clickSignOutLink() {
    await this.page.getByRole("link").filter({ hasText: "Sign Out" }).click();
  }

  async verifyNavigatedToSignOutPage() {
    await expect(this.page).toHaveURL(
      "https://magento.softwaretestingboard.com/customer/account/logoutSuccess/",
    );
  }

  async clickFirstProductLink() {
    await this.page.locator(".product-item-photo").first().click();
  }
}
