
export default class CardViewService {
    static assignMethods(view) {
        view.hitTestRectangle = this.hitTestRectangle

        view.setBoardPosition = this.setBoardPosition.bind(view)
        view.setPlayingStackPosition = this.setPlayingStackPosition.bind(view)
        view.setColorStackPosition = this.setColorStackPosition.bind(view)
        view.setDeckStackPosition = this.setDeckStackPosition.bind(view)

        view.validateDrag = this.validateDrag.bind(view)
        view.calculateDelta = this.calculateDelta.bind(view)
        view.makeVisible = this.makeVisible.bind(view)
        view.makeNotVisible = this.makeNotVisible.bind(view)
        view.setCardTexture = this.setCardTexture.bind(view)
        view.moveTopZindex = this.moveTopZindex.bind(view)

        view.updateBoardPositionAndNext = this.updateBoardPositionAndNext.bind(view)
        view.updateDragSettingsAndNext = this.updateDragSettingsAndNext.bind(view)
        view.setBoardPositionAndNext = this.setBoardPositionAndNext.bind(view)
    }

    static setBoardPosition() {
        const [stackIndex, cardIndex] = this.card.getIndexPosition()
        if (stackIndex >= 5) {
            this.setPlayingStackPosition(stackIndex, cardIndex)
        } else if (stackIndex >= 1) {
            this.setColorStackPosition(stackIndex, cardIndex)
        } else {
            this.setDeckStackPosition()
        }
    }

    static setPlayingStackPosition(stackIndex, cardIndex) {
        this.x = 50 + (stackIndex - 5) * 90
        this.y = 120 + cardIndex * 30
    }

    static setColorStackPosition(stackIndex, cardIndex) {
        this.anchor.set(0)
        this.removeAllListeners()

        this.x = 290 + (stackIndex - 1) * 90
        this.y = 10
    }

    static setDeckStackPosition() {
        this.x = 120
        this.y = 27
    }

    static setBoardPositionAndNext() {
        this.setBoardPosition()

        if (this.card.next) {
            this.card.next.view.setBoardPositionAndNext()
        }
    }

    static updateBoardPositionAndNext(deltaX, deltaY) {
        this.x = this.x + deltaX
        this.y = this.y + deltaY

        if (this.card.next) {
            this.card.next.view.updateBoardPositionAndNext(deltaX, deltaY)
        }
    }

    static calculateDelta(newPosition) {
        return [newPosition.x - this.x, newPosition.y - this.y]
    }

    static updateDragSettingsAndNext() {
        this.moveTopZindex()

        if (this.card.next) {
            this.card.next.view.updateDragSettingsAndNext()
        }
    }

    static moveTopZindex() {
        let container = this.parent
        let size = container.children.length
        container.setChildIndex(this, size - 1)
    }

    static onClick(event) {
        let cardView = this
        let card = cardView.card

        if (card.visible === false) {
            event.stopPropagation()

            if (card.next === null) {
                cardView.makeVisible()
            }
        }
    }

    static onDeckClick(event) {
        event.stopPropagation()

        let cardView = event.currentTarget
        let card = cardView.card
        let deck = card.deck
        let deckStack = card.deckStack
        let game = deck.game

        deck.popOne(deckStack)
        cardView.moveTopZindex()
        cardView.makeVisible()
        cardView.setDeckStackPosition()

        cardView.removeAllListeners()
        game.board.cardFactory.makeViewDraggable(cardView)

        if (deck.empty() === false) {
            game.board.dispDeckAndDeckStack()
        }
    }

    static makeVisible() {
        this.card.visible = true
        this.setCardTexture()
    }

    static makeNotVisible() {
        this.card.visible = false
        this.setCardTexture()
    }

    static setCardTexture() {
        if (this.card.visible === true) {
            this.setTexture(this.frontTexture)
        } else {
            this.setTexture(this.backTexture)
        }
    }

    static onDragStart(event) {
        event.stopPropagation()

        let cardView = this
        let card = cardView.card
        let game = card.stack.game

        if (card.visible === false) {
            return
        }

        card.possibleCollisions = game.collisionCardsFor(card)

        cardView.data = event.data
        cardView.dragging = true

        cardView.updateDragSettingsAndNext()
    }

    static onDragEnd(event) {
        event.stopPropagation()

        if (this.dragging === false) {
            return
        }

        let cardView = this
        cardView.dragging = false
        cardView.alpha = 1
        cardView.data = null

        cardView.validateDrag()
        cardView.setBoardPositionAndNext()
    }

    static onDragMove(event) {
        if (this.dragging) {
            event.stopPropagation()

            let cardView = this
            let card = cardView.card

            let cardCollision = false
            card.possibleCollisions.forEach((card2) => {
                if (cardView.hitTestRectangle(cardView, card2.view)) {
                    // console.log('shock with ' + card2.toString())
                    card.onTopOf = card2
                    cardCollision = true
                }
            })
            if (cardCollision === false) {
                card.onTopOf = null
            }

            let newPosition = cardView.data.getLocalPosition(cardView.parent)
            let [deltaX, deltaY] = cardView.calculateDelta(newPosition)
            cardView.updateBoardPositionAndNext(deltaX, deltaY)
        }
    }

    static validateDrag() {
        let card = this.card
        let stack = card.stack
        let game = stack.game

        if (card.onTopOf) {
            let stack2 = card.onTopOf.stack
            let sourceIndex = game.stacks.indexOf(stack)
            let destinationIndex = game.stacks.indexOf(stack2)
            let res = game.moveCards(sourceIndex, destinationIndex, card.topCardsCount())
            // console.log('moveCards ' + res)
            if (game.complete()) {
                console.log('The game is complete! Congratulations!')
            }
        }
    }

    static hitTestRectangle(r1, r2, global = false) {
        // Add collision properties
        if (!r1._bumpPropertiesAdded) this.addCollisionProperties(r1)
        if (!r2._bumpPropertiesAdded) this.addCollisionProperties(r2)

        let hit, combinedHalfWidths, combinedHalfHeights, vx, vy

        // A variable to determine whether there's a collision
        hit = false

        // Calculate the distance vector
        if (global) {
            vx = (r1.gx + Math.abs(r1.halfWidth) - r1.xAnchorOffset) - (r2.gx + Math.abs(r2.halfWidth) - r2.xAnchorOffset);
            vy = (r1.gy + Math.abs(r1.halfHeight) - r1.yAnchorOffset) - (r2.gy + Math.abs(r2.halfHeight) - r2.yAnchorOffset);
        } else {
            vx = (r1.x + Math.abs(r1.halfWidth) - r1.xAnchorOffset) - (r2.x + Math.abs(r2.halfWidth) - r2.xAnchorOffset);
            vy = (r1.y + Math.abs(r1.halfHeight) - r1.yAnchorOffset) - (r2.y + Math.abs(r2.halfHeight) - r2.yAnchorOffset);
        }

        // Figure out the combined half-widths and half-heights
        combinedHalfWidths = Math.abs(r1.halfWidth) + Math.abs(r2.halfWidth);
        combinedHalfHeights = Math.abs(r1.halfHeight) + Math.abs(r2.halfHeight);

        // Check for a collision on the x axis
        if (Math.abs(vx) < combinedHalfWidths) {

            // A collision might be occuring. Check for a collision on the y axis
            if (Math.abs(vy) < combinedHalfHeights) {

                // There's definitely a collision happening
                hit = true
            } else {

                // There's no collision on the y axis
                hit = false
            }
        } else {

            // There's no collision on the x axis
            hit = false
        }

        // `hit` will be either `true` or `false`
        return hit;
    }
}
