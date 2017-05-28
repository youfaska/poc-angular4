import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// Importar la clase Observable desde la librería rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class HeroService {
    [name: string]: any;
  constructor(private http: Http) { }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  private commentsUrl = 'http://localhost:8080/hero/list';
  
  leerDatos(): Observable<Response> {  
  // Se declara cómo va a ser la llamada 
  // ocultando los pormenores a los consumidores   
    this.http
    .get('http://localhost:8080/hero/list')
    .map(res => res.json()).forEach(value => console.log(value));
  return this.http
    .get('http://localhost:8080/hero/list')
    .map(res => res.json());
  // En este momento aún no se efectuó la llamada
}

}