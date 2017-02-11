import { combinedReducers } from '../redux';
import todos from './todos/todosReducer';
import visibilityFilter from './visibilityFilter/visibilityFilterReducer';

const reducer = combinedReducers({
    todos,
    visibilityFilter
});

export default reducer;