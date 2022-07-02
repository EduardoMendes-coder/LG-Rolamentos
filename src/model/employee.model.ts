import {Role} from "./role.model"
import {Sex} from "./sex.enum"
export class Employee {
    name! : string
    age! : number
    email! : string
    addres! : string
    rg! : string
    pis! : string
    isActive! : boolean
    role! : Role
    nationality! : string
    salary! : number
    phone! : string
    sex! : Sex
    createdAt! : Date
    updatedAt! : Date
    hiredAt! : Date

    constructor() {
        this.isActive = true
    }
}