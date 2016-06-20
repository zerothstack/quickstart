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

  public data:any;

  constructor(protected userStore: UserStore) {

  }

  public getOne() {
    let userPromise = this.userStore.findOne(process.env.DEMO_ID);
    userPromise.then((user: User) => {
      this.data = user;
    });
  }

  public getMany() {
    let userPromise = this.userStore.findMany();
    userPromise.then((users: Collection<User>) => {
      this.data = users;
    });
  }

}
