export function selectChange(state={selectedValue:''}, action){
  switch (action.type) {
    case 'SELECTCHANGE':
      var newState = Object.assign({},
        ...state,
        {
          selectedValue: action.value
        })

      return newState;
    default:
      return state;
  }
}
