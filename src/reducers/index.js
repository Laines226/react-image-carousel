const image = (state = {}, action) => {
  switch (action.type) {
    case 'JUMP_TO':
        if(action.index < 0){
            return {currentIndex : action.maxIndex}
        }
        else if(action.index > action.maxIndex){
            return {currentIndex: 0}
        }
      return {
        currentIndex: action.index
      }
    default:
      return state
  }
}

export default image;