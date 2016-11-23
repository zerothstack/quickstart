import { AppComponent } from './app.component';
import { UserStore } from '../../common/stores/user.store';
import { UserMockStore } from '../../common/stores/user.mock.store';
import { ConsoleLogger, Logger } from '@ubiquits/core/common';
import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing/component_fixture';
import { Injector } from '@angular/core';

describe('App', () => {

  let context: ComponentFixture<AppComponent>;

  beforeEach(() => {

    context = TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        Injector,
        UserMockStore,
        {provide:UserStore, useClass: UserMockStore},
        {provide: Logger, useClass: ConsoleLogger},
      ]
    })
      .createComponent(AppComponent)

  });

  it('should work', () => {
    // Add real test here
    expect(context.componentInstance instanceof AppComponent).toBe(true);
  });

  xit('should skip', () => {
    expect(true).toBe(false);
  });
});
