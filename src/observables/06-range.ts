import { asyncScheduler, of, range } from 'rxjs';

//const src$ = of(1,2,3,4,5);

// const src$ = range(1,15); // sincrono 
const src$ = range(1,15, asyncScheduler); // asincrono

console.log('inicio');
src$.subscribe( console.log );
console.log('fin');