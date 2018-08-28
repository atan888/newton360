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
        link: '/pages/reports/evalcoverage',

      }, {
        title: 'Evaluation Scores',
        link: '/pages/reports/evalscores',
      }, {
        title: 'Evaluation Consent',
        link: '/pages/reports/evalconsent',
      }, {
        title: 'Feedback %',
        link: '/pages/reports/evalfeedback',
      },
      {
        title: 'Feedback Scores',
        link: '/pages/reports/evalfeedbackscores',
      },
    ],
  },
  {
    title: 'QUESTION MANAGEMENT',
    icon: 'nb-compose',
    children: [
      {
        title: 'Supervisor Evaluation',
        link: '/pages/question-management/supevaluation',
      },
      {
        title: 'Employee Response',
        link: '/pages/question-management/empevaluation',
      },
    ],
  },
  {
    title: 'Site Management',
    icon: 'nb-gear',
    children: [
      {
        title: 'Mobile Management',
        link: '/pages/site-management/mobile',
      },
      {
        title: 'User Management',
        link: '/pages/site-management/users',
      },
      {
        title: 'User Preferences',
        link: '/pages/site-management/userpref',
      },
      {
        title: 'System Configuration',
        link: '/pages/site-management/sysconfig',
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
