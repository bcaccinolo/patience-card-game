import Card from './card'
import CardDeckZero from './card_zero_deck'

// this is the deck with all the returned cards
export default class Deck {
    constructor(game) {
        this.game = game
        this.cards = []
        this.cardZero = new CardDeckZero(this)

        this.generateCards()
        this.shuffle()
    }

    easyBuild(list) {
        this.cards = []
        list.forEach((element) => {
            this.cards.push(Card.easyBuild(element))
        })
    }

    generateCards() {
        let colors = ['heart', 'diamond', 'spade', 'club']
        for (let index = 1; index < 14; index++) {
            colors.forEach((color) => {
                let card = new Card(index, color, false)
                this.cards.push(card)
            })
        }
    }

    shuffle() {
        this.cards.sort((a, b) => { return 0.5 - Math.random() })
    }

    popOne(stack, visible = true) {
        let card = this.cards.pop()
        card.visible = visible
        stack.push(card)
    }

    pop(stack, quantity = 1, visible = true) {
        for (var index = 0; index < quantity; index++) {
            this.popOne(stack, visible)
        }
    }

    push(card) {
        this.cards.push(card)
        card.deck = this
        card.next = null // on n´a pas besoin du concept de next dans le Deck
    }

    last(quantity = 1) {
        if (this.empty()) { return null }
        if (this.cards.length < quantity) { return null }

        let cards = []
        for (var index = quantity; index > 0; index--) {
            cards.push(this.cards[this.cards.length - index])
        }
        if (cards.length === 1) { return cards[0] }
        return cards
    }

    lastOne() {
        let res = this.last()
        if (res === null) {
            return null
        }
        return this.last()[0]
    }

    empty() {
        return (this.cards.length === 0)
    }

    disp() {
        this.cards.forEach((card) => { card.disp() })
    }

    toString() {
        return this.cards.map((card) => { return card.toString() }).join()
    }
}
