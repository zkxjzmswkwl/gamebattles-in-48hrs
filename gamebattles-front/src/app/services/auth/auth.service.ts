import { Injectable } from '@angular/core';
import { IMember } from 'src/app/structs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthed: boolean = false;
  currentUser!: IMember;

  constructor(private api: ApiService) {
    this.api.getHead().subscribe(
      (r: IMember) => {
        this.currentUser = r;
        this.isAuthed = true;
      },
      (err: any) => console.log("User is not currently logged in.")
    );
  }
}
