import reducer from '../reducers';
import { createStore } from '../redux';
export const { getState, subscribe, dispatch } = createStore(reducer);