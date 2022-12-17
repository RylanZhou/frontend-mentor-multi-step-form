import React, { useContext, useState } from 'react';
import { FormContext } from '../FormContext';
import { plans } from '../constants';
import StepButton from './StepButton';

import styles from '../styles/form.module.scss';
import '../styles/input.scss';

export default function Step2Form() {
  const { step2, saveStep2, stepForward, stepBack } = useContext(FormContext) as FormContextType;

  const [plan, setPlan] = useState<PlanItem>(step2.selectedPlan);

  return (
    <div className={styles['form-container']}>
      <div className={styles.form}>
        <h1>Select your plan</h1>
        <h3>You have the option of monthly or yearly billing.</h3>

        <ul className={styles.plans}>
          {plans.map((each) => (
            <li
              className={`${plan.title === each.title ? styles.active : ''}`}
              key={each.title}
              onClick={() => setPlan(each)}
            >
              <img src={each.icon} alt="icon" />
              <div className={styles.text}>
                <div className={styles.title}>{each.title}</div>
                <div className={styles.price}>
                  {step2.billingPeriod === 'monthly'
                    ? `$${each.monthlyPrice}/mo`
                    : `$${each.yearlyPrice}/yr`}
                </div>
                {step2.billingPeriod === 'yearly' && (
                  <div className={styles.sub}>{each.subtext}</div>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className={styles['switch-container']}>
          <span className={`${step2.billingPeriod === 'monthly' ? styles.active : ''}`}>
            Monthly
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={step2.billingPeriod === 'yearly'}
              onChange={(e) =>
                saveStep2({
                  selectedPlan: plan,
                  billingPeriod: e.target.checked ? 'yearly' : 'monthly',
                })
              }
            />
            <span className="slider"></span>
          </label>
          <span className={`${step2.billingPeriod === 'yearly' ? styles.active : ''}`}>Yearly</span>
        </div>
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
