import Advanced from './assets/icon-advanced.svg';
import Arcade from './assets/icon-arcade.svg';
import Pro from './assets/icon-pro.svg';

export const plans: PlanItem[] = [
  {
    title: 'Arcade',
    monthlyPrice: '$9/mo',
    yearlyPrice: '$90/yr',
    subtext: '2 months free',
    icon: Arcade,
  },
  {
    title: 'Advanced',
    monthlyPrice: '$12/mo',
    yearlyPrice: '$120/yr',
    subtext: '2 months free',
    icon: Advanced,
  },
  {
    title: 'Pro',
    monthlyPrice: '$15/mo',
    yearlyPrice: '$150/yr',
    subtext: '2 months free',
    icon: Pro,
  },
];

export const addons: AddonItem[] = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    monthlyPrice: '+$1/yr',
    yearlyPrice: '+$10/yr',
  },
  {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthlyPrice: '+$2/yr',
    yearlyPrice: '+$20/yr',
  },
  {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthlyPrice: '+$2/yr',
    yearlyPrice: '+$20/yr',
  },
];
