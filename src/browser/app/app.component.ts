import { Component } from '@angular/core';
import '../public/css/styles.css';
import { UserStore } from '../../common/stores/user.store';
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {

  constructor(protected userStore:UserStore){

  }

  public handleClick() {
    let userPromise = this.userStore.findOne(1234);
    userPromise.then((user) => {
      console.log('click!', user);
    });

  }

}
