import { expect, type Locator, type Page } from "@playwright/test";

export default class HomePage {
  private readonly productPhotoLocator: Locator;
  private readonly loggedInUserInHomePageLocator: Locator;
  private readonly signInLinkLocator: Locator;
  private readonly signOutLinkLocator: Locator;
  private readonly dropDownArrowLocator: Locator;
  private readonly createAccountLinkLocator: Locator;

  constructor(private page: Page) {
    this.productPhotoLocator = page.locator(".product-item-photo")
    this.loggedInUserInHomePageLocator = page.getByRole("banner").getByText("Welcome, Ramesh Murugan!")
    this.signInLinkLocator = page.getByRole("link").getByText("Sign In")
    this.signOutLinkLocator = page.getByRole("link").filter({ hasText: "Sign Out" })
    this.dropDownArrowLocator = page
      .getByRole("button")
      .locator("[data-action='customer-menu-toggle']:visible")
    this.createAccountLinkLocator = page.getByRole("link").getByText("Create an Account")
  }

  async navigateToUrl() {
    await this.page.goto("/");
  }

  async clickSignInLink() {
    await this.signInLinkLocator.click();
  }

  async clickCreateAccountLink() {
    await this.createAccountLinkLocator.click();
  }

  async verifyLoggedInUserInHomePage() {
    await expect(
      this.loggedInUserInHomePageLocator,
    ).toBeVisible();
  }

  async verifyNavigatedToHomePage(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async clickDropDownArrow() {
    await this.dropDownArrowLocator
      .click();
  }

  async clickSignOutLink() {
    await this.signOutLinkLocator.click();
  }

  async verifyNavigatedToSignOutPage(logOurUrl: string) {
    await expect(this.page).toHaveURL(logOurUrl
      ,
    );
  }

  async clickFirstProductLink() {
    await this.productPhotoLocator.first().click();
  }
}
