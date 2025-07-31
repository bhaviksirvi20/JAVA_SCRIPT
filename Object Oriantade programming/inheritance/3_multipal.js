class Parent1 {
  Method1() {
    console.log("This is from Parent1");
  }
}

class Parent2 {
  Method2() {
    console.log("This is from Parent2");
  }
}
class Child extends Parent1 {
  constructor() {
    super();
  }
 
  childMethod() { 
  }
}


// 👇 Merge Parent2 methods into Child prototype (important: done outside constructor)
Object.assign(Child.prototype, Parent2.prototype);

// ✅ Test
const obj = new Child();
obj.Method1();  // This is from Parent1
obj.Method2();  // This is from Parent2
obj.childMethod();    // This is from Child
