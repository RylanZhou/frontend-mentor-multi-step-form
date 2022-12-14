interface PlanItem {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  subtext?: string;
  icon: string;
}

interface AddonItem {
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

interface FormDataType {
  step: number;

  // Step 1
  step1: {
    name: string;
    email: string;
    phone: string;
  };

  // Step 2
  step2: {
    selectedPlan: PlanItem;
    billingPeriod: 'yearly' | 'monthly';
  };

  // Step 3
  step3: {
    addons: AddonItem[];
  };
}

type FormContextType = FormDataType & {
  saveStep1: (form: FormDataType['step1']) => void;
  saveStep2: (form: FormDataType['step2']) => void;
  saveStep3: (form: FormDataType['step3']) => void;
  goToStep: (step: number) => void;
  stepBack: () => void;
  stepForward: () => void;
};
