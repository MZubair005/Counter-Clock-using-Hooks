import React, { memo } from 'react'

function Home(props) {
    console.warn("inner Component",props.data);
    return (
        <div>
            <h1>Home Component</h1>
        </div>
    )
}

export default memo(Home);