import { MyDirectoryPage } from './app.po';

describe('my-directory App', function() {
  let page: MyDirectoryPage;

  beforeEach(() => {
    page = new MyDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
