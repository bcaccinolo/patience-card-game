
import DeckFactory from './deck_factory'
import CardViewFactory from './card_view_factory'
import CardZeroFactory from './card_zero_factory'
import CardZeroDeckFactory from './card_zero_deck_factory'
import CardZeroColorFactory from './card_zero_color_factory'

export default class Board {
    constructor(game, pixi, app) {
        this.game = game
        this.game.board = this
        this.pixi = pixi
        this.app = app
        this.setBackTexture()
        this.deckFactory = new DeckFactory(this.pixi, this)
        this.cardFactory = new CardViewFactory(this.pixi, this)
    }

    setBackTexture() {
        let texturePath = './images/cards/back.png'
        this.backTexture = this.pixi.Texture.fromImage(texturePath)
    }

    dispDeckAndDeckStack() {
        let cardZeroDeck = this.createSpriteCardZeroDeck()

        let deckView = this.deckFactory.createTopCardView()
        this.app.stage.addChild(deckView)
    }

    dispAllStacks() {
        for (let i = 0; i < 7; i++) {
            this.dispStack(i)
        }
    }

    dispStack(stackIndex) {
        let stack = this.game.stacks[stackIndex + 5]

        this.createSpriteCardsZero(stack)
        this.createSpriteCards(stack)
    }

    createSpriteCardsZeroColor() {
        this.game.stacks.slice(1, 5).forEach((stack, index) => {
            if (stack.cardZero.hasView()) {
                return
            }

            let factory = new CardZeroColorFactory(this.pixi, this)
            let view = factory.createView(stack.cardZero, index)
            this.app.stage.addChild(view)
        })
    }

    createSpriteCardZeroDeck() {
        if (this.game.deck.cardZero.hasView()) {
            return
        }
        let deckCardZeroFactory = new CardZeroDeckFactory(this.pixi, this)
        deckCardZeroFactory.createView()
        this.app.stage.addChild(this.game.deck.cardZero.view)
    }

    createSpriteCardsZero(stack) {
        let zeroFactory = new CardZeroFactory(this.pixi, this)
        zeroFactory.createView(stack.cardZero)
        this.app.stage.addChild(stack.cardZero.view)
    }

    createSpriteCards(stack) {
        stack.cards.forEach((card) => {
            this.cardFactory.createView(card)
            this.app.stage.addChild(card.view)
        })
    }
}
