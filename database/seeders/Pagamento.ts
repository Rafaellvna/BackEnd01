import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pagamento from 'App/Models/Pagamento'

export default class extends BaseSeeder {
  public async run () {
    await Pagamento.createMany([
      {forma_pagamento: 'PIX'},
      {forma_pagamento: 'Débito'},
      {forma_pagamento: 'Crédito'},
      {forma_pagamento: 'Boleto'},
    ])
  }
}
