import { interval, Observer, Subject } from 'rxjs';
import { take, map, timeout } from 'rxjs/operators';
/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() =>{

  const observer:Observer<any> = {
      next: value => { console.log('next:',value)},
      error: error => { console.log('error:', error)},
      complete: () => console.log('completado')
  }

  // == NO TOCAR este bloque ====================
  const reloj$ = interval(1000).pipe(
    take(5),
    map( val => Math.round(Math.random() * 100) )
  );
  // No tocar la creación del observable
  // ============================================


  const subject$ = new Subject();
  const subscription = reloj$.subscribe( subject$ );
  
  
  // Estos dos observables deben de emitir exactamente los mismos valores
//   reloj$.subscribe( val => console.log('obs1', val) );
//   reloj$.subscribe( val => console.log('obs2', val) );

  const reloj1 = subject$.subscribe(  val => console.log('obs1', val) );
  const reloj2 = subject$.subscribe( val => console.log('obs2', val) );

  subject$.next('loquesea');

//   setTimeout(() => {
//     subject$.complete()
//   }, 4500);


})();

		