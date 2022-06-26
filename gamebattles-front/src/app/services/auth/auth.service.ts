import { Injectable } from '@angular/core';
import { IMember } from 'src/app/structs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // TODO: Wire this up to actually mean something once backend is a thing
  isAuthed: boolean = false;
  currentUser!: IMember;

  constructor(private api: ApiService) {
    this.api.getHead().subscribe(
      (r: IMember) => {
        this.currentUser = r;
        this.isAuthed = true;
      },
      (err: any) => alert(err)
    );
  }
}
