import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // TODO: Wire this up to actually mean something once backend is a thing
  isAuthed: boolean = false;

  constructor() { }
}
