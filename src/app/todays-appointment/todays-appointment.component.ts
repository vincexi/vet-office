import { Component, OnInit } from '@angular/core';
import appointments from 'src/assets/appointments.json';

@Component({
  selector: 'app-todays-appointment',
  templateUrl: './todays-appointment.component.html',
  styleUrls: ['./todays-appointment.component.css']
})
export class TodaysAppointmentComponent {
  Appointments: any = appointments;
}
