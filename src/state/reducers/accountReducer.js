/* 
    The reducer takes as parameters two values the initial state in this case it is initializes as 0
     and action
*/
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
