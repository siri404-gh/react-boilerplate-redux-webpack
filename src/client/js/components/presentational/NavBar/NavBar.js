import React from 'react';
import Styles from './navbar.css';

export const NavBar = ({ title }) => {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.header__title}>{title}</h1>
      <button className={Styles.headerButton + ' ' + Styles.butRefresh} aria-label="Refresh"></button>
      <button className={Styles.headerButton + ' ' + Styles.butAdd} aria-label="Add"></button>
    </header>
  );
};
