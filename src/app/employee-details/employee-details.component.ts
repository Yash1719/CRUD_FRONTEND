import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private employeService: EmployeeService){}
  id: number=0;
  // employees: Employee[]=[];
  employee = new Employee(0,'','','');
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee(0,'','','');
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }

}
