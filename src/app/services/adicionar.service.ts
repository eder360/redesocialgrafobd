import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdicionarService {

  constructor() { }

  async listarAmigos(_email: string) {
    const query = 'MATCH p =(a { email: $email })-[r]->(b) RETURN b';
    const params = { email: _email};

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

    const singleRecord = result.records;

    if (singleRecord == undefined) {
      session.close();
      driver.close();
      return singleRecord;
    } else {
      // const node = singleRecord.get(0)
      session.close();
      driver.close();
      return singleRecord;
    }

  }

  async listarNaoAmigo(_email: string) {
    const query = 'MATCH (a:Person {email: $email}), (b:Person) WHERE NOT (a)-[:EH_AMIGO]->(b) RETURN b';
    const params = { email: _email};

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

    const singleRecord = result.records;

    if (singleRecord == undefined) {
      session.close();
      driver.close();
      return singleRecord;
    } else {
      // const node = singleRecord.get(0)
      session.close();
      driver.close();
      return singleRecord;
    }

  }


  async remover(_email1: string, _email2: string) {
    const query = 'MATCH (n)-[rel:EH_AMIGO]->(r) WHERE n.email= $email1 and r.email= $email2 DELETE rel;';
    const params = { email1: _email1, email2: _email2};

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

    const singleRecord = result.records;

    if (singleRecord == undefined) {
      session.close();
      driver.close();
      return singleRecord;
    } else {
      // const node = singleRecord.get(0)
      session.close();
      driver.close();
      return singleRecord;
    }

  }

  async adicionar(_email1: string, _email2: string) {
    const query = 'MATCH (a:Person),(b:Person) WHERE a.email = $email1 AND b.email = $email2 CREATE (a)-[r:EH_AMIGO]->(b) RETURN type(r);';
    const params = { email1: _email1, email2: _email2};

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

    const singleRecord = result.records;

    if (singleRecord == undefined) {
      session.close();
      driver.close();
      return singleRecord;
    } else {
      // const node = singleRecord.get(0)
      session.close();
      driver.close();
      return singleRecord;
    }

  }

}
