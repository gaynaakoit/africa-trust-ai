import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AnalysisComponent } from './features/analysis/analysis.component';
import { IdentityComponent } from './features/identity/identity.component';
import { TrustComponent } from './features/trust/trust.component';
import { VerifyComponent } from './features/verify/verify.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AnalysisComponent,
    IdentityComponent,
    TrustComponent,
    VerifyComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
