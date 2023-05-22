// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecedore from "App/Models/Fornecedore";
import FornecedoreValidator from "App/Validators/FornecedoreValidator";

export default class FornecedoresController {

        index(){
            return Fornecedore.query().preload('produto').paginate(1)
        }

  async store({request}){
            const dados = await request.validate(FornecedoreValidator)
            return Fornecedore.create(dados)
        }

        show({request}){
            const id = request.param('id')
            return Fornecedore.findOrFail(id)
        }

  async update({request}){
            const id = request.param('id')
            const fornecedore = await Fornecedore.findOrFail(id)
            const dados = request.only(['cnpj', 'nome'])
            return fornecedore.merge(dados).save()
        }
  
  async destroy({request}){
            const id = request.param('id')
            const fornecedore = await Fornecedore.findOrFail(id)
            return fornecedore.delete()
        }

}
