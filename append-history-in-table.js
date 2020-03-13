function appendHistoryInTable() {
    const tempHistory = history.slice(0, history.length - 1);
    const table = document.getElementById("myTable");
    if (tempHistory.length > 0) {
        const row = table.insertRow(2 + tempHistory.length - 1);
        row.insertCell(0).style.color = "red";
        row.insertCell(0).innerText = "Move => " + tempHistory.length;
        row.insertCell(1).innerText = tempHistory[tempHistory.length - 1][0];
        row.insertCell(2).innerText = tempHistory[tempHistory.length - 1][1];
        row.insertCell(3).innerText = tempHistory[tempHistory.length - 1][2];
        row.insertCell(4).innerText = tempHistory[tempHistory.length - 1][3];
    }
}
