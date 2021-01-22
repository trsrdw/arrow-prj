import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  email:boolean = false;
  phone:boolean = false;

  emailBtn:boolean = true;
  phoneBtn:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  addEmail() {
    this.email = true;
    this.emailBtn = false;
  }

  addPhone() {
    this.phone = true;
    this.phoneBtn = false;
  }

}
