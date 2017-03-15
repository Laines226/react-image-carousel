/** action types */

export const JUMP_TO = 'JUMP_TO';

/** action creators */

export function jumpTo(index, maxIndex) {
    return {
        type: JUMP_TO,
        index,
        maxIndex
    }
}