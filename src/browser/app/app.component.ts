import { Component } from '@angular/core';
import '../public/css/styles.css';
import { UserStore } from '../../common/stores/user.store';
import { User } from '../../common/models/user.model';
import { Collection } from '@ubiquits/core/common';
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {

  constructor(protected userStore:UserStore){

  }

  public getOne() {
    let userPromise = this.userStore.findOne('72eed629-c4ab-4520-a987-4ea26b134d8c');
    userPromise.then((user:User) => {
      console.log('Found: ', user);
    });
  }

  public getMany() {
    let userPromise = this.userStore.findMany();
    userPromise.then((users:Collection<User>) => {
      console.log('Found: ', users);
    });
  }

}
