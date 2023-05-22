// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Vendedor from "App/Models/Vendedor";
import VendedorValidator from "App/Validators/VendedorValidator";

export default class VendedorsController {

        index(){
            return Vendedor.query().preload('venda').paginate(1)
        }

  async store({request}){
            const dados = await request.validate(VendedorValidator)
            return Vendedor.create(dados)
        }

        show({request}){
            const id = request.param('id')
            return Vendedor.findOrFail(id)
        }

  async update({request}){
            const id = request.param('id')
            const vendedor = await Vendedor.findOrFail(id)
            const dados = request.only(['nome', 'cnpj', 'telefone'])
            return vendedor.merge(dados).save()
        }
  
  async destroy({request}){
            const id = request.param('id')
            const vendedor = await Vendedor.findOrFail(id)
            return vendedor.delete()
        }
}
