import React from 'react'
import Button from './elements/Button'
import Input from './elements/Input'

const Header = (props) => {
    let {inputHandler, clickHandler, taskValue} = props
    return(
        <div 
        className='card'>
            <h1>To Do List</h1>
            <Input
            inputHandler={inputHandler}
            taskValue={taskValue}
            />
            <Button 
            clickHandler={clickHandler}>
                <i class="fas fa-plus"></i>
            </Button>
        </div>
    )
}

export default Header