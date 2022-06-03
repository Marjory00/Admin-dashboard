/*!
==============================================================
* Admin Dashboard Angular Material -
==============================================================

* Product Page: https://github.com/Marjory00/Admin-dashboard.git
* Copyright 2022 Marjory Marquez
* Licensed under MIT (https://github.com/Marjory00/Admin-dashboard/blob/master/LICENSE.md)

* Coded by Marjory Marquez
==============================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
.bootstrapModule(AppModule)
  .catch(err => console.error(err));
