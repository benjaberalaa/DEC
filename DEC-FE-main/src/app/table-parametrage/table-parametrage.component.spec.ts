import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParametrageComponent } from './table-parametrage.component';

describe('TableParametrageComponent', () => {
  let component: TableParametrageComponent;
  let fixture: ComponentFixture<TableParametrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableParametrageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableParametrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
