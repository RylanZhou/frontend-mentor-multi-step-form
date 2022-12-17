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
          <Step1Form />
        </main>
      </FormProvider>
    </div>
  );
}

export default App;
