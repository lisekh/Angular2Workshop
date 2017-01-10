import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="page-container">
    <div class="row">

        
      <h1>Hello {{name}}</h1>
      
      <sidebar></sidebar>
      
      <hello></hello>
    </div>
  </div>
  `,
})
export class AppComponent  { 
  name = 'Angular'; 
}
