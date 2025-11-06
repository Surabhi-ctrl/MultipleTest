import { browser, expect, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';



describe('inventory page navigation', () => {
    it('should open inventory page successfully', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    })
})

describe('verify Reset App State functionality', () => {
        it('should clear all items from cart successfully', async () => { 
        await InventoryPage.addToCart();
        await InventoryPage.openHamburger();
        await InventoryPage.reset();
    })
})

describe('verify  Cart navigation ', () => {
        it('should open Cart  successfully', async () => {  
            await InventoryPage.openCart();
    })
})

describe('verify remove button functionality', () => {
        it('should remove item/items from cart successfully', async () => {  
            await checkoutPage.continueShopping();
            await inventoryPage.addToCart();
            await inventoryPage.addToCart2();
            await InventoryPage.openCart();
            await checkoutPage.remove();
            await checkoutPage.continueShopping();
    })
})

describe('click remove button', () => {
        it('should remove last item from cart successfully', async () => {  
            await inventoryPage.remove2 ();
            
    })
})

describe('Open All Items', () => {
        it('should show all products successfully', async () => {  
            await InventoryPage.openHamburger();
            await InventoryPage.allItems();
    })
})

describe('continue shopping button navigation', () => {
        it('should navigate to inventory page successfully', async () => {  
            await InventoryPage.openCart();
            await checkoutPage.continueShopping();
    })
})



describe('click on checkout button', () => {
        it('should open your information page successfully', async () => {  
            await InventoryPage.addToCart();
            await InventoryPage.openCart();
            await inventoryPage.checkout();

    })
})

describe('verify checkout page elements', () => {
        it('should verify the presesnce of header and footer on the your information page ', async () => {  
            await checkoutPage.yourInformation();
            

    })
})





describe('Open checkout page successfully', () => {
        it('Open checkout page successfully successfully', async () => {  
            await inventoryPage.openCart();
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
