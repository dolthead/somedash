import { SomedashPage } from './app.po';

describe('somedash App', function() {
  let page: SomedashPage;

  beforeEach(() => {
    page = new SomedashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
