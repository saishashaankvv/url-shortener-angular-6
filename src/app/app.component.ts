import { Component } from '@angular/core';
import { WebApiObservableService} from './app.service';
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
  }
}
