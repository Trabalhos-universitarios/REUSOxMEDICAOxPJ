import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfinishedPagesComponent } from './unfinished-pages.component';

describe('UnfinishedPagesComponent', () => {
  let component: UnfinishedPagesComponent;
  let fixture: ComponentFixture<UnfinishedPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnfinishedPagesComponent]
    });
    fixture = TestBed.createComponent(UnfinishedPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
