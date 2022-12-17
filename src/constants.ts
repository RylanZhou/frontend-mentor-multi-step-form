import Advanced from './assets/icon-advanced.svg';
import Arcade from './assets/icon-arcade.svg';
import Pro from './assets/icon-pro.svg';

export const plans: PlanItem[] = [
  {
    title: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    subtext: '2 months free',
    icon: Arcade,
  },
  {
    title: 'Advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    subtext: '2 months free',
    icon: Advanced,
  },
  {
    title: 'Pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
    subtext: '2 months free',
    icon: Pro,
  },
];

export const addons: AddonItem[] = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    title: 'Larger storage',
    description: 'Extra1TB of cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
