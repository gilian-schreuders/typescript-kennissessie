/**
 * Werkt niet:
 */
class A {
  foo: number;
  bar = "hello";
  // baz: boolean; // Error
  //  ~~~
  //  Error! Property 'baz' has no initializer and is not definitely assigned in the
  //         constructor.

  constructor() {
    this.foo = 42;
  }
}

/**
 * Definite assignment assertion modifier
 */
class B {
  foo!: number;
  // ^
  // Notice this '!' modifier.
  // This is the "definite assignment assertion"

  constructor() {
    this.initialize();
  }

  initialize() {
    this.foo = 0;
  }
}

/**
 * Niet misbruiken!
 */
class C {
  foo!: number;

  constructor() {}
}

// Maak er dit van
class C2 {
  foo: number | undefined;

  // Of:
  foo2: number = 0;

  constructor() {}
}