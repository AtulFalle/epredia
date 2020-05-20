import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicroContainerComponent } from './componants/micro-container/micro-container.component';


const routes: Routes = [
  {
    path: 'dashboard',
    children: [{
      path: '**',
      component: MicroContainerComponent,
      data: { app: 'dashboard' }
    }
    ]
  },
  { path: 'user', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'instruments', loadChildren: () => import('./instruments/instruments.module').then(m => m.InstrumentsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
