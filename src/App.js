import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  // use The useSelektor hook to access the redux state this can be done at any child component
  const account = useSelector((state) => state.account);

  // create a dispatch to call actioncreators
  const dispatch = useDispatch();
  const { depositMoneyAction, withdrawMoneyAction } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h1>{account}</h1>
      <div>
        <button
          onClick={() => {
            depositMoneyAction(1000);
          }}
        >
          deposit
        </button>
        <br />
        <button
          onClick={() => {
            withdrawMoneyAction(1);
          }}
        >
          withdraw
        </button>
      </div>
    </div>
  );
}

export default App;
