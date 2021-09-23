import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:',value),
    error: error => console.warn('error:', error),
    complete: ()=> console.info('completado')
};


const intervalo$ = new Observable<number>( subscriber => {
    // Crear un contador, 1,2,3,4,5...

    let cont = 0;
    const interval = setInterval( ()=> {
        cont++;
        subscriber.next(cont);
        console.log(cont);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intérvalo destruido');
    }
});

const subscription = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription.add( subscription2 );
subscription.add( subscription3 );

setTimeout(() => {
    subscription.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    console.log('Completado timeout');
}, 6000);