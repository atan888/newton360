import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { SiteActivityComponent } from './siteactivity/siteactivity.component';

const routes: Routes = [{
  path: '',
  component: ReportsComponent,
  children: [{
    path: 'siteactivity',
    component: SiteActivityComponent,
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
];
