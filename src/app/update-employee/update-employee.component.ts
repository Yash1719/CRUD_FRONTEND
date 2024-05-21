import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number = 0;
  employee: Employee = new Employee(0, '', '', '');

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    console.log("my id is "+this.id);
    if (!isNaN(this.id)) {
      this.employeeService.getEmployeeById(this.id).subscribe({
        next: (data: Employee) => {
          this.employee = data;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      console.error('Invalid employee ID.');
    }
  }

  updateEmployee(): void {
    if (!isNaN(this.id)) {
      this.employeeService.updateEmployee(this.id, this.employee).subscribe({
        next: (data: any) => {
          console.log(data);
          this.changeDetector.detectChanges();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      console.error('Invalid employee ID.');
    }
  }

  onSubmit(): void {
    this.updateEmployee();
    this.router.navigate(['/employees']);
  }
  
}

