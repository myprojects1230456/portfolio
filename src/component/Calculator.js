import { useState } from 'react';
import { div } from 'prelude-ls'
import { NavLink } from 'react-router-dom'
import React from 'react';
import "../component/calculator.css";




const Calculator = () => {
  
  const [result, setResult]=useState("")
  const handleClick=(e)=> {
    console.log(result)
    setResult(result.concat(e.target.value))
  
  }
  const clear = () =>{
   setResult("")

  }
  const backSpace=()=>{
    setResult(result.slice(0, -1))
  }
  const calculate=()=>{
    try{
      setResult(eval(result).toString())
    }catch(err){
      setResult("Error")
    }
    
  }
    return(
    <>
   <div className="calculator">
    <input type="text" className="calculator-screen" value={result} disabled/>

 <div className="calculator-keys">

 <button type="button" id="clear" onClick={clear}>CE</button>
 <button type="button" id="backspace" className="back" onClick={backSpace} ></button>

  <button type="button" className="operator" value="+" onClick={handleClick}>+</button>
  <button type="button" className="operator" value="-" onClick={handleClick}>-</button>
  <button type="button" className="operator" value="*" onClick={handleClick}>&#215;</button>
  <button type="button" className="operator" value="/" onClick={handleClick}>&#247;</button>
  <button type="button" value="6" onClick={handleClick}>6</button>
  <button type="button" value="7" onClick={handleClick}>7</button>  
  <button type="button" value="8" onClick={handleClick}>8</button>
  <button type="button" value="9" onClick={handleClick}>9</button>

  <button type="button" value="2" onClick={handleClick}>2</button>
  <button type="button" value="3" onClick={handleClick}>3</button>
  <button type="button" value="4" onClick={handleClick}>4</button>
  <button type="button" value="5" onClick={handleClick}>5</button>
  
  <button type="button" value="1" onClick={handleClick}>1</button>  
<button type="button" value="0" onClick={handleClick}>0</button>
<button type="button" className="decimal" value="." onClick={handleClick}>.</button>
<button type="button" id="backspace" className="come" onClick={backSpace} ></button>

<button type="button" className="equal-sign" value="=" onClick={calculate}>=</button>
</div>
</div>
     </>
    )
}
export default Calculator






// javascript for event handling 

