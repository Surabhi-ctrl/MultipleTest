import { browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';



before(async function () {
    await browser.maximizeWindow();
});

describe('Login Page', () => {
    it('should open inventory page successfully', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    })
});

describe('verify  Cart navigation ', () => {
    it('should open Cart  successfully', async () => {
        await InventoryPage.openCart();
    })
});

describe('verify remove button functionality', () => {
    it('should remove item/items from cart successfully', async () => {
        await checkoutPage.continueShopping();
        await InventoryPage.addToCart();
        await InventoryPage.addToCart2();
        await InventoryPage.openCart();
        await checkoutPage.remove();
        await checkoutPage.continueShopping();
    })
});

describe('click remove button', () => {
    it('should remove last item from cart successfully', async () => {
        await InventoryPage.remove2();

    })
});

describe('continue shopping button navigation', () => {
    it('should navigate to inventory page successfully', async () => {
        await InventoryPage.openCart();
        await checkoutPage.continueShopping();
    })
});

describe('click on checkout button', () => {
    it('should open your information page successfully', async () => {
        await InventoryPage.addToCart();
        await InventoryPage.openCart();
        await InventoryPage.checkout();

    })
});

describe('verify checkout page elements', () => {
    it('should verify the presesnce of header and footer on the your information page ', async () => {
        await checkoutPage.yourInformation();
    })
});

describe('Open checkout page successfully', () => {
    it('Open checkout page successfully successfully', async () => {
        await InventoryPage.openCart();
    })
});

after(async function () {
    await InventoryPage.openHamburger();
    await InventoryPage.logout();
});
