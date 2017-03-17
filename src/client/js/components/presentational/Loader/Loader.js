import React from 'react';
import Styles from './loader.css';

export const Loader = () => {
  return (
      <div className={Styles.loader}>
        <svg viewBox="0 0 32 32" width="32" height="32">
          <circle className={Styles.spinner} cx="16" cy="16" r="14" fill="none"></circle>
        </svg>
      </div>
  );
};
