import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public map: any = {};
  public err: any = {};
  public lat: number = 40.577121;
  public lng: number = 22.9892731;
  public getweather: string;
  public temp: number;
  public desc: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  public getWeather() {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.getweather + '&units=metric&appid=25346d3973182407454fbda88c9af331')
    .subscribe(
      result => this.handleResult(result),
      error => this.handleError(error)
    );
}
public handleResult = ( data ) => {
  this.map = data;
  console.log(this.map);
  this.lng = this.map.coord.lon;
  this.lat = this.map.coord.lat;
  this.desc = this.map.weather[0].description;
  this.temp = this.map.main.temp;
}

public handleError = (error) => {
  this.err = error;
  console.log(this.err);
}



}
