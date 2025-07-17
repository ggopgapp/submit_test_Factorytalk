import { test as base } from "@playwright/test";
import { LoginPage } from "../page/loginPage";
import { Navigates } from "../page/navigate";
import { leavePage } from "../page/leavePage";
// import { MybookingPage } from '../page/mybookingPage';
// import { BookingPage } from '../page/bookingPage';

type MyFixtures = {
  loginPage: LoginPage;
  naviGate: Navigates;
  leavePage: leavePage;
  //   bookingPage: BookingPage
  //   mybookingPage: MybookingPage
};
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const LOGINPAGE = new LoginPage(page);
    await use(LOGINPAGE);
  },

  naviGate: async ({ page }, use) => {
    const NAVIGATE = new Navigates(page);
    await use(NAVIGATE);
  },

  leavePage: async ({ page }, use) => {
    const LEAVEPAGE = new leavePage(page);
    await use(LEAVEPAGE);
  },
  //   homePage: async ({ page }, use) => {
  //     const homePage = new HomePage(page);
  //     await use(homePage);
  //   },
  //   bookingPage: async ({ page }, use) => {
  //     const bookingPage = new BookingPage(page);
  //     await use(bookingPage);
  //   },
  //   mybookingPage: async ({ page }, use) => {
  //     const mybookingPage = new MybookingPage(page);
  //     await use(mybookingPage);
  //   },
});
