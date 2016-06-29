import { Component } from '@angular/core';
import '../public/css/styles.css';
import { UserStore } from '../../common/stores/user.store';
import { User } from '../../common/models/user.model';
import { Collection, Logger } from '@ubiquits/core/common';
import { UserMockStore } from '../../common/stores/user.mock.store';
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {

  public requestData: any = null;
  public responseData: any = null;

  constructor(protected userStore: UserStore, protected userMockStore: UserMockStore, protected logger:Logger) {

  }

  private resetData():void {
    this.requestData =  null;
    this.responseData =  null;
  }

  private assignResponse(data:any){
    this.logger.debug('Response', data);
    this.responseData = data;
  }

  /**
   * Get a user (the DEMO_ID user)
   * @returns {Promise<TResult>}
   */
  public findOne() {
    this.resetData();
    return this.userStore.findOne(process.env.DEMO_ID)
      .then((user: User) => {
        this.assignResponse(user);
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
        this.assignResponse(users);
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
        this.assignResponse(result);
      }).catch((result) => {
        this.assignResponse(result);
      });

  }

}
