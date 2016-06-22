import { Component } from '@angular/core';
import '../public/css/styles.css';
import { UserStore } from '../../common/stores/user.store';
import { User } from '../../common/models/user.model';
import { Collection } from '@ubiquits/core/common';
import { UserMockStore } from '../../common/stores/user.mock.store';
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {

  public requestData: any = null;
  public responseData: any = null;

  constructor(protected userStore: UserStore, protected userMockStore: UserMockStore) {

  }

  private resetData():void {
    this.requestData =  null;
    this.responseData =  null;
  }

  /**
   * Get a user (the DEMO_ID user)
   * @returns {Promise<TResult>}
   */
  public findOne() {
    this.resetData();
    return this.userStore.findOne(process.env.DEMO_ID)
      .then((user: User) => {
        this.responseData = user;
      });
  }

  /**
   * Get many users
   * @returns {Promise<TResult>}
   */
  public findMany() {
    this.resetData();
    return this.userStore.findMany()
      .then((users: Collection<User>) => {
        this.responseData = users;
      });
  }

  /**
   * Create a new user from mock and save it
   */
  public saveOne() {
    this.resetData();
    return this.userMockStore.findOne(null)
      .then((user:User) => {
        this.requestData = user;
        return this.userStore.saveOne(user);
      })
      .then((result) => {
        this.responseData = result;
      }).catch((result) => {
        this.responseData = result;
      });

  }

}
