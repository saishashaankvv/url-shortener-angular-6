import { Component } from '@angular/core';
<<<<<<< HEAD
import { WebApiObservableService } from './app.service';
import { NotificationsService } from "angular2-notifications";
import { NgxSpinnerService } from 'ngx-spinner';

=======
import { WebApiObservableService} from './app.service';
>>>>>>> f15860fe6f7ae5da31fe3b02ff5007f6d9530ed9
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  originalUrl;
  shortenedUrl = "";
  isUrlShortened = false;
<<<<<<< HEAD
  server_url = "http://localhost:3000/url/";
    public options = {
    position: ["top", "right"],
    showProgressBar : true,
    timeOut: 2000,
    lastOnBottom: true,
    clickToClose : true,
    preventDuplicates : true,
    }   

  constructor(private spinner: NgxSpinnerService, private urlService: WebApiObservableService, private notifier: NotificationsService) {

  }

  getShortenedUrl() {
    if (this.originalUrl == undefined || this.originalUrl.length < 1 || this.originalUrl == null) {
      this.notifier.error("No URL was entered. Please Check and try again. ");
    } else {
      this.spinner.show();
      this.urlService.
        createService(this.server_url + "shorten", { "url": this.originalUrl }).
        subscribe((response) => {
          this.shortenedUrl = JSON.parse(response._body).url;
            this.spinner.hide();
            if(this.isUrlShortened == false){
               this.isUrlShortened = true;
            }
        }, (error) => {
          this.spinner.hide();
          console.log(error);
        });
    }
=======
  server_url = "http://localhost:8080/url/";
  constructor(private urlService:WebApiObservableService){

  }

  getShortenedUrl(){
    this.urlService.
    createService(this.server_url+"shorten",{"url":this.originalUrl}).
    subscribe((response) => {
      this.shortenedUrl = JSON.parse(response._body).url;
      if(!this.isUrlShortened){
      this.isUrlShortened = !this.isUrlShortened;
      }
    },(error) => {
      console.log(error);
    });
>>>>>>> f15860fe6f7ae5da31fe3b02ff5007f6d9530ed9
  }
}
