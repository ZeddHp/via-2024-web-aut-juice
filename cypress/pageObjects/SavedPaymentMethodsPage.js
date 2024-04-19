import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {

    static get addNewCardButton() {
        return cy.get(".mat-focus-indicator.btn.btn-new-card");
    }
}




