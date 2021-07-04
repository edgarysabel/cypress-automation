import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";
import ProductsPage from "../../../support/pageObjects/ProductsPage";
const homePage = new HomePage();
const productsPage = new ProductsPage();

Given("I open Ecommerce Page", function () {
	cy.visit(Cypress.env("url") + "angularpractice/");
});

When("I add items to cart", function () {
	homePage.getShopTab().click();

	for (const data of this.data.productName) {
		cy.selectProduct(data);
	}
	productsPage.getCheckOutBtn().click();
});

And("Validate the total prices", () => {
	var sum = 0;
	cy.get("tr td:nth-child(4) strong")
		.each((el, index, list) => {
			const actualText = el.text();
			var res = actualText.split(" ");
			res = res[1].trim();
			cy.log(res);

			sum += Number(res);
		})
		.then(function () {
			cy.log(sum);
		});

	cy.get("h3 strong").then(function (element) {
		const amount = element.text();
		var res = amount.split(" ");
		res = res[1].trim();

		expect(Number(res)).to.equal(sum);
	});
});
Then("Select the country, submit and verify Thank you", () => {
	cy.contains("Checkout").click();
	cy.get("#country").type("India");
	cy.get(".suggestions ul li a").click();
	cy.get("#checkbox2").click({ force: true });
	cy.get("input[type='submit']").click();

	cy.get(".alert").then(function (el) {
		const alertText = el.text();
		expect(alertText.includes("Success")).to.be.true;
	});
});
