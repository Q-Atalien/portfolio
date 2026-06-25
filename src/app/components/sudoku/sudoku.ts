import { ChangeDetectionStrategy, Component, HostListener, computed, signal } from '@angular/core';
import { BOX_COLS, BOX_ROWS, Grid, SIZE, createPuzzle } from '../../core/sudoku';

interface Cell {
  row: number;
  col: number;
}

@Component({
  selector: 'app-sudoku',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sudoku.html',
  styleUrl: './sudoku.scss'
})
export class Sudoku {
  readonly size = SIZE;
  readonly numbers = Array.from({ length: SIZE }, (_, i) => i + 1);

  private fixed = signal<boolean[][]>([]);
  readonly cells = signal<Grid>([]);
  readonly selected = signal<Cell | null>(null);

  readonly conflicts = computed(() => this.findConflicts(this.cells()));

  readonly solved = computed(() => {
    const grid = this.cells();
    if (grid.some((row) => row.some((value) => value === 0))) {
      return false;
    }
    return this.conflicts().size === 0;
  });

  constructor() {
    this.newGame();
  }

  newGame(): void {
    const { given } = createPuzzle();
    this.fixed.set(given.map((row) => row.map((value) => value !== 0)));
    this.cells.set(given.map((row) => [...row]));
    this.selected.set(null);
  }

  isFixed(row: number, col: number): boolean {
    return this.fixed()[row][col];
  }

  isSelected(row: number, col: number): boolean {
    const cell = this.selected();
    return !!cell && cell.row === row && cell.col === col;
  }

  hasConflict(row: number, col: number): boolean {
    return this.conflicts().has(this.key(row, col));
  }

  thickRight(col: number): boolean {
    return (col + 1) % BOX_COLS === 0 && col + 1 < SIZE;
  }

  thickBottom(row: number): boolean {
    return (row + 1) % BOX_ROWS === 0 && row + 1 < SIZE;
  }

  select(row: number, col: number): void {
    if (this.isFixed(row, col)) {
      return;
    }
    this.selected.set({ row, col });
  }

  place(value: number): void {
    const cell = this.selected();
    if (!cell || this.isFixed(cell.row, cell.col)) {
      return;
    }
    this.cells.update((grid) => {
      const next = grid.map((row) => [...row]);
      next[cell.row][cell.col] = next[cell.row][cell.col] === value ? 0 : value;
      return next;
    });
  }

  erase(): void {
    this.place(0);
  }

  @HostListener('window:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if (!this.selected()) {
      return;
    }
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key === '0') {
      this.erase();
      return;
    }
    const value = Number(event.key);
    if (value >= 1 && value <= SIZE) {
      this.place(value);
    }
  }

  private key(row: number, col: number): string {
    return `${row},${col}`;
  }

  private findConflicts(grid: Grid): Set<string> {
    const conflicts = new Set<string>();
    if (grid.length === 0) {
      return conflicts;
    }

    const mark = (cells: Cell[]) => {
      const seen = new Map<number, Cell>();
      for (const cell of cells) {
        const value = grid[cell.row][cell.col];
        if (value === 0) {
          continue;
        }
        const previous = seen.get(value);
        if (previous) {
          conflicts.add(this.key(cell.row, cell.col));
          conflicts.add(this.key(previous.row, previous.col));
        } else {
          seen.set(value, cell);
        }
      }
    };

    for (let i = 0; i < SIZE; i++) {
      mark(Array.from({ length: SIZE }, (_, j) => ({ row: i, col: j })));
      mark(Array.from({ length: SIZE }, (_, j) => ({ row: j, col: i })));
    }

    for (let boxRow = 0; boxRow < SIZE; boxRow += BOX_ROWS) {
      for (let boxCol = 0; boxCol < SIZE; boxCol += BOX_COLS) {
        const cells: Cell[] = [];
        for (let r = 0; r < BOX_ROWS; r++) {
          for (let c = 0; c < BOX_COLS; c++) {
            cells.push({ row: boxRow + r, col: boxCol + c });
          }
        }
        mark(cells);
      }
    }

    return conflicts;
  }
}
