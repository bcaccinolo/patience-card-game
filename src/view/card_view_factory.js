import CardViewService from './card_view_service'

export default class CardViewFactory {
    constructor(pixi, board) {
        this.pixi = pixi
        this.board = board
    }

    createView(card) {
        let view = this.createBasicView(card)
        this.makeViewDraggable(view)

        CardViewService.assignMethods(view)

        view.setCardTexture()
        view.setBoardPosition()
    }

    createBasicView(card) {
        let view
        let frontTexture = this.getTexture(card)
        let backTexture = this.board.backTexture

        if (card.visible === true) {
            view = new this.pixi.Sprite(frontTexture)
        } else {
            view = new this.pixi.Sprite(backTexture)
        }

        view.frontTexture = frontTexture
        view.backTexture = backTexture

        view.card = card
        card.view = view

        return view
    }

    getTexture(card) {
        let texturePath = './images/cards/' + card.color + '-' + card.value + '.png'
        return this.pixi.Texture.fromImage(texturePath)
    }

    makeViewDraggable(view) {
        view.interactive = true // this will allow it to respond to mouse and touch events
        view.buttonMode = true // this button mode will mean the hand cursor appears when you roll over
        view.anchor.set(0.5, 0.2)

        view.on('click', CardViewService.onClick)
        .on('pointerdown', CardViewService.onDragStart)
        .on('pointerup', CardViewService.onDragEnd)
        .on('pointermove', CardViewService.onDragMove)
        .on('pointerupoutside', CardViewService.onDragEnd)

        this.addCollisionProperties(view)
    }

    makeClickableForDeck(view) {
        view.interactive = true // this will allow it to respond to mouse and touch events
        view.buttonMode = true // this button mode will mean the hand cursor appears when you roll over

        view.removeAllListeners()
        view.on('click', CardViewService.onDeckClick)
    }

    // `addCollisionProperties` adds extra properties to sprites to help
    // simplify the collision code. It won't add these properties if they
    // already exist on the sprite. After these properties have been
    // added, this methods adds a Boolean property to the sprite called `_bumpPropertiesAdded`
    // and sets it to `true` to flag that the sprite has these
    // new properties
    addCollisionProperties(sprite) {
        // Add properties to Pixi sprites
        // if (this.renderer === "pixi") {

        if (sprite.gx === undefined) {
            Object.defineProperty(sprite, "gx", {
                get() { return sprite.getGlobalPosition().x },
                enumerable: true,
                configurable: true
            })
        }

        if (sprite.gy === undefined) {
            Object.defineProperty(sprite, "gy", {
                get(){return sprite.getGlobalPosition().y},
                enumerable: true, configurable: true
            })
        }

        if (sprite.centerX === undefined) {
            Object.defineProperty(sprite, "centerX", {
                get(){return sprite.x + sprite.width / 2},
                enumerable: true, configurable: true
            })
        }

        if (sprite.centerY === undefined) {
            Object.defineProperty(sprite, "centerY", {
                get(){return sprite.y + sprite.height / 2},
                enumerable: true, configurable: true
            })
        }

        if (sprite.halfWidth === undefined) {
            Object.defineProperty(sprite, "halfWidth", {
                get(){return sprite.width / 2},
                enumerable: true, configurable: true
            })
        }

        if (sprite.halfHeight === undefined) {
            Object.defineProperty(sprite, "halfHeight", {
                get(){return sprite.height / 2},
                enumerable: true, configurable: true
            })
        }

        if (sprite.xAnchorOffset === undefined) {
            Object.defineProperty(sprite, "xAnchorOffset", {
                get() {
                    if (sprite.anchor !== undefined) {
                        return sprite.width * sprite.anchor.x
                    } else {
                        return 0
                    }
                },
                enumerable: true, configurable: true
            })
        }

        if (sprite.yAnchorOffset === undefined) {
            Object.defineProperty(sprite, "yAnchorOffset", {
                get() {
                    if (sprite.anchor !== undefined) {
                        return sprite.height * sprite.anchor.y
                    } else {
                        return 0
                    }
                },
                enumerable: true, configurable: true
            })
        }

        if (sprite.circular && sprite.radius === undefined) {
            Object.defineProperty(sprite, "radius", {
                get() { return sprite.width / 2},
                enumerable: true, configurable: true
            });
        }

        // Add a Boolean `_bumpPropertiesAdded` property to the sprite to flag it
        // as having these new properties
        sprite._bumpPropertiesAdded = true
    }
}
