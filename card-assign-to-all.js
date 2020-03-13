function _getNameForPrint(cardNumber) {
    if (cardNumber === 1) {
        return "Babu";
    } else if (cardNumber === 2) {
        return "Police";
    } else if (cardNumber === 3) {
        return "Dakat";
    } else if (cardNumber === 4) {
        return "Chor";
    }
}

function cardAssignToAll() {
    const cards = [];
    while (cards.length < 4) {
        const currentNumber = Math.floor(Math.random() * 4) + 1;
        if (cards.indexOf(currentNumber) === -1) {
            cards.push(currentNumber);
        }
    }
    document.getElementById("p1cc").innerText = _getNameForPrint(cards[0]);
    document.getElementById("p2cc").innerText = _getNameForPrint(cards[1]);
    document.getElementById("p3cc").innerText = _getNameForPrint(cards[2]);
    document.getElementById("p4cc").innerText = _getNameForPrint(cards[3]);
    history.push(cards);
    currentCards.push(cards);
    appendHistoryInTable();
}
