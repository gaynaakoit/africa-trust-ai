import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AnalysisComponent } from './features/analysis/analysis.component';
import { IdentityComponent } from './features/identity/identity.component';
import { TrustComponent } from './features/trust/trust.component';
import { VerifyComponent } from './features/verify/verify.component';
import { DocumentationComponent } from './features/documentation/documentation.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'identity', component: IdentityComponent },
  { path: 'trust', component: TrustComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'documentation', component: DocumentationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }