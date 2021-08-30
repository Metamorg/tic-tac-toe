class TicTacToe {
    constructor() {
        this.currentPlayer = 'x'
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.currentPlayer
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x'
        }
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns()
    }

    getWinner() {
        if (this.field[0][0] === this.field[0][1] && this.field[0][1] === this.field[0][2]) {
            return this.field[0][0];
        }
        if (this.field[1][0] === this.field[1][1] && this.field[1][1] === this.field[1][2]) {
            return this.field[1][0];
        }
        if (this.field[2][0] === this.field[2][1] && this.field[2][1] === this.field[2][2]) {
            return this.field[2][0];
        }
        if (this.field[0][0] === this.field[1][0] && this.field[1][0] === this.field[2][0]) {
            return this.field[0][0];
        }
        if (this.field[0][1] === this.field[1][1] && this.field[1][1] === this.field[2][1]) {
            return this.field[0][1];
        }
        if (this.field[0][2] === this.field[1][2] && this.field[1][2] === this.field[2][2]) {
            return this.field[0][2];
        }
        if (this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) {
            return this.field[0][0];
        }
        if (this.field[0][2] === this.field[1][1] && this.field[1][1] === this.field[2][0]) {
            return this.field[0][2];
        }
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.field.length; i++) {
            if (this.field[i].includes(null)) {
                return false;
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner()
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex]
    }
}

module.exports = TicTacToe