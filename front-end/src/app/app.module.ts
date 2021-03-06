import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../../src/app/app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { BikeService } from './bike.service';
import { ViewRegistrationComponent } from './view-registration/view-registration.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CallbackComponent } from './callback/callback.component';
import { AuthorizationService } from './authorization.service';
import { AuthorizationGuard } from './authorization.guard';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BikeService,
    AuthorizationService,
    AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
