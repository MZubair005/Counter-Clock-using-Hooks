
import React, { useState, useEffect }from 'react';

const HooksClock =(props) => {
    const [date, setDate] = useState(new Date());


useEffect(() => {
    setInterval(() => {
        setDate(new Date());
    }, 1000);
},[]);


    return (
        <div className= "clock">
            <h1>Current Time</h1>
            <h1>{date.toLocaleString()}</h1>
        </div>
    );
    };

    export default HooksClock;
    