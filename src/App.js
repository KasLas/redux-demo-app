import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  // use The useSelektor hook to access the redux state this can be done at any child component
  const bank = useSelector((state) => state.bank);

  // create a dispatch to call actioncreators
  const dispatch = useDispatch();
  const { depositMoneyAction, withdrawMoneyAction, selectAmountAction } =
    bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <h1>{`account balance: ${bank.balance}`}</h1>
      <h1>{`Transaction amount: ${bank.amount}`}</h1>
      <div>
        <input
          type="text"
          onChange={(e) => {
            selectAmountAction(e.target.value);
          }}
        />
        <br />

        <button
          onClick={() => {
            depositMoneyAction(bank.amount);
          }}
        >
          deposit
        </button>
        <br />
        <button
          onClick={() => {
            withdrawMoneyAction(bank.amount);
          }}
        >
          withdraw
        </button>
      </div>
    </div>
  );
}

export default App;
