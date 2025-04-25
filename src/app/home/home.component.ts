import { Component } from '@angular/core';
<<<<<<< HEAD
import { Alumni } from '../alumni.interface';
import { alumnis } from '../alumni';
import { RouterLink } from '@angular/router';
=======
import { RouterLink } from '@angular/router';
import { Alumni } from '../alumni.interface';
import { alumnis } from '../alumni';
>>>>>>> FinalWebsite

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
<<<<<<< HEAD
  Alumni: Alumni[] = alumnis;
=======
  alumnis: Alumni[] = alumnis;

>>>>>>> FinalWebsite
}
