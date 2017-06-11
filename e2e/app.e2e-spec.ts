import { Cultura01Page } from './app.po';

describe('cultura01 App', () => {
  let page: Cultura01Page;

  beforeEach(() => {
    page = new Cultura01Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
