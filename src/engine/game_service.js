import Game from './game'

export default class GameService {
    constructor() {
        this.game = new Game()
    }


    nextPossibleMoves() {

        // can you pop the deck

        // iterer sur les cartes visibles des playings stacks

    }

    // NOT USED YET
    // nextPossibleMovesFromStack(index) {
    //     let stack = this.game.stacks[index]
    //     let visibleCardsCount = stack.visibleCardsCount()

    //     if (visibleCardsCount === 0) {
    //         return null
    //     }

    //     let moves = []
    //     for (let i = 1; i <= visibleCardsCount; i++) {
    //         moves = moves.concat(this.nextPossibleMovesFromStackAndCards(index, i))
    //     }

    //     return moves
    // }

    // nextPossibleMovesFromStackAndCards(stackIndex, cardQuantity) {
    //     let moves = []
    //     for (let destinationIndex = 1; destinationIndex <= 11; destinationIndex++) {
    //         if (this.game.isMovePossible(stackIndex, destinationIndex, cardQuantity)) {
    //             moves.push({ source: stackIndex, destination: destinationIndex, quantity: cardQuantity })
    //         }
    //     }
    //     return moves
    // }
}
