import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  show = true;
  constructor(private router: Router) {
    setTimeout (() => {
      this.router.navigateByUrl('/options');
      this.show = false;
    }, 5000);
  }

  // redirectTo() {
  //   setTimeout (() => {
  //     this.show = false;
  //   }, 7000 );
  //   this.router.navigateByUrl('/options');
  // }
}



