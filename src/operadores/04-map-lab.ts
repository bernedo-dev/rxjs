//LABORATORIO
import { fromEvent, map, tap } from "rxjs";


const texto = document.createElement('div');
texto.innerHTML = `
Minim incididunt aliqua commodo est deserunt non. In ullamco ea minim ullamco. Nostrud ea dolor enim irure laborum mollit consectetur ad. Adipisicing duis aute adipisicing officia quis do voluptate reprehenderit mollit aliquip quis nisi id. Ex proident cupidatat est fugiat adipisicing ut ex reprehenderit consectetur ullamco. Laborum quis sint ipsum non est duis incididunt cupidatat aliqua aliqua anim eu.
<br><br>
Occaecat cupidatat excepteur ea qui non aliquip esse reprehenderit culpa est sit ipsum labore officia. Non magna duis nisi officia sint non cillum irure culpa duis velit irure. Officia velit eu consequat labore in exercitation sunt exercitation dolor. Dolore ut cupidatat id labore ut aute culpa. Occaecat fugiat consequat cupidatat minim. Officia adipisicing et voluptate ea nisi.
<br><br>
Ullamco ad minim anim occaecat esse incididunt cupidatat nostrud nisi adipisicing consequat reprehenderit. Proident tempor mollit enim dolore. Pariatur sunt officia velit minim reprehenderit et.
<br><br>
Excepteur Lorem eu aute labore labore sunt tempor mollit. Deserunt proident aute reprehenderit nulla ea labore nisi minim occaecat. Nulla sint mollit eiusmod veniam eu cillum est ex enim deserunt esse reprehenderit. Eiusmod sit est dolor Lorem amet minim quis. Dolor minim laboris aliqua magna elit sint est irure tempor. Consequat nisi in cillum adipisicing aliquip amet pariatur in nisi commodo deserunt incididunt qui quis.
<br><br>
Ut elit esse ea consequat consequat cillum aliqua exercitation sunt ex consequat labore adipisicing nulla. Amet ad id dolore aliquip deserunt esse magna Lorem. Sit ipsum qui minim mollit amet aute pariatur dolor voluptate. Commodo ad aliquip sint consectetur reprehenderit quis eiusmod consequat deserunt. Laborum ad ex cillum tempor minim nostrud ad.
Consequat laboris do proident irure consequat proident ex culpa anim occaecat amet mollit reprehenderit nisi. Sunt proident laboris culpa ullamco. Pariatur qui eiusmod enim ullamco nostrud incididunt amet ipsum mollit est culpa. Culpa velit minim non nostrud esse excepteur labore Lorem pariatur elit aliquip consequat nostrud veniam. Id do non est consequat velit minim Lorem. Enim laborum et in do voluptate aliquip esse.
<br><br>
Occaecat aliqua nulla commodo quis sunt excepteur. Cillum anim ipsum duis qui ea deserunt duis duis incididunt. Adipisicing id aliquip occaecat id amet pariatur adipisicing qui enim dolor occaecat cupidatat nisi. In nisi aliqua sit enim voluptate mollit dolor. Proident mollit minim laborum pariatur magna elit enim irure consequat elit culpa laborum sunt commodo.
<br><br>
Quis nisi enim est nostrud sunt et veniam pariatur incididunt reprehenderit ea cillum ullamco. Incididunt mollit voluptate consequat cillum ad ea laboris est sint veniam. Qui duis culpa voluptate minim anim ad veniam ea. Eu proident occaecat ut veniam dolor tempor anim occaecat elit.
<br><br>
Pariatur labore esse proident incididunt magna. Elit cillum aute cillum amet irure mollit cillum. Mollit in ad anim proident adipisicing consectetur pariatur. Consequat laboris ea mollit nostrud. Cupidatat deserunt ullamco labore magna. Amet quis laboris duis sunt do dolore ut tempor in labore ipsum nisi.
<br><br>
Ea nulla cupidatat excepteur quis consectetur do elit anim Lorem. Nulla cillum consequat proident fugiat do veniam adipisicing dolor minim cupidatat esse et culpa incididunt. Ut incididunt sint ullamco mollit esse sint nostrud. Enim sunt et aliquip occaecat duis nostrud exercitation. Veniam voluptate velit officia voluptate veniam. Ipsum reprehenderit in aliquip et velit cillum dolore in dolor Lorem sint. Incididunt laboris amet cupidatat dolore cupidatat deserunt.
<br><br>
Esse ipsum Lorem anim ipsum proident exercitation tempor. Nisi velit culpa velit cillum anim. Minim cillum est quis ea dolor nulla veniam duis consequat qui ut qui aliquip.
<br><br>
Minim excepteur nisi cupidatat aute incididunt dolor veniam mollit aliquip nostrud pariatur duis sit. Quis irure cillum laborum tempor enim aute amet enim et. Commodo pariatur sit veniam elit laboris consequat cupidatat laborum adipisicing. Enim sit ullamco sit commodo irure occaecat mollit officia cupidatat incididunt nisi aliqua.
<br><br>
Ea non enim laboris irure nulla incididunt id et esse. Adipisicing minim qui ipsum dolor commodo tempor cillum incididunt. Minim ad consequat dolore tempor elit. Irure voluptate esse Lorem cillum aliquip dolore culpa nisi culpa sunt consectetur. Esse occaecat id laborum aliquip sint consectetur eu. Ex tempor consectetur mollit magna qui non do nostrud minim. Culpa exercitation mollit pariatur fugiat velit excepteur incididunt.
<br><br>
Nulla magna fugiat consectetur aliqua qui elit cillum excepteur incididunt dolore eiusmod elit. Nostrud ut exercitation aliqua Lorem ad laborum aliquip cillum. Nulla adipisicing voluptate sint ad qui anim anim do esse. Consectetur qui exercitation eu est duis Lorem. Pariatur aliqua veniam aliquip do officia labore ut tempor.
<br><br>
Do Lorem do enim cupidatat tempor. Amet id nulla velit pariatur ea Lorem dolore. Ut amet laborum reprehenderit mollit. Duis ullamco nostrud do deserunt ipsum est esse fugiat ut et veniam nulla irure qui.
<br><br>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
<br><br>
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
<br><br>

Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
<br><br>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
<br><br>
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
<br><br>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
<br><br>
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
<br><br>

Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
<br><br>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
<br><br>
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
<br><br>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
<br><br>
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
<br><br>

Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
<br><br>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
<br><br>
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

// función cálculo % progress
const calculaPorcenatajeScroll= ( event ) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    // console.log(scrollTop, scrollHeight, clientHeight,) 
    return ( scrollTop / (scrollHeight - clientHeight ) ) * 100
};


// Stream
const scroll$ = fromEvent( document, 'scroll');
// scroll$.subscribe( console.log );

const progress$ = scroll$.pipe(
    map( calculaPorcenatajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
});
