export function counterReducer(state = { value:0, otherValue:0}, action){
  state.value =  state.value || 0;
  switch (action.type) {
    case 'INCREMENT':
      state.value++;
      return state;
    case 'OTHER_INCREMENT':
      state.otherValue++;
      return state;
    default:
      return state;
  }
}

export function secondReducer(state={ value:0 }, action){
  switch (action.type) {
    case 'DOUBLE_INCREMENT':
      state.value= state.value+2;
      return state;
    default:
      return state;
  }
}

export default counterReducer
