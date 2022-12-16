import React, { useContext } from 'react';
import { FormContext } from '../FormContext';

import styles from '../styles/form.module.scss';

export default function Step1Form() {
  const { step1, saveStep1 } = useContext(FormContext) as FormContextType;

  return (
    <form className={styles.form}>
      <h1>Personal info</h1>
      <h3>Please provide your name, email address, and phone number.</h3>
    </form>
  );
}
