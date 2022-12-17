import React, { useState } from 'react';
import { plans } from './constants';

export const FormContext = React.createContext<FormContextType | null>(null);

export default function FormProvider({ children }: React.PropsWithChildren) {
  const [step, setStep] = useState(1);
  const [step1, setStep1] = useState<FormDataType['step1']>({
    name: '',
    email: '',
    phone: '',
  });
  const [step2, setStep2] = useState<FormDataType['step2']>({
    billingPeriod: 'yearly',
    selectedPlan: plans[0],
  });
  const [step3, setStep3] = useState<FormDataType['step3']>({ addons: [] });

  return (
    <FormContext.Provider
      value={{
        step,
        step1,
        step2,
        step3,
        saveStep1: setStep1,
        saveStep2: setStep2,
        saveStep3: setStep3,
        goToStep: setStep,
        stepForward: () => setStep((step) => step + 1),
        stepBack: () => setStep((step) => step - 1),
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
