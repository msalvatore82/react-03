// import React, { useEffect, useState } from "react";
// import Greeting from "../Greeting/Greeting"

// const ExampleFunctional = () => {
//   const [Name, setName] = useState("Euralio");
//   const [show, setShow] = useState(true);

//   const handleRemove = () => {
//     setShow(false);
//   };
//   //componentDidMount()
//   useEffect(() => {
//       setTimeout(() => {
//       setName("Alfonsina");
//     }, 1000);
//   }, []);

//   //componentDidUpdate
//   useEffect(() => {
//     console.log("componente actualizado");
//   });

//   return (
//     <div>
//       <h1>My Favorite Color is {Name}</h1>
//       {show ? <Greeting /> : null}
//       <button onClick={handleRemove}>Eliminar componente </button>
//     </div>
//   );
// };

// export default ExampleFunctional;


