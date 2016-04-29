import React, { Component, PropTypes } from 'react'

class Counter extends Component{
  render(){
    var { value, handleClick} = this.props;
    return(
      <div>
        Clicked: {value} times
        <p>
          <button onClick={handleClick} >Button</button>
        </p>
      </div>
    )
  }
}

Counter.propTypes={
  value:PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Counter
