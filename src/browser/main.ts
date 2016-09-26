import { enableProdMode } from '@angular/core';
import { ConsoleLogger, Logger } from '@ubiquits/core/common';
import { UserStore } from '../common/stores/user.store';
import { UserHttpStore } from './stores/user.http.store';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    {provide: Logger, useClass: ConsoleLogger},
    {provide: UserStore, useClass: UserHttpStore},
  ]
});