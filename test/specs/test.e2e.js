import { browser, expect, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js';



describe('My inventory page application', () => {
    it('should open menu successfully', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        //await InventoryPage.openHamburger(); 
    })
})

// describe('My inventory', () => {
//         it('should close successfully', async () => {
//         await InventoryPage.closeHamburger();
//     })
// })

describe('Open Cart', () => {
        it('should open Cart  successfully', async () => {
            
            await InventoryPage.openCart();
    })
})
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
