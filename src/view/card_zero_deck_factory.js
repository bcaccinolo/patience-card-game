
export default class CardZeroDeckFactory {
    constructor(pixi, board) {
        this.pixi = pixi
        this.board = board
        this.card = this.board.game.deck.cardZero
    }

    createView() {
        let view = this.createBasicView()
        this.makeClickable()
        return view
    }

    createBasicView() {
        let card = this.card
        let texture = this.getTexture()
        let view = new this.pixi.Sprite(texture)
        view.card = card
        card.view = view

        view.tint = 0x00FFFF // tinting for fun and visibilty

        view.x = 20
        view.y = 10

        return view
    }

    getTexture() {
        let texturePath = './images/cards/card-zero.png'
        return this.pixi.Texture.fromImage(texturePath)
    }

    makeClickable() {
        let view = this.card.view
        view.interactive = true // this will allow it to respond to mouse and touch events
        view.buttonMode = true
        view.on('click', this.rewindDeck)
    }

    rewindDeck(event) {
        event.stopPropagation()

        let view = event.currentTarget
        let card = view.card
        let deck = card.deck
        let game = deck.game
        let deckStack = game.deckStack

        deckStack.moveCardsBackOnDeck()

        deck.cards.forEach((card) => {
            card.visible = false
            card.view.visible = false
            card.view.setTexture(card.view.backTexture)
        })

        let deckView = game.board.deckFactory.createTopCardView()
        game.board.app.stage.addChild(deckView)
    }
}
