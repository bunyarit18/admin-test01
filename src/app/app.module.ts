import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { RoomComponent } from './room/room.component';
import { TreasuryComponent } from './treasury/treasury.component';
import { RecordComponent } from './record/record.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FooterComponent,
    IntroComponent,
    SocialComponent,
    DashboardComponent,
    EmployeeComponent,
    CustomerComponent,
    RoomComponent,
    TreasuryComponent,
    RecordComponent,

  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
