export const depositMoneyAction = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawMoneyAction = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};

export const selectAmountAction = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "amount",
      payload: amount,
    });
  };
};
