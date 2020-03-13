function submitMove() {
    const x = document.getElementsByName("qq");
    let ans = 0;
    if (x[0].checked) {
        ans = x[0].value;
    } else if (x[1].checked) {
        ans = x[1].value;
    }
    if (ans === 0) {
        console.log("please select")
    } else {
        const find = (history.length % 2) === 1 ? 3 : 4;
        const p1 = currentCards.findIndex(d => d === 1);
        const p2 = currentCards.findIndex(d => d === 2);
        const p3 = currentCards.findIndex(d => d === 3);
        const p4 = currentCards.findIndex(d => d === 4);
        // if (currentCards[p1] === 1) {
        //     currentCards[p1] = 100;
        // } else if (currentCards[p2] === 1) {
        //     currentCards[p2] = 100;
        // } else if (currentCards[p3] === 1) {
        //     currentCards[p3] = 100;
        // } else if (currentCards[p4] === 1) {
        //     currentCards[p4] = 100;
        // }
        // if (currentCards[p1] === 2) {
        //     currentCards[p1] = 80;
        // } else if (currentCards[p2] === 2) {
        //     currentCards[p2] = 80;
        // } else if (currentCards[p3] === 2) {
        //     currentCards[p3] = 80;
        // } else if (currentCards[p4] === 2) {
        //     currentCards[p4] = 80;
        // }
        // if (currentCards[p1] === 3) {
        //     currentCards[p1] = 60;
        // } else if (currentCards[p2] === 3) {
        //     currentCards[p2] = 60;
        // } else if (currentCards[p3] === 3) {
        //     currentCards[p3] = 60;
        // } else if (currentCards[p4] === 3) {
        //     currentCards[p4] = 60;
        // }
        // if (currentCards[p1] === 4) {
        //     currentCards[p1] = 40;
        // } else if (currentCards[p2] === 4) {
        //     currentCards[p2] = 40;
        // } else if (currentCards[p3] === 4) {
        //     currentCards[p3] = 40;
        // } else if (currentCards[p4] === 4) {
        //     currentCards[p4] = 40;
        // }

        currentCards[p1] = 100;
        currentCards[p2] = 80;
        currentCards[p3] = 60;
        currentCards[p4] = 40;

        console.log(ans)
        console.log(find)

        if (find === 3) {
            if (currentCards[ans - 1] === 60) {
                currentCards[p3] = 0;
            } else {
                currentCards[p2] = 0;
            }
        } else if (find === 4) {
            if (currentCards[ans - 1] === 40) {
                currentCards[p4] = 0;
            } else {
                currentCards[p2] = 0;
            }
        }
        // if (ans === find) {
        //     // console.log(p2)
        //     // currentCards[ans - 1] = 0;
        //     // if (currentCards[p1] === find) {
        //     //     currentCards[p1] = 0;
        //     // } else if (currentCards[p2] === find) {
        //     //     currentCards[p2] = 0;
        //     // } else if (currentCards[p3] === find) {
        //     //     currentCards[p3] = 0;
        //     // } else if (currentCards[p4] === find) {
        //     //     currentCards[p4] = 0;
        //     // }
        //
        //     console.log("Correct answer.")
        // } else {
        //     // if (currentCards[p1] === 2) {
        //     //     currentCards[p1] = 0;
        //     // } else if (currentCards[p2] === 2) {
        //     //     currentCards[p2] = 0;
        //     // } else if (currentCards[p3] === 2) {
        //     //     currentCards[p3] = 0;
        //     // } else if (currentCards[p4] === 2) {
        //     //     currentCards[p4] = 0;
        //     // }
        //     console.log("Invalid answer.")
        // }


        console.log(currentCards)
        history[history.length - 1] = currentCards;
        printSumAllPlayers();
        currentCards = []

        document.getElementById("newMove").style.display = "block";
        document.getElementById("playerChooseChance").style.display = "none";
    }

}
