import GameService from '../../src/engine/game_service'
import Card from '../../src/engine/card'
import chai from 'chai'

import pry from 'pryjs'


// Tell chai that we'll be using the "should" style assertions.
chai.should()

describe('GameService', () => {
    let gameService
    let game

    beforeEach(() => {
        gameService = new GameService()
        game = gameService.game
    })

    // NOT USED YET
    // describe('nextPossibleMovesFromStackAndCards', () => {
    //     it('works fine', () => {
    //         game.stacks[1].cards = []
    //         game.stacks[2].cards.push(new Card(2, 'heart'))
    //         game.stacks[3].cards = []
    //         game.stacks[4].cards = []

    //         game.stacks[5].cards.push(new Card(3, 'heart'))
    //         game.stacks[6].cards = [] // empty stack
    //         game.stacks[7].cards.push(new Card(5, 'heart', false)) // not visible card on top
    //         game.stacks[8].cards.push(new Card(4, 'spade')) // should be ok to move here
    //         game.stacks[9].cards.push(new Card(4, 'diamond')) // should NOT be ok to move here
    //         game.stacks[10].cards = []
    //         game.stacks[11].cards = []

    //         let res = gameService.nextPossibleMovesFromStackAndCards(5, 1)
    //         let expected = [ { source: 5, destination: 2, quantity: 1 },
    //             { source: 5, destination: 6, quantity: 1 },
    //             { source: 5, destination: 8, quantity: 1 },
    //             { source: 5, destination: 10, quantity: 1 },
    //             { source: 5, destination: 11, quantity: 1 } ]

    //         res.should.to.have.deep.members(expected)
    //     })
    // })

    // describe('nextPossibleMovesFromStack', () => {
    //     it('works fine', () => {
    //         game.stacks[1].cards = []
    //         game.stacks[2].cards.push(new Card(2, 'heart'))
    //         game.stacks[3].cards = [new Card(5, 'spade')]
    //         game.stacks[4].cards = []

    //         game.stacks[5].cards = [new Card(3, 'heart'), new Card(6, 'spade')]
    //         game.stacks[6].cards = [] // empty stack
    //         game.stacks[7].cards.push(new Card(5, 'heart', false)) // not visible card on top
    //         game.stacks[8].cards = []
    //         game.stacks[9].cards = []
    //         game.stacks[10].cards = []
    //         game.stacks[11].cards = []

    //         let res = gameService.nextPossibleMovesFromStack(5)
    //         let expected = [ { source: 5, destination: 3, quantity: 1 },
    //             { source: 5, destination: 6, quantity: 1 },
    //             { source: 5, destination: 8, quantity: 1 },
    //             { source: 5, destination: 9, quantity: 1 },
    //             { source: 5, destination: 10, quantity: 1 },
    //             { source: 5, destination: 11, quantity: 1 },
    //             { source: 5, destination: 6, quantity: 2 },
    //             { source: 5, destination: 8, quantity: 2 },
    //             { source: 5, destination: 9, quantity: 2 },
    //             { source: 5, destination: 10, quantity: 2 },
    //             { source: 5, destination: 11, quantity: 2 } ]
    //         res.should.to.have.deep.members(expected)
    //     })
    // })
})
