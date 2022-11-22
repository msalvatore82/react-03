import { useState } from "react"
import "./Conter.css"
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";


const Counter = (props) => {
    const [count, setCount] = useState(props.value);
    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
          return (prevCount += 1);
        });
      }
    function decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1); 
          } else {
            return (prevCount = 0);
          }
        });
      }
    return (
        <div className="display-padre">
            <div className="display">
            {count}
            </div>
            <div className="display-botones">
            <br /><CiSquarePlus onClick={increment} /> 
            <CiSquareMinus onClick={decrement}/>
            </div>
            {/* <div>
                <input className="number" type="text" name="number" id="numer" />
            </div> */}
        </div>
    )
}

export default Counter