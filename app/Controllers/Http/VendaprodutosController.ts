// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Vendaproduto from "App/Models/Vendaproduto";
import VendaprodutoValidator from "App/Validators/VendaprodutoValidator";

export default class VendaprodutosController {

        index(){
            return Vendaproduto.query().preload('produto').preload('venda').paginate(1)
        }

  async store({request}){
            const dados = await request.validate(VendaprodutoValidator)
            return Vendaproduto.create(dados)
        }

        show({request}){
            const id = request.param('id')
            return Vendaproduto.findOrFail(id)
        }

  async update({request}){
            const id = request.param('id')
            const vendaproduto = await Vendaproduto.findOrFail(id)
            const dados = request.only(['valor', 'quantidade', 'vendaId', 'produtoId'])
            return vendaproduto.merge(dados).save()
        }
  
  async destroy({request}){
            const id = request.param('id')
            const vendaproduto = await Vendaproduto.findOrFail(id)
            return vendaproduto.delete()
        }
}
