
export default class CardZeroFactory {
    constructor(pixi, board) {
        this.pixi = pixi
        this.board = board
    }

    createView(card) {
        this.createBasicView(card)
    }

    createBasicView(card) {
        let texture = this.getTexture()
        let view = new this.pixi.Sprite(texture)
        view.card = card
        card.view = view

        view.tint = 0x00FFFF // tinting for fun and visibilty

        view.x = 50 + (card.stack.getIndexPosition() - 5) * 90
        view.y = 120

        this.makeViewDraggable(view)

        return view
    }

    getTexture() {
        let texturePath = './images/cards/card-zero.png'
        return this.pixi.Texture.fromImage(texturePath)
    }

    makeViewDraggable(view) {
        view.anchor.set(0.5, 0.2)
        view.interactive = true // this will allow it to respond to mouse and touch events

        this.addCollisionProperties(view)
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
