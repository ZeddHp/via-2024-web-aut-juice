import { BasePage } from "../pageObjects/basePage";

export class OrderCompletionPage extends BasePage {

    static get orderConfirmation() {
        return cy.get(".mat-card.mat-focus-indicator.mat-elevation-z0");
    }

}