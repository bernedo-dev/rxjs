import { fromEvent, merge, pluck } from "rxjs";


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

// se debe importar de rxjs no de operators ya que este último esta deprecado
merge( 
    keyup$.pipe( pluck('type') ) , 
    click$.pipe( pluck('type') )
).subscribe(console.log )