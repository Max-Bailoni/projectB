import { Component } from '@angular/core';
import { Alumni } from '../alumni.interface';
import { alumnis } from '../alumni';
import { RouterLink } from '@angular/router';
import { EventModel } from '../events.interface';
import { events } from '../Events';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  alumnis: Alumni[] = alumnis;
  events: EventModel[] = events;
}
