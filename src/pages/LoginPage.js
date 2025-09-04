import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {
  constructor() {
    super();
    this.username = '#username';
    this.password = '#password';
    this.signIn = '#submit';
  }
  async login(page, user, pass) {
    await this.type(page, this.username, user);
    await this.type(page, this.password, pass);
    await this.click(page, this.signIn);
  }
}
