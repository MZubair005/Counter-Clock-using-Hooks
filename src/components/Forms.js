/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useEffect,useState } from 'react'

const Forms= () => {
    const [count, setCount]=useState(1)
    useEffect(()=>{
        console.warn(count);
    },[])
    return (
            <div>
                <h1>Use Effect Hooks in React JS... {count}</h1>
                <button onClick = {()=>setCount(count+1)}>Update State</button>
            </div>
        );
    };


    export default Forms;




