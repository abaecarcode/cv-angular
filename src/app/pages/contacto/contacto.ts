import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

}
