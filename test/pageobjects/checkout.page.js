import { $, expect } from '@wdio/globals'
import Page from './page.js';
import loginPage from './login.page.js';
import inventoryPage from './inventory.page.js';

class checkoutPage extends Page {

    get OpenCartIcon(){
    return $('.shopping_cart_link');
  }

    get itemPriceSelector(){
    return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div');
  }
    get productNameSelector(){
    return $('#item_4_title_link');
  }

    get productDescriptionSelector(){
    return $('.inventory_item_desc');
  }


    async openCart () {
        await this.OpenCartIcon.click();
        await expect(this.yourCartTitle).toHaveText('Your Cart'); 
        await expect(this.continueShoppingButton).toHaveText('Continue Shopping');
        await expect(this.checkoutButton).toHaveText('Checkout');
    }
    async priceButton () {
        await inventoryPage.itemPriceSelector.click();
    }
    async productName () {
        await inventoryPage.productNameSelector.click();
        
    } 

    async productDescription () {
        await inventoryPage.productDescriptionSelector.click();
        
    }













}



export default new checkoutPage();