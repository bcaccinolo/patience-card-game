import Game from '../../src/engine/game'
import Stack from '../../src/engine/stack'
import Card from '../../src/engine/card'

import pry from 'pryjs'
import chai from 'chai'
// Tell chai that we'll be using the "should" style assertions.
chai.should()

describe('Game', () => {
    let game

    beforeEach(() => {
        game = new Game()
    })

    describe('collisionCardsFor', () => {
        describe('for one top card', () => {
            let card

            beforeEach(() => {
                game.playingStacks[0].easyBuild(['1S'])
                game.playingStacks[1].easyBuild(['X6D', '4C'])
                game.playingStacks[2].easyBuild(['X6S', 'X8H', '11H'])
                game.playingStacks[3].easyBuild(['X9H', 'X5S', 'X1C', '4D'])
                game.playingStacks[4].easyBuild(['X6C', 'X13H', 'X2C', 'X7D', '7S'])
                game.playingStacks[5].easyBuild(['X6H', 'X10H', 'X13S', 'X11D', 'X2D', '4H'])
                game.playingStacks[6].easyBuild(['X8C', 'X9S', 'X12H', 'X11C', 'X12C', 'X4S', '13C'])
                // game.disp()

                card = game.playingStacks[4].lastOne()
            })

            it('works fine', () => {
                let collisionCards = game.collisionCardsFor(card)
                let resultStr = Stack.arrayEasyDisp(collisionCards)
                resultStr.should.equal("'1S', '4C', '11H', '4D', '4H', '13C', '0[D]', '0[H]', '0[S]', '0[C]'")
            })
        })

        describe('one of the top cards is not visible', () => {
            let card

            beforeEach(() => {
                game.playingStacks[0].easyBuild(['1S'])
                game.playingStacks[1].easyBuild(['X6D', 'X4C'])
                game.playingStacks[2].easyBuild(['X6S', 'X8H', '11H'])
                game.playingStacks[3].easyBuild(['X9H', 'X5S', 'X1C', '4D'])
                game.playingStacks[4].easyBuild(['X6C', 'X13H', 'X2C', 'X7D', '7S'])
                game.playingStacks[5].easyBuild(['X6H', 'X10H', 'X13S', 'X11D', 'X2D', '4H'])
                game.playingStacks[6].easyBuild(['X8C', 'X9S', 'X12H', 'X11C', 'X12C', 'X4S', '13C'])
                // game.disp()

                card = game.playingStacks[4].lastOne()
            })

            it('the non visible card is not in the result', () => {
                let collisionCards = game.collisionCardsFor(card)
                let resultStr = Stack.arrayEasyDisp(collisionCards)
                resultStr.should.equal("'1S', '11H', '4D', '4H', '13C', '0[D]', '0[H]', '0[S]', '0[C]'")
            })
        })

        describe('one of the stacks is empty', () => {
            let card

            beforeEach(() => {
                game.playingStacks[0].easyBuild(['1S'])
                game.playingStacks[1].easyBuild(['X6D', 'X4C'])
                game.playingStacks[2].easyBuild([])
                game.playingStacks[3].easyBuild(['X9H', 'X5S', 'X1C', '4D'])
                game.playingStacks[4].easyBuild(['X6C', 'X13H', 'X2C', 'X7D', '7S'])
                game.playingStacks[5].easyBuild(['X6H', 'X10H', 'X13S', 'X11D', 'X2D', '4H'])
                game.playingStacks[6].easyBuild(['X8C', 'X9S', 'X12H', 'X11C', 'X12C', 'X4S', '13C'])
                // game.disp()

                card = game.playingStacks[4].lastOne()
            })

            it('the empty stack returns its cardZero in the restul', () => {
                let collisionCards = game.collisionCardsFor(card)
                let resultStr = Stack.arrayEasyDisp(collisionCards)
                resultStr.should.equal("'1S', '0[7]', '4D', '4H', '13C', '0[D]', '0[H]', '0[S]', '0[C]'")
            })
        })

        describe('the argument card is not at the top but under others', () => {
            let card

            beforeEach(() => {
                game.playingStacks[0].easyBuild(['1S'])
                game.playingStacks[1].easyBuild(['X6D', 'X4C'])
                game.playingStacks[2].easyBuild(['X6S', 'X8H', '11H'])
                game.playingStacks[3].easyBuild(['X9H', 'X5S', 'X1C', '4D'])
                game.playingStacks[4].easyBuild(['X6C', 'X13H', '2C', '7D', '7S'])
                game.playingStacks[5].easyBuild(['X6H', 'X10H', 'X13S', 'X11D', 'X2D', '4H'])
                game.playingStacks[6].easyBuild(['X8C', 'X9S', 'X12H', 'X11C', 'X12C', 'X4S', '13C'])
                // game.disp()

                card = game.playingStacks[4].cards[2]
            })

            it('the cards over the argument card at not in the result', () => {
                let collisionCards = game.collisionCardsFor(card)
                let resultStr = Stack.arrayEasyDisp(collisionCards)
                resultStr.should.equal("'1S', '11H', '4D', '4H', '13C', '0[D]', '0[H]', '0[S]', '0[C]'")
            })
        })

        describe('there is cards on the color stacks', () => {
            let card

            beforeEach(() => {
                game.playingStacks[0].easyBuild(['1S'])
                game.playingStacks[1].easyBuild(['X6D', 'X4C'])
                game.playingStacks[2].easyBuild(['X6S', 'X8H', '11H'])
                game.playingStacks[3].easyBuild(['X9H', 'X5S', 'X1C', '4D'])
                game.playingStacks[4].easyBuild(['X6C', 'X13H', '2C', '7D', '7S'])
                game.playingStacks[5].easyBuild(['X6H', 'X10H', 'X13S', 'X11D', 'X2D', '4H'])
                game.playingStacks[6].easyBuild(['X8C', 'X9S', 'X12H', 'X11C', 'X12C', 'X4S', '13C'])
                game.colorStacks[0].easyBuild(['4D', '5D'])
                // game.disp()

                card = game.playingStacks[4].cards[2]
            })

            it('the cards over the argument card at not in the result', () => {
                let collisionCards = game.collisionCardsFor(card)
                let resultStr = Stack.arrayEasyDisp(collisionCards)
                resultStr.should.equal("'1S', '11H', '4D', '4H', '13C', '5D', '0[H]', '0[S]', '0[C]'")
            })
        })

        describe('there is cards on the color stacks v2', () => {
            let card

            beforeEach(() => {
                game.playingStacks[0].easyBuild(['1S'])
                game.playingStacks[1].easyBuild(['X6D', 'X4C'])
                game.playingStacks[2].easyBuild(['X6S', 'X8H', '11H'])
                game.playingStacks[3].easyBuild(['X9H', 'X5S', 'X1C', '4D'])
                game.playingStacks[4].easyBuild(['X6C', 'X13H', '2C', '7D', '7S'])
                game.playingStacks[5].easyBuild(['X6H', 'X10H', 'X13S', 'X11D', 'X2D', '4H'])
                game.playingStacks[6].easyBuild(['X8C', 'X9S', 'X12H', 'X11C', 'X12C', 'X4S', '13C'])
                game.colorStacks[0].easyBuild(['4D', '5D'])
                game.colorStacks[1].easyBuild(['6H', '7H'])
                // game.disp()

                card = game.playingStacks[4].cards[2]
            })

            it('the cards over the argument card at not in the result', () => {
                let collisionCards = game.collisionCardsFor(card)
                let resultStr = Stack.arrayEasyDisp(collisionCards)
                resultStr.should.equal("'1S', '11H', '4D', '4H', '13C', '5D', '7H', '0[S]', '0[C]'")
            })
        })
    })

    describe('popDeck', () => {
        describe('4 cards returned on the deck stack', () => {
            it('works fine', () => {
                game.stacks[0].cards.length.should.equal(0)
                game.deck.cards.length.should.equal(52)

                for (let i = 0; i < 4; i++) {
                    game.popDeck()
                }

                game.stacks[0].cards.length.should.equal(4)
                game.deck.cards.length.should.equal(48)
            })
        })
    })

    describe('moveCards', () => {
        describe('from the Deck', () => {
            describe('to an empty PlayingStack', () => {
                beforeEach(() => {
                    game.stacks[0].cards.push(new Card(13, 'spade'))
                    game.stacks[6].cards = []
                })

                it('works fine', () => {
                    game.moveCards(0, 6, 1).should.equal(true)
                    game.stacks[6].cards.length.should.equal(1)
                })
            })

            describe('to a ColorStack', () => {
                it('works fine', () => {
                    game.deck.cards.push(new Card(1, 'heart'))
                    game.popDeck()
                    game.moveCards(0, 2, 1).should.equal(true)
                    game.stacks[2].cards.length.should.equal(1)
                })
            })
        })

        describe('from a Playing stack', () => {
            describe('to a Color stack', () => {
                it('works fine', () => {
                    game.stacks[5].cards.push(new Card(1, 'spade'))

                    game.moveCards(5, 3, 1).should.equal(true)
                    game.stacks[3].cards.length.should.equal(1)
                })
            })

            describe('to another Playing stack', () => {
                describe('moving 1 card', () => {
                    it('works fine', () => {
                        game.stacks[5].cards.push(new Card(1, 'spade'))
                        game.stacks[6].cards.push(new Card(2, 'heart'))

                        game.moveCards(5, 6, 1).should.equal(true)
                    })
                })

                describe('moving 2 cards', () => {
                    it('works fine', () => {
                        game.stacks[5].easyBuild(['3S', '2D'])
                        game.stacks[6].easyBuild(['4H'])

                        game.moveCards(5, 6, 2).should.equal(true)
                        game.stacks[6].easyDisp().should.equal("'4H', '3S', '2D'")
                    })
                })
            })
        })
    })

    it('distributes correctly', () => {
        game.distribute()
        for (var index = 1; index <= 7; index++) {
            let stack = game.stacks[index + 4]
            stack.cards.length.should.equal(index)
            stack.cards.pop().visible.should.equal(true)
        }
    })

    describe('isMovePossible', () => {
        // the rules here

        describe('sourceIndex is DeckStack', () => {
            beforeEach(() => {
                game.deck.pop(game.deckStack) // moving one card on the desckStack
            })

            describe('quantity is 0', () => {
                it('returns false', () => {
                    game.isMovePossible(0, 7, 0).should.equal(false)
                })
            })

            describe('quantity is more than 1', () => {
                it('returns false', () => {
                    game.isMovePossible(0, 7, 10).should.equal(false)
                })
            })

            describe('destIndex is a ColorStack', () => {
                describe('destination stack is empty', () => {
                    beforeEach(() => {
                        game.stacks[3].cards = []
                    })
                    describe('moved card is an ace', () => {
                        beforeEach(() => {
                            game.stacks[0].cards.push(new Card(1, 'spade'))
                        })
                        it('returns true', () => {
                            game.isMovePossible(0, 3, 1).should.equal(true)
                        })
                    })
                    describe('moved card is not an ace', () => {
                        beforeEach(() => {
                            game.stacks[0].cards.push(new Card(11, 'heart'))
                        })
                        it('returns false', () => {
                            game.isMovePossible(0, 3, 1).should.equal(false)
                        })
                    })
                })

                describe('destination stack is not empty', () => {
                    beforeEach(() => {
                        game.stacks[3].cards.push(new Card(1, 'spade'))
                    })
                    describe('moved card does not follow the top card', () => {
                        beforeEach(() => {
                            game.stacks[0].cards.push(new Card(11, 'spade'))
                        })
                        it('returns false', () => {
                            game.isMovePossible(0, 3, 1).should.equal(false)
                        })
                    })
                    describe('moved card does not have the same color', () => {
                        beforeEach(() => {
                            game.stacks[0].cards.push(new Card(11, 'heart'))
                        })
                        it('returns false', () => {
                            game.isMovePossible(0, 3, 1).should.equal(false)
                        })
                    })
                    describe('moved card follows the value and has the same color', () => {
                        beforeEach(() => {
                            game.stacks[0].cards.push(new Card(2, 'spade'))
                        })
                        it('returns true', () => {
                            game.isMovePossible(0, 3, 1).should.equal(true)
                        })
                    })
                })
            })

            describe('destIndex is a PlayingStack', () => {
                describe('PlayingStack is empty', () => {

                    describe('source card is a King', () => {
                        beforeEach(() => {
                            game.stacks[0].cards.push(new Card(13, 'spade'))
                            game.stacks[5].cards = []
                        })

                        it('returns true', () => {
                            game.isMovePossible(0, 5, 1).should.equal(true)
                        })
                    })

                    describe('source card is NOT a King', () => {
                        beforeEach(() => {
                            game.stacks[0].cards.push(new Card(1, 'spade'))
                            game.stacks[5].cards = []
                        })

                        it('returns true', () => {
                            game.isMovePossible(0, 5, 1).should.equal(false)
                        })
                    })
                })

                describe('card color does not match with the last stack card', () => {
                    beforeEach(() => {
                        game.stacks[0].cards.push(new Card(3, 'spade'))
                        game.stacks[5].cards.push(new Card(4, 'heart'))
                    })
                    it('returns false', () => {
                        game.isMovePossible(0, 5, 1).should.equal(true)
                    })
                })

                describe('last card color does match with the last stack card', () => {
                    beforeEach(() => {
                        game.stacks[0].cards.push(new Card(3, 'heart'))
                        game.stacks[5].cards.push(new Card(4, 'heart'))
                    })
                    it('returns true', () => {
                        game.isMovePossible(0, 5, 1).should.equal(false)
                    })
                })
            })
        })

        describe('sourceIndex is ColorStack', () => {
            it('returns false', () => {
                game.isMovePossible(1, 5, 1).should.equal(false)
            })
        })

        describe('sourceIndex is PlayingStack', () => {
            describe('destIndex is DeckStack', () => {
                it('returns false', () => {
                    game.isMovePossible(5, 0, 1).should.equal(false)
                })
            })

            describe('destIndex is ColorStack', () => {
                describe('quantity is 0', () => {
                    it('returns false', () => {
                        game.isMovePossible(5, 2, 0).should.equal(false)
                    })
                })

                describe('quantity is more than 1', () => {
                    it('returns false', () => {
                        game.isMovePossible(5, 2, 5).should.equal(false)
                    })
                })

                describe('quantity is 1', () => {
                    describe('destIndex is empty', () => {
                        beforeEach(() => {
                            game.stacks[2].cards = [] // heart
                        })

                        describe('card is an ACE of the same color', () => {
                            beforeEach(() => {
                                game.stacks[5].cards.push(new Card(1, 'heart'))
                            })

                            it('should work', () => {
                                game.isMovePossible(5, 2, 1).should.equal(true)
                            })
                        })

                        describe('card is an ACE of different color', () => {
                            beforeEach(() => {
                                game.stacks[5].cards.push(new Card(1, 'diamond'))
                            })

                            it('should work', () => {
                                game.isMovePossible(5, 2, 1).should.equal(false)
                            })
                        })

                        describe('card is NOT an ACE', () => {
                            beforeEach(() => {
                                game.stacks[5].cards.push(new Card(8, 'diamond'))
                            })

                            it('should work', () => {
                                game.isMovePossible(5, 2, 1).should.equal(false)
                            })
                        })
                    })
                })

                describe('new card follows the value and color of the card on the ColorStack ', () => {
                    beforeEach(() => {
                        game.stacks[5].cards.push(new Card(7, 'heart'))
                        game.stacks[2].cards.push(new Card(6, 'heart'))
                    })
                    it('returns true', () => {
                        game.isMovePossible(5, 2, 1).should.equal(true)
                    })
                })

                describe('new card does not follow the value but color is the same', () => {
                    beforeEach(() => {
                        game.stacks[5].cards.push(new Card(10, 'heart'))
                        game.stacks[2].cards.push(new Card(6, 'heart'))
                    })
                    it('returns false', () => {
                        game.isMovePossible(5, 2, 1).should.equal(false)
                    })
                })

                describe('new card follows the value but color is not the same', () => {
                    beforeEach(() => {
                        game.stacks[5].cards.push(new Card(7, 'diamond'))
                        game.stacks[2].cards.push(new Card(6, 'heart'))
                    })
                    it('returns false', () => {
                        game.isMovePossible(5, 2, 1).should.equal(false)
                    })
                })
            })

            describe('destIndex is PlayingStack', () => {
                describe('quantity is 0', () => {
                    it('returns false', () => {
                        game.isMovePossible(5, 6, 0).should.equal(false)
                    })
                })

                describe('destination stack is empty', () => {
                    describe('the card to move is a King(value = 13)', () => {
                        beforeEach(() => {
                            game.stacks[6].cards = []
                            game.stacks[5].easyBuild(['13C'])
                        })
                        it('returns true', () => {
                            game.isMovePossible(5, 6, 1).should.equal(true)
                        })
                    })

                    describe('the card to move is NOT a King', () => {
                        beforeEach(() => {
                            game.stacks[6].cards = []
                            game.stacks[5].easyBuild(['1C'])
                        })
                        it('returns true', () => {
                            game.isMovePossible(5, 6, 1).should.equal(false)
                        })
                    })

                })

                describe('first card moved follows the value of the top card and has opposite color', () => {
                    beforeEach(() => {
                        game.stacks[5].cards.push(new Card(12, 'spade', true))
                        game.stacks[5].cards.push(new Card(11, 'heart', true))
                        game.stacks[5].cards.push(new Card(10, 'spade', true))

                        game.stacks[6].cards.push(new Card(13, 'diamond', true))
                    })
                    it('returns true', () => {
                        game.isMovePossible(5, 6, 3).should.equal(true)
                    })
                })

                describe('first card moved follows the value of the top card but has not opposite color', () => {
                    beforeEach(() => {
                        game.stacks[5].cards.push(new Card(12, 'spade', true))
                        game.stacks[5].cards.push(new Card(11, 'heart', true))
                        game.stacks[5].cards.push(new Card(10, 'spade', true))

                        game.stacks[2].cards.push(new Card(13, 'club', true))
                    })
                    it('returns false', () => {
                        game.isMovePossible(5, 2, 1).should.equal(false)
                    })
                })

                describe('first card moved does not follow the value of the top card', () => {
                    beforeEach(() => {
                        game.stacks[5].cards.push(new Card(12, 'spade', true))
                        game.stacks[5].cards.push(new Card(11, 'heart', true))
                        game.stacks[5].cards.push(new Card(10, 'spade', true))

                        game.stacks[2].cards.push(new Card(5, 'heart', true))
                    })
                    it('returns false', () => {
                        game.isMovePossible(5, 2, 1).should.equal(false)
                    })
                })
            })
        })
    })
})
