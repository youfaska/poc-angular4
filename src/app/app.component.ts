import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


/*export class Hero {
  id: number;
  name: string;
}*/


/*const HEROES: Hero[] = [
  { id: 1, name: 'Mr. Nice' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' }
];*/


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  providers: [HeroService],
  styleUrls: ['./app.component.css'],
  template: `<h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
`,
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

export class AppComponent implements OnInit{
  /*title = 'Asset&Fleet, Welcome to my world: ANGULAR 4';
  color: string;*/
  //hero = 'Windstorm';
  //heroes = HEROES;
  title = 'Tour of Heroes';
  constructor(private heroService: HeroService) { }
  //heroService = new HeroService(); // don't do this

  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  selectedHero: Hero;
  heroes: Hero[];
  getHeroes(): void {
     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroesRest();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.showModalSmS(this.selectedHero);
  }

  showModalSmS(hero: Hero) {
    console.log('Hola amigo [' + hero.name + ']');
    if (hero.id == 1) {
      alert('Esto mola mogollon....' + hero.name);
    }
  }
  ngOnInit(): void {
    
    console.log(this.heroService.leerDatos());
    return this.getHeroes();
  }
  

}