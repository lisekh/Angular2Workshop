import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="row"> 
      <h1>Hello {{name}}</h1>

    </div>
  </div>
  `,
})
export class AppComponent  { 
  name = 'Angular'; 
}
