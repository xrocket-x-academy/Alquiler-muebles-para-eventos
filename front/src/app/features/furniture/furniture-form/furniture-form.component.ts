import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FurnitureService } from 'src/app/core/services/furniture.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-furniture-form',
  templateUrl: './furniture-form.component.html',
  styleUrls: ['./furniture-form.component.scss']
})
export class FurnitureFormComponent implements OnInit {
  furnitureForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private furnitureService: FurnitureService,
    private router: Router) { }
  
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
      // Lógica para enviar formData al servicio FurnitureService
      this.furnitureService.create(formData).subscribe(
        (newFurnitureId) => {
          // Lógica para manejar la respuesta exitosa
          console.log('Mueble creado con éxito. ID:', newFurnitureId);
          // Redirigir al usuario 
          this.router.navigate(['furniture']);
        },
        (error) => {
          // Lógica para manejar errores
          console.error('Error al crear el mueble', error);
        }
      );
    }
  }

  
}






