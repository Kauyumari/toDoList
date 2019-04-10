import React from 'react'
import ListItem from './ListItem'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

const List = (props) => {

    let {list} = props
    
    let listContent = list.map((item, index) => {
        return (
            <ListItem  
            item={item}
            key={index}
            index={index}
            />
        )
    })
    return(
        <div>
            {listContent}
        </div>
    )
}

const mapStateToProps = ({toDo}) => {
    const { list, task } = toDo
    return { list, task }
}
export default connect(mapStateToProps, actions)(List)