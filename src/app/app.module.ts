import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WatcherComponent } from './watcher/watcher.component';
import { PortSubmenu1Component } from './port-submenu1/port-submenu1.component';
import { PortSubmenu2Component } from './port-submenu2/port-submenu2.component';
import { WatchSubmenu1Component } from './watch-submenu1/watch-submenu1.component';
import { WatchSubmenu2Component } from './watch-submenu2/watch-submenu2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PortfolioComponent,
    WatcherComponent,
    PortSubmenu1Component,
    PortSubmenu2Component,
    WatchSubmenu1Component,
    WatchSubmenu2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
