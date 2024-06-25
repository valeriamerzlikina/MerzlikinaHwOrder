import user from '../fixtures/user.json';
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';

import login from "../support/helper";
import SearchResultsPage from '../support/pages/SearchResultsPage';
import ProductPage from '../support/pages/ProductPage';
import CheckoutPage from '../support/pages/CheckoutPage';

beforeEach(() => {
  homePage.visit('/');
  homePage.clickLoginOrRegisterButton();
  loginPage.fillLoginForm(user.loginname, user.password);
  loginPage.clickLoginButton();
  homePage.visit('/');
});

it('Place order from the main page', () => {

  let productPrice = '56.00';

  cy.log("Перевіряємо що відкрилась сторінка з товарами");
  SearchResultsPage.getProductLists();

  cy.log("Шукаємо товар Benefit Bella Bamba");
  SearchResultsPage.getProductName();

  cy.log("Клікаємо на товар Benefit Bella Bamba");
  SearchResultsPage.clickProductName();

  cy.log("Перевіряємо що відкрилась сторінка товару");
  ProductPage.getProductDetails();

  cy.log("Перевіряємо що ціна тотал = 56.00");
  ProductPage.getTotalPrice().then(price => {
    productPrice = price.text().replace(/[\n\t]/g, '').replace('$', '');

  cy.log("Знаходимо кнопку Add to Cart");
  ProductPage.getProductCartButton();

  cy.log("Клікаємо на кнопку Add to Cart");
  ProductPage.clickProductCartButton();

  cy.log("Клікаємо на кнопку Checkout");
  ProductPage.clickCheckoutButton();

  cy.log("Перевіряємо що відкрилась сторінка Checkout Confirmation");
  CheckoutPage.getCheckoutDetails();

  cy.log("Перевіряємо що купляємо вірний товар Benefit Bella Bamba ");
  CheckoutPage.getCheckoutItemName('Benefit Bella Bamba').should('be.visible');

  cy.log("Клікаємо на Confirm Button");
  CheckoutPage.clickConfirmButton();

  cy.log("Перевіряємо відкрилась сторінка з Order Confirmation");
  CheckoutPage.getOrderConirmation();

});
});
