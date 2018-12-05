import Card from './card'

export default class CardZero extends Card {
    constructor(stack) {
        super(0, null, false)
        this.stack = stack
    }

    toString() {
        return ('[ 0cards of stack' + this.stack.getIndexPosition() + ']')
    }

    easyDisp() {
        return "'0[" + this.stack.getIndexPosition() + "]'"
    }
}