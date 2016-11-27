import { Component } from '@angular/core';
import '../public/css/styles.css';
import { UserStore } from '../../common/stores/user.store';
import { User } from '../../common/models/user.model';
import { Collection, Logger } from '@zerothstack/core/common';
import { UserMockStore } from '../../common/stores/user.mock.store';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {

  public requestData: any  = null;
  public responseData: any = null;

  constructor(protected userStore: UserStore, protected userMockStore: UserMockStore, protected logger: Logger) {

  }

  private resetData(): void {
    this.requestData  = null;
    this.responseData = null;
  }

  private assignResponse(data: any) {
    this.logger.debug('Response', data);
    this.responseData = data;
  }

  /**
   * Get a user (the DEMO_ID user)
   * @returns {Promise<TResult>}
   */
  public async findOne(): Promise<void> {
    this.resetData();
    const user: User = await this.userStore.findOne(process.env.DEMO_ID);
    this.assignResponse(user);
  }

  /**
   * Get many users
   * @returns {Promise<TResult>}
   */
  public async findMany(): Promise<void> {
    this.resetData();

    const users: Collection<User> = await this.userStore.findMany();
    this.assignResponse(users);
  }

  /**
   * Create a new user from mock and save it
   */
  public async saveOne(): Promise<void> {
    this.resetData();
    const user: User = await this.userMockStore.findOne(null);
    try {
      const saveResult = await this.userStore.saveOne(user);
      this.assignResponse(saveResult);
    } catch (e) {
      this.assignResponse(e);
      this.logger.error(e);
    }

  }

}
