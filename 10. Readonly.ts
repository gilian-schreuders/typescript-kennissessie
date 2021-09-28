/**
 * Class:
 */
class Employee {
  readonly empCode: number;
  empName: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.empName = name;
  }
}
let emp = new Employee(10, "John");
// emp.empCode = 20; //Compiler Error
emp.empName = "Bill";

/**
 * Type:
 */
type magLezen = {
  prop1: boolean;
};
type magNietLezen = Readonly<typeof eenObject>;

// Mag:
const eenObject: magLezen = {
  prop1: true,
};
eenObject.prop1 = false;

// Mag niet:
const eenObject2: magNietLezen = {
  prop1: true,
};
// eenObject2.prop1 = false; // Error
