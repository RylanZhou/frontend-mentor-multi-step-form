import React, { useContext } from 'react';
import { FormContext } from '../FormContext';

import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import Step3Form from './Step3Form';

export default function StepFormRender() {
  const { step } = useContext(FormContext) as FormContextType;

  switch (step) {
    case 1:
      return <Step1Form />;
    case 2:
      return <Step2Form />;
    case 3:
      return <Step3Form />;

    default:
      return null;
  }
}
