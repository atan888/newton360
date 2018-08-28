import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { SiteActivityComponent } from './eval-coverage/siteactivity.component';
import { FormInputsComponent } from './eval-scores/form-inputs.component';
import { FormInputsComponent2 } from './eval-consent/form-inputs.component';
import { FormInputsComponent3 } from './eval-feedback/form-inputs.component';
import { FormInputsComponent4 } from './eval-feedbackscores/form-inputs.component';

const routes: Routes = [{
  path: '',
  component: ReportsComponent,
  children: [{
        path: 'evalcoverage',
        component: SiteActivityComponent,
    },
    {
        path: 'evalscores',
        component: FormInputsComponent,
    },
    {
        path: 'evalconsent',
        component: FormInputsComponent2,
    },
    {
        path: 'evalfeedback',
        component: FormInputsComponent3,
    },
    {
        path: 'evalfeedbackscores',
        component: FormInputsComponent4,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ReportsRoutingModule {

}

export const routedComponents = [
  ReportsComponent,
  SiteActivityComponent,
  FormInputsComponent,
  FormInputsComponent2,
  FormInputsComponent3,
  FormInputsComponent4
];
