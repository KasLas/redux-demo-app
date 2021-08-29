import { useSelector } from "react-redux";

function App() {
  // use The useSelektor hook to access the redux state this can be done at any child component
  const state = useSelector((state) => state);

  console.log(state);

  return <div>hello react</div>;
}

export default App;
