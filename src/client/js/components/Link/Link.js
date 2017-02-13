import React from 'react';

export const Link = ({ active, children, onClick }) => {
    return active
    ? <span>{children}</span>
    : (
      <button onClick={_ => onClick()}>{children}</button>
    );
};