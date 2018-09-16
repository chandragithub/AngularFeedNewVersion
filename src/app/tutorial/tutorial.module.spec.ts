import { TutorialModule } from './tutorial.module';

describe('TutorialModule', () => {
  let tutorialModule: TutorialModule;

  beforeEach(() => {
    tutorialModule = new TutorialModule();
  });

  it('should create an instance', () => {
    expect(tutorialModule).toBeTruthy();
  });
});
