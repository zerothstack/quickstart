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
    let userPromise = this.userStore.findOne('72eed629-c4ab-4520-a987-4ea26b134d8c');
    userPromise.then((user) => {
      console.log('click!', user);
    });

  }

}
