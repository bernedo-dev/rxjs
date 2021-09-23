import { catchError, exhaustMap, fromEvent, map, mergeMap, of, pluck, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// Helper
const peticionHttpLogn = ( userPass ) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            pluck('response','token'),
            catchError( err => of('invalid')),
            // map( resp => resp.response )
        );

// Formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar'; 

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent(form, 'submit')
.pipe(
    tap( event => event.preventDefault() ),
    map( event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    //mergeMap( peticionHttpLogn ) // si se hace varias veces el submit ejecutara todas las peticiones
    // switchMap( peticionHttpLogn ) // ejecuta la ultima peticiones y cancela las anteriores  
    exhaustMap( peticionHttpLogn ) // ejecuta la primera y cancela las posteriores
    
);

submitForm$.subscribe( token => {
    console.log(token);
})