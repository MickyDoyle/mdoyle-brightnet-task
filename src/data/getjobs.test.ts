import { describe, it, expect } from '@jest/globals';
import { getJobs } from './api';

describe('get jobs', () => {
  it('should return an array ', async () => {
    const result = await getJobs();
    expect(Array.isArray(result)).toBe(true);
  });

  it('should return an array of objects', async () => {
    const result = await getJobs();
    expect(result.length).toBeGreaterThan(0);
    expect(typeof result[0]).toBe('object');
  });

  it('objects should contain title and location', async () => {
    const result = await getJobs();
    expect(typeof result[0].title).toBe('string');
    expect(typeof result[0].location).toBe('string');
  });
});
