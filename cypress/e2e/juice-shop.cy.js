import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    // it("Login", () => {
    //   // Click Account button
    //   LoginPage.accountButton.click();
    //   // Click Login button
    //   LoginPage.loginButton.click();
    //   // Set email value to "demo"
    //   LoginPage.email.type("demo");
    //   // Set password value to "demo"
    //   LoginPage.password.type("demo");
    //   // Click Log in
    //   LoginPage.logIn.click();
    //   // Click Account button
    //   LoginPage.accountButton.click();

    //   // Validate that "demo" account name appears in the menu section
    //   LoginPage.validateAccountName.should("contain.text", "demo");
    // });

    //method for login that accepts email and password


    // it("Registration", () => {
    //   // Click Account button
    //   LoginPage.accountButton.click();
    //   // Login button
    //   LoginPage.loginButton.click();
    //   // Click "Not yet a customer?"
    //   LoginPage.notYetCustomer.click();
    //   // Find - how to generate random number in JS
    //   // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    //   // generate random number
    //   const randomNumber = Math.floor(Math.random() * 10000);
    //   // Save that email address to some variable
    //   const email = `email_` + randomNumber + `@ebox.com`;
    //   // Fill in password field and repeat password field with same password
    //   LoginPage.emailField.type(email);
    //   LoginPage.passwordField.type("password");
    //   LoginPage.repeatPasswordField.type("password");
    //   // Click on Security Question menu
    //   LoginPage.securityQuestion.click();
    //   // Select  "Name of your favorite pet?"
    //   LoginPage.securityQuestionOption.contains("Name of your favorite pet?").click();
    //   // Fill in answer
    //   LoginPage.petName.type("dog");
    //   // Click Register button
    //   LoginPage.registerButton.click();
    //   // Set email value to previously created email
    //   LoginPage.email.type(email);
    //   // Set password value to previously used password value
    //   LoginPage.password.type("password");
    //   // Click login button
    //   LoginPage.logIn.click();
    //   // Click Account button
    //   LoginPage.accountButton.click();

    //   // Validate that account name (with previously created email address) appears in the menu section
    //   LoginPage.validateAccountName.should("contain.text", email);
    // });
  });

  context("With auto login", () => {
    beforeEach(() => {
      //cy.login("demo", "demo");
      HomePage.visit();
      HomePage.dismissButton.click();
    });

    // it("Search and validate Lemon", () => {
    //   // Click on search icon
    //   // Search for Lemon
    //   HomePage.searchField.type("Lemon");
    //   HomePage.searchFieldInput.type("{enter}");
    //   // Select a product card - Lemon Juice (500ml)
    //   HomePage.selectItem.contains("Lemon Juice (500ml)").click();
    //   // Validate that the card (should) contains "Sour but full of vitamins."
    //   HomePage.validateDialog.should("contain.text", "Sour but full of vitamins.");
    // });

    // // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    // it("Search 500ml and validate cards", () => {
    //   // Click on search icon
    //   // Search for 500ml
    //   HomePage.searchField.type("500ml");
    //   // press enter key
    //   HomePage.searchFieldInput.type("{enter}");
    //   // Select a product card - Lemon Juice (500ml)
    //   HomePage.selectItem.contains("Lemon Juice (500ml)").click();
    //   // Validate that the card (should) contains "Sour but full of vitamins."
    //   HomePage.validateDialog.should("contain.text", "Sour but full of vitamins.");
    // });


    // it("Search 500ml and validate cards", () => {
    //   // Click on search icon
    //   // Search for 500ml
    //   HomePage.searchField.type("500ml");
    //   // press enter key
    //   HomePage.searchFieldInput.type("{enter}");

    //   // Select a product card - Eggfruit Juice (500ml)
    //   HomePage.selectItem.contains("Eggfruit Juice (500ml)").click();
    //   // Validate that the card contains "Now with even more exotic flavour."
    //   HomePage.validateDialog.should("contain.text", "Now with even more exotic flavour.");
    //   // Close the card
    //   HomePage.closeDialogButton.click();

    //   // Select a product card - Lemon Juice (500ml)
    //   HomePage.selectItem.contains("Lemon Juice (500ml)").click();
    //   // Validate that the card contains "Sour but full of vitamins."
    //   HomePage.validateDialog.should("contain.text", "Sour but full of vitamins.");
    //   // Close the card
    //   HomePage.closeDialogButton.click();

    //   // Select a product card - Strawberry Juice (500ml)
    //   HomePage.selectItem.contains("Strawberry Juice (500ml)").click();
    //   // Validate that the card contains "Sweet & tasty!"
    //   HomePage.validateDialog.should("contain.text", "Sweet & tasty!");
    //   // Close the card
    //   HomePage.closeDialogButton.click();
    // });


    // // Test case for reading a review
    // it("Read a review", () => {
    //   // Click on search icon
    //   // Search for King
    //   HomePage.searchField.type("King");
    //   HomePage.searchFieldInput.type("{enter}");
    //   // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    //   HomePage.selectItem.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
    //   //wait for reviews to appear
    //   cy.wait(1000);
    //   // Click expand reviews button/icon
    //   HomePage.expandReviews.click();
    //   // Read a review
    //   HomePage.readReview.contains("K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    // });

    //Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.searchField.type("Raspberry");
      // Search for Raspberry
      HomePage.searchFieldInput.type("{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.selectItem.contains("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      HomePage.itemReview.type("Tastes like metal");
      // Click Submit
      HomePage.submitReview.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.expandReviews.click();
      // Validate review -  "Tastes like metal"
      HomePage.readReview.contains("Tastes like metal");
    });


    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.pagination.should("contain.text", "12");
      // Change items per page (at the bottom of page) to 24
      HomePage.pagination.click();
      HomePage.paginationSelect.contains("24").click();
      // Validate that the amount of cards is 24
      HomePage.pagination.should("contain.text", "24");
      // Change items per page (at the bottom of page) to 36
      HomePage.pagination.click();
      HomePage.paginationSelect.contains("36").click();
      // Validate that the amount of cards is 35
      HomePage.cardAmount.should("have.length", 35);
    });


    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.searchField.type("Girlie");
      // Search for Girlie
      HomePage.searchFieldInput.type("{enter}");
      // Add to basket "Girlie"
      HomePage.addToBasketButton.click();
      // Click on "Your Basket" button
      HomePage.basketButton.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.addressField.contains("United Fakedom").click();
      // Click Continue button
      SelectAddressPage.selectContinueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryMethod.click();
      // Click Continue button
      DeliveryMethodPage.selectContinueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.cardPayment.click();
      // Click Continue button
      PaymentOptionsPage.selectContinueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.placeOrderButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.orderConfirmation.should("contain.text", "Thank you for your purchase!");
    });


    // Create scenario - Add address
    it.only("Add address", () => {

      // Click Account button
      LoginPage.accountButton.click();
      // Click Login button
      LoginPage.loginButton.click();
      // Set email value to "demo"
      LoginPage.email.type("demo");
      // Set password value to "demo"
      LoginPage.password.type("demo");
      // Click Log in
      LoginPage.logIn.click();


      // Click on Account
      LoginPage.accountButton.click();
      // Click on Orders & Payment
      //click only first element
      PaymentOptionsPage.ordersAndPayments.first().click();
      // Click on My saved addresses
      SelectAddressPage.savedAddresses.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addNewAddressButton.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      //country
      CreateAddressPage.country.type("United States");
      //name
      CreateAddressPage.name.type("John Doe");
      //mobile
      CreateAddressPage.mobile.type("123456789");
      //zip
      CreateAddressPage.zip.type("12345");
      //address
      CreateAddressPage.address.type("1234 Main Street");
      //city
      CreateAddressPage.city.type("New York");
      //state
      CreateAddressPage.state.type("New York");
      // Click Submit button
      CreateAddressPage.submitButton.click();
      // Validate that previously added address is visible
      CreateAddressPage.validateName.should("contain.text", "John Doe");

    });

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
  });
});
