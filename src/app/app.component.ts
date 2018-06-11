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
  constructor(private urlService: WebApiObservableService, private notifier: NotificationsService) {

  }

  getShortenedUrl() {
    if (this.originalUrl == undefined || this.originalUrl.length < 1 || this.originalUrl == null) {
      this.notifier.error("bad url");
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
