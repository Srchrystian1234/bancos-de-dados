import sqlite3 from 'sqlite3';
import { open } from 'sqlite';



async function criarEporpularTabelaUsuarios(nome,sobrenome){
   const db = await open({
        filename:'./banco.db',
        driver: sqlite3.Database,
    });

    db.run(`CREATE TABLE IF NOT EXISTS usuarios(id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT)`);

    db.run(`INSERT INTO usuarios (nome, sobrenome) VALUES (?,?)`,[nome,sobrenome])
}


function chamarTAbela(){
    const nome1 =  window.document.getElementById('nome').value
    const sobrenome1 = window.document.getElementById('sobrenome').value
    criarEporpularTabelaUsuarios(nome1,sobrenome1)
}
 const buttonClick = window.document.getElementById('enviar')

buttonClick.addEventListener('click',chamarTAbela)









