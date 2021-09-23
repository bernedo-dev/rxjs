import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('siguiente [next]',value),
    error: error => console.warn('error [obs]:', error),
    complete: ()=> console.info('completado [obs]')
};

const observable$ = new Observable<string>( subs => {
    subs.next('Hola!');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar Error
    // const a = undefined;
    // a.nombre = 'Rufo';
    
    subs.complete();

    subs.next('Mundo no mostrado');
});

observable$.subscribe(observer);

// observable$.subscribe( resp => {
//     console.log(resp);
//     console.log('---------');
// });

// observable$.subscribe(
//     valor => console.log('next', valor),
//     error => console.warn('error', error),
//     () => console.info('Completado')
// );
