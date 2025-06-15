import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formacion',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './formacion.html',
  styleUrl: './formacion.css'
})
export class Formacion {

}
