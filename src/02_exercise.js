/**
 * Calculate for each known game, the average age of the players that love that game
 * and whose age is within the game allowed range.
 * @param {Game[]} games A list of known, unique games
 * @param {Player[]} players A list of players, each associated with a set of loved games
 * @return {{game: Game, averageAge: number}[]} A list of objects representing a known game
 * and the average age.
 */
export function averageAllowedPlayerAgePerGame(games, players) {
    function gameKey(game) {
        return `${game.name}|${game.type}`;
    }

    const agesByGame = players
        .flatMap(p => p.favouriteGames.map(g => ({game: g, age: p.age})))
        .filter(g => g.game.age[0] <= g.age && g.age <= g.game.age[1])
        .reduce((acc, gameAndAge) => {
            const {game, age} = gameAndAge;
            const key = gameKey(game);
            (acc[key] = acc[key] || []).push(age);
            return acc;
        }, {});

    return games.map(game => {
        const key = gameKey(game);
        const ages = agesByGame[key] || [];
        const sumOfAges = ages.reduce((acc, age) => acc + age, 0);
        const averageAge = ages.length? sumOfAges / ages.length : 0;
        return {game, averageAge};
    });
}
