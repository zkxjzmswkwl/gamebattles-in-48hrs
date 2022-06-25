import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() email!: string;
  @Input() password!: string;

  incorrectLogin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    alert("nice");
  }

}
