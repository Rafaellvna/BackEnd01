import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produto from 'App/Models/Produto'

export default class extends BaseSeeder {
  public async run () {
    await Produto.createMany([
      {nome: 'Contrafilé' , preco: 40.00 , categoriaId: 1 , fornecedoreId: 1},
      {nome: 'Ketchup' , preco: 7.90 , categoriaId: 2, fornecedoreId: 2},
      {nome: 'Heineken', preco: 6.00 , categoriaId: 3, fornecedoreId: 3},
      {nome: 'Pizza', preco: 30.00, categoriaId: 4, fornecedoreId: 4},
      {nome: 'Leite', preco: 7.99, categoriaId: 5, fornecedoreId: 5},
    ])
  }
}
