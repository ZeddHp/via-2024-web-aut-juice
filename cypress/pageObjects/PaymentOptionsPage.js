import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {

    static get cardPayment() {
        return cy.get(".mat-radio-container");
    }

    static get selectContinueButton() {
        return cy.get("[aria-label='Proceed to review']");
    }

    static get ordersAndPayments() {
        return cy.get(".mat-focus-indicator.mat-menu-trigger.mat-menu-item.mat-menu-item-submenu-trigger");
    }

    static get paymentOptions() {
        return cy.get("[aria-label='Go to saved payment methods page']");
    }

   

}