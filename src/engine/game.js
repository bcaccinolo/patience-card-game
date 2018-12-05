import Deck from './deck'
import StackService from './stack_service.js'

export default class Game {
    constructor() {
        this.deck = new Deck(this)
        this.stacks = StackService.prepareStacks(this)
        this.deckStack = this.stacks[0]
        this.colorStacks = this.stacks.slice(1, 5)
        this.playingStacks = this.stacks.slice(5, 12)
    }

    distribute() {
        this.playingStacks.forEach((stack, index) => {
            this.deck.pop(stack, index + 1, false)
            let topCard = stack.last()[0]
            topCard.visible = true
        })
    }

    complete() {
        this.stacks[1].complete() &&
        this.stacks[2].complete() &&
        this.stacks[3].complete() &&
        this.stacks[4].complete()
    }

    isMovePossible(sourceIndex, destinationIndex, quantity = 1) {
        if (quantity === 0) { return false }

        if (StackService.isDeckStack(sourceIndex)) {
            return this.fromDeckStackIsMovePossible(sourceIndex, destinationIndex, quantity)
        }

        if (StackService.isPlayingStack(sourceIndex)) {
            return this.fromPlayingStackIsMovePossible(sourceIndex, destinationIndex, quantity)
        }

        // if sourceIndex is ColorStack
        return false
    }

    fromDeckStackIsMovePossible(sourceIndex, destinationIndex, quantity = 1) {
        let sourceStack = this.stacks[sourceIndex]
        let destinationStack = this.stacks[destinationIndex]
        let cardsToMove = sourceStack.last(quantity)
        let topStackCard = destinationStack.last()

        if (quantity > 1) { return false }

        if (StackService.isColorStack(destinationIndex)) {
            let card = cardsToMove[0]

            if (destinationStack.empty()) {

                if (card.value === 1) {
                    if (card.color === destinationStack.color) {
                        return true
                    }
                }
                return false
            } else {
                return card.follows(topStackCard[0])
            }
        }

        if (StackService.isPlayingStack(destinationIndex)) {

            if (destinationStack.empty()) {
                 // it's a king
                 if (cardsToMove[0].value === 13) {
                    return true
                }
                return false
            }

            if (topStackCard[0].followsWithOppositeColor(cardsToMove[0]) === true) {
                return true
            }
        }
        return false
    }

    fromPlayingStackIsMovePossible(sourceIndex, destinationIndex, quantity = 1) {
        let sourceStack = this.stacks[sourceIndex]
        let destinationStack = this.stacks[destinationIndex]
        let cardsToMove = sourceStack.last(quantity)
        let topStackCard = destinationStack.last()

        if (StackService.isColorStack(destinationIndex)) {
            if (quantity !== 1) {
                return false
            }
            if (destinationStack.empty()) {
                return cardsToMove[0].isAce(destinationStack.color)
            }
            return cardsToMove[0].follows(topStackCard[0])
        }

        if (StackService.isPlayingStack(destinationIndex)) {
            if (destinationStack.empty()) {
                // it's a king
                if (cardsToMove[0].value === 13) {
                    return true
                }
                return false
            }
            return topStackCard[0].followsWithOppositeColor(cardsToMove[0])
        }

        return false
    }

    moveCards(sourceIndex, destinationIndex, quantity = 1) {
        if (this.isMovePossible(sourceIndex, destinationIndex, quantity) === false) {
            // console.log('** move not possible **');
            return false
        }
        return this.stacks[sourceIndex].pop(this.stacks[destinationIndex], quantity)
    }

    popDeck() {
        this.deck.popOne(this.deckStack)
    }

    collisionCardsFor(card) {
        let topCards = this.playingTopCardsFor(card).concat(this.colorTopCards())

        let cards = topCards.reduce((result, card) => {
            if ((card === undefined) || (card === null)) {
                return result
            }
            if ((card.value === 0) || (card.visible === true)) {
                result.push(card)
            }
            return result
        }, [])

        return cards
    }

    playingTopCardsFor(card) {
        let stacks = this.playingStacks

        let topCards = stacks.map((stack) => {
            if (stack === card.stack) {
                return
            }
            if (stack.empty()) {
                return stack.cardZero
            }
            return stack.lastOne()
        })
        return topCards
    }

    colorTopCards() {
        let stacks = this.colorStacks

        let topCards = stacks.map((stack) => {
            if (stack.empty()) {
                return stack.cardZero
            }
            return stack.lastOne()
        })

        return topCards
    }

    disp() {
        let str = this.commonStacksDisp()
        str = str + this.playingStackDisp()
        // str = str + this.betterPlayingStackDisp()
        console.log(str)
    }

    easyDisp() {
        this.playingStacks.forEach((stack) => {
            console.log(stack.easyDisp())
        })
    }

    commonStacksDisp() {
        return 'Deck: ' + this.deck.toString() + '\n' +
        '[0] Deck Stack: ' + this.deckStack.toString() + '\n' +
        '[1] Diamond Stack: ' + this.stacks[1].toString() + '\n' +
        '[2] Heart Stack: ' + this.stacks[2].toString() + '\n' +
        '[3] Spade Stack: ' + this.stacks[3].toString() + '\n' +
        '[4] Club Stack: ' + this.stacks[4].toString() + '\n\n'
    }

    playingStackDisp() {
        let str = ''
        // playingStacks : index 5 -> 11
        for (var i = 0; i < 7; i++) {
            let index = i + 5
            str = str + '[' + index + '] : ' + this.stacks[index].toString() + '\n'
        }
        return str
    }

    betterPlayingStackDisp() {
        let full = 0
        let index = 0
        let str = ''
        while (full < 7) {
            full = 0
            let line = this.playingStacks.map((stack) => {
                if (stack.cards[index] === undefined) {
                    full++
                    return '\t '
                } else {
                    return stack.cards[index].toString()
                }
            })

            str = str + line.join(' \t ') + '\n'
            index++
        }
        return str
    }
}
