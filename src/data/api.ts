// this file fetches data from the API

import { Job } from '../types/jobs';
import { Member } from '../types/member';

const membersUrl = 'https://bn-hiring-challenge.fly.dev/members.json';
const jobsUrl = 'https://bn-hiring-challenge.fly.dev/jobs.json';

export const getMembers = async () => getUrl<Member[]>(membersUrl);
export const getJobs = async () => getUrl<Job[]>(jobsUrl);

async function getUrl<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error getting '${url}'! status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
