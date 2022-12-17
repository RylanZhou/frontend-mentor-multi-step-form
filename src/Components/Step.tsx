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
            className={`${styles.indicator} ${
              // Step 4's indicator should be active when current step is either at 4 or 5
              step === index + 1 || (index === 3 && step >= 4) ? styles.active : ''
            }`}
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
              className={`${styles.indicator} ${
                step === index + 1 || (index === 3 && step >= 4) ? styles.active : ''
              }`}
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
