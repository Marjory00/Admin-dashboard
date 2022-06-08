import { Injectable } from '@angular/core';

@Injectable( )
export class DataService {

  constructor() { }

  getData() {
    return [
      {
        name: 'AM',
        data: [ 400, 434, 500, 760, 830, 904]
      }, {
        name: 'SC',
        data: [ 432, 487, 580, 735, 840, 934]
      }, {
        name: 'TY',
        data: [ 100, 234, 300, 460, 530, 604]
      }, {
        name: 'QM',
        data: [ 200, 334, 400, 560, 630, 704]
      }, {
        name: 'VT',
        data: [ 110, 134, 100, 160, 130, 204]
      }];
    }

}
