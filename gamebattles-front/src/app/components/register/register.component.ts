import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() email!: string;
  @Input() password!: string;
  @Input() confirmPassword!: string;

  mismatchingPasswords: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    // TODO: Wire this up when backend is a thing.
    if (this.password !== this.confirmPassword) {
      this.mismatchingPasswords = true;
      return;
    }

    console.log(this.email)
    console.log(this.password)
    console.log(this.confirmPassword)
  }

}
