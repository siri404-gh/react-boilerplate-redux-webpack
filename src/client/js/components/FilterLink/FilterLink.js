import React, { Component } from 'react';
import { getState, subscribe, dispatch } from '../../redux/store';
import { Link } from '../Link/Link';

export default class FilterLink extends Component {
    componentWillMount() {
        this.unsubscribe = subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { filter, children } = this.props;
        const state = getState();
        return (
            <Link 
                active={state.visibilityFilter === filter}
                onClick={()=> dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: filter
                })}>
                {children}
            </Link>
        );
    }
}