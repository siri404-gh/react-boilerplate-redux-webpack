import React from 'react';

export const FilterLink = ({ filter, currentFilter, children, onClick }) => {
  return filter === currentFilter
    ? <span>{children}</span>
    : (
      <a href='#' 
        onClick={e => {
          e.preventDefault();
          onClick(filter);
        }}>
        {children}
      </a>
    );
};