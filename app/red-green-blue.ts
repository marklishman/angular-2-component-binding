
export class RedGreenBlue {
    public red: number = 0;
    public green: number = 0;
    public blue: number = 0;

    public get style(): string {
        return 'rgb(' +
            this.red + ',' +
            this.green + ',' +
            this.blue + ')';
    }
}