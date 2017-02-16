import React, { Component } from 'react';
import { Link } from '../Link/Link';
import { connect } from 'react-redux';
import { setVisibilityFilter } from './FilterLinkActions';

export default connect(
    (state, ownProps) => {
        return {
            active: state.visibilityFilter === ownProps.filter
        };
    },
    (dispatch, ownProps) => {
        return {
            onFilterClick: () => dispatch(setVisibilityFilter(ownProps.filter))
        };
    }
)(Link);