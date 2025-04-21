import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonappComponent } from './components/monapp/monapp.component';
import { ProfilePatientComponent } from './components/dashboard-patient/profile-patient/profile-patient.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent// ✅ On l’importe ici car il est standalone
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
  
    MonappComponent,
       ProfilePatientComponent,
      
  ]
})
export class AppModule { }
