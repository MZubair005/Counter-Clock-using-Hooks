import React from 'react'
import './ApplyStyle.css'

export default function ApplyStyle(props) {
    const h3={
        color: 'green',
        fontSize:'36px',
        textAlign:'center'
    }
    const h4={
        color: 'red',
        fontSize:'24px',
        textAlign:'center'
    }
    return (
        
            <div>
                <h1>Style in React</h1>
                {/* <h3 className="header">1. Globle Style</h3> */}
                <h3 className={props.data==="apply"? "header":""}>1. Globle Style</h3>
                <h3 style={h3}>2. Inline Style</h3>
                <h3 style={props.data==="apply" ? h3:h4}>3. Conditional Style</h3>
            </div>
    )
}

