import { browser, expect, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js';



describe('My inventory page application', () => {
    it('should open menu successfully', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    })
})

describe('Open Reset App State', () => {
        it('should clear all items from cart successfully', async () => { 
        await InventoryPage.addToCart();
        await InventoryPage.openHamburger();
        await InventoryPage.reset();
    })
})

describe('Open Cart', () => {
        it('should open Cart  successfully', async () => {  
            await InventoryPage.openCart();
    })
})

describe('Open All Items', () => {
        it('should show all products successfully', async () => {  
            await InventoryPage.openHamburger();
            await InventoryPage.allItems();
    })
})
// 

describe('Open About', () => {
        it('should open About successfully', async () => {
        await InventoryPage.openHamburger();
        await InventoryPage.openAbout();
        // await browser.pause(3000); 
        // await InventoryPage.logout();
    })
})

describe('Open Logout', () => {
        it('should open Logout successfully', async () => {
        await browser.back(); 
        await InventoryPage.openHamburger();
        await InventoryPage.logout();
    })
})
