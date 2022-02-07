const table = document.querySelector(".game-table");

const player1Mark = document.getElementById("player1-mark");
const player2Mark = document.getElementById("player2-mark");

const gameModule = (() => {
  let gameBoard = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  let gameOver = false;
  const tableItems = document.querySelectorAll("td");
  let i = 0;
  tableItems.forEach((tableItem) => {
    tableItem.addEventListener("click", () => {
      if (i < 9 && tableItem.textContent == "" && gameOver != true) {
        tableItem.textContent = gameBoard[i];
        i++;
      }
      if (
        i > 4 &&
        ((gameModule.tableItems[0].textContent != "" &&
          gameModule.tableItems[0].textContent ==
            gameModule.tableItems[1].textContent &&
          gameModule.tableItems[1].textContent ==
            gameModule.tableItems[2].textContent) ||
          (gameModule.tableItems[3].textContent != "" &&
            gameModule.tableItems[3].textContent ==
              gameModule.tableItems[4].textContent &&
            gameModule.tableItems[4].textContent ==
              gameModule.tableItems[5].textContent) ||
          (gameModule.tableItems[6].textContent != "" &&
            gameModule.tableItems[6].textContent ==
              gameModule.tableItems[7].textContent &&
            gameModule.tableItems[7].textContent ==
              gameModule.tableItems[8].textContent) ||
          (gameModule.tableItems[0].textContent != "" &&
            gameModule.tableItems[0].textContent ==
              gameModule.tableItems[3].textContent &&
            gameModule.tableItems[3].textContent ==
              gameModule.tableItems[6].textContent) ||
          (gameModule.tableItems[1].textContent != "" &&
            gameModule.tableItems[1].textContent ==
              gameModule.tableItems[4].textContent &&
            gameModule.tableItems[4].textContent ==
              gameModule.tableItems[7].textContent) ||
          (gameModule.tableItems[2].textContent != "" &&
            gameModule.tableItems[2].textContent ==
              gameModule.tableItems[5].textContent &&
            gameModule.tableItems[5].textContent ==
              gameModule.tableItems[8].textContent) ||
          (gameModule.tableItems[0].textContent != "" &&
            gameModule.tableItems[0].textContent ==
              gameModule.tableItems[4].textContent &&
            gameModule.tableItems[4].textContent ==
              gameModule.tableItems[8].textContent) ||
          (gameModule.tableItems[2].textContent != "" &&
            gameModule.tableItems[2].textContent ==
              gameModule.tableItems[4].textContent &&
            gameModule.tableItems[4].textContent ==
              gameModule.tableItems[8].textContent))
      ) {
        gameOver = true;
        console.log("fama 3 in a row");
      }
    });
  });
  return { tableItems, gameOver };
})();

const Player = (name, mark) => {
  return { name, mark };
};
