import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendtoServiceComponent } from './sendto-service.component';

describe('SendtoServiceComponent', () => {
  let component: SendtoServiceComponent;
  let fixture: ComponentFixture<SendtoServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendtoServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendtoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
