import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Employee} from './models/employee'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employeeArray : Employee[] = [
    {id: 1, name: "Ryan", country: "USA"}, 
    {id: 2, name: "Angelica", country: "USA"}, 
    {id: 3, name: "Joe", country: "USA"}
  ];

  selectedEmployee: Employee = new Employee();


}
