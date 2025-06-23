

import _ from 'lodash';
import clipboard from 'clipboard';

const button = new Clipboard('button');

function handleCopy(event:any){
  console.log(event);
}

button.on('success', handleCopy);

console.log(_.difference([1,45], [2,1,3]));


interface Produto{
  nome: string;
}
const livro = {
  nome: "O Senhor dos Aneis"
};