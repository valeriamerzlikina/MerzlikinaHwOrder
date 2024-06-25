import user from '../fixtures/user.json';
import login  from '../support/helper';

beforeEach(()=>{
  cy.log("Open home page");
  cy.visit('https://automationteststore.com/');

  cy.log("Open account/login page");
  cy.get('#customer_menu_top').click();
})

it(' find product "Armani Code Sport"', () => {
  
  cy.visit('https://automationteststore.com/');
  cy.get('[placeholder="Search Keywords"]').type("E");
  cy.get('.fa.fa-search').click();

  const findProductOnPage = () => {
      cy.get('[title="Armani Code Sport"]').then(($product) => {
          if ($product.length > 0) {
              cy.wrap($product).click();
          } else {
             
              cy.get('[href="https://automationteststore.com/index.php?rt=product/search&keyword=E&category_id=0&sort=date_modified-ASC&limit=20&page=2"]').click().then(() => {
                  
                  findProductOnPage();
              });
          }
      });
  };
});
