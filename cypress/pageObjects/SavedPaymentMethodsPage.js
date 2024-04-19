import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {

    static get addNewCardButton() {
        return cy.get(".mat-expansion-panel-header-title.ng-tns-c42-16");
    }

    static get name() {
        return cy.get(".ng-tns-c22-17.ng-star-inserted");
    }

    static get cardNumber() {
        return cy.get(".mat-input-element.mat-form-field-autofill-control.ng-tns-c22-18.ng-untouched.ng-pristine.ng-invalid.cdk-text-field-autofill-monitored");
    }

    static get expiryDate() {

        return cy.get("#mat-input-5");
    }

    static get expiryYear() {

        return cy.get("#mat-input-6");
    }

    static get submitButton() {
        return cy.get("#submitButton");
    }

    static get validateName() {
        return cy.get(".mat-cell.cdk-cell.cdk-column-Name.mat-column-Name.ng-star-inserted");
    }
}




