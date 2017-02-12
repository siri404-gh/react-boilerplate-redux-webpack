import React from 'react';

export const SingleTodo = ({onClick, done, task}) => <li  onClick={onClick} style={{ textDecoration: done ? 'line-through' : 'none' }}>{task}</li>;
