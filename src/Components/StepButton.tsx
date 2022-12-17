import React from 'react';

import styles from '../styles/form.module.scss';

interface StepButtonProps {
  backButtonVisible: boolean;
  isConfirm?: boolean;
  nextButtonVisible?: boolean;
  nextButtonDisabled?: boolean;
  nextButtonText?: string;
  stepBack?: () => void;
  stepForward?: () => void;
}

export default function StepButton({
  backButtonVisible,
  isConfirm,
  nextButtonVisible,
  nextButtonDisabled,
  nextButtonText,
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
          className={`${styles.next} ${isConfirm ? styles.confirm : ''}`}
          disabled={nextButtonDisabled}
          onClick={() => stepForward && stepForward()}
        >
          {isConfirm ? 'Confirm' : nextButtonText || 'Next Step'}
        </button>
      ) : (
        <button style={{ visibility: 'hidden' }}></button>
      )}
    </section>
  );
}
