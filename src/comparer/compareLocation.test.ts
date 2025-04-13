import { describe, it, expect } from '@jest/globals';
import { compareLocation } from './compareLocation';

describe('compare locations', () => {
  it('"outside of London" should return false for London', () => {
    const bio = "I'm looking for a job in marketing outside of London";
    const location = 'London';
    expect(compareLocation(bio, location)).toBe(false);
  });

  it('"outside of" should return true for anything other than Paris', () => {
    const bio = "I'm looking for a job in marketing outside of Paris";
    const location = 'York';
    expect(compareLocation(bio, location)).toBe(true);
  });

  it('"relocate to" should return true for London', () => {
    const bio = "I'm a software developer currently in Edinburgh but looking to relocate to London";
    const location = 'London';
    expect(compareLocation(bio, location)).toBe(true);
  });

  it('"relocate to York" should not match anything else', () => {
    const bio = "I'm a software developer currently in Edinburgh but looking to relocate to York";
    const location = 'Paris';
    expect(compareLocation(bio, location)).toBe(false);
  });

  it('"in London" should match London', () => {
    const bio = 'I am a software engineer in London';
    const location = 'London';
    expect(compareLocation(bio, location)).toBe(true);
  });

  it('"in London" should not match York', () => {
    const bio = 'I am a software engineer in London';
    const location = 'York';
    expect(compareLocation(bio, location)).toBe(false);
  });

  it('should return true for anything else', () => {
    const bio = 'I am a software engineer in Paris';
    const location = 'York';
    expect(compareLocation(bio, location)).toBe(true);
  });
});
