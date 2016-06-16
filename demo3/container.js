import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Picker from './picker'
import BookList from './booklist'

class Container extends Component{
  render()}{
    <div>
      <Picker />
      <BookList />
    </div>
  }
}

// function mapStateToProps(state){
//   const {selectedReddit, postsByReddit}= state
//   const {isFetching, lastUpdate, items:posts}=postsByReddit[selectedReddit] ||
//   { isFetching:true, items:[]}
//
//   return {
//     selectedReddit, posts, isFetching, lastUpdate
//   }
// }

// function postsByReddit(state={},action){
//   switch (action.type) {
//     case expression:
//       return Object.assign({}, state,{
//         [action.reddit] : posts(state[action.reddit], action)
//       })
//       break;
//     default:
//     return state
//   }
// }

export default connect(mapStateToProps)(Container)
