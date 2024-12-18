import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
//FIXME: expect sollte nicht als extra import aufgeführt werden müssen. Momentan aber nutzt die file aus irgendeinem grund per default cypress types.
import { expect } from '@jest/globals';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'devtoolbox' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('devtoolbox');
  });
});
