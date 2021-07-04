/// <reference types="Cypress"/>

describe("My First Test Suite", function () {
	it("My First Test Case", function () {
		cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
		cy.get(".search-keyword").type("Ca");
		cy.wait(2000);
		cy.get(".product:visible").should("have.length", 4);
		cy.get(".products").as("productLocator");
		cy.get("@productLocator")
			.find(".product")
			.should("have.length", 4)
			.then(function () {
				console.log("Hello");
			});

		cy.get("@productLocator")
			.find(".product")
			.eq(1)
			.contains("ADD TO CART")
			.click();

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
	});
});
