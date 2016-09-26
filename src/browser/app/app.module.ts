import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { UserStore } from '../../common/stores/user.store';
import { UserMockStore } from '../../common/stores/user.mock.store';
import { ConsoleLogger, Logger } from '@ubiquits/core/common';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    UserMockStore,
    { provide: UserStore, useClass: UserMockStore },
    { provide: Logger, useClass: ConsoleLogger },
  ]
})
export class AppModule {}