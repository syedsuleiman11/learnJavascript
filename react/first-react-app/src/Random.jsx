import React from 'react'

const Random = () => {
    let num = Math.random() * 100;
    return (
        <>
            <h1>Random Number is : {Math.floor(num)}</h1>
        </>
    )
}

export default Random