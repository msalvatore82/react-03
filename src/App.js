import './App.css';
import Counter from "./Component/Counter/Counter";
// import Greeting from "./Component/Greeting/Greeting"


function App() {
  return (
    <div className="App">
      <Counter value={0} />
      {/* <br />
      <Greeting  /> */}
    </div>
  );
}
export default App;
