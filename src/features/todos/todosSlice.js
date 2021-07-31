const initialState = {todos: { ids: [], entities: {}}, status: 'idle'};

const todoReducer = (state = initialState, {type, payload}) => {
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

addTodo = (state, payload) => {
    return state;
}

removeTodo = (state, payload) => {
    return state;
    
}

colorSelected = (state, payload) => {
    return state;
    
}

statusChanged = (state, payload) => {
    return state;
    
}

updateTodo = (state, payload) => {
    return state;
    
}

loading = (state, payload) => {
    return state;
    
}

loadComplete = (state, payload) => {
    return state;
    
}

markAllIncomplete = (state, payload) => {
    return state;
    
}

markAllComplete = (state, payload) => {
    return state;
    
}