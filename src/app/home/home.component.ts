import { Component } from '@angular/core';
import { Ialumni } from '../alumni.interface';
import { ALUMNIS } from '../alumni';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Alumni: Ialumni[] = ALUMNIS;
}
