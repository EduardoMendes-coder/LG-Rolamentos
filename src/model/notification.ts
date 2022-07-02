export class Notification {
    
    isActive! : boolean
    classe!: string
    mensagem!: string

    public new(isActive: boolean, classe: string, mensagem: string): Notification {

        const notification : Notification = new Notification()

        notification.isActive = isActive
        notification.classe = classe
        notification.mensagem = mensagem

        return notification
    }
}