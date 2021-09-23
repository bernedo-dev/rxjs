import { fromEvent, map, sampleTime } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(2000), // ponerlo al principio se usa menos memoria
    map( ({x,y}) => ({x,y}) ),
).subscribe( console.log );