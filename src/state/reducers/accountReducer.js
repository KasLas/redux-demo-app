/* 
    The reducer takes as parameters two values the initial state in this case it is initializes as 0
     and action
*/

const reducer = (state = { balance: 0, amount: 0 }, action) => {
  switch (action.type) {
    case "deposit": {
      return {
        balance: (state.balance = state.balance + action.payload),
        ...state,
      };
    }
    case "withdraw":
      return {
        balance: (state.balance = state.balance - action.payload),
        ...state,
      };
    case "amount":
      return { amount: (state.amount = parseInt(action.payload)), ...state };
    default:
      return state;
  }
};

export default reducer;
