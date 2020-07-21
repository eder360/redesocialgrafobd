import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public emitirUsuarioLogado = new EventEmitter();

  constructor() { }

  async login(_email: string, _password: string) {
    const query = 'MATCH (a:Person {email: $email, password: $password}) RETURN a';
    const params = { email: _email, password: _password };

    const neo4j = require('neo4j-driver')

    var driver = neo4j.driver(
      'neo4j://localhost',
      neo4j.auth.basic('neo4j', '789456')
    );

    var session = driver.session();

    const result = await session.run(
      query,
      params
    )

    const singleRecord = result.records[0]

    if (singleRecord == undefined) {
      session.close();
      driver.close();
      return singleRecord;
    } else {
      const node = singleRecord.get(0)
      this.emitirUsuarioLogado.emit(node.properties.name)
      session.close();
      driver.close();
      return singleRecord;
    }

  }

}
