import {expect} from 'chai';
import {describe, it} from "mocha";
import {mkDummies, mkGames} from "./mocks.js";
import {averageAllowedPlayerAgePerGame} from "../src/02_exercise.js";

describe('Average allowed player age per game', () => {
    const players = mkDummies();
    const games = mkGames();

    it('should return the right average age for users allowed to play "Un Due Tre Stella"', () => {
        const out = averageAllowedPlayerAgePerGame(games, players);
        const hns = out.find(x => x.game.name === 'Un Due Tre Stella');
        expect(hns).to.not.be.undefined;
        expect(hns.averageAge).to.be.not.undefined;
        expect(hns.averageAge).be.eq(30);
    });

});
