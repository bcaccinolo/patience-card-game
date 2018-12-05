import Stack from './stack'
import ColorStack from './color_stack'
import DeckStack from './deck_stack'

export default class StackService {
    static prepareStacks(game) {
        let stacks = []

        // deckStack : index 0
        stacks.push(new DeckStack(game))

        // diamondStack : index 1
        stacks.push(new ColorStack(game, 'diamond'))
        // heartStack : index 2
        stacks.push(new ColorStack(game, 'heart'))
        // spadeStack : index 3
        stacks.push(new ColorStack(game, 'spade'))
        // clubStack : index 4
        stacks.push(new ColorStack(game, 'club'))

        // playingStacks : index 5 -> 11
        for (var index = 0; index < 7; index++) {
            stacks.push(new Stack(game))
        }

        return stacks
    }

    static isColorStack(index) {
        return this.stackType(index) === 'colorStack'
    }

    static isPlayingStack(index) {
        return this.stackType(index) === 'playingStack'
    }

    static isDeckStack(index) {
        return this.stackType(index) === 'deckStack'
    }

    static stackType(index) {
        if (index >= 5) {
            return 'playingStack'
        } else if (index >= 1) {
            return 'colorStack'
        } else {
            return 'deckStack'
        }
    }
}
