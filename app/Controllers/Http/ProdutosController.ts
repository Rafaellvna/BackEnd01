// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto";
import ProdutoValidator from "App/Validators/ProdutoValidator";

export default class ProdutosController {

        index(){
            return Produto.query().preload('categoria').preload('fornecedore').preload('vendaproduto').paginate(1)
        }

  async store({request}){
            const dados = await request.validate(ProdutoValidator)
            return Produto.create(dados)
        }

        show({request}){
            const id = request.param('id')
            return Produto.findOrFail(id)
        }

  async update({request}){
            const id = request.param('id')
            const produto = await Produto.findOrFail(id)
            const dados = request.only(['nome', 'preco', 'categoriaId', 'fornecedoreId'])
            return produto.merge(dados).save()
        }
  
  async destroy({request}){
            const id = request.param('id')
            const produto = await Produto.findOrFail(id)
            return produto.delete()
        }
}
