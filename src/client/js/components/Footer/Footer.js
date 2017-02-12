import React from 'react';
import { FilterLink } from '../FilterLink/FilterLink';

export const Footer = ({ visibilityFilter, onFilterClick }) => (
  <p>Show: 
    <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter} onClick={onFilterClick}>All</FilterLink>
    { ' ' }
    <FilterLink filter='SHOW_DONE' currentFilter={visibilityFilter} onClick={onFilterClick}>Done</FilterLink>
    { ' ' }
    <FilterLink filter='SHOW_NOT_DONE' currentFilter={visibilityFilter} onClick={onFilterClick}>Active</FilterLink>
  </p>
);