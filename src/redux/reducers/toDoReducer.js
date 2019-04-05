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
            task = action.payload
            return {
                ...state, task
            }
        default:
            return state
    }
}