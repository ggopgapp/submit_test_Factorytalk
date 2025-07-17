import { Page, Locator, expect } from "@playwright/test";
export class leavePage {
  readonly page: Page;
  readonly nav_Leave: Locator;
  readonly btn_ApplyLeave: Locator;
  readonly dd_LeaveType: Locator;
  readonly opt_Selected: Locator;
  readonly btn_MyLeave: Locator;
  readonly h_MyLeave: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nav_Leave = this.page.locator(
      "//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Leave']"
    );
    this.btn_ApplyLeave = this.page.locator("//a[normalize-space()='Apply']");
    this.dd_LeaveType = this.page.locator(
      "select[name='applyleave[txtLeaveType]']"
    );
    this.btn_MyLeave = this.page.locator("//a[normalize-space()='My Leave']");
    this.h_MyLeave = this.page.locator(
      "[class='oxd-text oxd-text--h5 oxd-table-filter-title']"
    );
  }

  async assignLeave() {
    await this.nav_Leave.click();
    await this.btn_ApplyLeave.click();
    await this.dd_LeaveType.selectOption("1");
    await this.page.pause();
  }

  async myLeave() {
    await this.nav_Leave.click();
    await this.btn_MyLeave.click();
  }
}
