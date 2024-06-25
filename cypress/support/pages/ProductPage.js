class ProductPage {

    constructor () {
       this.productDetails = '#maincontainer';
       this.totalPrice = ".total-price";
       this.productCartButton = '.productpagecart';
       this.checkoutButton = '[title="Checkout"]';
    }

    getProductDetails () {
        return cy.get(this.productDetails);
    }

    getTotalPrice () {
        return cy.get(this.totalPrice);
        }
    

    getProductCartButton () {
        return cy.get(this.productCartButton);
    }

    clickProductCartButton () {
        this.getProductCartButton().click();
    }

    getCheckoutButton () {
        return cy.get(this.checkoutButton).eq(1);
    }

    clickCheckoutButton () {
        this.getCheckoutButton().click();
    }

}

export default new ProductPage();