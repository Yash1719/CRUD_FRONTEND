// import { Employee } from './employee';
// export class Employee {
//     id:number;
//     first_name:string;
//     second_name:string;
//     email_id:string;
    
  
//     constructor(id: number, first_name: string, second_name: string, email_id: string) {
//         this.id = id;
//         this.first_name = first_name;
//         this.second_name = second_name;
//         this.email_id = email_id;
//       }
// }

export class Employee {
  constructor(
    public id: number,
    public first_name: string,
    public second_name: string,
    public email_id: string
  ) {}
}