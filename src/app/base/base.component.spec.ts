import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppBaseComponent } from './base.component';

describe('AppBaseComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppBaseComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppBaseComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'project-base'`, () => {
    const fixture = TestBed.createComponent(AppBaseComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Academia Angular');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppBaseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bem-vindas! Academia Angular');
  });
});
