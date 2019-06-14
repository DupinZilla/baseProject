import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextComponent } from './text.component';
import { ImageLoaderService } from '../services/image-loader/image-loader.service';
import { HttpClientModule } from '@angular/common/http';

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ TextComponent ],
      providers: [
        ImageLoaderService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
