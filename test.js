export class Test{
    a = 0;
    constructor(){
        this.a = 5;
    }
    writeA = () => {
        console.log(this.a);
    }
}