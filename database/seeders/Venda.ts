import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Venda from 'App/Models/Venda'

export default class extends BaseSeeder {
  public async run () {
    await Venda.createMany([
      {valor_total: 510.00, data: new Date(2022, 11, 7), clienteId: 1, vendedorId: 1, pagamentoId: 1},
      {valor_total: 279.50, data: new Date(2022, 7, 2), clienteId: 2, vendedorId: 2, pagamentoId: 2},
      {valor_total: 247.94, data: new Date(2022, 6, 10), clienteId: 3, vendedorId: 3, pagamentoId: 3},
      {valor_total: 340.00, data: new Date(2022, 8, 20), clienteId: 4, vendedorId: 4, pagamentoId: 4},
      {valor_total: 446.30, data: new Date(2022, 10, 22), clienteId: 5, vendedorId: 5, pagamentoId: 1},
    ])
  }
}
