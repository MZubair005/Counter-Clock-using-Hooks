import React,{useState} from 'react'
import Home from './Home';
const Memo = () =>{
    const [count, setCount] =useState(0);
    const [data, setData] = useState(100);
    return(
        <div>
            Memo With React {count}
            <Home data={data}/>
            <button onClick={()=>setCount(count+1)} >count</button>
            <button onClick={()=>setData(data+1)} >data</button>
        </div>
    )
}

export default Memo;