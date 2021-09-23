import { range } from "rxjs";
import { map, tap } from 'rxjs/operators';

const numeros$ = range(1,5);

numeros$.pipe(
    tap( x => {
            console.log('antes', x);
            return 1000; // no hace nada, el operador tap nunca retorna
    }),
    tap({
        next: val => console.log(' siguiente'),
        complete: () => console.log('se termino todo 1')
    }),
    map( val => val *10 ),
    tap({
        next: valor => console.log('despues', valor),
        complete: () => console.log('Se terminó todo 2')
    })
)
.subscribe( val => console.log('subs', val));