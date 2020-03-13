function printSumAllPlayers() {
    let p1s = 0, p2s = 0, p3s = 0, p4s = 0;
    history.forEach(data => {
        p1s += data[0];
        p2s += data[1];
        p3s += data[2];
        p4s += data[3];
    });
    // const lastValue = history[history.length - 1];
    document.getElementById("p1s").innerText = Number(Number(p1s) - Number(0)).toString();
    document.getElementById("p2s").innerText = Number(Number(p2s) - Number(0)).toString();
    document.getElementById("p3s").innerText = Number(Number(p3s) - Number(0)).toString();
    document.getElementById("p4s").innerText = Number(Number(p4s) - Number(0)).toString();
}
