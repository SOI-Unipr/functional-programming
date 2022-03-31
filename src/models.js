/**
 * A game model.
 * Games' types can vary but games are unique by name and type.
 */
export class Game {
    #name;
    #type;
    #year;
    #age;

    /**
     * Instances a new `Game` entity.
     * @param {string} name The name of the game
     * @param {'CONSOLE'|'TABLETOP'|'OUTDOOR'} type Type of game
     * @param {number} year The production year
     * @param {[number,number]} age Represents the inclusive range of allowed ages.
     */
    constructor(name, type, year, age) {
        this.#name = name;
        this.#type = type;
        this.#year = year;
        this.#age = age;
    }

    // @formatter:off
    get name() { return this.#name; }
    get type() { return this.#type; }
    get year() { return this.#year; }
    get age() { return this.#age; }
    // @formatter:on
}

/**
 * A player model.
 */
export class Player {
    #firstName;
    #lastName;
    #age;
    #favouriteGames;

    /**
     * Creates a new instance of `Player`.
     * @param {string} firstName First name
     * @param {string} lastName  Last name
     * @param {number} age Player's age
     * @param {Game[]} favouriteGames A list of loved games
     */
    constructor(firstName, lastName, age, favouriteGames) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
        this.#favouriteGames = favouriteGames;
    }

    // @formatter:off
    get firstName() { return this.#firstName; }
    get lastName() { return this.#lastName; }
    get age() { return this.#age; }
    get favouriteGames() { return this.#favouriteGames; }
    // @formatter:on
}
