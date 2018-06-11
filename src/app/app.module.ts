import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
>>>>>>> f15860fe6f7ae5da31fe3b02ff5007f6d9530ed9
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { WebApiObservableService } from './app.service';
<<<<<<< HEAD
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgxSpinnerModule } from 'ngx-spinner';
=======
>>>>>>> f15860fe6f7ae5da31fe3b02ff5007f6d9530ed9

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
     NgxSpinnerModule,
    SimpleNotificationsModule.forRoot()
=======

>>>>>>> f15860fe6f7ae5da31fe3b02ff5007f6d9530ed9
  ],
  providers: [WebApiObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
