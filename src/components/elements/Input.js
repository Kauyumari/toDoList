import React from 'react';


const Input = (props) => {
    let {inputHandler, inputValue} = props
    return(
        <input 
        type='text'
        placeholder='New Task...'
        value={inputValue}
        onChange={inputHandler}
        onKeyPress={inputHandler}/>
    )
}

export default Input