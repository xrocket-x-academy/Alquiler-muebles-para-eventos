import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-furniture-form',
  templateUrl: './furniture-form.component.html',
  styleUrls: ['./furniture-form.component.scss']
})
export class FurnitureFormComponent implements OnInit {
  furnitureForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
      this.initForm();
  }

  initForm() {
    this.furnitureForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      stock: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      startDate: [null, Validators.required],
      endDate: [null],
    });
  }

  onSubmit() {
    if (this.furnitureForm.valid) {
      const formData = this.furnitureForm.value;
      //Espacio para desarrollar el envio de los datos al back
      console.log(formData);
    }
  }
}
