import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNavCardComponent } from './list-nav-card.component';

describe('ListNavCardComponent', () => {
  let component: ListNavCardComponent;
  let fixture: ComponentFixture<ListNavCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNavCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNavCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
