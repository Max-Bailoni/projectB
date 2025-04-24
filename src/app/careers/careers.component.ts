import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../services/job.service';
import { Job } from './job.interface';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css',
  
})
export class CareersComponent {
  jobOffers: Job[] = [];
  interestedCompanies: string[] = [
    'TechNova Inc.',
    'GreenWorld Co.',
    'DataPulse AG',
    'EduLink GmbH',
    'StartupWorks EU'
  ];

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobOffers = this.jobService.getJobs();
  }
}
