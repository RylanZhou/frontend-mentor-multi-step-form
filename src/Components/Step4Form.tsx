import React, { useContext } from 'react';
import { FormContext } from '../FormContext';

import StepButton from './StepButton';

import styles from '../styles/form.module.scss';

export default function Step4Form() {
  const {
    step2: { selectedPlan, billingPeriod },
    step3: { addons },
    stepForward,
    stepBack,
    goToStep,
  } = useContext(FormContext) as FormContextType;

  const isMonthlyPlan = billingPeriod === 'monthly';

  const getTotalPrice = () => {
    if (isMonthlyPlan) {
      return selectedPlan.monthlyPrice + addons.reduce((prev, curr) => prev + curr.monthlyPrice, 0);
    }
    return selectedPlan.yearlyPrice + addons.reduce((prev, curr) => prev + curr.yearlyPrice, 0);
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles.form}>
        <h1>Finishing up</h1>
        <h3>Double-check everything looks OK before confirming.</h3>

        <div className={styles.summary}>
          <div className={styles.plan}>
            <div className={styles.text}>
              <h4>
                {selectedPlan.title} ({isMonthlyPlan ? 'Monthly' : 'Yearly'})
              </h4>
              <a onClick={() => goToStep(2)}>Change</a>
            </div>

            <div className={styles.price}>
              {isMonthlyPlan
                ? `$${selectedPlan.monthlyPrice}/mo`
                : `$${selectedPlan.yearlyPrice}/yr`}
            </div>
          </div>

          <hr />

          <ul className={styles['addons-summary']}>
            {addons.map((each) => (
              <li key={each.title}>
                <span>{each.title}</span>
                <span className={styles.price}>
                  {isMonthlyPlan ? `$${each.monthlyPrice}/mo` : `$${each.yearlyPrice}/yr`}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.total}>
          <span>Total (per {isMonthlyPlan ? 'month' : 'year'})</span>
          <span className={styles.price}>{`$${getTotalPrice()}/${
            isMonthlyPlan ? 'mo' : 'yr'
          }`}</span>
        </div>
      </div>

      <StepButton
        backButtonVisible
        nextButtonVisible
        isConfirm
        stepForward={stepForward}
        stepBack={stepBack}
      />
    </div>
  );
}
