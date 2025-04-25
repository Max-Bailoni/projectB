import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Job } from './job.interface';
import { JobService } from '../../job.service';

@Component({
  selector: 'app-careers',
  imports: [CommonModule],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  jobOffers: Job[] = [];
  interestedCompanies: string[] = [
    'TechNova Inc.',
    'GreenWorld Co.',
    'DataPulse AG',
    'EduLink GmbH',
    'StartupWorks EU'
  ];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobOffers = this.jobService.getJobs();
  }
}