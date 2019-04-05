import React from 'react'
import ListItem from './ListItem'

const List = (props) => {

    let {listItems, removeItemFromList, taskCompleted} = props

    let listContent = listItems.map((item, index) => {
        return (
            <ListItem
            removeItemFromList={() => {removeItemFromList(index)}}
            item={item}
            key={index}
            taskCompleted={() => {taskCompleted(index)}}
            />
        )
    })
    return(
        <div>
            {listContent}
        </div>
    )
}

export default List