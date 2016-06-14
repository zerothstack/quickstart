import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ConsoleLogger, Logger } from '@ubiquits/core/common';

import { AppComponent } from './app/app.component';
import { UserMockStore } from '../common/stores/user.mock.store';
import { UserStore } from '../common/stores/user.store';
import { UserHttpStore } from './stores/user.http.store';
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [
  provide(Logger, {useClass: ConsoleLogger}),
  provide(UserStore, {useClass: UserHttpStore}),
  HTTP_PROVIDERS,
]);
