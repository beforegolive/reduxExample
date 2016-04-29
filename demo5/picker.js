import React, { PropTypes } from 'react'

var Picker=({ value, onChange})=>{
  return(
    <div>
      <select onChange={e => onChange(e.target.value)}
              value={value} >
        <option value=''></option>
        <option value='red'>red</option>
        <option value='blue'>blue</option>
      </select>
      <p>selectedValue is: {value} </p>
    </div>
  )
}

Picker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker
