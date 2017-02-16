import React from 'react';

export const Link = ({ active, children, onFilterClick }) => {
    return active
    ? <span>{children}</span>
    : (
      <button onClick={_ => onFilterClick()}>{children}</button>
    );
};