import { Component } from '@angular/core';
import { Alumni } from '../alumni.interface';
import { alumnis } from '../alumni';

@Component({
  selector: 'app-alumni',
  imports: [],
  templateUrl: './alumni.component.html',
  styleUrl: './alumni.component.css'
})
export class AlumniComponent {
  alumnis: Alumni[] = alumnis;

}
