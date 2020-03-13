function showRadioBox() {
    currentCards = history[history.length - 1];
    const player = currentCards.findIndex(a => a === 2) + 1;
    const player3 = currentCards.findIndex(a => a === 3) + 1;
    const player4 = currentCards.findIndex(a => a === 4) + 1;
    document.getElementById("x").value = player3;
    document.getElementById("xName").innerText = "Player " + player3;
    document.getElementById("y").value = player4;
    document.getElementById("yName").innerText = "Player " + player4;
    document.getElementById("playerChooseChance").style.display = "block";
    document.getElementById("chanceFor").innerText = "Chance For Player " + player;
    document.getElementById("findingPlayer").innerText = "You have to find " + ((history.length % 2) === 1 ? "Dakat" : "Chor");
    document.getElementById("newMove").style.display = "none";
}
