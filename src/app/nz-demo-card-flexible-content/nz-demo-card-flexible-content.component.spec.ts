import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NzDemoCardFlexibleContentComponent } from './nz-demo-card-flexible-content.component';

describe('NzDemoCardFlexibleContentComponent', () => {
  let component: NzDemoCardFlexibleContentComponent;
  let fixture: ComponentFixture<NzDemoCardFlexibleContentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoCardFlexibleContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzDemoCardFlexibleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
