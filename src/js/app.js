import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
    console.log(saving);
}, (error) => {
    throw error;
});
