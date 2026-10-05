function createCharacter() {
    characters = [
    {name: "User 1", level: 1, health: 33},
    {name: "User 2", level: 4, health: 551},
    {name: "User 3", level: 2, health: 23},
    {name: "User 4", level: 5, health: 553},
    ];

    charactersPowerUp = characters.map(characters => ({
        powerName: characters.name.toUpperCase(),
        powerLevel: characters.level * 2,
        powerHealth: characters.health * 3,
    }));

    possibleWinners = charactersPowerUp.filter (charactersPowerUp => charactersPowerUp.powerHealth > 1000);

    console.log(charactersPowerUp);
    console.log(possibleWinners);
};

createCharacter();