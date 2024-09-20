import React from 'react';
import styles from './Spinner.module.css'; // Import the CSS module

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.ringBefore}></div>
        <div className={styles.ringAfter}></div>
      </div>
    </div>
  );
};

export default Spinner;
