export class Credentials {
  private validateCredentials(username?: string, password?: string) {
    if (!username || !password) {
      throw new Error("⚠️ Error: Login credentials were not found. Check the .env file!");
    }
  }

  getValidCredentials() {
    const username = Cypress.env("username");
    const password = Cypress.env("password");
    this.validateCredentials(username, password);
    return { username, password };
  }

  getInvalidCredentials() {
    return { username: 'invalid', password: 'invalid' };
  }
}