import {
    UPDATE_TASK,
    ADD_TASK_TO_LIST,
    REMOVE_ITEM_FROM_LIST,
    TASK_COMPLETED
} from '../actions/actionTypes'

const INITIAL_STATE = {
    task: '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    let { task, list } = state
    let tempList 
    
    switch (action.type) {
        case UPDATE_TASK:
            task = action.payload.target.value
            if (action.payload.key === 'Enter') {           
                if (task) {
                    list.push({
                        task,
                        completed: false
                    })
                    task = ''
                }
            }
            return {
                ...state, task, list
            }
        case ADD_TASK_TO_LIST:
            if (task) {
                list.push({
                    task,
                    completed: false
                })
                task = ''
            }
            console.log(list);
            
            return {
                ...state, list, task
            }
        case REMOVE_ITEM_FROM_LIST:
            tempList = JSON.parse(JSON.stringify(list))
            tempList.splice(action.payload, 1)
            return {
                ...state, list: tempList
            }
        case TASK_COMPLETED:
            tempList = JSON.parse(JSON.stringify(list))
            let index = action.payload
            tempList[index].completed = !tempList[index].completed
            return {
                ...state, list: tempList
            }
        default:
            return state
    }
}