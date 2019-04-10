import React from 'react'
import Button from '../elements/Button'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

const ListItem = (props) => {

    let {item, index,  removeItemFromList, taskCompleted} = props
    return (
        <div className='card'>
            {
                item.completed ? (<span className='completed'>{item.task}</span>) : item.task
            }
            <Button
                clickHandler={() => removeItemFromList(index)}>
                    <i className="far fa-trash-alt"></i>
            </Button>
            <Button
                clickHandler={() => taskCompleted(index)}>
                    {
                        item.completed ? <i className="fas fa-check-square"></i> : <i className="far fa-check-square"></i>
                    }
            </Button>
        </div>
    )
}

const mapStateToProps = ({toDo}) => {
    const {task} = toDo
    return {task}
}

export default connect(mapStateToProps, actions)(ListItem)