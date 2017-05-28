import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// Importar la clase Observable desde la librer�a rxjs
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
  
  fetchData(){
   this.http
    .get('http://localhost:8080/hero/list').subscribe(
    (data) => console.log(data)
    );
  }
  
  leerDatos(): Observable<Response> {  
  // Se declara c�mo va a ser la llamada 
  // ocultando los pormenores a los consumidores   
    this.http
    .get('http://localhost:8080/hero/list').subscribe(
    (data) => console.log(data)
    )
    
  return this.http
    .get('http://localhost:8080/hero/list')
    .map(res => (<Response>res).json());
  // En este momento a�n no se efectu� la llamada
}

}