import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {

    static get deliveryMethod() {
        return cy.get(".svg-inline--fa.fa-truck.fa-w-20");
    }

    static get selectContinueButton() {
        return cy.get("[aria-label='Proceed to delivery method selection']");
    }

}