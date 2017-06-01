import { NguPage } from './app.po';

describe('ngu App', () => {
  let page: NguPage;

  beforeEach(() => {
    page = new NguPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
