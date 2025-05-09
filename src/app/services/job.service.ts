import { Injectable } from '@angular/core';
import { Job } from '../careers/job.interface';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  getJobs(): Job[] {
    return [
      {
        title: 'Frontend Developer',
        company: 'TechNova Inc.',
        description: 'Looking for a junior Angular developer. Familiarity with Bootstrap is a plus.',
        location: 'Berlin, Germany',
        image: 'company1.png'
      },
      {
        title: 'Marketing Assistant',
        company: 'GreenWorld Co.',
        description: 'We value fresh ideas from young professionals.',
        location: 'Vienna, Austria',
        image: 'company2.png'
      },
      {
        title: 'Data Analyst',
        company: 'DataPulse AG',
        description: 'Exciting opportunity for recent graduates in data science.',
        location: 'Zurich, Switzerland',
        image: 'company3.png'
      }
    ];
  }
}
