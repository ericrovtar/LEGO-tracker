import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MinifigsPage } from '../pages/minifigs/minifigs.page';
import { ProfilePage } from '../pages/profile/profile.page';
import { SearchPage } from '../pages/search/search.page';
import { SetsPage } from '../pages/sets/sets.page';
import { SetPage } from '../pages/set/set.page';
import { TabsPage } from '../pages/tabs/tabs';
import { ThemesPage } from '../pages/themes/themes.page';

import { SetService } from '../app/set/set.service';
import { ThemeService } from '../app/theme/theme.service';

import { ViewLayoutPopover } from '../pages/_parts/popovers/viewLayout/viewLayout';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MinifigsPage,
    ProfilePage,
    SearchPage,
    SetPage,
    SetsPage,
    TabsPage,
    ThemesPage,
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
    SetPage,
    SetsPage,
    TabsPage,
    ThemesPage,    
    ViewLayoutPopover,
  ],
  providers: [
    SetService,
    ThemeService,

    BarcodeScanner,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
