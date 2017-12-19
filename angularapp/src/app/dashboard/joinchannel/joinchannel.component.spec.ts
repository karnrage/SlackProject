import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinchannelComponent } from './joinchannel.component';

describe('JoinchannelComponent', () => {
  let component: JoinchannelComponent;
  let fixture: ComponentFixture<JoinchannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinchannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinchannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
