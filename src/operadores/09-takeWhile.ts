import { fromEvent, map, takeWhile } from "rxjs";



const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map( ({ x,y }) => ({x,y}) ),
    // takeWhile( ({ y }) => y <= 150 )
    takeWhile( ({ y }) => y <= 150, true ) // el último argumento indica si se retorna el valor que cumple la condición
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})