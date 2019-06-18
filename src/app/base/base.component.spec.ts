import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppBaseComponent } from './base.component';
import { AccessibilityComponent } from '../accessibility/accessibility.component';
import { TextComponent } from '../text/text.component';
import { ImageLoaderService } from '../services/image-loader/image-loader.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from '../todos/todos.component';
import { FormsModule } from '@angular/forms';
describe('AppBaseComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        AppBaseComponent,
        AccessibilityComponent,
        TextComponent,
        TodosComponent
      ],
      providers: [
        ImageLoaderService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppBaseComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Academia Angular'`, () => {
    const fixture = TestBed.createComponent(AppBaseComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Academia Angular');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppBaseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bem-vindas! Academia Angula');
  });

  it('should test pegaCor()', () => {
    const fixture = TestBed.createComponent(AppBaseComponent);
    const app = fixture.debugElement.componentInstance;
    app.pegaCor('blue');
    expect(app.minhaCor).toEqual('blue');
  });

  it('should test plus()', () => {
    const fixture = TestBed.createComponent(AppBaseComponent);
    const app = fixture.debugElement.componentInstance;
    const result = app.plus(2,2);
    expect(result).toEqual(4);
  });


  it('should test isEvenOrOdd()', () => {
    const fixture = TestBed.createComponent(AppBaseComponent);
    const app = fixture.debugElement.componentInstance;
    const result = app.isEvenOrOdd(3);
    expect(result).toEqual('odd');
  });


  it('should test isEvenOrOdd()', () => {
    const fixture = TestBed.createComponent(AppBaseComponent);
    const app = fixture.debugElement.componentInstance;
    const result = app.isEvenOrOdd(2);
    expect(result).toEqual('even');
  });





});
