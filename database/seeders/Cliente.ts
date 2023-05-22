import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {nome: 'Rafael', telefone: '11 99398-4015', email: 'Rafael@hotmail.com'},
      {nome: 'Pedro', telefone: '19 99125-6653', email: 'Pedro@hotmail.com'},
      {nome: 'José', telefone: '19 99223-0383', email: 'Jose@hotmail.com'},
      {nome: 'Fábio', telefone: '18 99116-5627', email: 'Fabio@hotmail.com'},
      {nome: 'Fabrício', telefone: '19 98956-2929', email: 'Fabricio@hotmail.com'},
    ])
  }
}
