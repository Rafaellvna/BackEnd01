import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Vendedor from 'App/Models/Vendedor'

export default class extends BaseSeeder {
  public async run () {
    await Vendedor.createMany([
      {nome: 'Geovane', cnpj: '00.026.150/1026-86' , telefone: '17 99568-2922'},
      {nome: 'Matheus Bidu', cnpj: '77.637.684/2051-27' , telefone: '22 99417-1856'},
      {nome: 'Machado', cnpj: '02.450.658/0001-65', telefone: '19 99751-4980'},
      {nome: 'Bruno Rodrigues', cnpj: '22.222.177/2678-22', telefone: '11 98529-3006'},
      {nome: 'Neto Moura', cnpj: '17.220.770/2217-90', telefone: '11 98529-3006'},
    ])
  }
}
