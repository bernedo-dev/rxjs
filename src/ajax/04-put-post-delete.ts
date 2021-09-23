import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';


ajax({
    url:url,
    method: 'POST',
    headers: {
        'mi-token':'ABC123'
    },
    body:{
        id:1,
        nombre:'Rufino'
    }
}).subscribe( console.log )