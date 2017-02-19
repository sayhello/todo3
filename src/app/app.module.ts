import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';


// Import the ButtonsModule...
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: '**', component: PageNotFoundComponent }
];

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBqNs2sYjhXtr7cwiei3ZB0mhck7v6RW3U",
  authDomain: "datemenow-764c3.firebaseapp.com",
  databaseURL: "https://datemenow-764c3.firebaseio.com",
  storageBucket: "datemenow-764c3.appspot.com",
  messagingSenderId: "1048068159574"

};

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    PageNotFoundComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
