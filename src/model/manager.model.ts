

export class Manager{
    name! : string
    email! : string
    address! : string
    pis! : string
    isActive! : boolean
    hiredAt! : Date
    createdAt! : Date
    user! : string
    password! : string
    updatedAt! : Date

    constructor() {
        this.isActive = true
    }
}