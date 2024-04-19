import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }

  static get email() {
    return cy.get("#email");
  }

  static get password() {
    return cy.get("#password");
  }

  static get logIn() {
    return cy.get("#loginButton");
  }

  static get validateAccountName() {
    return cy.get("[role='menuitem']");
  }

  // register
  static get notYetCustomer() {
    return cy.get("#newCustomerLink");
  }

  static get emailField() {
    return cy.get("#emailControl");
  }

  static get passwordField() {
    return cy.get("#passwordControl");
  }

  static get repeatPasswordField() {
    return cy.get("#repeatPasswordControl");
  }

  static get securityQuestion() {
    return cy.get(".mat-form-field-flex.ng-tns-c22-16");
  }

  static get securityQuestionOption() {
    return cy.get(".mat-option-text");
  }

  static get petName() {
    return cy.get("#securityAnswerControl");
  }

  static get registerButton() {
    return cy.get("#registerButton");
  }
}
