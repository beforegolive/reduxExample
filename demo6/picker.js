import React, { PropTypes } from 'react'

var Picker=({ value, options, onChange})=>{
  return(
    <div>
      <select onChange={e => onChange(e.target.value)}
              value={value} >
          {
            options.map((e,i)=>
              <option value={e} key={i}>
                {e}
              </option>
            )
          }
      </select>
      <p>selectedValue is: {value} </p>
    </div>
  )
}

Picker.propTypes = {
  options:PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker
