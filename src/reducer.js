import {todoReducer} from './features/todos/todosSlice';
import { authReducer } from './features/authentication/authSlice';


export const rootReducer = (state = {}, action) => ({
    todos: todoReducer(state.todos, action),
    auth: authReducer(state.auth, action)
});