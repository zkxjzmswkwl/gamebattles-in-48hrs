import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() username!: string;
  @Input() password!: string;
  private loginSub!: Subscription;
  public incorrectLogin: boolean = false;

  constructor(
    private apiService: ApiService,
    private cookies: CookieService
    ) { }


  login(): void {
    this.loginSub = this.apiService.ballsdick(this.username, this.password).subscribe(
      (r: any) => {
        this.cookies.set("kotick_assassination_plot", r.token);
        window.location.href = "/";
      },
      (err: any) => console.log(err)
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}
