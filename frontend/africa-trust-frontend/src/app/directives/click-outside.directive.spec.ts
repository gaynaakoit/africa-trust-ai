import { ClickOutsideDirective } from './click-outside.directive';
import { ElementRef } from '@angular/core';

describe('ClickOutsideDirective', () => {
  let directive: ClickOutsideDirective;

  beforeEach(() => {
    const elementRef = new ElementRef(document.createElement('div'));
    directive = new ClickOutsideDirective(elementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});