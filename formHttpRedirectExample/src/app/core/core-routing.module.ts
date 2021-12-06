import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralViewComponent } from './views/general-view/general-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralViewComponent,
    children: [
      {
        path: 'home',
        component: HomeViewComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
