import React, { Component } from 'react';
import { Link } from '../Link/Link';

export default class FilterLink extends Component {
    componentWillMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { filter, children } = this.props;
        const { store } = this.context;
        const state = store.getState();
        return (
            <Link 
                active={state.visibilityFilter === filter}
                onClick={()=> store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: filter
                })}>
                {children}
            </Link>
        );
    }
}

FilterLink.contextTypes = {
    store: React.PropTypes.object
};