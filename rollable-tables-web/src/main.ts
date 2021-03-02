import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
const awsconfig = require('./aws-exports');

Amplify.configure(awsconfig.default)
Auth.configure(awsconfig.default)

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
