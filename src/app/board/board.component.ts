import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
  }

  get player(): 'O'|'X' {
    return this.xIsNext ? 'O' : 'X';
  }

  makeMove(idx: number): void {
    if (!this.squares[idx] && !this.winner) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(): string {
    const winPositions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ];
    for (let i=0; i<winPositions.length;  i++) {
      const [a, b, c] = winPositions[i];
      if(
        this.squares[a] &&
        this.squares[a] == this.squares[b] &&
        this.squares[b] == this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
