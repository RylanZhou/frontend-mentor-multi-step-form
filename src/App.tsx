import React, { lazy, useContext, useState } from 'react';
import Step from './Components/Step';
import StepFormRender from './Components/StepFormRender';
import FormProvider from './FormContext';

import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <FormProvider>
        <main>
          <Step />
          <StepFormRender />
        </main>
      </FormProvider>
    </div>
  );
}

export default App;
