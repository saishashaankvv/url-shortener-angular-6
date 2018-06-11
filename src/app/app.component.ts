import { Component } from '@angular/core';
import { WebApiObservableService } from './app.service';
import { NotificationsService } from "angular2-notifications";

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
  server_url = "http://localhost:3000/url/";
    public options = {
    position: ["top", "right"],
    showProgressBar : true,
    timeOut: 2000,
    lastOnBottom: true,
    clickToClose : true,
    preventDuplicates : true,
    }   

  constructor(private urlService: WebApiObservableService, private notifier: NotificationsService) {

  }

  getShortenedUrl() {
    if (this.originalUrl == undefined || this.originalUrl.length < 1 || this.originalUrl == null) {
      this.notifier.error("Bad URL. Please Check and try again. ");
    } else {
      this.urlService.
        createService(this.server_url + "shorten", { "url": this.originalUrl }).
        subscribe((response) => {
          this.shortenedUrl = JSON.parse(response._body).url;
          if (!this.isUrlShortened) {
            this.isUrlShortened = !this.isUrlShortened;
          }
        }, (error) => {
          console.log(error);
        });
    }
  }
}
