import { TournamentModule } from './tournament.module';

describe('TournamentModule', () => {
    let blankPageModule: TournamentModule;

    beforeEach(() => {
        blankPageModule = new TournamentModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
