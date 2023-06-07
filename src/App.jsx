
import { useState } from "react"
import Boards from "./Components/Boards"


import "./Styles/styles.scss"

function App() {


  //in react we can't use like javascript we need to defined state
 //concept called re-renders : when the component repainted on the webpage
 //use state always triggers a componemt to renders
// render is isolate they don't know about other render
//import useState  
  // let counter =1;

  // const onBtnClick =()=>{
  //   console.log('hello');
  //   counter=counter+1;
  // };
const [counter, setCounter]=useState(1);
console.log('hello');
const onBtnClick =()=>{
   setCounter(currentCounter =>{
    return currentCounter+1;
   });
  };

  return (
    <div className="app">
      <div>
        <button onClick={
          onBtnClick
        }>Click me please</button>
        <div>{counter}</div>
      </div>
      
        
    </div>
  )
}

export default App
