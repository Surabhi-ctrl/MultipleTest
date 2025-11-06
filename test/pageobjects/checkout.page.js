import { $, expect } from '@wdio/globals';
import Page from './page.js';
import loginPage from './login.page.js';
import inventoryPage from './inventory.page.js';

class CheckoutPage extends Page {

    get openCartIcon() {
    return $('.shopping_cart_link');
  }

  get itemPriceSelector() {
    return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div');
  }
  
  get productNameSelector() {
    return $('#item_4_title_link');
  }

  get productDescriptionSelector() {
    return $('.inventory_item_desc');
  }
  get productNameSelector2() {
    return $('#item_0_title_link');
  }
  get removeButton(){
        return $('#remove-sauce-labs-backpack');
    }

  get continueShoppingButton () {
        return $('#continue-shopping');
    }
  get yourInformationButton () {
        return $('.header_secondary_container');
    }
  get facebookIconFooter () {
        return $('.social_facebook');
    }
  get linkedInIconFooter () {
        return $('.social_linkedin');
    }

 get twitterIconFooter () {
        return $('.social_twitter');
    }



    async openCart () {
        await this.OpenCartIcon.click();
        await expect(this.yourCartTitle).toHaveText('Your Cart'); 
        await expect(this.continueShoppingButton).toHaveText('Continue Shopping');
        await expect(this.checkoutButton).toHaveText('Checkout');
    }
    
    async remove() {
        await this.removeButton.click();
        await expect (this.productNameSelector2).toHaveText('Sauce Labs Bike Light');
        await expect (this.openCartIcon).toHaveText('1');
    }

    async productDescription () {
        await this.productDescriptionSelector.click();
        await expect(this.productNameSelector).toHaveText('Sauce Labs Backpack');
        await expect(this.productDescriptionSelector).toBeDisplayed();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
        await expect (inventoryPage.products).toHaveText('Products');
    } 
    async yourInformation() {
        await expect (this.facebookIconFooter).toHaveText('Facebook');
        await expect (this.twitterIconFooter).toHaveText('Twitter');
        await expect (this.linkedInIconFooter).toHaveText('LinkedIn');
        await expect (this.yourInformationButton).toHaveText('Checkout: Your Information');
 
    } 


}

export default new CheckoutPage();