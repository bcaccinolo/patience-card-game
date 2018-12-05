import Stack from '../../src/engine/stack'
import Deck from '../../src/engine/deck'
import Card from '../../src/engine/card'

import pry from 'pryjs'
import chai from 'chai'
// Tell chai that we'll be using the "should" style assertions.
chai.should()

describe('Stack', () => {
    let stack

    beforeEach(() => {
        stack = new Stack()
    })

    describe('cardZero added on creation', () => {
        it('works fine', () => {
            let cardZero = stack.cardZero
            cardZero.value.should.equal(0)
            let colorIsNull = (cardZero.color === null)
            colorIsNull.should.equal(true)
        })
    })

    describe('pop', () => {
        describe('pops one card', () => {
            let stack2

            beforeEach(() => {
                stack2 = new Stack()
                stack.easyBuild(['2S', '3D'])
                stack.pop(stack2)
            })

            it('works fine', () => {
                stack.lastOne().easyDisp().should.equal("'2S'")
                stack2.lastOne().easyDisp().should.equal("'3D'")
            })
        })

        describe('pops multiple cards', () => {
            let stack2

            beforeEach(() => {
                stack2 = new Stack()
                stack.easyBuild(['2S', '3D', '4C', '5H'])
                stack.pop(stack2, 3)
            })

            it('works fine', () => {
                stack.easyDisp().should.equal("'2S'")
                stack2.easyDisp().should.equal("'3D', '4C', '5H'")
            })
        })
    })

    describe('push()', () => {
        let card1, card2
        beforeEach(() => {
            card1 = new Card(4, 'heart')
            card2 = new Card(13, 'diamond')
            stack.push(card1)
            stack.push(card2)
        })

        it('card.next is defined correctly', () => {
            card1.next.should.equal(card2)
        })
    })

    describe('last()', () => {
        describe('stack is empty', () => {
            beforeEach(() => {
                stack.cards = []
            })
            it('returns null', () => {
                (stack.last() === null).should.equal(true)
            })
        })

        describe('stack is not empty', () => {
            let card1
            let card2

            beforeEach(() => {
                card1 = new Card(1, 'spade')
                card2 = new Card(9, 'heart')
                stack.cards = []
                stack.cards.push(card1)
                stack.cards.push(card2)
            })
            it('returns the last card', () => {
                let last = stack.last()
                last[0].should.equal(card2)
            })
            it('returns the 2 last cards', () => {
                let cards = stack.last(2)
                cards[0].should.equal(card1)
                cards[1].should.equal(card2)
            })
            it('returns null if quantity higher than deck.length', () => {
                (stack.last(5) === null).should.equal(true)
            })
        })
    })

    describe('visibleCardsCount', () => {
        describe('no cards in the stack', () => {
            it('works fine', () => {
                stack.visibleCardsCount().should.equal(0)
            })
        })

        describe('cards in the stack', () => {
            it('works fine', () => {
                stack.cards.push(new Card(1, 'spade', false))
                stack.cards.push(new Card(5, 'diamond', false))
                stack.cards.push(new Card(5, 'diamond', true))

                stack.visibleCardsCount().should.equal(1)
            })

            it('works fine', () => {
                stack.cards.push(new Card(1, 'spade', false))
                stack.cards.push(new Card(5, 'diamond', false))
                stack.cards.push(new Card(5, 'diamond', false))

                stack.visibleCardsCount().should.equal(0)
            })

            it('works fine', () => {
                stack.cards.push(new Card(1, 'spade', false))
                stack.cards.push(new Card(5, 'diamond', false))
                stack.cards.push(new Card(5, 'diamond', true))
                stack.cards.push(new Card(13, 'diamond', true))
                stack.cards.push(new Card(6, 'diamond', true))

                stack.visibleCardsCount().should.equal(3)
            })
        })
    })
})
