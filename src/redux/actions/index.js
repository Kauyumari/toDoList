import {
    UPDATE_TASK,
    ADD_TASK_TO_LIST,
    REMOVE_ITEM_FROM_LIST,
    TASK_COMPLETED
} from './actionTypes'

export const updateTask = task => {
    return {
        type: UPDATE_TASK,
        payload: task
    }
}
