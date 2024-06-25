class SearchResultsPage {

    constructor() {
        this.productList = '.container-fluid';
        this.productName = '[title="Benefit Bella Bamba"]'
    }

    getProductLists (){
        return cy.get(this.productList)
    }

    getProductName (){
        return cy.get(this.productName)
    }

    clickProductName (){
       this.getProductName().click()
    }
    
}

export default new SearchResultsPage();