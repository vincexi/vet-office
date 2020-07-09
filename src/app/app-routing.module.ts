import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RequestAppointmentComponent } from './request-appointment/request-appointment.component';
import { HomeComponent } from './home/home.component';
import { TodaysAppointmentComponent } from './todays-appointment/todays-appointment.component';
import { PatientsComponent } from './patients/patients.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'request-appointment',
    component: RequestAppointmentComponent
  },
  {
    path: 'todays-appointments',
    component: TodaysAppointmentComponent
  },
  {
    path: 'patients',
    component: PatientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
