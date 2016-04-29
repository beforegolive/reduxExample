import React, { Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actionCreator from './actionCreator'
import Picker from './picker'
import BookList from './booklist'

class Container extends Component{
  render(){
    var {value, options, books, onChange}= this.props;
    return(
    <div>
      <Picker value={value} options={options} onChange={onChange} />
      <BookList books={books} />
    </div>
  )
  }
}

function mapStateToProps(state){
  console.log('--mapStateToProps--')
  var { selectChange }= state
  console.log(selectChange);
  return {
    value: selectChange.selectedValue,
    options: ['', 'red', 'blue'],
    books: selectChange.books
  }
}

function mapDispatchToProps(dispatch){
  var boundActionCreator=bindActionCreators(actionCreator, dispatch);
  return {
    onChange:(value)=>{
       boundActionCreator(value)
     }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Container)
