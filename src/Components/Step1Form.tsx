import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from '../FormContext';

import StepButton from './StepButton';

import styles from '../styles/form.module.scss';

export default function Step1Form() {
  const { step1, saveStep1, stepForward } = useContext(FormContext) as FormContextType;

  const [form, setForm] = useState<FormDataType['step1']>(step1);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  const [errors, setErrors] = useState<FormDataType['step1']>({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    setNextButtonDisabled(
      Object.values(form).some((val) => !val) || Object.values(errors).some((val) => !!val),
    );
  }, [errors]);

  const handleChange = (name: string, value: string, reg?: RegExp) => {
    setForm({ ...form, [name]: value });

    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else if (!!reg && !value.match(reg)) {
      setErrors({ ...errors, [name]: 'Invalid format' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleNextStep = () => {
    if (nextButtonDisabled) {
      return;
    }

    saveStep1(form);
    stepForward();
  };

  return (
    <div className={styles['form-container']}>
      <form className={styles.form} noValidate>
        <h1>Personal info</h1>
        <h3>Please provide your name, email address, and phone number.</h3>

        <div className={styles.input}>
          <label>
            Name
            {!!errors.name && <span className={styles.error}>{errors.name}</span>}
          </label>
          <input
            className={`${!!errors.name && styles.error}`}
            type="text"
            name="name"
            value={form.name}
            required
            placeholder="e.g. Stephen King"
            onChange={({ target }) => handleChange(target.name, target.value)}
          />
        </div>

        <div className={styles.input}>
          <label>
            Email Address
            {!!errors.email && <span className={styles.error}>{errors.email}</span>}
          </label>
          <input
            className={`${!!errors.email && styles.error}`}
            type="email"
            name="email"
            value={form.email}
            required
            placeholder="e.g. stephenking@lorem.com"
            onChange={({ target }) =>
              handleChange(target.name, target.value, /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
            }
          />
        </div>

        <div className={styles.input}>
          <label>
            Phone Number
            {!!errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </label>
          <input
            className={`${!!errors.phone && styles.error}`}
            type="text"
            name="phone"
            inputMode="numeric"
            value={form.phone}
            required
            placeholder="e.g. +1 234 567 890"
            onChange={({ target }) => handleChange(target.name, target.value, /^\+?\d+$/)}
          />
        </div>
      </form>

      <StepButton
        backButtonVisible={false}
        nextButtonVisible={true}
        nextButtonDisabled={nextButtonDisabled}
        stepForward={handleNextStep}
      />
    </div>
  );
}
