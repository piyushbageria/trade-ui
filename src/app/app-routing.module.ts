import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { WatcherComponent } from './watcher/watcher.component';

import { PortSubmenu1Component } from './port-submenu1/port-submenu1.component';
import { PortSubmenu2Component } from './port-submenu2/port-submenu2.component';
import { WatchSubmenu1Component } from './watch-submenu1/watch-submenu1.component';
import { WatchSubmenu2Component } from './watch-submenu2/watch-submenu2.component';


const routes: Routes = [
  { path: 'watcher', component: WatcherComponent,
   	children: [
      { path: '', redirectTo: 'watch1', pathMatch: 'full' },
      { path: 'watch1', component: WatchSubmenu1Component },
      { path: 'watch2', component: WatchSubmenu2Component }
    ]
  },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent,
    children: [
      { path: '', redirectTo: 'port1', pathMatch: 'full' },
      { path: 'port1', component: PortSubmenu1Component },
      { path: 'port2', component: PortSubmenu2Component }
    ]
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}