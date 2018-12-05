import Stack from './stack'
import CardZeroColor from './card_zero_color'

// this is the stack you have to file in order to win the game
export default class ColorStack extends Stack {
    constructor(game, color) {
        super(game)
        this.color = color
        this.cardZero = new CardZeroColor(this)
    }

    complete() {
        let comparator = (initvalue, card, index, arr) => {
            return initvalue && (card.value === index + 1) && (card.color === this.color)
        }
        return this.cards.reduce(comparator, true) && (this.cards.length === 13)
    }
}
