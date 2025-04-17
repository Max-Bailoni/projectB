import { Component } from '@angular/core';
import { Ialumni } from '../alumni.interface';
import { ALUMNIS } from '../alumni';

@Component({
  selector: 'app-alumni',
  imports: [],
  templateUrl: './alumni.component.html',
  styleUrl: './alumni.component.css'
})
export class AlumniComponent {
  Alumni: Ialumni[] = ALUMNIS;
}
