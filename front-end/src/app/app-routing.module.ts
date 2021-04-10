import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ViewRegistrationComponent } from './view-registration/view-registration.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin/view/:id', component: ViewRegistrationComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
