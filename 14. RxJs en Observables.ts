import { of, from, skip, take, BehaviorSubject, first, map } from "rxjs";

/**
 * Of:
 */
const lijst$ = of([1, 2, 3, 4]);

const lijstSubscribe = lijst$.subscribe((value) => {
  console.log(value); // Result: [1, 2, 3, 4]
});

lijstSubscribe.unsubscribe(); // Niet vergeten weer te sluiten, anders blijft die leven!

/**
 * From:
 */
const getallen$ = from([1, 2, 3, 4]);

getallen$
  .pipe(
    first() // Unsubscribe na 1
  )
  .subscribe((value) => {
    console.log(value); // Result: 1
  });

/**
 * BehaviorSubject:
 */
const formValue$ = new BehaviorSubject<number | null>(null);

formValue$
  .pipe(
    skip(1),
    take(6),
    map((value) => {
      if (value && value < 0) {
        throw new Error("Mag niet!");
      }
      return value;
    })
  )
  .subscribe({
    next: (value) => {
      console.log(value);
    },
    error: () => {
      console.log("Error!");
    },
    complete: () => {
      console.log("Complete!");
    },
  });

// formValue$.next(-1); // Geeft de error!
formValue$.next(1);
formValue$.next(2);
formValue$.next(3);
formValue$.next(4);
formValue$.next(5);
formValue$.next(6);
