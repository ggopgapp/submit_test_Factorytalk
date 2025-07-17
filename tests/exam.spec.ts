import { test } from "../utils/fixture";

test.beforeEach(async ({ loginPage, naviGate }) => {
  await naviGate.gotoWebsite("https://opensource-demo.orangehrmlive.com/");
  await loginPage.fillLogin("Admin", "admin123");
});

test("Login with valid user", async ({ loginPage }) => {
  await loginPage.expectLogin();
});

test("Create a new leave request successfully", async ({ leavePage }) => {
  await leavePage.assignLeave();
});

test.only("View list of leave requests", async ({ leavePage }) => {
  await leavePage.myLeave();
});