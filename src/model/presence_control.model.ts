import {Manager} from "@/model/manager.model";
import {Employee} from "@/model/employee.model";


export class PresenceControl{
    manager! : Manager
    employee! : Employee
    date! : Date
    presenceMorning! : boolean
    presenceAfternoon! : boolean
    payment! : boolean
    note! : string
}