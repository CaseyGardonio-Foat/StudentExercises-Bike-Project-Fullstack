import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { ViewRegistrationComponent } from './view-registration/view-registration.component';
import { AuthorizationGuard } from './authorization.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'admin/view/:id', component: ViewRegistrationComponent, canActivate: [AuthorizationGuard]},
  {path: 'admin/view/:id', component: ViewRegistrationComponent},
  // {path: 'admin', component: AdminComponent, canActivate: [AuthorizationGuard]},
  {path: 'admin', component: AdminComponent},
  {path: 'callback', component: CallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
