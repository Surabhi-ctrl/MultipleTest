import { $, browser, expect } from '@wdio/globals'
import Page from './page.js';
import loginPage from './login.page.js';
import checkoutPage from './checkout.page.js';

/**
 * Landing page specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
//selector
    get hamburgerIcon () {
        return $('#react-burger-menu-btn');
    }

    get hamburgerIconClose () {
        return $('#react-burger-cross-btn');
    }

    get OpenCartIcon () {
        return $('.shopping_cart_link'); 
    }

    get openLogout () {
        return $('#logout_sidebar_link');
    }

    get aboutOpen () {
        return $('#about_sidebar_link');
    }

    get yourCartTitle () {
        return $('.title');
    }

    get checkoutButton () {
        return $('#checkout');
    }

    get addToCartButton(){
        return $('[id="add-to-cart-sauce-labs-backpack"]');
    }

    get resetAppStateButton(){
        return $('#reset_sidebar_link');
    }

    get allItemsButton(){
        return $('#inventory_sidebar_link');
    }

    get products(){
        return $('[data-test="title"]');
    }
    get bookDemo(){
        return $('[href="https://saucelabs.com/request-demo"]');
    }

    get addToCartButton2(){
        return $('[id="add-to-cart-sauce-labs-bike-light"]');
    }
     get removeButton2(){
        return $('#remove-sauce-labs-bike-light');
    }
// function
    async openHamburger () {
        await this.hamburgerIcon.click();
        await expect(this.aboutOpen).toHaveText('About');  
    }

    async closeHamburger () {
        await this.hamburgerIconClose.click();
        await expect (loginPage.appLogo).toHaveText('Swag Labs');
    }


    async openCart () {
        await this.OpenCartIcon.click();
        await expect(this.yourCartTitle).toHaveText('Your Cart'); 
        await expect(checkoutPage.continueShoppingButton).toHaveText('Continue Shopping');
        await expect(this.checkoutButton).toHaveText('Checkout');
    }

    async openAbout () {
        await this.aboutOpen.click();
        await expect (this.bookDemo).toHaveText('Book a demo');
    }

    async logout () {
        await this.openLogout.click();
        await expect (loginPage.btnSubmit).toHaveAttribute('value','Login');
        await expect (loginPage.btnSubmit).toBeDisplayed();
    }

    async addToCart() {
        await this.addToCartButton.click();
        await expect (checkoutPage.removeButton).toHaveText('Remove');
        await expect(this.OpenCartIcon).toHaveText('1');
    }
    
    async addToCart2() {
        await this.addToCartButton2.click();
        await expect (this.removeButton2).toHaveText('Remove');
        await expect(this.OpenCartIcon).toHaveText('2');
    }

    async allItems() {
        await this.allItemsButton.click();
        await expect (this.products).toHaveText('Products');
    }

    async reset() {
        await this.resetAppStateButton.click();
        await expect (this.OpenCartIcon).toHaveText('');
    }
    
   async remove2() {
        await this.removeButton2.click();
        await expect (this.OpenCartIcon).toHaveText('');
    }
async checkout() {
        await this.checkoutButton.click();
        await expect (checkoutPage.yourInformationButton).toHaveText('Checkout: Your Information');
    }
    
}

export default new InventoryPage();
