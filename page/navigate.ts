import { Page } from "@playwright/test";
export class Navigates {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoWebsite(website: string) {
    await this.page.goto(website);
  }
}
