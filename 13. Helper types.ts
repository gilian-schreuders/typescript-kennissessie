/**
 * Een lijst van alle helper types: https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
 */

/**
 * Partial<Type>:
 */
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

/**
 * Required<Type>:
 */
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

//   const obj2: Required<Props> = { a: 5 }; // Error!

/**
 * Parameters<Type>:
 */
declare function f1(arg: { a: number; b: string }): void;
 
type T0 = Parameters<() => string>;
// type T0 = []

type T1 = Parameters<(s: string) => void>;
// type T1 = [s: string]

type T2 = Parameters<<T>(arg: T) => T>;
// type T2 = [arg: unknown]

type T3 = Parameters<typeof f1>;
// type T3 = [arg: {
//     a: number;
//     b: string;
// }]