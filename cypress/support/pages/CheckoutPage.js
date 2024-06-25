class CheckoutPage {
    constructor() {
        this.checkoutDetails = '.ct_padding_right';
        this.checkoutItem = '.checkout_heading';
        this.confirmButton = '[title="Confirm Order"]'
        this.orderConfirmation = '.col-md-12.col-xs-12.mt20'
    }

    getCheckoutDetails() {
        return cy.get(this.checkoutDetails);
    }

    getCheckoutItem() {
        return cy.get(this.checkoutItem);
    }

    getCheckoutItemName(text) {
        return cy.get(this.checkoutItem).contains(text);
    }

    getConfirmButton() {
      return cy.get(this.confirmButton);
  }

    clickConfirmButton() {
        this.getConfirmButton().click();
  }
    getOrderConirmation() {
   return cy.get(this.orderConfirmation);
  }

  

}

export default new CheckoutPage();