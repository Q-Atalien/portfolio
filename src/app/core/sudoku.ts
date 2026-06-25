export const SIZE = 6;
export const BOX_ROWS = 2;
export const BOX_COLS = 3;

export type Grid = number[][];

function shuffle<T>(values: T[]): T[] {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function canPlace(grid: Grid, row: number, col: number, value: number): boolean {
  for (let i = 0; i < SIZE; i++) {
    if (grid[row][i] === value || grid[i][col] === value) {
      return false;
    }
  }
  const startRow = Math.floor(row / BOX_ROWS) * BOX_ROWS;
  const startCol = Math.floor(col / BOX_COLS) * BOX_COLS;
  for (let r = startRow; r < startRow + BOX_ROWS; r++) {
    for (let c = startCol; c < startCol + BOX_COLS; c++) {
      if (grid[r][c] === value) {
        return false;
      }
    }
  }
  return true;
}

function fill(grid: Grid): boolean {
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      if (grid[row][col] === 0) {
        for (const value of shuffle([1, 2, 3, 4, 5, 6])) {
          if (canPlace(grid, row, col, value)) {
            grid[row][col] = value;
            if (fill(grid)) {
              return true;
            }
            grid[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function emptyGrid(): Grid {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
}

export interface Puzzle {
  given: Grid;
  solution: Grid;
}

export function createPuzzle(clues = 18): Puzzle {
  const solution = emptyGrid();
  fill(solution);

  const given = solution.map((row) => [...row]);
  let toRemove = SIZE * SIZE - clues;
  while (toRemove > 0) {
    const row = Math.floor(Math.random() * SIZE);
    const col = Math.floor(Math.random() * SIZE);
    if (given[row][col] !== 0) {
      given[row][col] = 0;
      toRemove--;
    }
  }

  return { given, solution };
}
