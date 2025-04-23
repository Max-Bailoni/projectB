import { Component } from '@angular/core';
import { Ialumni } from '../alumni.interface';
import { ALUMNIS } from '../alumni';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-alumni',
  imports: [RouterLink],
  templateUrl: './alumni.component.html',
  styleUrl: './alumni.component.css'
})
export class AlumniComponent {
  Alumni: Ialumni[] = ALUMNIS;
  person:Ialumni | undefined = {} as Ialumni;
  id:number = 0;

  constructor(private route:ActivatedRoute){
    let id = Number(this.route.snapshot.params['id']);
    this.person = ALUMNIS.find(val => val.id == id);
  }
}
