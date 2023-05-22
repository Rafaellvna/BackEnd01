// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pagamento from "App/Models/Pagamento";
import PagamentoValidator from "App/Validators/PagamentoValidator";

export default class PagamentosController {

        index(){
            return Pagamento.query().preload('venda').paginate(1)
        }

  async store({request}){
            const dados = await request.validate(PagamentoValidator)
            return Pagamento.create(dados)
        }

        show({request}){
            const id = request.param('id')
            return Pagamento.findOrFail(id)
        }

  async update({request}){
            const id = request.param('id')
            const pagamento = await Pagamento.findOrFail(id)
            const dados = request.only(['forma_pagamento'])
            return pagamento.merge(dados).save()
        }
  
  async destroy({request}){
            const id = request.param('id')
            const pagamento = await Pagamento.findOrFail(id)
            return pagamento.delete()
        }
}
