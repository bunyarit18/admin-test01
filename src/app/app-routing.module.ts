import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomComponent } from './room/room.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { TreasuryComponent } from './treasury/treasury.component';
import { RecordComponent } from './record/record.component';



const routes: Routes =[
  { path: 'home',             component: DashboardComponent },
  { path: 'room',             component: RoomComponent },
  { path: 'employee',         component: EmployeeComponent  },
  { path: 'customer',         component: CustomerComponent },
  { path: 'treasury',         component: TreasuryComponent },
  { path: 'record',           component: RecordComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
