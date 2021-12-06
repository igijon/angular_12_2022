import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DescriptionComponent } from './components/description/description.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { GeneralViewComponent } from './views/general-view/general-view.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DescriptionComponent,
    HomeViewComponent,
    GeneralViewComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
