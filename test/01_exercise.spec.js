import {expect} from 'chai';
import {averagePlayerAgePerGame} from '../src/01_exercise.js';
import {describe, it} from "mocha";
import {mkDummies, mkGames} from "./mocks.js";

describe('Average player age per game', () => {
    const players = mkDummies();
    const games = mkGames();

    it('should work with no games', () => {
        const out = averagePlayerAgePerGame([], players);
        expect(out).to.be.empty;
    });

    it('should return the right number of games', () => {
        const out = averagePlayerAgePerGame(games, players);
        expect(out).to.have.length(games.length);
    });

    it('should return the right average age for "Hide&Seek"', () => {
        const out = averagePlayerAgePerGame(games, players);
        const hns = out.find(x => x.game.name === 'Hide&Seek');
        expect(hns).to.not.be.undefined;
        expect(hns.averageAge).to.be.not.undefined;
        expect(hns.averageAge).be.eq(20);
    });

    it('should return the right average age for tabletop "Chess"', () => {
        const out = averagePlayerAgePerGame(games, players);
        const hns = out.find(x => x.game.name === 'Chess' && x.game.type === 'TABLETOP');
        expect(hns).to.not.be.undefined;
        expect(hns.averageAge).to.be.not.undefined;
        expect(hns.averageAge).be.eq(17.5);
    });

    it('should return 0 for soccer', () => {
        const out = averagePlayerAgePerGame(games, players);
        const hns = out.find(x => x.game.name === 'Soccer' && x.game.type === 'OUTDOOR');
        expect(hns).to.not.be.undefined;
        expect(hns.averageAge).to.be.not.undefined;
        expect(hns.averageAge).be.eq(0);
    });
});
