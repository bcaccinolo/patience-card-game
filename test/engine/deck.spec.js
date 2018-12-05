import Deck from '../../src/engine/deck'
import Stack from '../../src/engine/stack'
import Card from '../../src/engine/card'

import chai from 'chai'
// Tell chai that we'll be using the "should" style assertions.
chai.should()
let expect = chai.expect

// =============================================
// Reference documentation
// https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/
// =============================================

describe('Deck', () => {
    let deck

    beforeEach(() => {
        deck = new Deck()
    })

    it('contains 52 cards', () => {
        deck.cards.length.should.equal(52)
    })

    it('pops correctly', () => {
        let stack = new Stack()
        deck.pop(stack)

        deck.cards.length.should.equal(51)
        stack.cards.length.should.equal(1)
    })

    it('pops not visible card correctly', () => {
        let stack = new Stack()
        deck.pop(stack, 1, false)

        deck.cards.length.should.equal(51)
        stack.cards.length.should.equal(1)
        stack.cards.pop().visible.should.equal(false)
    })

    it('pops more than 1 card', () => {
        let stack = new Stack()
        let quantity = 3
        deck.pop(stack, quantity)

        deck.cards.length.should.equal(52 - quantity)
        stack.cards.length.should.equal(quantity)
    })

    describe('last()', () => {
        describe('stack is empty', () => {
            beforeEach(() => {
                deck.cards = []
            })
            it('returns null', () => {
                (deck.last() === null).should.equal(true)
            })
        })
        describe('stack is not empty', () => {
            let card1
            let card2

            beforeEach(() => {
                card1 = new Card(1, 'spade')
                card2 = new Card(9, 'heart')
                deck.cards = []
                deck.cards.push(card1)
                deck.cards.push(card2)
            })
            it('returns the last card', () => {
                let last = deck.last()
                last.should.equal(card2)
            })
            it('returns the 2 last cards', () => {
                let cards = deck.last(2)
                cards[0].should.equal(card1)
                cards[1].should.equal(card2)
            })
            it('returns null if quantity higher than deck.length', () => {
                (deck.last(5) === null).should.equal(true)
            })
        })
    })
})
