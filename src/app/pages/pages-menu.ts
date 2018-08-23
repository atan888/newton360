import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'DASHBOARD',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'REPORTS',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Evaluation Coverage',
        link: '/pages/charts/chartjs',

      }, {
        title: 'Evaluation Scores',
        link: '/pages/reports/siteactivity',
      }, {
        title: 'Evaluation Consent',
        link: '/pages/form/form-inputs',
      }, {
        title: 'Feedback %',
        link: '/pages/form/form-inputs',
      },
      {
        title: 'Feedback Scores',
        link: '/pages/form/form-inputs',
      },
    ],
  },
  {
    title: 'QUESTION MANAGEMENT',
    icon: 'nb-compose',
    children: [
      {
        title: 'Supervisor Evaluation',
        link: '/pages/form/form-inputs',
      },
      {
        title: 'Employee Response',
        link: '/pages/form/form-inputs',
      },
    ],
  },
  {
    title: 'Site Management',
    icon: 'nb-gear',
    children: [
      {
        title: 'Mobile Management',
        link: '/pages/form/form-inputs',
      },
      {
        title: 'User Management',
        link: '/pages/form/form-inputs',
      },
      {
        title: 'User Preferences',
        link: '/pages/form/form-inputs',
      },
      {
        title: 'System Configuration',
        link: '/pages/form/form-inputs',
      },
    ],
  },
  /*
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];
