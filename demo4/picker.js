import React, { Component} from 'react'

class Picker extends Component {
  constructor() {
    super()
  }

  _handleChange(event){
    var { store }= this.context;
    store.dispatch({type:'SELECTCHANGE', value: event.target.value})
  }

  render(){
    var { store }= this.context;
    return(
      <select value={store.getState().selectedValue} onChange={this._handleChange.bind(this)}>
        <option value=''></option>
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
      </select>
    )
  }
}

Picker.contextTypes = { store: React.PropTypes.object };

export default Picker
