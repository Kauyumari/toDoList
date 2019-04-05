import React from 'react';


const Input = (props) => {
    let {inputHandler, taskValue} = props
    return(
        <input 
        type='text'
        placeholder='New Task...'
        value={taskValue}
        onChange={inputHandler}
        onKeyPress={props.inputHandler}/>
    )
}

export default Input