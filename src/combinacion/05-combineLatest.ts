import { combineLatest, fromEvent, merge, pluck } from "rxjs";


// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// // se debe importar de rxjs no de operators ya que este último esta deprecado
// combineLatest( 
//     keyup$.pipe( pluck('type') ) , 
//     click$.pipe( pluck('type') )
// ).subscribe(console.log )

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '*******';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = ( elem: HTMLElement ) =>
    fromEvent<KeyboardEvent>( elem, 'keyup').pipe(
        pluck('target','value')
    );


combineLatest(
    getInputStream( input1 ),
    getInputStream( input2 )
).subscribe( console.log )

