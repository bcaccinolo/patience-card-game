import Game from './engine/game'
import Board from './view/board'

let game = new Game()
game.distribute()

// game.deck.cards = []
// game.deck.easyBuild(['X3S', 'X12H', 'X1D', 'X13S'])
// game.stacks[0].easyBuild([])

// game.playingStacks[0].easyBuild([])
// game.playingStacks[1].easyBuild([])
// game.playingStacks[2].easyBuild([])
// game.playingStacks[3].easyBuild(['2D'])
// game.playingStacks[4].easyBuild(['X6C', 'X13H', 'X2C', 'X7D', '5S'])
// game.playingStacks[5].easyBuild(['X6H', 'X10H', 'X13S', 'X11S', 'X1C', 'X12H'])
// game.playingStacks[6].easyBuild(['X8C', 'X9S', 'X12H', 'X11C', 'X12C', 'X4S', '13C'])

// game.colorStacks[0].easyBuild(['1D', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', '11D', '12D', '13D'])
// game.colorStacks[1].easyBuild(['1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', '11H', '12H', '13H'])
// game.colorStacks[2].easyBuild(['1S', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', '11S', '12S', '13S'])
// game.colorStacks[3].easyBuild(['1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', '11C', '12C', '13C'])

// game.disp()

const pixi = PIXI

let app = new pixi.Application(640, 600, {backgroundColor: 0x008400})
document.getElementById('patience').appendChild(app.view)

let board = new Board(game, pixi, app)

board.createSpriteCardsZeroColor()
board.dispAllStacks()
board.dispDeckAndDeckStack()
