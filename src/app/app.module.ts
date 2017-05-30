import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HighlightDirective } from './highlight.directive';
import { AppComponent } from './app.component';
import { KeyUpComponent_v3 } from './keyup.component';
import { HeroDetailComponent } from './hero-detail.component';
import { InterventionDetailComponent } from './intervention-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyUpComponent_v3,
    HighlightDirective,
    HeroDetailComponent,
    InterventionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
