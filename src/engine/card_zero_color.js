import Card from './card'

export default class CardZeroColor extends Card {
    constructor(colorStack) {
        super(0, colorStack.color, false)
        this.stack = colorStack
        this.color = colorStack.color
    }

    toString() {
        return ('[0 card ' + this.color + ']')
    }

    easyDisp() {
        return "'0[" + this.color[0].toUpperCase() + "]'"
    }
}