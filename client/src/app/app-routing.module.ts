import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HrClientComponent } from './pages/hr-client/hr-client.component';
import { WebViewComponent } from './pages/web-view/web-view.component';

const routes: Routes = [
  {path: 'dashboard/:id', component: DashboardComponent},
  {path: 'hr', component: HrClientComponent},
  {path: 'web-view', component: WebViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
