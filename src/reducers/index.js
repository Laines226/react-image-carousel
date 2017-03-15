const image = (state = {}, action) => {
  switch (action.type) {
    case 'JUMP_TO':
      if (action.index < 0) {
        return {
          imageArray: state.imageArray,
          currentIndex: action.maxIndex
        }
      }
      else if (action.index > (state.imageArray.length - 1)) {
        return {
          imageArray: state.imageArray,
          currentIndex: 0
        }
      }
      return {
        imageArray: state.imageArray,
        currentIndex: action.index
      }
    default:
      return state
  }
}

export default image;