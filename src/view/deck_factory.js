import CardViewFactory from './card_view_factory'
import CardViewService from './card_view_service'

export default class DeckFactory {
    constructor(pixi, board) {
        this.pixi = pixi
        this.board = board
        this.game = this.board.game
        this.deck = this.game.deck
        this.deckStack = this.game.deckStack
    }

    createTopCardView() {
        let card = this.deck.last()
        if (card === null) {
            return null
        }

        if (card.hasView() === false) {
            this.board.cardFactory.createBasicView(card)
            CardViewService.assignMethods(card.view)
            card.deck = this.deck
            card.deckStack = this.deckStack
        }

        this.board.cardFactory.makeClickableForDeck(card.view)
        this.makeVisible(card.view)
        this.setDeckPosition(card.view)

        return card.view
    }

    setDeckPosition(view) {
        view.anchor.set(0)
        view.x = 20
        view.y = 10
    }

    makeVisible(view) {
        view.visible = true
    }
}
