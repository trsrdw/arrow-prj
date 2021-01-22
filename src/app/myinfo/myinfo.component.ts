import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.scss']
})
export class MyinfoComponent implements OnInit {

  editNum:boolean = false;
  editBtn:boolean = true;

  editDefault:boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.editDefault = true;
  }

  editForm() {
    this.editBtn = false;
    this.editNum = true;
    this.editDefault = false;
  }

  cancelBtn() {
    this.editBtn = true;
    this.editNum = false;
    this.editDefault = true;
  }

}
