import { browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js';


before(async function () {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await browser.maximizeWindow();
});

describe('Verify Reset App State functionality', () => {
    it('should clear all items from cart successfully', async () => {
        await InventoryPage.addToCart();
        await InventoryPage.openHamburger();
        await InventoryPage.reset();
    })
});

describe('Close Hamburger', () => {
    it('should close hamburger successfully', async () => {
        await InventoryPage.closeHamburger();
    })
});

describe('Open All Items', () => {
    it('should show all products successfully', async () => {
        await InventoryPage.openHamburger();
        await InventoryPage.allItems();
    })
});

describe('Open About', () => {
    it('should open About successfully', async () => {
        await InventoryPage.openAbout();

    })
});

describe('Open Logout', () => {
    it('should open Logout successfully', async () => {
        await browser.back();
        await InventoryPage.openHamburger();
        await InventoryPage.logout();
    })
});
