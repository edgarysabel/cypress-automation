/// <reference types="Cypress"/>

describe("My First Test Suite", function () {
	it("My First Test Case", function () {
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

		//Alerts
		cy.get("#alertbtn").click();
		cy.get('[value="Confirm"]').click();

		//windows:alert

		cy.on("window:alert", (str) => {
			//All assertions are in Mocha
			expect(str).to.equals(
				"Hello , share this practice page and share your knowledge"
			);
		});

		cy.on("window:confirm", (str) => {
			//All assertions are in Mocha
			expect(str).to.equals("Hello , Are you sure you want to confirm?");
		});

		cy.get("#opentab").invoke("removeAttr", "target").click();

		cy.url().should("include", "shettyacademy");

		cy.go("back");
	});
});
