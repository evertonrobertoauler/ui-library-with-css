import { UiLibraryWithCssPage } from './app.po';

describe('ui-library-with-css App', () => {
  let page: UiLibraryWithCssPage;

  beforeEach(() => {
    page = new UiLibraryWithCssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
