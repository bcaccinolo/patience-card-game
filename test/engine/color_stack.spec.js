import ColorStack from '../../src/engine/color_stack'
import Card from '../../src/engine/card'

import chai from 'chai'
// Tell chai that we'll be using the "should" style assertions.
chai.should()

describe('ColorStack', () => {
    let colorStack

    beforeEach(() => {
        colorStack = new ColorStack(null, 'heart')
    })

    describe('new', () => {
        it('contains a cardZero', () => {
            colorStack.cardZero.color.should.equal('heart')
        })
    })

    describe('complete', () => {
        beforeEach(() => {
            for (var index = 1; index <= 13; index++) {
                colorStack.push(new Card(index, 'heart'))
            }
        })

        it('returns true when complete', () => {
            colorStack.complete().should.equal(true)
        })

        it('returns false when uncomplete', () => {
            colorStack.cards.pop()

            colorStack.complete().should.equal(false)
        })

        it('returns false when one color is wrong', () => {
            colorStack.cards[7].color = 'spade'

            colorStack.complete().should.equal(false)
        })
    })
})
