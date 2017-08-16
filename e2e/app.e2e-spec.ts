import { CookappPage } from './app.po';

describe('cookapp App', () => {
  let page: CookappPage;

  beforeEach(() => {
    page = new CookappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
