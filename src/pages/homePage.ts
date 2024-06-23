import { expect, Page } from "@playwright/test";

export default class HomePage {
  private readonly productPhotoSelector = ".product-item-photo";
  constructor(private page: Page) {}

  async navigateToUrl() {
    await this.page.goto("/");
  }

  async clickSignInLink(text: string) {
    await this.page.getByRole("link").getByText(text).click();
  }

  async verifyLoggedInUserInHomePage(greetUser: string) {
    await expect(
      this.page.getByRole("banner").getByText(greetUser),
    ).toBeVisible();
  }

  async verifyNavigatedToHomePage(url: string) {
    await expect(this.page).toHaveURL(url);
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
    await this.page.locator(this.productPhotoSelector).first().click();
  }
}
