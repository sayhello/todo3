import { Todo3Page } from './app.po';

describe('todo3 App', function() {
  let page: Todo3Page;

  beforeEach(() => {
    page = new Todo3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
