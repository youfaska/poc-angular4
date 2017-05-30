import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Intervention } from './intervention';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './hero-list.component.html',
  providers: [HeroService],
  styleUrls: ['./app.component.css'],
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEA;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8RC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D0B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent implements OnInit {
  clickMessage = '';
  title = '';
  selectedHero: Hero;
  heroes: Hero[];
  heroesII = ['YOUFASKA', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroesII[0];
  values = '';
  interventions: Intervention[];
  selectedIntervention: Intervention;

  constructor(private heroService: HeroService) {
    this.title = 'Inteventions';
  }
//  onKey(event: any) { // without type info
//    this.values += event.target.value + ' | ';
//  }

  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
  
  onClickMe(): void {
    this.clickMessage = 'Vous avez lance une demander...';
  }
  
  addRow(): void {
    this.clickMessage = 'Vous avez lance une demander...';
      this.interventions.push({ 'codeIntervention': 111, 'numeroDIntervention': 'ddd', 'objetDeLIntervention':'ddfd' });
    
  }

  getHeroes(): void {
    this.heroService.leerDatos();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.showModalSmS(this.selectedHero);
  }

  onSelectIntervention(intervention: Intervention): void {
    this.selectedIntervention = intervention;
    this.showModalSmSIntervention(this.selectedIntervention);
  }

  showModalSmS(hero: Hero) {
    console.log('Hola amigo [' + hero.name + ']');
    alert('Intervention selected: ' + hero.name);
  }

  showModalSmSIntervention(intervention: Intervention) {
    console.log('Hola amigo [' + intervention.codeIntervention + ']');
    alert('Intervention selected: ' + intervention.codeIntervention);
  }

  ngOnInit(): void {
    console.log("Inicializamos la lista...");
    
    this.heroService.getInterventions()
      .subscribe(interventions => this.interventions = interventions);
  }
}