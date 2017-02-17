let id = 0;
export const addTodo = (task) => {
    return {
        type: 'ADD_TODO', 
        id: id++, 
        task: task
    }
};