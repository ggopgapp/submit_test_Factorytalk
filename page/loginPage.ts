import { Page, Locator, expect } from "@playwright/test";
export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly btn_Login: Locator;
  readonly dashBoardPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = this.page.locator("//input[@placeholder='Username']");
    this.password = this.page.locator("//input[@placeholder='Password']");
    this.btn_Login = this.page.locator("//button[normalize-space()='Login']");
    this.dashBoardPage = this.page.locator(
      "[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']"
    );
  }

  async fillLogin(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.btn_Login.click();
    await this.page.pause();
  }

  async expectLogin() {
    const dashboard = this.dashBoardPage.textContent();
    expect(dashboard).toBe("Dashboard");
  }
}
