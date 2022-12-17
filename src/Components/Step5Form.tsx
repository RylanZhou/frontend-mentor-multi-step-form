import React from 'react';
import styles from '../styles/form.module.scss';

import ThankYou from '../assets/icon-thank-you.svg';

export default function Step5Form() {
  return (
    <div className={styles['form-container']}>
      <div className={styles.form}>
        <div className={styles['thank-you']}>
          <img src={ThankYou} alt="Checkmark" />
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using our platform. If you
            ever need support, please feel free to email us at support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  );
}
