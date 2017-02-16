import { Component } from '@angular/core';

// This component is not the root component. In this case we can see that it wraps all other components we created.

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="row"> 
      <h1>Hello {{name}}</h1>
      <sidebar></sidebar>
      <main-area></main-area>
    </div>
  </div>
  `,
})
export class AppComponent  {

  // A rendering tag is used to show the content of the 'name' variable
  name = 'Angular';
}
