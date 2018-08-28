import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent1 } from './mobile/form-inputs.component';
import { FormInputsComponent2 } from './users/form-inputs.component';
import { FormInputsComponent3 } from './userpref/form-inputs.component';
import { FormInputsComponent4 } from './sysconfig/form-inputs.component';

const routes: Routes = [{
  path: '',
  component: FormsComponent,
  children: [{
    path: 'mobile',
    component: FormInputsComponent1,
  }, {
    path: 'users',
    component: FormInputsComponent2,
  }, {
    path: 'userpref',
    component: FormInputsComponent3,
  }, {
    path: 'sysconfig',
    component: FormInputsComponent4,
  }
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
export class FormsRoutingModule {

}

export const routedComponents = [
  FormsComponent,
  FormInputsComponent1,
  FormInputsComponent2,
  FormInputsComponent3,
  FormInputsComponent4,
];
