import React, { LabelHTMLAttributes } from 'react';
import styles from './Label.module.css';

const Label: React.FC<LabelHTMLAttributes<HTMLLabelElement>> = (props) => (
  <label {...props} className={styles.Label}>
    {props.children}
  </label>
);

export default Label;
