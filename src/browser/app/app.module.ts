import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { UserStore } from '../../common/stores/user.store';
import { UserMockStore } from '../../common/stores/user.mock.store';
import { ConsoleLogger, Logger } from '@zerothstack/core/common';
import { UserHttpStore } from '../stores/user.http.store';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    UserMockStore,
    { provide: UserStore, useClass: UserHttpStore },
    { provide: Logger, useClass: ConsoleLogger },
  ]
})
export class AppModule {}