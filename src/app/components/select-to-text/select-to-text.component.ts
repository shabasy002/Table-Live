import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-select-to-text',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './select-to-text.component.html',
  styleUrl: './select-to-text.component.scss'
})
export class SelectToTextComponent {
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      selectedValue: new FormControl(this.options[0])
    });
  }
}
