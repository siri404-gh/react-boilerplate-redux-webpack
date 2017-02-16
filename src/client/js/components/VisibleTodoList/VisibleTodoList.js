import { connect } from 'react-redux';
import { TodoList } from '../TodoList/TodoList';

const getVisibleTodos = (todos, filter = 'SHOW_ALL') => {
    switch(filter) {
    case 'SHOW_ALL':
        return todos;
    case 'SHOW_DONE':
        return todos.filter(t => t.done);
    case 'SHOW_NOT_DONE':
        return todos.filter(t => !t.done);
    default:
        return todos;
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => dispatch({type: 'TOGGLE_TODO', id})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);