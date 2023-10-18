import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatarataComponent } from './catarata.component';

describe('CatarataComponent', () => {
  let component: CatarataComponent;
  let fixture: ComponentFixture<CatarataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatarataComponent]
    });
    fixture = TestBed.createComponent(CatarataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
