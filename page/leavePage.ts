import { Page, Locator, expect } from "@playwright/test";
import * as func from "../utils/function";
export class leavePage {
  readonly page: Page;
  readonly nav_Leave: Locator;
  readonly btn_ApplyLeave: Locator;
  readonly dd_LeaveType: Locator;
  readonly opt_Selected: Locator;
  readonly btn_MyLeave: Locator;
  readonly h_MyLeave: Locator;
  readonly input_leaveDate: Locator;
  readonly text_comment: Locator;
  readonly btn_apply: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nav_Leave = this.page.locator(
      "//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Leave']"
    );
    this.btn_ApplyLeave = this.page.locator("//a[normalize-space()='Apply']");
    this.dd_LeaveType = this.page
      .locator("div")
      .filter({ hasText: /^-- Select --$/ })
      .nth(2);
    this.btn_MyLeave = this.page.locator("//a[normalize-space()='My Leave']");
    this.h_MyLeave = this.page.locator(
      "[class='oxd-text oxd-text--h5 oxd-table-filter-title']"
    );
    this.opt_Selected = this.page.getByText("CAN - Personal");
    this.input_leaveDate = this.page.getByPlaceholder("yyyy-dd-mm").first();
    this.text_comment = this.page.locator("textarea");
    this.btn_apply = this.page.locator("//button[normalize-space()='Apply']");
  }

  async assignLeave() {
    const randomDate = func.getRandomDateString(
      new Date("2025-08-01"),
      new Date("2025-08-31")
    );
    await this.nav_Leave.click();
    await this.btn_ApplyLeave.click();
    await this.dd_LeaveType.click();
    await this.opt_Selected.click();
    await this.input_leaveDate.fill(randomDate);
    await this.text_comment.click();
    await this.text_comment.fill(func.getRandomText(10));
    await this.btn_apply.click({ force: true });
  }

  async myLeave() {
    await this.nav_Leave.click();
    await this.btn_MyLeave.click();
  }
}
