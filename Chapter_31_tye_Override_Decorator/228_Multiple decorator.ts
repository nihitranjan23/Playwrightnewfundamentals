function beforeSomething(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: any, ...args: any[]) {
        console.log("EAT");
        return originalMethod.apply(this, args);
    };
}

function BeforeSomeSomeThing(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: any, ...args: any[]) {
        console.log("SLEEP");
        return originalMethod.apply(this, args);
    };
}

class Dog {
    @beforeSomething
    @BeforeSomeSomeThing
    bark() {
        return "woof";
    }
}

let r = new Dog().bark();
console.log(r);