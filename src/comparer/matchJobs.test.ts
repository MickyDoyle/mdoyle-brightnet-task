import { describe, it, expect } from '@jest/globals';
import { matchJobs } from './matchJobs';
import { Member } from '../types/member';
import { Job } from '../types/jobs';

describe('match Jobs', () => {
  const sarah = { name: 'Sarah', bio: 'I am a software engineer' };
  const jim = { name: 'Jim', bio: 'I am a data scientist' };
  const members: Member[] = [sarah, jim];

  const soEng = { location: 'London', title: 'Software Engineer' };
  const dataSci = { location: 'Paris', title: 'Data Scientist' };
  const jobs: Job[] = [soEng, dataSci];

  it('should return the correct job matches if no location is given', async () => {
    const result = matchJobs(members, jobs);

    expect(result).toEqual([
      {
        member: sarah,
        jobs: [soEng],
      },
      {
        member: jim,
        jobs: [dataSci],
      },
    ]);
  });

  it('should return the correct job matches if  location is given', async () => {
    const samOutsideParis = { name: 'Sam', bio: 'I am a software engineer outside of Paris' };
    const mikeRelocateParis = {
      name: 'Sam',
      bio: 'I am a data scientist looking to relocate to Paris',
    };

    const result = matchJobs([samOutsideParis, mikeRelocateParis], jobs);
    expect(result).toEqual([
      {
        member: samOutsideParis,
        jobs: [soEng],
      },
      {
        member: mikeRelocateParis,
        jobs: [dataSci],
      },
    ]);
  });

  it("should not match if the location doesn't match", async () => {
    const samOutsideParis = { name: 'Sam', bio: 'I am a Data Scientist in York' };

    const result = matchJobs([samOutsideParis], jobs);
    expect(result[0].jobs).toEqual([]);
  });
});
