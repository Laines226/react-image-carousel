import { connect } from 'react-redux'
import { jumpTo } from '../actions'
import Carousel from '../components/Carousel'

const mapStateToProps = (state, ownProps) => {
  return {
    index: state.currentIndex? state.currentIndex: ownProps.startIndex,
    imageArray: ownProps.imageArray
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    jumpTo: (id) => {
      dispatch(jumpTo(id, ownProps.imageArray.length -1))
    }
  }
}

const ImageCaorusel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel)

export default ImageCaorusel