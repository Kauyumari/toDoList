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
            list.splice(action.payload, 1)
            return {
                ...state, list
            }
        case TASK_COMPLETED:
            list[action.payload].completed = !list[action.payload].completed
            return {
                ...state, list
            }
        default:
            return state
    }
}