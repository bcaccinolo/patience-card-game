import Stack from './stack'

export default class DeckStack extends Stack {

    moveCardsBackOnDeck() {
        let deck = this.game.deck
        this.cards.reverse().forEach((card) => {
            card.visible = false
            deck.push(card)
        })
        this.cards = []
    }
}
