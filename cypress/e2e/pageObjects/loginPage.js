class Login {
  getEmail() {
    return cy.get('[data-testid="login-email"]')
  }

  getPassword() {
    return cy.get('[data-testid="login-password"]')
  }

  getLoginBtn() {
    return cy.get('[data-testid="submit"]')
  }
  loginFunction(email, password) {
    this.getEmail().type(email);
    this.getPassword().type(password);
    this.getLoginBtn().click();
  }
}

export default Login;
