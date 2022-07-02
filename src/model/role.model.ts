export class Role{
    name! : string
    isActive! : boolean
    createdAt! : Date
    updatedAt! : Date

    constructor() {
        this.isActive = true
    }
}