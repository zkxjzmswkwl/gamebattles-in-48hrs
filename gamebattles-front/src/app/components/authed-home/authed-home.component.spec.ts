import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthedHomeComponent } from './authed-home.component';

describe('AuthedHomeComponent', () => {
  let component: AuthedHomeComponent;
  let fixture: ComponentFixture<AuthedHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthedHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
