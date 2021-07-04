/// <reference types="Cypress"/>
/// <reference types="Cypress-iframe"/>
import "cypress-iframe";
import HomePage from "../../support/pageObjects/HomePage";
import ProductsPage from "../../support/pageObjects/ProductsPage";

describe("My First Test Suite", function () {
	before(function () {
		cy.fixture("example").then(function (data) {
			this.data = data;
		});
	});

	it("My First Test Case", function () {
		const homePage = new HomePage();
		const productsPage = new ProductsPage();

		cy.visit(Cypress.env("url") + "angularpractice/");
		homePage.getEditBox().type(this.data.name);
		homePage.getGender().select(this.data.gender);
		homePage.getTwoWayDataBindig().should("have.value", this.data.name);
		homePage.getEditBox().should("have.attr", "minlength", 2);
		homePage.getEnterpreneurRadioButton().should("be.disabled");
		homePage.getShopTab().click();

		for (const data of this.data.productName) {
			cy.selectProduct(data);
		}

		productsPage.getCheckOutBtn().click();
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
		cy.contains("Checkout").click();
		cy.get("#country").type("India");
		cy.get(".suggestions ul li a").click();
		cy.get("#checkbox2").click({ force: true });
		cy.get("input[type='submit']").click();
		/* cy.get(".alert").should(
			"have.text",
			"Success! Thank you! Your order will be delivered in next few weeks :-)."
		); */
		cy.get(".alert").then(function (el) {
			const alertText = el.text();
			expect(alertText.includes("Success")).to.be.true;
		});
	});
});
