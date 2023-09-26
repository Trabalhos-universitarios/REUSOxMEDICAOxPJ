import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariologiaComponent } from './cariologia.component';

describe('CariologiaComponent', () => {
  let component: CariologiaComponent;
  let fixture: ComponentFixture<CariologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CariologiaComponent]
    });
    fixture = TestBed.createComponent(CariologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
