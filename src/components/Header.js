import React from 'react'
import Button from './elements/Button'
import Input from './elements/Input'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
 
const Header = (props) => {
    let {updateTask, addTaskToList, task} = props
    return(
        <div 
        className='card'>
            <h1>To Do List</h1>
            <Input
            inputHandler={(e) => updateTask(e)}
            inputValue={task}
            />
            <Button 
            clickHandler={addTaskToList}>
                <i className="fas fa-plus"></i>
            </Button>
        </div>
    )
}

const mapStateToProps = ({toDo}) => {
    const {task} = toDo
    return {task}
}

export default connect(mapStateToProps, actions)(Header)