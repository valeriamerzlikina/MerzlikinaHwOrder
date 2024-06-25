import user from '../fixtures/user.json';
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';



beforeEach(()=>{
  homePage.visit('https://automationteststore.com/');
  homePage.clickLoginOrRegisterButton();
})

it('Successful authorization', () => {
  loginPage.fillLoginForm(user.loginname, user.password);
  loginPage.clickLoginButton();
})

describe('Negative authorization test suite', () => {

  afterEach(()=>{
    loginPage.clickLoginButton();
    cy.log('Verify error message');
    loginPage.getErrorMessageText().should('have.text', `\n×\nError: Incorrect login or password provided.`)
  })

  it('User cannot login with incorrect loginname', () => {
  
    loginPage.fillLoginForm(user.lastname, user.password);
  })

  it('User cannot login with empty loginname', () => {
  
    loginPage.fillLoginForm('', user.password);
  })

  it('User cannot login with incorrect password', () => {
   
    loginPage.fillLoginForm(user.loginname, user.password);
  })

  it('User cannot login with empty password', () => {
    loginPage.fillLoginForm('', user.password);
  })
})