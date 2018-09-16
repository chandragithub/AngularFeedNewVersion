import { ApplicationPipesModuleModule } from './application-pipes-module.module';

describe('ApplicationPipesModuleModule', () => {
  let applicationPipesModuleModule: ApplicationPipesModuleModule;

  beforeEach(() => {
    applicationPipesModuleModule = new ApplicationPipesModuleModule();
  });

  it('should create an instance', () => {
    expect(applicationPipesModuleModule).toBeTruthy();
  });
});
