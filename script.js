const table = document.querySelector(".game-table");

const player1Mark = document.getElementById("player1-mark");
const player2Mark = document.getElementById("player2-mark");

const gameModule = (() => {
  let gameBoard = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  const tableItems = document.querySelectorAll("td");
  let i = 0;
  tableItems.forEach((tableItem) => {
    tableItem.addEventListener("click", () => {
      if (i < 9 && tableItem.textContent == "") {
        tableItem.textContent = gameModule.gameBoard[i];
        i++;
      }
    });
  });
  return { gameBoard };
})();

const Player = (name, mark) => {
  return { name, mark };
};

const player1 = Player("MahaEddine", "X");
player1Mark.textContent = player1.mark;
const player2 = Player("Moha", "O");
player2Mark.textContent = player2.mark;

const gameFlow = () => {};
