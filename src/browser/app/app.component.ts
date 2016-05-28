import { Component } from '@angular/core';
import '../public/css/styles.css';
import { User } from '../../common/models/user.model';
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {

  public handleClick() {
    let user = new User({userId:12334});
    console.log('click!', user);
  }

}
