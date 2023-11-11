import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.scss'],
})
export class AddFoyerComponent {
  AddFoyerForm = new FormGroup({
    nomFoyer: new FormControl('', Validators.required),
    capacite: new FormControl('', Validators.required),
  });
}
