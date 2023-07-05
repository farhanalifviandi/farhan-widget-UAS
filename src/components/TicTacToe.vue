<template>
  <div class="tic-tac-toe-widget">
    <h2>Toc Tax</h2>
    <div class="board">
      <div v-for="(cell, index) in board" :key="index" @click="handleClick(index)">{{ cell }}</div>
    </div>
    <button id="button" @click="resetGame">Lagi ?</button>
    <p>{{ status }}</p>
    <h4 id="company">&copy; 2023 CompanyDonHan.org</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: ['', '', '', '', '', '', '', '', ''],
      currentPlayer: 'X',
      isGameEnded: false,
    };
  },
  computed: {
    status() {
      if (this.isGameEnded) {
        return 'Tamattttt';
      }
      return `Kau ${this.currentPlayer} Gerak Lagi!`;
    },
  },
  methods: {
    handleClick(index) {
      if (!this.isGameEnded && this.board[index] === '') {
        this.board[index] = this.currentPlayer;
        this.checkWinner();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    },
    checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6], // Diagonals
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
          this.isGameEnded = true;
          return;
        }
      }
    },
    resetGame() {
      this.board = ['', '', '', '', '', '', '', '', ''];
      this.currentPlayer = 'X';
      this.isGameEnded = false;
    },
  },
};
</script>

<style scoped>
.tic-tac-toe-widget {
  border: 1px solid maroon;
  padding: 20px;
  margin-bottom: 20px;
  margin-right: 300px;
  margin-left: 300px;
  background-color: gray;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;
  color: white;
}

.board div:hover {
  background-color: gray;
}

.board div {
  border: 1px solid #ccc;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: maroon;
}

.board div:hover {
  background-color: #c7a51d;
}

#button {
  margin-top: 10px;
  font-size: 15px;
  padding: 10px;
  border-radius: 3px;
}

#button:hover {
  color: maroon;
  background-color: #c7a51d;
}

h2 {
  color: maroon;
}

h2:hover {
  color: #c7a51d;
}

#company {
  color: maroon;
  margin-bottom: 20px;
  font-size: 16px;
}

#company:hover {
  color: #c7a51d;
}
</style>
