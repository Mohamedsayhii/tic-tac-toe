const table = document.querySelector(".game-table");
const winner = document.querySelector(".winner");
const modalBg = document.querySelector(".modal-bg");
const modalBtn = document.querySelector(".modal-btn");
const startBtn = document.querySelector(".start-btn");
const exitBtn = document.querySelector(".exit-btn");
const resetBtn = document.querySelector(".reset-btn");

const player1name = document.querySelector(".name1");
const player2name = document.querySelector(".name2");
const player1Mark = document.getElementById("player1-mark");
const player2Mark = document.getElementById("player2-mark");

const Player = (name, mark) => {
  return { name, mark };
};

const gameModule = (() => {
  let gameBoard = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  let gameOver = false;
  const tableItems = document.querySelectorAll("td");
  let i = 0;
  tableItems.forEach((tableItem) => {
    tableItem.addEventListener("click", () => {
      if (player1name.textContent == "" && player2name.textContent == "") {
        alert("enter the players names first ");
      }
      if (
        i < 9 &&
        tableItem.textContent == "" &&
        !gameOver &&
        player1name.textContent != "" &&
        player2name.textContent != ""
      ) {
        tableItem.textContent = gameBoard[i];
        console.log(i);
        i++;
        if (
          (gameModule.tableItems[0].textContent != "" &&
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
              gameModule.tableItems[6].textContent)
        ) {
          if (i > 4) {
            gameBoard[i - 1] == "X"
              ? (winner.textContent = `the winner issssssss ${player1name.textContent.toUpperCase()}! Congrats`)
              : (winner.textContent = `the winner issssssss ${player2name.textContent.toUpperCase()}! Congrats`);
          }
          // if (i == 8) {
          //   winner.textContent = `the winner issssssss ${player2name.textContent}!`;
          // }
          gameOver = true;
          console.log("fama 3 in a row");
        } else if (i > 8 && !gameOver) {
          winner.textContent = `It's a F tie.`;
        }
      }
    });

    modalBtn.addEventListener("click", function () {
      modalBg.style.visibility = "visible";
      modalBg.style.opacity = 1;
    });

    closeModal = function () {
      modalBg.style.visibility = "hidden";
      modalBg.style.opacity = 0;
    };

    exitBtn.addEventListener("click", closeModal);

    startBtn.addEventListener("click", () => {
      const player1 = Player(
        document.getElementById("player1-name").value,
        "X"
      );
      const player2 = Player(
        document.getElementById("player2-name").value,
        "O"
      );
      player1name.textContent = player1.name.toUpperCase();
      player2name.textContent = player2.name.toUpperCase();
      closeModal();
    });

    resetBtn.addEventListener("click", () => {
      gameModule.tableItems.forEach((tableItem) => {
        tableItem.textContent = "";
      });
      player1name.textContent = "";
      player2name.textContent = "";
      winner.textContent = "";
      i = 0;
      gameOver = false;
    });
  });
  return { tableItems };
})();
