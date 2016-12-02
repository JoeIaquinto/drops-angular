import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Set our default values
  localState =[{"_id":"SkKI9vCfg","name":"Base Jumping","location":"Poestenkill Gorge","latitude":"42.7213456","longitude":"-73.6790344","description":"We're going base jumping at the gorge this weekend!","__v":0},
  {"_id":"SJ_p9PAze","name":"Mall shopping","location":"Crossgates Mall","latitude":42.7213456,"longitude":"-73.6790344","description":"Hitting up Crossgates","__v":0}]

  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {

  }



  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(name: string, description: string, latitude: string, longitude: string) {
    console.log('submitState', name);
    this.appState.set('drop', name);
  }
}
