import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  
  constructor(af: AngularFire) {
    this.items = af.database.list('');
  }

  addItem(newName: string) {

    // create a new date - now
    const dateNow = new Date();

    // make it iso style
    const dateNowAsISO = dateNow.toISOString();

    // add 20 minutes
    const dateNowWithExtraTime = new Date(dateNow.getTime() + (20 * 60 * 1000));

    // mate it iso style
    const dateNowWithExtraTimeAsISO = dateNowWithExtraTime.toISOString();

    const y = firebase.database.ServerValue.TIMESTAMP;

    this.items.push({
      text: newName,
      created: dateNowAsISO,
      duration: dateNowWithExtraTimeAsISO
    });

  }



  ngOnInit() {}

}
