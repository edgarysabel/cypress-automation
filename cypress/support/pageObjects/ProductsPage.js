class ProductsPage {
	getProductTitlesArray() {
		return cy.get("h4.card-title");
	}
	getAddToCartBtn() {
		return cy.get("button.btn.btn-info");
	}
	getCheckOutBtn() {
		return cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link");
	}
	getEnterpreneurRadioButton() {
		return cy.get("#inlineRadio3");
	}
	getShopTab() {
		return cy.get(":nth-child(2) > .nav-link");
	}
}

export default ProductsPage;
