import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Intervention } from './intervention';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
// Importar la clase Observable desde la librer�a rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class HeroService {
    [name: string]: any;
  constructor(private http: Http) { 
    this._interventions = <BehaviorSubject<Intervention[]>>new BehaviorSubject([]);
    this.interventions = this._interventions.asObservable(); 
    this.dataStore = { interventions: [] };
  }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  interventions: Observable<Intervention[]>
  private _interventions: BehaviorSubject<Intervention[]>;
  private dataStore: {
    interventions: Intervention[]
  };
  fetchData(){
   this.http
    .get('http://localhost:8080/asset-fleet/intervention/jsonBtNumeroDIntervention?numeroDIntervention=IN1701').subscribe(
    (data) => console.log(data)
    );
  }
  
  leerDatos(): Observable<Response> {  
    // Se declara c�mo va a ser la llamada 
    // ocultando los pormenores a los consumidores   
      this.http
      .get('http://localhost:8080/asset-fleet/intervention/jsonBtNumeroDIntervention?numeroDIntervention=IN1701').subscribe(
      (data) => console.log(data)
      )
      
    return this.http
      .get('http://localhost:8080/asset-fleet/intervention/jsonBtNumeroDIntervention?numeroDIntervention=IN1701')
      .map(res => (<Response>res).json());
  } 
    
    get allInterventions() {
       return this._interventions.asObservable();
    }

    loadAll() {
    this.http.get('http://localhost:8080/asset-fleet/intervention/jsonBtNumeroDIntervention?numeroDIntervention=IN1701').map(response => response.json()).subscribe(data => {
      alert(data);
      this.dataStore.interventions = data;
      this._interventions.next(Object.assign({}, this.dataStore).interventions);
    }, error => console.log('Could not load interventions.'));
  }
  
  getInterventions(): Observable<Intervention[]> {
      let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
      let options = new RequestOptions({ headers: headers });
  
      return this.http.get('http://localhost:8080/asset-fleet/intervention/jsonBtNumeroDIntervention?numeroDIntervention=IN170', options)
      .map(res => (<Response>res).json())
      .catch(this.handleError);
  }
}