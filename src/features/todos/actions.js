import { uuid, short } from 'short-uuid';

console.log(uuid(), short())

addTodo = todo => ({type:'todos/addTodo', payload: {todo, id: uuid()}})