class animal {
    constructor(name) {
        this.name = name
    }
    birds() {
        console.log(`${this.name} is running`);
    }

}
class dog extends animal {
    pet1(){
         console.log(`${this.name} is playing`);
    }
}
class doggis extends dog {
    pet2(){
         console.log(`${this.name} is eating`);
    }
}
let obj = new doggis ("tommy")
obj.birds()
obj.pet1()
obj.pet2()