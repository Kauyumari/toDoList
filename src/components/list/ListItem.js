import React from 'react'
import Button from '../elements/Button'

const ListItem = (props) => {

    let {item, removeItemFromList, taskCompleted} = props
    return (
        <div className='card'>
            {
                item.completed ? (<span className='completed'>{item.task}</span>) : item.task
            }
            <Button
                clickHandler={removeItemFromList}>
                    <i class="far fa-trash-alt"></i>
            </Button>
            <Button
                clickHandler={taskCompleted}>
                    {
                        item.completed ? <i class="fas fa-check-square"></i> : <i class="far fa-check-square"></i>
                    }
            </Button>
        </div>
    )
}

export default ListItem