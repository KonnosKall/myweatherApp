import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public map: any = {};
  public getweather: string;
  public temp;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  public getWeather() {
    this.http.get('api.openweathermap.org/data/2.5/find?q='
    + this.getweather +
     '&units=metric&appid=25346d3973182407454fbda88c9af331')
    .subscribe(
      result => this.handleResult(result),
      error => this.handleError(error)
    );
}
public handleResult = (data) => {
  this.map = data;
  console.log(this.map);
}

public handleError = (error) => {
  alert('Location Not Found');
}
}
