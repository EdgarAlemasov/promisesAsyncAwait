import GameSavingLoader from '../GameSavingLoader';

test('testing the creation of an object of the GameSaving type', () => {
    const object = {
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: 'Hitman',
            level: 10,
            points: 2000,
        },
    };

    GameSavingLoader.load().then((saving) => {
        expect(saving).toEqual(object);
    });
});
