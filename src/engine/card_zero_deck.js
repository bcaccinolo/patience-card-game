import Card from './card'

export default class CardDeckZero extends Card {
    constructor(deck) {
        super(0, null, false)
        this.deck = deck
    }

    toString() {
        return ('[ 0 card of deck stack]')
    }

    easyDisp() {
        return "'0[Deck]'"
    }
}