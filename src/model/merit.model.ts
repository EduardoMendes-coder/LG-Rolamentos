import {Manager} from "@/model/manager.model";
import {Employee} from "@/model/employee.model";


export class Merit{
    name! : string
    employee! : Employee
    manager! : Manager
    createdAt! : Date
    updatedAt! : Date
    note! : string
}