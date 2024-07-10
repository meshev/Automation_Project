import { type Locator, type Page, expect } from "@playwright/test";

export default class MyAccountPage {
  private readonly successMsgLocator: Locator
  private readonly userNameLocator: Locator

  constructor(private page: Page) {
    this.successMsgLocator = page.locator(".success")
    this.userNameLocator = page.locator(".logged-in:visible")
  }

  async verifyNavigatedToMyAccountPage(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async verifySuccesfulAccCreatedMsg(SuccessMsg: string) {
    await expect(this.successMsgLocator).toHaveText(SuccessMsg);
  }

  async verifyUserNameIsVisible(firstname: string, lastname: string) {
    await expect(this.userNameLocator).toHaveText("Welcome," + " " + firstname + " " + lastname + "!");
  }
}
