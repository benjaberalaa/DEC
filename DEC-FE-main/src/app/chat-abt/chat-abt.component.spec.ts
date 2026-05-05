import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAbtComponent } from './chat-abt.component';

describe('ChatAbtComponent', () => {
  let component: ChatAbtComponent;
  let fixture: ComponentFixture<ChatAbtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatAbtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatAbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
