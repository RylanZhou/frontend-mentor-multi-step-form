import React, { useContext } from 'react';
import { FormContext } from '../FormContext';

import styles from '../styles/step.module.scss';

const stepTitles = ['Your Info', 'Select Plan', 'Add-ons', 'Summary'];

export default function Step() {
  const { step } = useContext(FormContext) as FormContextType;

  return (
    <div className={styles.Step}>
      <div className={styles.mobile}>
        {stepTitles.map((each, index) => (
          <div
            className={`${styles.indicator} ${step === index + 1 ? styles.active : ''}`}
            key={index}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <ul className={styles.desktop}>
        {stepTitles.map((each, index) => (
          <li key={index}>
            <div
              className={`${styles.indicator} ${step === index + 1 ? styles.active : ''}`}
              key={index}
            >
              {index + 1}
            </div>
            <div className={styles.text}>
              <span>Step {index + 1}</span>
              <h3>{each}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
