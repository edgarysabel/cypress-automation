/// <reference types="Cypress"/>

describe("My First Test Suite", function () {
	it("My First Test Case", function () {
		cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
		cy.get(".search-keyword").type("Ca");
		cy.wait(2000);
		cy.get(".products").as("productLocator");

		cy.get("@productLocator")
			.find(".product")
			.each(($el, index, $list) => {
				const textVeg = $el.find("h4.product-name").text();

				if (textVeg.includes("Cashews")) {
					$el.find("button").click();
				}
			});

		cy.get(".brand").should("have.text", "GREENKART");

		//Prints in logs
		cy.get(".brand").then(function (logoElement) {
			cy.log(logoElement.text());
		});

		cy.get(".cart-icon > img").click();
		cy.contains("PROCEED TO CHECKOUT").click();
		cy.contains("Place Order").click();
	});
});
