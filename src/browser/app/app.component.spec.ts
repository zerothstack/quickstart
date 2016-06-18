import {
  it, xit,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserStore } from '../../common/stores/user.store';
import { UserMockStore } from '../../common/stores/user.mock.store';

describe('App', () => {
  beforeEachProviders(() => [
    AppComponent,
    {provide:UserStore, useClass: UserMockStore}
  ]);
  it('should work', inject([AppComponent], (app: AppComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));

  xit('should skip', () => {
    expect(true).toBe(false);
  });
});
