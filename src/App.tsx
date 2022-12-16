import React, { useState } from 'react';
import Step from './Components/Step';
import FormProvider from './FormContext';

import Step1Form from './Components/Step1Form';
import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <FormProvider>
        <main>
          <Step />

          <div className={styles['form-container']}>
            <Step1Form />
          </div>
        </main>

        <section>
          <button className={styles.back}>Back</button>
          <button className={styles.next}>Next Step</button>
        </section>
      </FormProvider>
    </div>
  );
}

export default App;
