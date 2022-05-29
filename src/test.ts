// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Unfortunately there's no typing for the '__karma__' variable. Just declare it as any.
//declare var__karma__: any;
//declare var require: any;

//Prevent Karma from running prematurely.
//__karma__.loaded = function () {};


// Then we do all the tests.
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {

    <T>(id: string): T;
    keys(): string[];
  };
};

// Added Recently
require.context('/', true, /\.spec\.ts$/);

// Finally, start Karma to run the tests.
//__karma__.start();


// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
function keys() {
  throw new Error('Function not implemented.');
}

