import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actionCreator from './actionCreator'
import Picker from './picker'

class Container extends Component{
  render(){
    var {value, onChange}= this.props;
    return(
    <div>
      <Picker value={value} onChange={onChange} />
    </div>
  )
  }
}

function mapStateToProps(state){
  var { selectChange }= state
  return {
    value: selectChange.selectedValue
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

var PickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(Container)

export default PickerContainer
