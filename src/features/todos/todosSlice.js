const initialState = {todos: { ids: [], entities: {}}, status: 'idle'};

export const todoReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'todos/addTodo': return addTodo(state, payload)
        case 'todos/removeTodo': return removeTodo(state, payload)
        case 'todos/colorSelected': return colorSelected(state, payload)
        case 'todos/statusChanged': return statusChanged(state, payload)
        case 'todos/updateTodo': return updateTodo(state, payload)
        case 'todos/loading': return loading(state, payload)
        case 'todos/loadComplete': return loadComplete(state, payload)
        case 'todos/markAllIncomplete': return markAllIncomplete(state, payload)
        case 'todos/markAllComplete': return markAllComplete(state, payload)
    }
}

const addTodo = (state, payload) => {
    return state;
}

const removeTodo = (state, payload) => {
    return state;
    
}

const colorSelected = (state, payload) => {
    return state;
    
}

const statusChanged = (state, payload) => {
    return state;
    
}

const updateTodo = (state, payload) => {
    return state;
    
}

const loading = (state, payload) => {
    return state;
    
}

const loadComplete = (state, payload) => {
    return state;
    
}

const markAllIncomplete = (state, payload) => {
    return state;
    
}

const markAllComplete = (state, payload) => {
    return state;
    
}