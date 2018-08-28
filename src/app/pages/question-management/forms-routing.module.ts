import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './supervisor-evaluation/form-inputs.component';
import { FormLayoutsComponent } from './emp-evaluation/form-layouts.component';

const routes: Routes = [{
  path: '',
  component: FormsComponent,
  children: [{
    path: 'supevaluation',
    component: FormInputsComponent,
  }, {
    path: 'empevaluation',
    component: FormLayoutsComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {

}

export const routedComponents = [
  FormsComponent,
  FormInputsComponent,
  FormLayoutsComponent,
];
