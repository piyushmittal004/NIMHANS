import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms'
import { MaterialModule } from './material/material.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {RouterModule, Routes} from "@angular/router";
import { ThirdComponent } from './third/third.component';
// import { LoginComponent } from './login/login.component';
import { TransferUserService } from './TransferUserService';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ViewLabReportComponent } from './view-lab-report/view-lab-report.component'
import { UserServiceService } from './user-service.service';




const appRoutes: Routes = [
  { path: '', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'first', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'second', component: SecondComponent, data: { title: 'Second Component' } },
  { path: 'third', component: ThirdComponent, data: { title: 'Third Component' } },
  {path: 'breifView/:id',component:FourthComponentComponent},
  {path: 'labView',component:ViewLabReportComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
   // LoginComponent,
    FourthComponentComponent,
   ViewLabReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ScrollingModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],

  providers: [TransferUserService,UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
