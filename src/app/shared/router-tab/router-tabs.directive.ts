import { Directive, AfterContentInit, OnDestroy, QueryList, ContentChildren } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { RouterTab } from './router-tab.directive';


@Directive({
  selector: '[routerTabs]'
})
export class RouterTabs implements AfterContentInit, OnDestroy {
subscription = new Subscription();


  @ContentChildren(RouterTab)
  routerTabs!: QueryList<RouterTab>;
  setIndex: any;


  constructor(
    private host: MatTabGroup,
    private router: Router)
 { }

 ngOnDestroy(): void {
  this.subscription.unsubscribe();
 }

  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');

    this.setIndex();
    this.subscription.add(
      this.router.events.subscribe(e => {
        if (e instanceof NavigationEnd) {
          this.setIndex();
        }
      })
    );

    this.subscription.add(


    )

  }

 }


