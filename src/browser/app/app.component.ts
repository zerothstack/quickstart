import { Component } from '@angular/core';
import '../public/css/styles.css';
import { Cat } from '../../common/models/cat.model';
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {

  public handleClick() {
    let cat = new Cat('spike');
    console.log('click!', cat.greet(), cat);
  }

}
