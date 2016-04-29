function selectChange( state = { selectedValue:'red'}, action){
  switch (action.type) {
    case 'SELECTCHANGE':
      state.selectedValue = action.value;
      return state;
    default:
      return state;
  }
}

export default selectChange
