/**
 * var:
 */
function someFnVar() {
  if (true) {
    //defined locally
    //Its scope ends where curly braces ends

    var localVar = 1000;
    console.log(localVar); //ok
  }

  console.log(localVar); //ok

  function nested() {
    console.log(localVar); //ok
  }
}

// console.log(localVar); //error

/**
 * let
 */
function someFnLet() {
  if (true) {
    //defined locally
    //Its scope ends where curly braces ends

    let localVar = 1000;
    console.log(localVar);
  }

//   console.log(localVar); //error

  function nested() {
    // console.log(localVar); //error
  }
}

// console.log(localVar); //error

/**
 * const
 */
const MaxTry = 10;
// MaxTry = 5; //Error
