import React from 'react';

import styles from '../styles/form.module.scss';

interface StepButtonProps {
  backButtonVisible: boolean;
  nextButtonVisible: boolean;
  nextButtonDisabled: boolean;
  stepBack?: () => void;
  stepForward?: () => void;
}

export default function StepButton({
  backButtonVisible,
  nextButtonVisible,
  nextButtonDisabled,
  stepBack,
  stepForward,
}: StepButtonProps) {
  return (
    <section className={styles['step-button']}>
      {backButtonVisible ? (
        <button className={styles.back} onClick={() => stepBack && stepBack()}>
          Go Back
        </button>
      ) : (
        <button style={{ visibility: 'hidden' }}></button>
      )}

      {nextButtonVisible ? (
        <button
          className={styles.next}
          disabled={nextButtonDisabled}
          onClick={() => stepForward && stepForward()}
        >
          Next Step
        </button>
      ) : (
        <button style={{ visibility: 'hidden' }}></button>
      )}
    </section>
  );
}
