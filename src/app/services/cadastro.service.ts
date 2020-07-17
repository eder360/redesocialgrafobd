import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() {
  
  }

  async cadastrar(USUARIO: any) {
    const query = 'CREATE (a:Person {name: $name, lastName: $lastName, email: $email, password: $password, dateBirth: $dateBirth, phone: $phone, genre: $genre}) RETURN a';
    const params =  { name: USUARIO.primeiroNome, lastName: USUARIO.ultimoNome, email: USUARIO.email, password: USUARIO.senha, dateBirth: USUARIO.dataNascimento, phone: USUARIO.numeroTelefone, genre: USUARIO.genero };

    const neo4j = require('neo4j-driver')

    var driver = neo4j.driver(
      'neo4j://localhost',
      neo4j.auth.basic('neo4j', '789456')
    );

    var session = driver.session();

    try {
      const result = await session.run(
        query,
        params
      )

      const singleRecord = result.records[0]
      const node = singleRecord.get(0)

      console.log(node.properties.name)
    } finally {
      await session.close()
    }

    driver.close();
  }
}
