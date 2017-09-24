import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MinifigsPage } from '../pages/minifigs/minifigs';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { SetsPage } from '../pages/sets/sets';
import { TabsPage } from '../pages/tabs/tabs';

import { ViewLayoutPopover } from '../pages/_parts/popovers/viewLayout/viewLayout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MinifigsPage,
    ProfilePage,
    SearchPage,
    SetsPage,
    TabsPage,
    ViewLayoutPopover,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MinifigsPage,
    ProfilePage,
    SearchPage,
    SetsPage,
    TabsPage,
    ViewLayoutPopover,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
