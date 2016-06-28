import { UserStore } from '../../common/stores/user.store';
import { Logger } from '@ubiquits/core/common';
import { HttpStore } from '@ubiquits/core/browser';
import { User } from '../../common/models/user.model';

import { Injectable, Injector } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserHttpStore extends HttpStore<User> implements UserStore {

  constructor(injector:Injector, http: Http, loggerBase: Logger) {
    /**
     * @todo resolve why the <any>http is needed to suppress the following error:
     *
     * src/browser/stores/user.http.store.ts(13,17): error TS2345: Argument of type 'Http' is not
     *   assignable to parameter of type 'Http'. Property '_backend' is protected but type 'Http'
     *   is not a class derived from 'Http'.
     *
     * It may have something to do with both ubiquits/core and the current project
     * depending on angular so TS thinks they could be different implementations?
     */
    super(User, injector, <any>http, loggerBase);
  }

}