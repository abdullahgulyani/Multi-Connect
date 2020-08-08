import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CallComponent } from './call.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CallComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CallComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebaAngular'`, () => {
    const fixture = TestBed.createComponent(CallComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pruebaAngular');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CallComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to pruebaAngular!');
  });
});
