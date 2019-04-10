import {
    UPDATE_TASK,
    ADD_TASK_TO_LIST,
    REMOVE_ITEM_FROM_LIST,
    TASK_COMPLETED
} from './actionTypes'

export const updateTask = event => {
    return {
        type: UPDATE_TASK,
        payload: event
    }
}

export const addTaskToList = () => {
    return {
        type: ADD_TASK_TO_LIST,
        payload: null
    }
}

export const removeItemFromList = index => {
    return {
        type: REMOVE_ITEM_FROM_LIST,
        payload: index
    }
}

export const taskCompleted = index => {
    return {
        type: TASK_COMPLETED,
        payload: index
    }
}
