import {expect} from 'chai';
import {averagePlayerAgePerGame} from '../src/01_exercise.js';
import {describe, it} from "mocha";

describe('Average player age per game', () => {

    it('should work with no games', () => {
        const players = mkDummyPlayers();
        const out = averagePlayerAgePerGame([], players);
        expect(out).to.be.empty();
    });

    it('should return the right number of games', () => {

    });
});
