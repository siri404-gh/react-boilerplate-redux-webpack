import React, { Component } from 'react';
import { Link } from '../Link/Link';
import { connect } from 'react-redux';

export default connect(
    (state, ownProps) => {
        return {
            active: state.visibilityFilter === ownProps.filter
        };
    },
    (dispatch, ownProps) => {
        return {
            onFilterClick: () => dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: ownProps.filter
            })
        };
    }
)(Link);