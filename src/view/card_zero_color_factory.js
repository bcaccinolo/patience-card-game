import CardZeroFactory from './card_zero_factory'

export default class CardZeroColorFactory extends CardZeroFactory {
    createView(card, index) {
        let view = this.createBasicView(card, index)
        this.addCollisionProperties(view)
        return view
    }

    createBasicView(card, index) {
        let texture = this.getTexture(card)
        let view = new this.pixi.Sprite(texture)
        view.tint = 0x00FFFF // tinting for fun and visibilty
        view.card = card
        card.view = view

        view.x = 290 + index * 90
        view.y = 10

        return view
    }

    getTexture(card) {
        let texturePath = './images/cards/card-zero-' + card.color + '.png'
        return this.pixi.Texture.fromImage(texturePath)
    }
}
