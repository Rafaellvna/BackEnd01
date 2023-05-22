import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Vendaproduto from 'App/Models/Vendaproduto'

export default class extends BaseSeeder {
  public async run () {
    await Vendaproduto.createMany([
      {valor: 40.00, quantidade: 6, vendaId: 1, produtoId: 1},
      {valor: 6.00, quantidade: 45, vendaId: 1, produtoId: 3},
      {valor: 30.00, quantidade: 4, vendaId: 2, produtoId: 4},
      {valor: 7.90, quantidade: 5, vendaId: 2, produtoId: 2},
      {valor: 6.00, quantidade: 20, vendaId: 2, produtoId: 3},
      {valor: 40.00, quantidade: 5, vendaId: 3, produtoId: 1},
      {valor: 7.99, quantidade: 6, vendaId: 3, produtoId: 5},
      {valor: 30.00, quantidade: 6, vendaId: 4, produtoId: 4},
      {valor: 40.00, quantidade: 4, vendaId: 4, produtoId: 1},
      {valor: 40.00, quantidade: 6, vendaId: 5, produtoId: 1},
      {valor: 7.99, quantidade: 10, vendaId: 5, produtoId: 5},
      {valor: 7.90, quantidade: 16, vendaId: 5, produtoId: 2},
    ])
  }
}
