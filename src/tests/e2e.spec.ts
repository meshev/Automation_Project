import { expect, test } from '@playwright/test';

test.describe(`E2E Tests`, () => {

  test("Verify Homepage Loads Correctly", async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/")
    await page.waitForLoadState();
    await expect(page).toHaveTitle(/Home Page/)
  })

  test("Verify Logo Link", async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/")
    await page.locator(".logo").click();
    await expect(page).toHaveURL("https://magento.softwaretestingboard.com")
  })

  test("Verify Navigation Menu Links", async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/")
    await expect(page).toHaveTitle("Home Page");
    await page.locator(".nav-1").click();
    await expect(page).toHaveTitle(/What's New/);
    await page.locator(".nav-2").click();
    await expect(page).toHaveTitle(/Women/);
    await page.locator(".nav-3").click();
    await expect(page).toHaveTitle(/Men/);
    await page.locator(".nav-4").click();
    await expect(page).toHaveTitle(/Gear/);
    await page.locator(".nav-5").click();
    await expect(page).toHaveTitle(/Training/);
    await page.locator(".nav-6").click();
    await expect(page).toHaveTitle(/Sale/);
    await page.locator(".logo").click();
    await expect(page).toHaveTitle("Home Page");
  })

  test("Verify Search Functionality", async ({ page }) => {

    const product: string = 'jackets'
    await page.goto("https://magento.softwaretestingboard.com/")
    await page.locator("#search").fill(product);
    await page.keyboard.press("Enter");
    await expect(page).toHaveTitle(`Search results for: '${product}'`)
  });

  test("Verify Footer Links", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()


    await page.goto("https://magento.softwaretestingboard.com/");
    await expect(page.locator(".page-footer")).toBeVisible()
    await page.getByRole("link", { name: "Notes" }).click()
    const pagePromise = context.waitForEvent('page');
    const newPage = await pagePromise;
    await expect(newPage).toHaveURL("https://softwaretestingboard.com/magento-store-notes/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=notes_promotion");
    await newPage.close();
    await page.close()
  });

  test("Verify Newsletter Subscription", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://magento.softwaretestingboard.com/");
    const subscribeLink = page.getByRole('link', { name: "Subscribe" })
    await expect(subscribeLink).toBeVisible();
    await subscribeLink.click();
    const pagePromise = context.waitForEvent('page');
    const newPage = await pagePromise;
    await expect(newPage).toHaveURL("https://softwaretestingboard.com/subscribe/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=email_subscribe");
    await newPage.locator("#mce-EMAIL").fill("rameshmtester@gmaikl.com");
    await newPage.locator("#mce-FNAME").fill("Ramesh");
    await newPage.locator("#mce-LNAME").fill("Murugan");
    await newPage.locator("#mce-COMPANY").fill("TeamR");
    await newPage.locator("#mce-POSITION").fill("Skipper");
    await newPage.click("#mc-embedded-subscribe");
    const newPage2 = await pagePromise;
    await expect(newPage2).toHaveURL("https://softwaretestingboard.com/subscribe/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=email_subscribe")

    await newPage.close();
    await page.close()
    //await expect(newPage2.getByText(/We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you./)).toBeVisible();
    //await expect(newPage2.locator("#mce-success-response")).toBeVisible()
    //await expect(newPage2.locator("#mce-success-response")).toContainText("Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you.")
  });


})
