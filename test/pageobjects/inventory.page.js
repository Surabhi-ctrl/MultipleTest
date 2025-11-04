import { $ } from '@wdio/globals'
import Page from './page.js';

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

// function
    async openHamburger () {
        await this.hamburgerIcon.click();
    }

    async closeHamburger () {
        await this.hamburgerIconClose.click();
    }


    async openCart () {
        await this.OpenCartIcon.click();
        await expect(this.yourCartTitle).toHaveText('Your Cart'); 
        await expect(this.continueShoppingButton).toHaveText('Continue Shopping');
        await expect(this.checkoutButton).toHaveText('Checkout');//toHaveText
    }
    async openAbout () {
        await this.aboutOpen.click();
    }
    async logout () {
        await this.openLogout.click();
    }
    //example - await expect(this.appLogo).toHaveText('Swag Labs');


}

export default new InventoryPage();
