<template>
  <div class="sudoku">
    <h2>Sudoku</h2>

    <div class="grid">
      <div class="row" v-for="(row, rowIndex) in puzzle" :key="rowIndex">
        <div class="cell" 
              :class="{
                'border-right': colIndex === 2 || colIndex === 5,
                'border-bottom': rowIndex === 2 || rowIndex === 5,
                'original': cell.original
              }"
              v-for="(cell, colIndex) in row" :key="colIndex"
        >
          {{ cell.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  { sudoku } from 'sudoku.js/sudoku.js';

export default {
  name: 'Sudoku',
  data () {
    return {
      puzzle: [],
      difficulity: 'easy',

    }
  },
  mounted () {
    this.generatePuzzle();
  },
  methods: {
    generatePuzzle () {
      const boardString = sudoku.generate(this.difficulity);
      this.puzzle = sudoku.board_string_to_grid(boardString)
        .map(row => {
          return row.map(cell => {
            return {
              value: cell !== '.' ? parseInt(cell) : null,
              original: cell !== '.'
            }
          });
        });

      console.log(this.puzzle);
    }
  }
}
</script>

<style scoped>
.sudoku {
  width: calc(9 * 40px);
  margin: 0.5rem auto;
  font-family: Arial, Helvetica, sans-serif;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cell {
  display: block;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #bbb;

  font-size: 24px;
  line-height: 40px;
  text-align: center;

  cursor: default;
}

.cell.border-right {
  border-right-width: 3px;
}
.cell.border-bottom {
  border-bottom-width: 3px;
}

.cell.original {
  font-weight: bold;
}
.cell:not(.original) {
  cursor: pointer;
}
</style>
