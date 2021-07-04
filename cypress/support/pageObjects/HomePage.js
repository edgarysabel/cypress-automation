class HomePage {
	getEditBox() {
		return cy.get("input[name='name']:nth-child(2)");
	}
	getTwoWayDataBindig() {
		return cy.get(":nth-child(4) > .ng-pristine");
	}
	getGender() {
		return cy.get("select");
	}
	getEnterpreneurRadioButton() {
		return cy.get("#inlineRadio3");
	}
	getShopTab() {
		return cy.get(":nth-child(2) > .nav-link");
	}
}

export default HomePage;
