/** action types */

export const JUMP_TO = 'JUMP_TO';

/** action creators */

export function jumpTo(index) {
    return {
        type: JUMP_TO,
        index
    }
}