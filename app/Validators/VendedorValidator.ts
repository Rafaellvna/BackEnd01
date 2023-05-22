import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendedorValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ]) 1799999999
   * 99999999999999
   * 
   * rules.range(0, 99999999999999),
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    nome: schema.string([rules.alpha({allow: ['space']}), rules.maxLength(45)]),
    cnpj: schema.string([rules.regex(/[0-9]{2}[/.][0-9]{3}[/.][0-9]{3}[\/][0-9]{4}[/-][0-9]{2}/), rules.unique({table: 'vendedors', column: 'cnpj'})]),
    telefone: schema.string([rules.regex(/[0-9]{2}[/ ][0-9]{5}[/-][0-9]{4}/), rules.unique({table: 'vendedors', column: 'telefone'})]),
  }) 

   
  public messages: CustomMessages = {}
}
