import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  // - Members
  @Input() email!: string;
  @Input() username!: string;
  @Input() password!: string;
  @Input() confirmPassword!: string;
  private regSub!: Subscription;

  public mismatchingPasswords: boolean = false;

  // - Logic start
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.mismatchingPasswords = true;
      return;
    }

    this.regSub = this.apiService.dickballs(this.username, this.email, this.password).subscribe(
      (r: any) => window.location.href = "/login",
      (err: any) => console.log(err)
    );
  }

  ngOnDestroy(): void {
    if (this.regSub) {
      this.regSub.unsubscribe();
    }
  }
}
