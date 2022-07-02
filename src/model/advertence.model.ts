import {Employee} from './employee.model'
import {Manager} from './manager.model'

export class Advertence {
    name! : string
    employee! : Employee
    manager! : Manager
    createdAt! : Date
    updatedAt! : Date
    note! : string
}