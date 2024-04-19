import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {

    static get addNewAddressButton() {
        return cy.get(".mat-focus-indicator.btn.btn-new-address");

    }

}