import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecedore from 'App/Models/Fornecedore'

export default class extends BaseSeeder {
  public async run () {
    await Fornecedore.createMany([
      {cnpj: '17.227.770/2718-22' , nome: 'CRN'},
      {cnpj: '50.457.920/2488-53' , nome: 'MRC'},
      {cnpj: '56.797.840/8118-47' , nome: 'BBD'},
      {cnpj: '40.957.670/7918-62' , nome: 'CGL'},
      {cnpj: '32.587.280/3818-78' , nome: 'LTC'},
    ])
  }
}
