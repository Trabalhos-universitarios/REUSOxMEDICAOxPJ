import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrtopediaComponent } from './ortopedia.component';

describe('OrtopediaComponent', () => {
  let component: OrtopediaComponent;
  let fixture: ComponentFixture<OrtopediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrtopediaComponent]
    });
    fixture = TestBed.createComponent(OrtopediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
