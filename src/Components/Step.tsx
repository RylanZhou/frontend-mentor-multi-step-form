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
          <div className={`${step === index + 1 ? styles.active : ''}`} key={index}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
