import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component'
import { TestCenterListComponent } from './test-center-list/test-center-list.component';
import { TestCenterFormComponent } from './test-center-form/test-center-form.component';


const routes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'addcustomer', component: CustomerFormComponent},
  {path: 'testcenters', component: TestCenterListComponent},
  {path: 'addtestcenter', component: TestCenterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
