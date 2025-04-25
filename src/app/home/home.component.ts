import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Alumni } from '../alumni.interface';
import { alumnis } from '../alumni';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  alumnis: Alumni[] = alumnis;

}
