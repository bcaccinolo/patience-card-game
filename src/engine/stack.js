import Card from './card'
import CardZero from './card_zero'

// This is a stack of cards
export default class Stack {
    constructor(game) {
        this.cards = []
        this.game = game
        this.cardZero = new CardZero(this)
    }

    push(card) {
        this.cards.push(card)
        card.stack = this

        let lastTwo = this.last(2)
        if (lastTwo !== null) {
            lastTwo[0].next = lastTwo[1]
        }
    }

    pop(stack, quantity = 1) {
        let cards = this.cards.splice(this.cards.length - quantity, quantity)
        let lastCard = this.lastOne()
        if (lastCard) {
            lastCard.next = null
        }

        cards.forEach((card) => {
            stack.push(card)
        })

        return true
    }

    disp() {
        console.log(this.toString())
    }

    toString() {
        return this.cards.map((card) => { return card.toString() })
    }

    easyDisp() {
        let cards = this.cards
        return Stack.arrayEasyDisp(cards)
    }

    static arrayEasyDisp(cards) {
        let list = cards.map((card) => {
            return card.easyDisp()
        })
        if (list) {
            return list.join(', ')
        } else {
            return ''
        }
    }

    last(quantity = 1) {
        if (this.empty()) { return null }
        if (this.cards.length < quantity) { return null }

        let cards = []
        for (var index = quantity; index > 0; index--) {
            cards.push(this.cards[this.cards.length - index])
        }
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
        if (this.cards.length === 0) { return true } else { return false }
    }

    visibleCardsCount() {
        return this.visibleCards().length
    }

    visibleCards() {
        if (this.empty()) {
            return []
        }

        let index = this.cards.length - 1
        let cards = []
        let foundNonVisibleCard = false
        while (foundNonVisibleCard === false) {
            if (index < 0) {
                break
            }

            let c = this.cards[index]
            if (c.visible) {
                cards.push(c)
                index = index - 1
            } else {
                cards.reverse()
                foundNonVisibleCard = true
            }
        }
        return cards
    }

    getIndexPosition() {
        return this.game.stacks.indexOf(this)
    }

    easyBuild(list) {
        this.cards = []
        list.forEach((element) => {
            this.push(Card.easyBuild(element))
        })
    }
}
