import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeAComponent } from './pages/admin/home-a/home-a.component';
import { TabsPage } from './tabs/tabs.page';
import { HomeDComponent } from './pages/dentist/home-d/home-d.component';
import { HomePComponent } from './pages/patient/home-p/home-p.component';
import { LoginComponent } from './pages/login/login.component';
import './importModules';
import { TabsPatientPage } from './tabsPatient/tabsPatient.page';

const routes: Routes = [
  {
    path: 'pages',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'admin',
        component: TabsPage,
        children: [
          { 
            path: 'home',
            component: HomeAComponent
          },
        ]
      },
      {
        path: 'dentist',
        component: TabsPage,
        children: [
          { 
            path: 'home',
            component: HomeDComponent
          },
        ]
      },
      {
        path: 'patient',
        component: TabsPatientPage,
        children: [
          { 
            path: 'home',
            component: HomePComponent
          },
        ]
      },
    ]
  },
  
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
