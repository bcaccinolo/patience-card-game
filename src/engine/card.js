
// Manage a Std card
export default class Card {
    constructor(value, color, visible = true) {
        this.value = value
        this.color = color
        this.visible = visible
        this.next = null
        this.stack = null
    }

    disp() {
        console.log(this.toString())
    }

    easyDisp() {
        let str = ''

        if (this.visible !== true) {
            str = 'X'
        }
        str += this.value
        str += this.color[0].toUpperCase()
        return "'" + str + "'"
    }

    toString() {
        if (this.visible) {
            return ('[ ' + this.value + ' ' + this.color.slice(0,4) + ']')
        } else {
            return ('[X ' + this.value + ' ' + this.color.slice(0,4) + ']')
        }
    }

    hasView() {
        return (this.view !== undefined)
    }

    isAce(color) {
        return (this.value === 1) && (this.color === color)
    }

    follows(card) {
        return this.followsValue(card) && this.hasSameColor(card)
    }

    followsWithOppositeColor(card) {
        return this.followsValue(card) && this.hasOppositeColor(card)
    }

    followsValue(card) {
        return this.value === (card.value + 1)
    }

    hasSameColor(card) {
        return this.color === card.color
    }

    hasOppositeColor(card) {
        return this.realColor() !== card.realColor()
    }

    realColor() {
        if ((this.color === 'heart') || (this.color === 'diamond')) {
            return 'red'
        } else {
            return 'black'
        }
    }

    topCardsCount() {
        if (this.next === null) {
            return 1
        } else {
            return 1 + this.next.topCardsCount()
        }
    }

    getIndexPosition() {
        return [this.stack.getIndexPosition(), this.stack.cards.indexOf(this)]
    }

    static easyBuild(str) {
        let visible = true
        let color, value

        // visibility
        if (str[0] === 'X') {
            visible = false
            str = str.slice(1, 5)
        }

        // color
        color = this.getColorFromInitial(str[str.length - 1])
        str = str.slice(0, str.length - 1)

        // value
        value = Number(str)

        return new Card(value, color, visible)
    }

    static getColorFromInitial(initial) {
        switch (initial) {
        case 'H':
            return 'heart'
        case 'D':
            return 'diamond'
        case 'S':
            return 'spade'
        case 'C':
            return 'club'
        default:
            throw 'Unrecognized inital'
        }
    }
}
