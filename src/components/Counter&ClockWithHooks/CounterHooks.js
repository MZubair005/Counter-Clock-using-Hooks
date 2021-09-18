import React, { useState, useEffect} from 'react'
import './CounterStyle.css';

export default function HooksCounter() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        if(count === 0) {
            document.getElementById("count").style.color = `Black`;
        }else if(count < 0) {
            document.getElementById("count").style.color = `red`;
        }else{
            document.getElementById("count").style.color = `green`;
    }
}, [count]);
    return (
        <div className="container">
            <h1 className="head">Hooks Counter</h1>

            <button className = "btn col" onClick={() => { setCount(count - 1) }} ><h1>-</h1></button>
            <h1 id="count" className="col"><span>{count}</span></h1>
            <button className = "btn col" onClick={() => { setCount(count + 1) }} ><h1>+</h1></button>         
            
            <button className = "btn" onClick={() => { setCount(0) }}><h1>RESET</h1></button>
            
        </div>
    )
}