import React, { useContext } from 'react';
import { FormContext } from '../FormContext';
import { addons } from '../constants';
import StepButton from './StepButton';

import styles from '../styles/form.module.scss';
import '../styles/input.scss';

export default function Step2Form() {
  const { step2, step3, saveStep3, stepForward, stepBack } = useContext(
    FormContext,
  ) as FormContextType;

  const toggleAddon = (addon: AddonItem) => {
    const index = step3.addons.findIndex((each) => each.title === addon.title);

    if (index === -1) {
      saveStep3({ addons: [...step3.addons, addon] });
    } else {
      saveStep3({ addons: step3.addons.filter((each) => each.title !== addon.title) });
    }
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles.form}>
        <h1>Pick add-ons</h1>
        <h3>Add-ons help enhance your gaming experience.</h3>

        <ul className={styles.addons}>
          {addons.map((each) => (
            <li
              className={`${
                step3.addons.some((target) => target.title === each.title) ? styles.active : ''
              }`}
              key={each.title}
              onClick={() => toggleAddon(each)}
            >
              <label className="checkbox">
                <input
                  type="checkbox"
                  disabled
                  checked={step3.addons.some((target) => target.title === each.title)}
                />
                <span className="mark"></span>
              </label>

              <div className={styles.text}>
                <div className={styles.title}>{each.title}</div>
                <div className={styles.description}>{each.description}</div>
              </div>
              <div className={styles.price}>
                {step2.billingPeriod === 'monthly'
                  ? `+$${each.monthlyPrice}/mo`
                  : `+$${each.yearlyPrice}/yr`}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <StepButton
        backButtonVisible={true}
        nextButtonVisible={true}
        nextButtonDisabled={false}
        stepForward={stepForward}
        stepBack={stepBack}
      />
    </div>
  );
}
