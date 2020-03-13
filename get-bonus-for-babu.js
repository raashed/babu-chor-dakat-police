function getBonusForBabu() {
    currentCards = history[history.length - 1];
    // const player1 = currentCards[0];
    // const player2 = currentCards[1];
    // const player3 = currentCards[2];
    // const player4 = currentCards[3];
    // if (player1 === 1) {
    //     currentCards[0] = 100;
    // } else if (player2 === 1) {
    //     currentCards[1] = 100;
    // } else if (player3 === 1) {
    //     currentCards[2] = 100;
    // } else if (player4 === 1) {
    //     currentCards[3] = 100;
    // }
    history[history.length - 1] = currentCards;
}
