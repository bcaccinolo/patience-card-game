import Card from '../../src/engine/card'
import Stack from '../../src/engine/stack'
import Game from '../../src/engine/game'

import pry from 'pryjs'
import chai from 'chai'
// Tell chai that we'll be using the "should" style assertions.
chai.should()

// =============================================
// Reference documentation
// https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/
// =============================================

describe('Card', () => {
    let card

    beforeEach(() => {
        card = new Card(5, 'spade')
    })

    it('creates a card correctly', () => {
        card.value.should.equal(5)
        card.color.should.equal('spade')
    })

    it('follows the card', () => {
        card.follows(new Card(4, 'spade')).should.equal(true)
        card.follows(new Card(9, 'spade')).should.equal(false)
        card.follows(new Card(4, 'heart')).should.equal(false)
    })

    it('follows with opposite color', () => {
        card.followsWithOppositeColor(new Card(4, 'spade')).should.equal(false)
        card.followsWithOppositeColor(new Card(3, 'spade')).should.equal(false)
        card.followsWithOppositeColor(new Card(4, 'heart')).should.equal(true)
        card.followsWithOppositeColor(new Card(4, 'diamond')).should.equal(true)
    })

    describe('getIndexPosition', () => {
        let game
        let card

        beforeEach(() => {
            game = new Game()
            game.distribute()
            card = game.stacks[11].cards[4]
        })

        it('works fine', () => {
            card.getIndexPosition().should.to.have.deep.members([11, 4])
        })
    })

    describe('topCardsCount', () => {
        describe('just on card', () => {
            let card

            beforeEach(() => {
                let stack = new Stack()
                stack.easyBuild(['3S'])
                card = stack.cards[0]
            })

            it('works fine', () => {
                card.topCardsCount().should.equal(1)
            })
        })

        describe('several cards after', () => {
            let card

            beforeEach(() => {
                let stack = new Stack()
                stack.easyBuild(['3S', '4H', '5S'])
                card = stack.cards[0]
            })

            it('works fine', () => {
                card.topCardsCount().should.equal(3)
            })
        })
    })

    describe('easyBuild', () => {
        it('works fine', () => {
            let card = Card.easyBuild('X4S')
            card.color.should.equal('spade')
            card.value.should.equal(4)
        })

        it('works fine', () => {
            let card = Card.easyBuild('12D')
            card.color.should.equal('diamond')
            card.value.should.equal(12)
            card.visible.should.equal(true)
        })
    })
})
