class animal {
    constructor(name) {
        this.name = name
    }
    birds() {
        console.log(`${this.name} is running`);
    }

}
class dog extends animal {
    pet(){
         console.log(`${this.name} is playing`);
    }
}
let obj = new dog ("tommy")
obj.birds()
obj.pet()