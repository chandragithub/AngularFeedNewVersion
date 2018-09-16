import { PageNotFoundModule } from './pagenotfound.module';

describe('PagenotfoundModule', () => {
  let pagenotfoundModule: PageNotFoundModule;

  beforeEach(() => {
    pagenotfoundModule = new PageNotFoundModule();
  });

  it('should create an instance', () => {
    expect(pagenotfoundModule).toBeTruthy();
  });
});
