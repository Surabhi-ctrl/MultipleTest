import { $, expect } from '@wdio/globals'
import Page from './page.js';
import loginPage from './login.page.js';

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

    get continueShoppingButton () {
        return $('#continue-shopping');
    }

    get checkoutButton () {
        return $('#checkout');
    }

    get addToCartButton(){
        return $('[id="add-to-cart-sauce-labs-backpack"]');
    }

    get removeButton(){
        return $('#remove-sauce-labs-backpack');
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
        await expect(this.continueShoppingButton).toHaveText('Continue Shopping');
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
        await expect (this.removeButton).toHaveText('Remove');
        await expect(this.OpenCartIcon).toHaveText('1');
    }
    async allItems() {
        await this.allItemsButton.click();
        await expect (this.products).toHaveText('Products');
    }
    async reset() {
        await this.resetAppStateButton.click();
        await expect (this.OpenCartIcon).toHaveText('');
    }
}

export default new InventoryPage();
